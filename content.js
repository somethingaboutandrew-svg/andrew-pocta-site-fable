/* =====================================================================
   SITE CONTENT: edit the words on your website here.
   =====================================================================
   HOW TO EDIT
   - Change only the text between the "quotes".
   - Keep every quote mark, comma and bracket where it is.
   - To make words bold, wrap them in double stars:  **like this**
   - Anything that still says [PLACEHOLDER: ...] is HIDDEN from visitors.
     To see what's still missing, add ?draft to the address:
     https://andrewpocta-fable.netlify.app/?draft  (shows amber tags)
   - Pictures: upload them into the "images" folder on GitHub, then put
     the path in quotes, e.g. "images/math-mystic-1.png".
   - New project: copy one whole { ... } block in "projects", paste it after
     the last one (mind the comma between blocks) and change the text.
   - After you save (Commit on GitHub), the live site updates in ~1 minute.
   ===================================================================== */

window.SITE = {

  /* ---------- Top of the page ---------- */
  name: "Andrew Pocta",
  role: "Builder · Virginia Beach, VA",
  photo: "images/andrew.jpg",                                        // your headshot, e.g. "images/andrew.jpg" (leave "" to show initials)
  headlineWords: ["apps", "games", "tools"],          // the word that rotates in "I build useful ___ with AI."
  intro: "Environmental Consultant by day and app/game/tool builder by night. I design and ship software for the people around me: educational apps for students, games and helpful tools for families, apps that solve problems that popular apps haven't yet.",

  /* ---------- Projects ----------
     Each project gets its own full screen. "color" can be: teal, violet, blue or neutral.
     The first project with nowBuilding: true is shown first.
     All the others follow, in this order.
     tileImages + images = the project's screenshots. The first one is shown
                  large; the rest are small pictures you click to swap in.
                  Click the large one to enlarge it.
     link       = a web address gives the project a "Live demo" button.
     video      = a demo video gives the project a "Watch demo" button. */
  projects: [
    {
      id: "hub",
      title: "Family Hub App",
      status: "Now building · v1",
      color: "teal",
      nowBuilding: true,
      summary: "Not your run-of-the-mill calendar or organizer app. An always-on family or personal assistant that keeps you on track and learns how to best help you, the more you interact with it. Accompanying mobile apps ensure it's with you on-the-go, so nothing is forgotten.",
      details: "An always-on AI family assistant that helps manage your life and keep you on track, with phone companion apps.",
      what: [
        "Runs on a dedicated tablet on the wall or desktop",
        "Setup wizard starts in voice mode and learns about each family member",
        "Brings the family's calendars, iCloud and Gmail together",
        "Voice control for the adults in the household, chosen during setup"
      ],
      how: [
        "Built in Claude Code with a CLAUDE.md, a decisions log and a verification skill",
        "v1 is a private build for my own family and has to work fully before any public release",
        "App Store release and linking an AI subscription are planned for later versions"
      ],
      statusLong: "In build · v1, private family release first",
      link: "https://andrewpocta-fable.netlify.app/family-hub/",
      tileImages: ["images/family-hub-calendar.jpg", "images/family-hub-tasks.jpg", "images/family-hub-lists.jpg"],
      images: ["images/family-hub-demo.jpg"]
    },
    {
      id: "sheetscale",
      title: "SheetScale",
      status: "Prototype",
      color: "blue",
      summary: "Incorporated different features from some of my favorite desktop apps and built my own! With SheetScale you can draw/sketch, manipulate layers, mark up sheets and measure plan sheets on your Mac, to scale, without a subscription or an account.\n\nSheetScale is built for people who review drawings and reports: contractors, estimators, architects, engineers, surveyors and environmental consultants. Open a PDF, set the scale once, and read lengths, square feet and acres right on the page.",
      what: [],
      how: ["[PLACEHOLDER: how you built it with AI]"],
      statusLong: "Prototype",
      link: "[PLACEHOLDER: demo link or video]",
      tileImages: ["images/sheetscale-map.jpg", "images/sheetscale-home.jpg"],
      images: ["images/sheetscale-map.jpg", "images/sheetscale-home.jpg"]
    },
    {
      id: "math",
      title: "Math Mystics",
      status: "On the App Store · V2 in progress",
      color: "violet",
      summary: "Discovered a huge flaw in similar math apps and instead of fixing those, my son and I built a new app around a creative learning technique. Listed on the Apple App Store; V2 is in progress.",
      details: "Voice-based math practice for kids. Equations and answers spoken out loud and the app listens.",
      what: [
        "Children practice math facts by speaking their answers",
        "Designed for my own kids' practice at home"
      ],
      how: [
        "Built on the browser's Web Speech API",
        "Code is in a private GitHub repo and moving into a Claude Code workflow",
        "Known engineering issue being solved: unlocking audio on iPad"
      ],
      statusLong: "On the App Store · V2 in progress",
      link: "[PLACEHOLDER: demo link or video]",
      tileImages: ["images/math-mystics-play.jpg", "images/math-mystics-players.jpg"],
      images: ["images/math-mystic.jpg", "images/math-mystics-play.jpg", "images/math-mystics-players.jpg"]
    },
    {
      id: "game",
      title: "Game Night",
      status: "Prototype",
      color: "neutral",
      summary: "Building a multiplayer game with the games and trivia that WE want to play. Inspired by games like Mario Party, Jackbox Games, Lego Party, etc. with mini-games designed by the whole family and for all ages. Trivia topics curated by us and for us. Up to 10 players scan the QR code on the TV to join the game!",
      details: "A family game built for the living-room TV.",
      what: ["Family game built for up to 10 players: displayed on the TV and each player joins through the QR code"],
      how: ["Built with Claude Code"],
      statusLong: "Prototype",
      link: "[PLACEHOLDER: demo link or video]",
      video: "media/game-night-demo.mp4",
      poster: "images/game-night-poster.jpg",
      tileImages: ["images/game-night-screen.jpg"],
      images: ["images/game-night-screen.jpg"]
    },
    {
      id: "wet",
      title: "Wetlands of Hampton Roads",
      status: "Prototype",
      color: "blue",
      contours: true,                                  // draws map contour lines behind the project
      summary: "Interactive app that explains what wetlands are, how they function and what happens when they are filled or impacted without proper planning.",
      details: "Wetland science software built by a working Professional Wetland Delineator.",
      why: "Built on more than a decade of wetland delineation and Section 404 work in southeastern Virginia and northeastern North Carolina.",
      what: ["Interactive app that explains what wetlands are, how they function and what happens when they are filled or impacted without proper planning."],
      how: ["Built with Claude Code, Three.js, etc."],
      statusLong: "Prototype",
      link: "[PLACEHOLDER: demo link or video]",
      video: "media/wetlands-demo.mp4",
      poster: "images/wetlands-poster.jpg",
      tileImages: ["images/wetlands-model.jpg"],
      images: ["images/wetlands-screen.jpg"]
    },
    {
      id: "rollforge",
      title: "RollForge",
      status: "Prototype - Try it",
      color: "teal",
      summary: "Inspired by the experience of my two oldest children, I created an interactive web app for brainstorming wheelchair tool/accessory concepts and developing them for testing and feedback before factory roll-out.",
      details: "Inspired by the experience of my two oldest children, I created an interactive web app for brainstorming wheelchair tool/accessory concepts and developing them for testing and feedback before factory roll-out.",
      what: [],
      how: ["[PLACEHOLDER: how you built it with AI]"],
      statusLong: "Prototype",
      link: "https://wheelchairtoolconcepts.grok.me/",
      tileImages: ["images/rollforge.jpg"],
      images: ["images/rollforge.jpg"]
    },
    {
      id: "locals757",
      title: "757 Locals App",
      status: "Now Building",
      color: "blue",
      summary: "Building an AI enhanced, interactive community guide app for all things 757 (Hampton Roads, Virginia). Unlike other local guides, this app is a constantly-growing and evolving inventory of the best local offerings (stores, restaurants, parks, attractions and upcoming events) curated to the user's preferences, with up-to-date researched disclaimers and info related to the user's likes/dislikes, past reviews and considerations such as handicap accessibility or child accommodations.",
      details: "Building an AI enhanced, interactive community guide app for all things 757 (Hampton Roads, Virginia). Unlike other local guides, this app is a constantly-growing and evolving inventory of the best local offerings (stores, restaurants, parks, attractions and upcoming events) curated to the user's preferences, with up-to-date researched disclaimers and info related to the user's likes/dislikes, past reviews and considerations such as handicap accessibility or child accommodations.",
      what: [],
      how: ["[PLACEHOLDER: how you built it with AI]"],
      statusLong: "Now Building",
      link: "[PLACEHOLDER: demo link or video]",
      tileImages: ["images/757-locals.jpg"],
      images: ["images/757-locals.jpg"]
    },
    {
      id: "inkfreeze",
      title: "InkFreeze",
      status: "Prototype - Try it",
      color: "neutral",
      summary: "Inspired by other mobile apps. Together with my son, our first mobile app project. While the Eye is looking away, fill in the image as quickly as possible. When the Eye opens / looks at you, FREEZE — any finger movement = instant death. Score = % of image filled before death (or 100% clear). Share death + score with friends.",
      details: "Inspired by other mobile apps. Together with my son, our first mobile app project. While the Eye is looking away, fill in the image as quickly as possible. When the Eye opens / looks at you, FREEZE — any finger movement = instant death. Score = % of image filled before death (or 100% clear). Share death + score with friends.",
      what: [],
      how: ["[PLACEHOLDER: how you built it with AI]"],
      statusLong: "Prototype",
      link: "https://inkfreeze.grok.me/",
      tileImages: ["images/inkfreeze.jpg"],
      images: ["images/inkfreeze.jpg"]
    }
  ],

  /* ---------- Short about line + the small tags in How I build ---------- */
  aboutShort: "Environmental Consultant at MAP Environmental Inc. for 14+ years. Wetland scientist and project manager, bilingual in English & Spanish, homeschool dad.",
  buildChips: ["Validate first", "CLAUDE.md rules", "Verify before features", "Claude Code", "Xcode"],

  /* ---------- How I build section ---------- */
  processIntro: "A repeatable process for building with AI: validate first, write the rules down, check every build before adding features.",
  process: [
    { title: "Validate the idea",       text: "Each concept gets a dossier covering the competition, MVP scope and risks, plus a clear advance-or-kill gate before any code is written." },
    { title: "Write the rules down",    text: "Every app starts with its own repo and a CLAUDE.md that holds decisions, constraints and the definition of done." },
    { title: "Verify before features",  text: "A deterministic verification checklist runs before anything new ships. Fixes run as goals with clear exit criteria." },
    { title: "Right model, right job",  text: "The strongest model designs the system. Faster models handle routine iterations. Quality comes first." }
  ],
  tools: ["Claude Code", "Claude", "GitHub", "Playwright", "Netlify", "Web Speech API", "Xcode", "Adobe Firefly", "Gemini Imagen", "ArcGIS Online"],

  /* ---------- About section ---------- */
  quote: "Fourteen + years learning the **land** by being in the field. Four + years building things in the **cloud**.",
  bio: [
    "I’m Andrew Pocta. Environmental Consultant/Project Manager with an obsession for building apps, games and tools for everyone.",
    "As an environmental consultant my work covers wetland delineations, Phase I and II Environmental Site Assessments, Joint Permit Applications, NEPA documentation and Section 404 permitting across southeastern Virginia and northeastern North Carolina.",
    "I'm a husband and father of three (my two oldest are disabled and full-time wheelchair users) and board member of SEEN (www.youareseen.org), a 501(c)(3) nonprofit serving families struggling with disability or cancer.  My diverse and unique life experience has given me a passion for discovering ways to solve problems and to make life easier...and fun!",
    "As an early adopter of AI, I've spent the last years learning to build all sorts of apps, games and tools for families, friends and colleagues. With the right resources, I see the future and it's full of endless possibilities!"
  ],
  cv: [                                                // each row: ["left side", "right side (dates)"]; leave right side "" if none
    ["MAP Environmental Inc. · Professional Wetland Delineator & Project Manager", "2012 – now"],
    ["SEEN (501(c)(3)) · Board member", "2024 – now"],
    ["Licensed Drone Pilot - FAA Part 107 Remote Pilot Certificate — Federal Aviation Administration (Issued 09/2016)", ""],
    ["Bilingual Translation/Interpretation - English & Spanish", ""],
    ["Virginia Commonwealth University · BA", "2010"]
  ],

  /* ---------- Contact section ----------
     For email, put the plain address in "email" (example: "you@example.com"). */
  contactKicker: "Grant reviewers, collaborators, curious people",
  email: "andrew.c.pocta@gmail.com",
  links: [
    { label: "GitHub ↗",            url: "https://github.com/somethingaboutandrew-svg" },
    { label: "MAP Environmental ↗", url: "https://mapenvironmental.com" },
    { label: "LinkedIn ↗",          url: "https://www.linkedin.com/in/andrew-pocta-pwd-961b2859/" },
    { label: "X · @Andrew51786 ↗",  url: "https://x.com/Andrew51786" }
  ],

  footer: "© 2026 Andrew Pocta · Virginia Beach, VA"
};
