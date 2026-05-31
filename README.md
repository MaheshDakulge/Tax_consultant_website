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
├── index.html              # Home (landing page)
├── about.html              # About Us & Expert Team
├── services.html           # Services Overview Grid
│   ├── income-tax.html     # Income Tax Filing details
│   ├── gst.html            # GST Advisory & Returns
│   ├── tax-planning.html   # Strategic Tax Planning
│   ├── business-reg.html   # Company Incorporation & LLPs
│   ├── accounting.html     # Bookkeeping & Payroll
│   └── nri-taxation.html   # NRI Taxation & FEMA
├── knowledge-bank.html     # Resource hub landing page
│   ├── calculators.html    # Live GST, Tax, and TDS Calculators
│   ├── bulletins.html      # Filterable regulatory updates
│   ├── utilities.html      # Tabbed TDS rates & tax slabs
│   ├── acts.html           # Reference legislative acts
│   └── forms.html          # Curated downloads index
├── blog.html               # Article listings with categories
│   └── post-template.html  # Full article typography template
├── events.html             # Upcoming workshops & webinars
├── testimonials.html       # Client reviews grid
├── careers.html            # Open positions & job applications
├── contact.html            # Contact office details & map
├── disclaimer.html         # Full legal terms & ICAI disclaimers
├── 404.html                # Custom animated error page
├── styles.css              # Unified Protax design system stylesheet
├── script.js               # Event handling, scroll reveals, tab swappers
└── images/                 # Editorial Stock Assets
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
