# E-commerce Website Project

## Description

This e-commerce website project, allows users to browse products, add items to a cart, and place orders. It incorporates features like user authentication, product filtering, a shopping cart, order management, and payment integration via Stripe. Additionally, it includes a "Spinning Wheel of Fortune" feature for user engagement. The website is built with a modern tech stack including React 19 for the frontend, Next.js 15 for server-side rendering and routing, Tailwind CSS for styling, Prisma as an ORM for database interactions, PostgreSQL as the database, Stripe for secure payment processing, and Sanity CMS for managing product content. The project aims for a responsive design to ensure a seamless experience across various devices.

## Table of Contents

1.  [General Info](#general-info)
2.  [Technologies](#technologies)
3.  [Installation](#installation)
4.  [Usage](#usage)
5.  [Features](#features)
6.  [Contributing](#contributing)
7.  [License](#license)
8.  [Contact](#contact)

## General Info

This project was developed as a comprehensive e-commerce solution, drawing inspiration from popular e-commerce platforms. It demonstrates a full-stack development approach, integrating a modern frontend framework with backend technologies to create a functional and user-friendly online shopping experience. The inclusion of features like user authentication and payment processing makes it a robust foundation for a real-world e-commerce application. The "Spinning Wheel of Fortune" adds a unique gamified element to enhance user engagement.

## Technologies

* **Frontend:**
    * [React 19](https://react.dev/): JavaScript library for building user interfaces
    * [Next.js 15](https://nextjs.org/): React framework for production (SSR, routing, etc.)
    * [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
* **Backend & Database:**
    * [Prisma](https://www.prisma.io/): Next-generation ORM for database access
    * [PostgreSQL](https://www.postgresql.org/): Open source relational database
* **Payment:**
    * [Stripe](https://stripe.com/): Payment processing platform for handling transactions
* **Content Management:**
    * [Sanity CMS](https://www.sanity.io/): Headless CMS for managing product data and other content

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/El-47/e-commerce.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd e-commerce
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Configure environment variables:**
    * Create `.env` files in root directory based on the `.example.env` files provided.
    * Fill in the necessary API keys, secrets, and URLs for Stripe, Sanity CMS, and other services.
5.  **Set up the database**
    ```bash
     npx prisma db push
     npx prisma generate
    ```
6.  **Start the development servers:**
        ```bash
        npm run dev
        ```
    * The app will typically run on `http://localhost:3000`.

## Usage

1.  Open your browser and navigate to the URL (usually `http://localhost:3000`).
2.  Browse the available products.
3.  Add products to your shopping cart.
4.  Proceed to the checkout page to place an order.
5.  Follow the on-screen instructions for payment using Stripe.
6.  Explore other features like user registration/login and the "Spinning Wheel of Fortune" (if implemented on the frontend).
7.  Administrators can use the Sanity CMS interface to manage product listings, categories, and other content.

## Features

* **User Authentication:** Secure registration and login for users.
* **Product Browsing & Filtering:** Ability to view and filter products by various criteria (e.g., category, price).
* **Shopping Cart:** Functionality to add, remove, and manage items in a virtual shopping cart.
* **Order Placement & Management:** Users can place orders, and administrators can manage order statuses.
* **Payment Integration (Stripe):** Secure processing of online payments.
* **"Spinning Wheel of Fortune":** A gamified feature to potentially offer discounts or rewards.
* **Content Management (Sanity CMS):** Easy management of product information and website content through a headless CMS.
* **Responsive Design:** Ensures the website adapts to different screen sizes (desktops, tablets, mobile devices).


Please ensure your code adheres to the project's coding standards and includes appropriate testing.

## License

[Specify your project's license here, e.g., MIT License]
