# Frontend Mentor - 3-column preview card component solution

This is my solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-), built with React, Vite, and Tailwind CSS v4.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

This project is a responsive 3-column preview card component that adapts to different screen sizes. It includes hover states for buttons and cards, and uses custom Tailwind theme colors for the card headers.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./preview.jpg)>

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I started by reading the challenge requirements and planning a component-based layout that would work on both mobile and desktop screens. The final design is built around a reusable Card component that receives title, description, image, and color props.

I used Tailwind CSS v4 with Vite, so the project setup included adding @tailwindcss/vite to vite.config.js and importing Tailwind in index.css. I also added a small custom theme in index.css to define the gold, cyan, and green brand colors.

In the Card component, I mapped the color prop to explicit Tailwind utility classes like bg-gold, bg-cyan, and bg-green. That made the styling predictable and ensured the build system generated the correct CSS.

I paid attention to responsiveness by using Tailwind’s mobile-first utility classes and by switching from stacked cards to a horizontal layout on medium screens. I also added hover states for the buttons to match the expected interactive behavior.

### Built with

- React
- Vite
- Tailwind CSS v4
- CSS custom properties
- Flexbox
- Responsive design
- Component-based architecture

### What I learned

- How to configure Tailwind CSS v4 with Vite using `@tailwindcss/vite`
- How to define custom theme colors with `@theme` in `index.css`
- How to map component props to Tailwind utility classes in React
- How to build a responsive layout using Tailwind utility classes

Example of the color mapping used in `Card.jsx`:

```js
const colorClasses = {
  gold: "bg-gold",
  cyan: "bg-cyan",
  green: "bg-green",
};
```

### Useful resources

- [React Docs](https://react.dev/)
- Official React documentation
- [Tailwind CSS docs](https://tailwindcss.com/docs/)
- Official Tailwind CSS documentation

### AI Collaboration

I used GitHub Copilot to help debug the Tailwind configuration and component styling. It helped identify issues with custom color classes, Tailwind v4 setup, and how to map props to explicit utility classes in React.

## Author

- Frontend Mentor - [@Igho-Okeoghene](https://www.frontendmentor.io/profile/Igho-Okeoghene)
- LinkedIn - [@okeghene-Eunice](https://www.linkedin.com/in/okeoghene-eunice/)
