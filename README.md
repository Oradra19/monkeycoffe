# Monkey Coffee ☕

A modern and responsive coffee shop landing page built with **Next.js 16**, featuring reusable components, responsive layouts, and a clean UI inspired by a Figma design.

---

## 🚀 Technologies Used

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Lucide React
- next/font (Google Fonts)

---

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── components/
│   ├── Container.jsx
│   ├── Section.jsx
│   ├── SectionHeader.jsx
│   ├── PrimaryButton.jsx
│   ├── FeatureCard.jsx
│   ├── GalleryImage.jsx
│   ├── MenuCard.jsx
│   └── InfoItem.jsx
│
└── sections/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── AboutUs.jsx
    ├── WhatWeServe.jsx
    ├── Signature.jsx
    ├── Ambience.jsx
    ├── Mark.jsx
    ├── VisitUs.jsx
    └── Footer.jsx
```

---

# ⚙️ Installation

Clone the repository.

```bash
git clone https://github.com/Oradra19/monkeycoffe.git
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Open the application.

```
http://localhost:3000
```

---

# 📦 Dependencies

```json
{
  "next": "^16",
  "react": "^19",
  "react-dom": "^19",
  "tailwindcss": "^4",
  "lucide-react": "^0.x"
}
```

---

# 🎨 Features

- Responsive Layout
- Reusable Components
- Mobile Friendly
- Next.js App Router
- Optimized Images with Next/Image
- Google Fonts using next/font
- Modern UI inspired by Figma

---

# 🛒 Cart Persistence & Hydration

Although this project is primarily a landing page, the shopping cart implementation was designed with client-side persistence in mind.

To avoid hydration mismatch issues in Next.js, the cart state is only initialized after the component mounts on the client.

Instead of reading from `localStorage` during server rendering, the application waits until the browser environment is available.

Example:

```jsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
```

The cart data is then loaded inside a `useEffect` hook:

```jsx
useEffect(() => {
  const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);
```

Whenever the cart changes, it is synchronized back to localStorage.

```jsx
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
```

This approach ensures:

- No hydration mismatch
- Safe access to browser APIs
- Persistent cart data after page refresh
- Better compatibility with Next.js server rendering

---

# 📱 Responsive Design

The website is optimized for:

- Mobile
- Tablet
- Desktop

Responsive layouts are implemented using Tailwind CSS breakpoints.

---

# 📄 License

This project is created for Intern test and portfolio purposes.