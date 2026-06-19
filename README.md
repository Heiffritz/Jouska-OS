<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 🖥️ Jouska OS

> Not just a portfolio — a desktop experience.

Jouska OS is an operating system-inspired portfolio website that reimagines the traditional portfolio into a fully interactive desktop environment. Instead of scrolling through pages, visitors can explore projects, skills, certificates, and personal information through desktop icons, draggable windows, and a familiar taskbar interface.

The goal of this project is to combine creativity, personality, and modern web development into a portfolio that feels memorable and enjoyable to explore.

---

## ✨ Features

### 🖱️ Interactive Desktop Environment

* Functional desktop interface
* Double-click desktop icons to open applications
* Draggable windows
* Window controls (minimize, maximize, close)
* Desktop-inspired navigation

### 👤 About Me

Learn more about who I am, my background, interests, and development journey.

### 🛠️ Skills & Expertise

A showcase of technologies, tools, and skills I have worked with.

### 📂 Projects

Browse featured projects with descriptions, technologies used, and relevant links.

### 📜 Certificates

View and download certificates directly from the portfolio.

### 📬 Contact

Easy access to contact information and social links.

---

## 🚀 Technologies

Built using:

* React
* TypeScript
* Tailwind CSS
* Modern Web APIs

---

## 🎮 How to Use

1. Open the website.
2. Double-click desktop icons to launch applications.
3. Drag windows around the screen.
4. Explore the different sections:

   * About
   * Skills
   * Projects
   * Certificates
   * Contact
5. Download certificates directly from the Certificates application.

Think of it like exploring a small operating system rather than a traditional website.

---

## 🎯 Project Goals

This project was created to:

* Showcase my work in a unique way.
* Practice modern frontend development.
* Experiment with desktop-style user interfaces on the web.
* Build a portfolio that reflects both technical and creative skills.

---

## 🚧 Work in Progress

Jouska OS is currently under active development.

Planned improvements include:

* Additional desktop applications
* More interactive animations
* Improved window management
* New project showcases
* Sound effects and desktop interactions
* Performance optimizations
* Additional customization features

Expect frequent updates as new ideas and features are added.

---

## 📌 Status

Current Status: **In Development**

This repository will continue to evolve as Jouska OS grows into a more complete desktop-inspired portfolio experience.

---

### © Jouska

Built with curiosity, creativity, and probably far too much time spent making websites behave like operating systems.
>>>>>>> b6c8282488b75451a9de4ee92c732e11f7f6109f
