# Food Court
![HTML](https://img.shields.io/badge/HTML-5-orange?style=flat&logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?style=flat&logo=css3)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.3-purple?style=flat&logo=bootstrap)
![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)
![Redux](https://img.shields.io/badge/Redux-8.1-purple?style=flat&logo=redux)
![React Icons](https://img.shields.io/badge/React%20Icons-4.8.0-blue?style=flat&logo=react)
![Axios](https://img.shields.io/badge/Axios-1.3.5-blue?style=flat&logo=axios)
![Yup](https://img.shields.io/badge/Yup-1.1.1-green?style=flat&logo=yup)
![Formik](https://img.shields.io/badge/Formik-2.2.9-purple?style=flat&logo=formik)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat&logo=javascript)



Food Court is an online platform that connects food enthusiasts with a diverse selection of restaurants, cafes, and food vendors in their area. Whether you're craving mouthwatering cuisines, exploring new flavors, or simply looking for a quick bite, Food Court is your go-to destination for a delightful dining experience.

[Project Demo Link](https://food-court-io.vercel.app/)


## Features
- **Explore Menus and Restaurants:** Discover a diverse selection of restaurants, cafes, and food vendors offering a wide range of cuisines from all around your City.

- **Add to Cart:** Build your perfect meal by easily adding dishes to your cart while exploring menus.

- **Search Functionality:** Quickly find your favorite dishes, restaurants, or cuisines using our powerful search feature.

- **Filter for Veg and Non-Veg Dishes:** Easily filter the menu to view only vegetarian or non-vegetarian options, catering to your dietary preferences.

- **Offline Dino Game:** Enjoy a delightful dino game to pass the time and have fun when your network connection is not available.

 ## How It Works

Food Court operates through a user-friendly web application and mobile app. Users can create accounts to access personalized features such as saving favorite restaurants and past orders. Restaurants and vendors can also join the platform to reach a broader audience and manage their menu offerings.

Join us in creating a thriving food community where everyone can indulge in their culinary passions, support local businesses, and explore the art of gastronomy like never before.

## Project Structure

The project is organized with a focus on modularity and reusability. Below is an outline of the key directories and their purposes:

- **/dist**: The `dist` directory contains the build code and assets generated after the project has been built for production.

- **/public**: The `public` directory contains the essential assets that are served directly to the browser. Notable files include:
  - `index.html`: The main HTML file that serves as the entry point to the application.
  - `vite.svg`: An SVG image used as a favicon or other branding purposes.

- **/src**: The `src` directory contains the source code of the application:
  - **/components**: The `components` directory houses reusable React components used throughout the project. It contains the following subdirectories:
    - `Faqs`: Contains components related to frequently asked questions section.
    - `Forms`: Holds various form components used in the application.
    - `Pages`: Includes individual page components that define different routes of the application.
    - `Layout`: Contains components responsible for the overall layout and structure of the web app.
    - `RestaurantCards`: Includes components related to displaying restaurant information and cards.
    - `Utils`: Contains custom hooks and utility functions used across the application.
  - **/schemas**: The `schemas` directory contains schema files implemented using Yup, used for form validation and data validation.
  - **/assets**: The `assets` directory holds all the images and other media files used in the project.
  - **/context**: The `context` directory serves as the central space for React context API, managing global state and data flow.
  - **/redux**: If applicable, the `redux` directory contains Redux-related files, such as actions, reducers, and store configuration.
  - `App.jsx`: The main application component that serves as the entry point to the React application.
  - `config.jsx`: The configuration file that holds any environment-specific or application-wide settings.
  - `main.jsx`: The main entry point to the application, where React is rendered to the DOM.

## Architecture

The project follows a combination of component-based architecture, global state management (using React context or Redux), and lazy loading for improved performance. Here's a breakdown of the key architectural aspects:

- **Component-Based Architecture**: The project leverages a component-based approach to design, where each feature or section of the application is encapsulated within its own reusable React component. This promotes modularity, reusability, and easier maintenance.

- **Global State Management**: To handle shared state and data across the application, we utilize either React context or Redux, depending on the complexity and scale of the project. This ensures a consistent flow of data and provides a centralized way to manage application-wide state.

- **Lazy Loading**: In order to optimize the loading time and reduce the initial bundle size, we have implemented lazy loading for certain components and routes. Lazy loading allows us to load components and assets only when they are needed, minimizing the initial load time and improving overall performance. This is especially beneficial for large-scale applications with many components and routes.

The combination of these architectural choices aims to create a well-structured, maintainable, and performant web application, providing a seamless experience for users.

## Technologies Used

The project utilizes the following technologies and libraries:

- **Redux Toolkit (@reduxjs/toolkit)**: A powerful toolset for Redux state management, simplifying the process of writing Redux code.

- **Axios**: A popular library for making HTTP requests, enabling seamless communication with APIs.

- **Bootstrap**: A CSS framework for responsive and mobile-first web development, providing a robust set of styling components.

- **Formik**: A library for building and validating forms in React applications, making form handling more efficient.

- **json-server**: A lightweight development server used for testing API interactions during development.

- **React**: A JavaScript library for building user interfaces, providing a flexible and efficient component-based structure.

- **React Chrome Dino (@react-chrome-dino)**: A fun React component that includes the classic dino game for offline use, adding an enjoyable element to the project.

- **React DOM**: Provides DOM-specific methods for React, enabling rendering of React components in the browser.

- **React Epic Spinners (@react-epic-spinners)**: A collection of loading spinners for React, enhancing the visual appeal of loading states.

- **React Icons**: A library of popular icons for React applications, making it easier to include attractive icons in the user interface.

- **React Redux (@react-redux)**: Official React bindings for Redux state management, facilitating the seamless integration of Redux in React applications.

- **React Router DOM (@react-router-dom)**: A library for routing and navigation in React applications, enabling multi-page behavior in a single-page application.

- **React Shimmer Effects 18 (@react-shimmer-effects-18)**: Provides shimmering loading effects for React components, enhancing the user experience during loading states.

- **Yup**: A library for schema validation, ensuring data integrity and validity.

## Development and Testing Dependencies (DevDependencies)

The project also uses the following devDependencies for development and testing purposes:

- **Babel Core (@babel/core)**, **Babel Preset Env (@babel/preset-env)**, **Babel Preset React (@babel/preset-react)**: Babel dependencies for transpiling JavaScript and JSX code.

- **Testing Library Jest DOM (@testing-library/jest-dom)**, **Testing Library React (@testing-library/react)**: Testing utilities for React applications, simplifying the testing process.

- **Types for React (@types/react)**, **Types for React DOM (@types/react-dom)**: Type definitions for React and React DOM, providing enhanced typing support.

- **Vite Plugin React (@vitejs/plugin-react)**, **Vite (@vite)**: Vite-related dependencies for React applications, enabling a fast and efficient development environment.

- **Babel Jest (@babel-jest)**: A Jest transformer for Babel, used in the testing process.

- **Babel Plugin Transform Remove Console (@babel-plugin-transform-remove-console)**: A Babel plugin to remove console statements from production builds, ensuring cleaner code.

- **ESLint**: A code linting tool for identifying and fixing common code errors and formatting issues.

- **ESLint Plugin React (@eslint-plugin-react)**: ESLint plugin for React-specific linting rules, improving code quality.

- **Jest**: A testing framework used for writing and running tests in the project.

- **Jest Environment JSDom (@jest-environment-jsdom)**: The JSDom environment for Jest, providing a browser-like environment for testing.

- **Redux Mock Store (@redux-mock-store)**: A mock store for testing Redux state and actions.


## Screenshots
<img width="1437" alt="Screenshot 2023-08-06 at 2 51 27 AM" src="https://github.com/KaranMeghe/food-court/assets/78386171/65f22f49-7ce9-4309-8001-f7180fa29c3f">

<img width="1432" alt="Screenshot 2023-08-06 at 2 52 12 AM" src="https://github.com/KaranMeghe/food-court/assets/78386171/2d1edeea-c48d-408a-bf83-bb939c26b3e2">

 <img width="229" alt="Screenshot 2023-08-06 at 3 06 23 AM" src="https://github.com/KaranMeghe/food-court/assets/78386171/9ae9d377-ecc4-42fb-9cb3-db25c35ade39">

 ## Future Improvements

While the current version of the project provides a solid foundation, there are several exciting features and enhancements planned for the future. Here are some of the improvements I aim to implement:

1. **Enhanced UI and Visuals**: I plan to improve the user interface by adding more engaging visuals, animations, and interactive elements to create a visually appealing experience for users.

2. **User Authentication and Login Form**: To make the application more secure and personalized, I intend to implement user authentication using industry-standard methods. This will enable users to have their own accounts, access personalized content, and interact with the platform securely.

3. **User Profiles and Preferences**: In addition to authentication, I want to introduce user profiles where users can manage their preferences, view order history, and customize their experience on the platform.

4. **Advanced Search and Filtering**: To enhance the search functionality, I plan to implement advanced search and filtering options, allowing users to quickly find their desired menus and restaurants based on various criteria.

5. **Integration with Payment Gateways**: To enable seamless online transactions, I aim to integrate popular payment gateways, ensuring a smooth checkout process for users.

6. **Optimized Performance**: Continuously optimizing the application's performance will be a priority. I will work on reducing load times, optimizing assets, and improving overall responsiveness.

These future improvements will not only enhance the user experience but also demonstrate the ongoing commitment to improving and maintaining the project.


## Challenges and Learnings

Throughout the development process, I encountered various challenges and gained valuable learnings that have contributed to my growth as a developer. Here are some of the key challenges I faced and the lessons I learned:

1. **Performance Optimization and Lazy Loading**: Optimizing the application's performance was a significant challenge. I implemented lazy loading for certain components and assets to reduce initial load times and improve overall performance. Lazy loading helped load resources only when needed, leading to a more responsive application.

2. **Redux Toolkit and Global State Management**: Working with Redux, I discovered the Redux Toolkit, a powerful toolset that simplified Redux state management. This streamlined my code, reduced boilerplate, and deepened my understanding of state management in large-scale applications.

3. **Custom Hooks and Reusability**: Developing custom hooks for reusable logic was a rewarding learning experience. By abstracting common functionalities into custom hooks, I improved code reusability and maintainability. This practice allowed me to encapsulate complex logic, making components cleaner and more manageable.

4. **Filter Functionality for Veg and Non-Veg Dishes**: Implementing the filter functionality for veg and non-veg dishes presented a unique challenge. I learned how to handle filtering logic efficiently, ensuring that users can easily find their preferred options. This feature taught me about user experience and data manipulation.

5. **Working with json-server**: Using `json-server` as a development server for API interactions was a new learning experience. I grasped how to mock API responses during development, enabling me to test and iterate features without relying on a live backend.

Overall, the challenges I faced throughout this project taught me valuable problem-solving skills and exposed me to new tools and techniques. Each hurdle presented an opportunity for growth, and I now feel more confident in my abilities as a developer.


