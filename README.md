# Mini Tech Store (E-Commerce)

A mini e-commerce web application built with React. This project demonstrates core React concepts like component-based architecture, state management, contextual theming, and functional programming.

## Features

- **Product Listing:** Displays a list of tech products with their details (image, title, price, description).
- **Search Functionality:** Filter products dynamically by typing into the search bar.
- **Shopping Cart:** Add items to a shopping cart, and view the total count.
- **Modal View:** A custom modal component to preview the shopping cart.
- **Light/Dark Mode:** Toggle between light and dark themes using React's Context API.
- **Stock Validation:** Prevents adding out-of-stock items to the cart.

## Tech Stack

- React (Vite)
- Vanilla CSS
- JavaScript (ES6+)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   ```

2. Navigate into the directory:
   ```bash
   cd e-commerce
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## What I Learned
- Using `useState` and `useEffect` to manage application data.
- Creating a global `ThemeContext` to avoid prop drilling.
- Passing functions and states as props to child components.
- Conditional rendering based on state.
