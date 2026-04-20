# 🚀 Grafterr Landing Page – Front-End Technical Assessment

## 📌 Overview

This project is a **pixel-perfect, fully responsive landing page** built as part of a Front-End Technical Assessment for the Web Designer role at **FIN Infocom**.

The application dynamically renders all content from a local JSON file using a simulated API, ensuring separation of data and UI logic.

---

## 🔗 Live Demo & Repository

* 🌐 **Live URL:**
  https://69e50703da9d33e62ac76d45--marvelous-gelato-4b4fec.netlify.app/

* 💻 **GitHub Repository:**
  https://github.com/Chandu-challa/grafterr-landing

---

## ⚙️ Tech Stack

* **React 18** (Functional Components + Hooks)
* **JavaScript (ES6+)**
* **HTML5 & CSS3**
* **CSS Modules**
* **Vite** (for fast development and build)

---

## 🧠 Key Features

### ✅ Dynamic Content Rendering

* All content is loaded from `content.json`
* Simulated API calls using `setTimeout` (1000–1500ms delay)
* Clean separation between UI and data layer

---

### 🎯 Hero Section

* Gradient-highlighted headline (**“technology provider”**)
* CTA button with gradient background
* Floating decorative shapes (animated)

---

### 📦 Features Section

* Section heading with accent text (**“grow your business”**)
* Responsive product carousel:

  * Point of Sale
  * Self-service
  * Kitchen Management

---

### 🎡 Carousel Functionality

* Custom hook-based implementation
* Features:

  * Next / Previous navigation
  * Responsive items per view:

    * Desktop: 3
    * Tablet: 2
    * Mobile: 1
  * Touch swipe support (mobile)
  * Smooth 300ms transitions

---

### ⏳ Loading & Error States

* Skeleton loaders while fetching data
* Graceful error handling
* Retry mechanism for failed API calls

---

### 📱 Fully Responsive Design

* Mobile-first approach
* Breakpoints:

  * 375px (Mobile)
  * 768px (Tablet)
  * 1440px (Desktop)
* Matches Figma design closely (spacing, typography, colors)

---

## 🧩 Project Structure

```
grafterr-landing
│── public/
│   └── images/
│
│── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── sections/
│   │
│   ├── hooks/
│   │   ├── useContent.js
│   │   └── useCarousel.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── data/
│   │   └── content.json
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
```

---

## 🔌 API Simulation

Located in:

```
src/services/api.js
```

Functions:

* `fetchHeroContent()`
* `fetchFeaturesContent()`

✔ Simulates real API behavior using delay
✔ Returns Promises
✔ Handles loading + error states

---

## 🪝 Custom Hooks

### `useContent`

* Handles API calls
* Manages loading & error states

### `useCarousel`

* Manages index state
* Handles navigation logic
* Supports responsive behavior

---

## 🎨 Design Implementation

* Followed Figma design closely:

  * Typography
  * Colors
  * Gradients
  * Spacing
* Used CSS variables for consistency
* No CSS frameworks used (as required)

---


## 🛠️ Setup Instructions

```bash
# Clone repository
git clone https://github.com/Chandu-challa/grafterr-landing

# Navigate into project
cd grafterr-landing

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📈 Future Improvements

* Add unit testing (Jest / React Testing Library)
* Improve accessibility (ARIA roles)
* Add animations using Framer Motion
* Optimize performance with lazy loading

---


## 📬 Contact

📧 [chanduchanduchalla7@gmail.com](mailto:chanduchanduchalla7@gmail.com)

---


