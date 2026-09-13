# 🏛️ SCHEME SATHI (स्कीम साथी / ਸਕੀਮ ਸਾਥੀ)
> **"The Right Scheme, For The Right Person."**  
> *A Premium, Modern, and Complete Indian Digital Public Service Discovery Platform*  
> **B.Tech Capstone Project • 100% Pure Frontend Web Application**

---

## 🌟 Overview

**Scheme Sathi** is an intelligent, personalized government welfare scheme and scholarship discovery platform built specifically for Indian citizens. It bridges the critical information divide between government welfare policies and everyday citizens—including students, farmers, women, workers, senior citizens, and entrepreneurs.

The entire application runs **100% directly in the browser** using modern standard web technologies (HTML5, CSS3, and Vanilla JavaScript) with **zero external backend, Node server, or database dependencies**.

---

## 🚀 Key Highlights & Architecture

- **Zero Backend / Serverless**: Operates completely client-side in any web browser.
- **28 Real Government Schemes**: Authentic central and state schemes covering Agriculture, Education, Business, Healthcare, Housing, Women & Child, Senior Citizens, and Disability Support.
- **Smart Matching Engine (100-Point Formula)**:
  - Occupation: **40 pts**
  - Age: **15 pts**
  - Family Income: **20 pts**
  - State of Residence: **15 pts**
  - Gender: **5 pts**
  - Education & Special Conditions: **5 pts**
  - Instant classification into **Excellent Match (80–100%)**, **Good Match (60–79%)**, and **Possible Match (40–59%)**.
- **Interactive 5-Step Wizard**: Multi-step eligibility checker with conditional questions based on occupation (e.g. landholding for farmers, education level for students, business scale for entrepreneurs).
- **Interactive Document Checklist**: Check off ready documents with real-time progress tracking (`3 / 5 Ready (60%)`), automatically saved in `localStorage`.
- **Application Tracker**: Visual pipeline tracker (`Interested` ➔ `Documents Pending` ➔ `Applied` ➔ `Under Review` ➔ `Approved`), saved in `localStorage`.
- **Tri-Lingual Engine**: Instant toggle across **English (EN)**, **हिंदी (HI)**, and **ਪੰਜਾਬੀ (PA)** with 100% key parity.
- **Dark Mode & Light Mode**: Deep navy/slate dark mode designed with CSS custom properties.
- **Citizen Dashboard**: Live metrics, active demographic profile summary, top recommendations, and notification alerts.

---

## 📁 Project Structure

```
scheme-sathi/
│
├── index.html       # Semantic HTML5 Single Page Application & Citizen Portal
├── login.html       # Simple Citizen Login Page (Stored locally in localStorage)
├── register.html    # Simple Citizen Registration Page (Stored locally in localStorage)
├── style.css        # Premium GovTech / Fintech CSS3 Design System & Theme Variables
├── script.js        # Vanilla JavaScript Engine (Schemes, Matcher, i18n, Storage)
├── assets/          # Assets and icons directory
└── README.md        # Project documentation
```

---

## 💻 How to Run

Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari):

```bash
# Option 1: Open directly from file explorer
Double-click "index.html"

# Option 2: Run via any static HTTP server (optional)
npx serve .
# or
python -m http.server 3000
```

---

## 🛠️ Technology Stack

- **HTML5**: Semantic markup, accessible labels, ARIA landmarks.
- **CSS3**: Custom property theme system, CSS grid, flexbox, glassmorphism, responsive breakpoints down to 320px, micro-animations.
- **Vanilla JavaScript (ES6+)**: Pure client-side algorithms, event delegation, modular architecture.
- **Web Storage API**: `localStorage` for profile persistence, saved schemes, application tracker, document checklist states, theme, and language.
- **CDN Resources**: Font Awesome 6.5.1, Google Fonts (*Plus Jakarta Sans* & *Outfit*).

---

## 📜 Educational Disclaimer

*Scheme Sathi is an educational college project developed for academic evaluation. Scheme details, eligibility criteria, and application processes are compiled for informational discovery. Users should always verify the latest guidelines on official government portals (such as scholarships.gov.in, pmkisan.gov.in, pmjay.gov.in, etc.) before final submission.*

© 2026 Scheme Sathi. Built with pride for Indian Citizens 🇮🇳.
