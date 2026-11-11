// Deterministic site check for the v4 "Showreel" design. Run: node tests/verify.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const url = 'file://' + path.join(root, 'index.html');
const SITE_URL = 'https://andrewpocta-fable.netlify.app';
let failed = 0;
const check = (name, ok, extra = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  (' + extra + ')' : ''}`); if (!ok) failed++; };

// Address check: this copy must point at its own Netlify address, never the original site's.
const read = f => readFileSync(path.join(root, f), 'utf8');
const html = read('index.html');
check('canonical + og URLs use this site\'s address',
  html.includes(`<link rel="canonical" href="${SITE_URL}/">`) && html.includes(`property="og:url" content="${SITE_URL}/"`) &&
  html.includes(`property="og:image" content="${SITE_URL}/og.png"`) && !/andrewpocta\.netlify\.app/.test(html));
check('sitemap + robots use this site\'s address',
  read('sitemap.xml').includes(`${SITE_URL}/`) && !/andrewpocta\.netlify\.app/.test(read('sitemap.xml')) &&
  read('robots.txt').includes(`Sitemap: ${SITE_URL}/sitemap.xml`));

const browser = await chromium.launch();
for (const [label, width, height] of [['desktop', 1440, 900], ['phone', 390, 844]]) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/fonts\.g/.test(m.text())) errors.push(m.text()); });
  await page.goto(url);
  await page.waitForTimeout(800);

  check(`${label}: no console errors`, errors.length === 0, errors.join(' | '));
  check(`${label}: no horizontal overflow`, !(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)));
  check(`${label}: every image file loads`, await page.evaluate(async () => {
    const imgs = [...document.images]; imgs.forEach(i => i.loading = 'eager');
    await Promise.all(imgs.map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
    return imgs.length > 0 && imgs.every(i => i.naturalWidth > 0);
  }));

  const projects = await page.evaluate(() => window.SITE.projects.map(p => p.id));
  if (label === 'desktop') {
    check('headline renders with the first rotating word', (await page.textContent('.hero h1 .rot')) === (await page.evaluate(() => window.SITE.headlineWords[0])));
    check('the nowBuilding project comes first', (await page.evaluate(() => document.querySelector('.scene').id)) === 'p-' + (await page.evaluate(() => (window.SITE.projects.find(p => p.nowBuilding) || window.SITE.projects[0]).id)));
    for (const id of projects) {
      const scene = page.locator(`#p-${id}`);
      const opener = page.locator(`button[data-p="${id}"]`);
      check(`project "${id}" has a scene with its title`, (await scene.count()) === 1 && (await scene.locator('h2').textContent()) === (await page.evaluate(i => window.SITE.projects.find(p => p.id === i).title, id)));
      await opener.click();
      check(`project "${id}" notes open`, await page.evaluate(i => !document.getElementById('n-' + i).hidden, id));
      await opener.click();
      check(`project "${id}" notes close`, await page.evaluate(i => document.getElementById('n-' + i).hidden, id));
      const shots = await page.evaluate(i => { const p = window.SITE.projects.find(p => p.id === i); return new Set([...(p.tileImages || []), ...(p.images || [])]).size; }, id);
      const shown = Math.max(await scene.locator('.thumbs button').count(), await scene.locator('.stage .main').count());
      check(`project "${id}" shows all its screenshots`, shown === shots, `${shown}/${shots}`);
    }
    // Screenshot enlarges, and closes with Escape
    await page.locator('.stage .main').first().click();
    check('screenshot opens in the viewer', await page.evaluate(() => document.getElementById('media').open && !!document.querySelector('#media img')));
    await page.keyboard.press('Escape');
    check('viewer closes with Escape', !(await page.evaluate(() => document.getElementById('media').open)));
    // Demo buttons: one per live link, one per video
    const want = await page.evaluate(() => window.SITE.projects.reduce((n, p) => n + (/^https?:\/\/|^\//.test(p.link || '') ? 1 : 0) + (p.video && !/\[PLACEHOLDER/.test(p.video) ? 1 : 0), 0));
    const got = await page.$$eval('#work .demo', l => l.length);
    check('every live link and video has a Live demo / Watch demo button', got === want, `${got}/${want}`);
    const vid = page.locator('[data-video]').first();
    if (await vid.count()) {
      await vid.click();
      check('Watch demo opens the video', await page.evaluate(() => !!document.querySelector('#media video[src]')));
      await page.keyboard.press('Escape');
    }
    // Quick-jump palette
    await page.keyboard.press('Control+k');
    await page.waitForTimeout(250);
    const items = await page.$$eval('#kl li', l => l.map(x => x.textContent));
    check('⌘K palette lists every project', (await page.evaluate(() => document.getElementById('cmdk').open && window.SITE.projects.every(p => document.getElementById('kl').textContent.includes(p.title)))), `${items.length} items`);
    await page.keyboard.press('Escape');
    check('⌘K palette closes with Escape', !(await page.evaluate(() => document.getElementById('cmdk').open)));
    // Placeholders
    check('visitors see no [PLACEHOLDER] tags', (await page.evaluate(() => { document.querySelectorAll('.notes').forEach(n => n.hidden = false); return document.body.innerText.includes('PLACEHOLDER'); })) === false);
    const draft = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await draft.goto(url + '?draft'); await draft.waitForTimeout(500);
    const phInContent = await draft.evaluate(() => (JSON.stringify(window.SITE).match(/\[PLACEHOLDER/g) || []).length);
    const phSeen = await draft.$$eval('.ph', l => l.length);
    check('?draft mode shows every remaining placeholder', phSeen === phInContent, `${phSeen}/${phInContent} tag(s)`);
    await draft.close();
    // About + contact
    check('about shows the quote, every bio paragraph and every CV row', await page.evaluate(() => document.querySelectorAll('#about .about p').length === 1 + window.SITE.bio.length && document.querySelectorAll('.cv tr').length === window.SITE.cv.length && !!document.querySelector('.quote')));
    check('process shows every step and tool', await page.evaluate(() => document.querySelectorAll('.steps li').length === window.SITE.process.length && document.querySelectorAll('.tools li').length === window.SITE.tools.length));
    const mailOk = await page.evaluate(() => /\[PLACEHOLDER/.test(window.SITE.email) || document.querySelector('#mail a')?.getAttribute('href') === 'mailto:' + window.SITE.email);
    const linkCount = await page.$$eval('#links > a', l => l.length);
    const expected = await page.evaluate(() => (window.SITE.links || []).length);
    check('contact shows email + all links', mailOk && linkCount === expected, `${linkCount}/${expected}`);
  } else {
    await page.click('.top .menu');
    check('phone: Menu opens the jump list', await page.evaluate(() => document.getElementById('cmdk').open));
    await page.locator('#kl li').nth(2).click();
    await page.waitForTimeout(900);
    check('phone: picking a project jumps to it', await page.evaluate(id => { const r = document.getElementById('p-' + id); return !document.getElementById('cmdk').open && Math.abs(r.getBoundingClientRect().top) < 120; }, await page.evaluate(() => document.querySelectorAll('.scene')[2].id.slice(2))));
    check('phone: tap targets are at least 44px tall', await page.evaluate(() => [...document.querySelectorAll('.btn')].every(b => b.getBoundingClientRect().height >= 44)));
  }
  await page.close();
}
// Reduced motion: content must be visible without waiting for animations
const rm = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
await rm.goto(url); await rm.waitForTimeout(300);
await rm.evaluate(() => document.querySelectorAll('.scene')[1].scrollIntoView());
await rm.waitForTimeout(300);
check('reduced motion: scene content is visible straight away', await rm.evaluate(() => getComputedStyle(document.querySelectorAll('.scene')[1].querySelector('h2')).opacity === '1'));
await rm.close();

await browser.close();
console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
