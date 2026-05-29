# Jinke & Associates | Chartered Accountants & Tax Consultants

Welcome to the premium, high-performance website for **Jinke & Associates | Tax Consultant**. This website has been custom-designed using the editorial **Protax theme** system to represent a luxurious, trustworthy, and highly professional digital presence for the chartered accountancy firm.

---

## 🎨 Premium Design Aesthetics

- **Inset Rounded Cards Layout**: A modern editorial layout where key sections (Hero, How It Works, Contact) are encapsulated inside dark-navy inset rounded cards (`border-radius: 28px`) nested within a soft, warm magazine-style off-white page body (`#FAF9F6`).
- **Inline Brand Mark SVG**: A sharp, high-fidelity inline SVG logo displaying a modern dark navy rounded square icon with a white `✕` inside, representing stability, accuracy, and professional precision.
- **Micro-Animations & Transitions**: Fluid slide-up scroll reveals, bouncing navigation entry animations, dynamic hover translations, and smooth image filters.
- **Fully Responsive**: Perfectly optimized across all viewports (from 320px mobile displays up to 1440px widescreen formats).

---

## 🛠️ State-of-the-Art Interactivity

1. **Interactive Services Showcase**: A custom tabbed panel on the right with vertical tab headers. Clicking on any service dynamically updates the left-side preview card (displaying the dedicated expert's high-definition photo, title, description, and key compliance bullets) with a smooth fading transition.
2. **Timeline Progress Bar Fill**: An animated 4-step horizontal pipeline connecting your engagement journey. The timeline path fills dynamically using scroll triggers.
3. **Minimalist FAQ Accordions**: Minimal, typography-centric accordion blocks. Opening a question rotates its arrow indicator `→` to a down-pointing state `↓` while collapsing any previously open questions.
4. **Mock API Form Submissions**: Interactive contact forms with visual state changes (showing "Sending Message..." loader and transitioning to a green success block "✓ Message Sent Successfully").
5. **Disclaimer Guidelines Modal**: Full regulatory modal overlay compliant with ICAI terms, linked dynamically through footer triggers.

---

## 📂 Project Architecture

```
website/
├── index.html       # Restructured semantic HTML5 tags and SVG brand assets
├── styles.css       # Premium CSS custom properties, cards styling, and media queries
├── script.js        # Showcase tab triggers, scroll fill timelines, and modal overlays
├── README.md        # Documentation and deployment guide
└── images/          # Professional high-definition stock images folder
    ├── hero_bg.jpg            # Corporate meeting background
    ├── about_bg.jpg           # Audit consultation background
    ├── team_collaboration.jpg  # Experts teamwork visual
    ├── testimonial_avatar.jpg # SME Client avatar image
    ├── service_1.jpg to service_6.jpg # Dedicated service visuals
    └── logo.webp              # Webp mockup representation logo
```

---

## 🌐 Running Locally

The website is served locally using Python's built-in HTTP server:
```bash
python -m http.server 8000
```
Open your browser and navigate to `http://localhost:8000`.

---

## 🔗 Git Operations & GitHub Integration

The project is initialized as a local Git repository on the `main` branch. 

### Link Your Repository to GitHub
To push this code to a remote repository and host it live:
```bash
# Link the local repo to your remote GitHub repo
git remote add origin https://github.com/MaheshDakulge/jinke-associates-website.git

# Push the code to the main branch
git push -u origin main
```

### Live Hosting Options
- **GitHub Pages**: Go to your repository settings -> **Pages** -> under **Build and deployment**, select **Deploy from a branch** -> select the `main` branch -> **Save**.
- **Vercel** / **Netlify**: Connect your GitHub account and import the repository for zero-config static hosting in seconds.
