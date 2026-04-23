# Technical Documentation

## 1. Project Structure

The project is organized into separate folders to maintain clarity and improve overall maintainability.

- `index.html` → Main HTML file
- `css/styles.css` → CSS styling rules
- `js/script.js` → JavaScript functionality
- `assets/images/` → Project images
- `docs/` → Documentation files

This structure allows the project to be easily expanded or modified in the future.

## 2. HTML Structure

The website is divided into clear semantic sections:

- **Header** → Contains the dynamic greeting message, main title, theme toggle button, timer and navigation menu.
- **Quote Section** → Displays dynamically fetched inspirational quotes from an external API.
- **About Me Section** → Includes a short introduction and tagline.
- **Projects Section** → Displays project cards using `<article>` elements.
- **Contact Section** → Contains a form with Name, Email, and Message fields.

Semantic HTML elements such as `<header>`, `<section>`, `<article>`, and `<nav>` were used to improve structure and readability.


## 3. CSS Design and Responsive Layout

The layout was built using Flexbox to ensure responsiveness.

Key techniques used:

- `max-width` to control content width on large screens
- `margin: auto` to center content
- `flex-wrap: wrap` to allow project cards to move to the next line on smaller screens
- `box-sizing: border-box` to prevent layout overflow issues
- CSS variables (`:root`) for consistent theme colors
- A dark mode theme using CSS variables and a `.dark-mode` class

The website was tested using browser resizing and developer tools to ensure proper display on desktop, tablet, and mobile devices.

## 4. JavaScript Interactivity

Several interactive features were implemented using JavaScript to enhance user experience.

### Dynamic Greeting
- Retrieves the current hour using `Date()`
- Uses conditional statements (`if/else`)
- Updates the greeting text using `textContent`

### Project Details Toggle
- Each project includes a button to show or hide its description
- Event listeners (`click`) are used to detect user interaction
- The description is toggled using `style.display`
- Button text updates dynamically between "Show details" and "Hide details"

### Form Handling and Validation
- The contact form uses JavaScript to handle user input
- `event.preventDefault()` is used to stop default form submission
- Input values are retrieved using `.value.trim()`
- Conditional statements validate:
  - Empty name field
  - Name length validation
  - Empty email field
  - Email format validation using regular expressions
  - Empty message field
  - Message length validation
- A success message is displayed when all inputs are valid
- The form is reset using `form.reset()`

### User Feedback Handling
- Error and success messages are displayed using `textContent`
- Messages are cleared when the user starts typing again using `input` event listeners

The JavaScript file is loaded using the `defer` attribute to ensure all HTML elements are available before execution.

### Quote API Integration
- Fetches data from an external API using `fetch`
- Uses `async/await` for handling asynchronous operations
- Displays quotes dynamically on the page
- Includes error handling to display a message if the API fails

### User Timer
- Tracks the time spent on the website in seconds
- Converts time into hours, minutes, and seconds using mathematical operations
- Updates the display every second using `setInterval`
- Formats values using `padStart` for consistent display

### Dark Mode Toggle (State Management)
- Toggles a CSS class on the `<body>` element to switch themes
- Uses `classList.toggle` for dynamic UI updates
- Stores user preference in `localStorage`
- Loads saved theme when the page is reloaded

## 5. Animations and Transitions

Simple animations and transitions were added using CSS to improve user interaction and visual feedback.

- Hover effects were applied to project cards using `transform` and `box-shadow`
- Buttons use an opacity change on hover to indicate interactivity
- Navigation links include smooth opacity transitions

All animations use `transition` to ensure smooth and non-distracting effects.

## 6. Error Handling and User Feedback

The application provides clear feedback to users during interaction.

- Error messages are displayed when form inputs are empty
- Error messages are displayed when the name length is not valid 
- Email format validation using regular expressions and displaying error messages if not valid 
- Error messages are displayed when message length is not valid 
- Specific messages guide the user on what needs to be corrected
- A success message confirms when the form is submitted correctly
- Messages are automatically cleared when the user starts typing again

This ensures that users are always informed about what is happening and what action to take next.

## 7. Design Decisions

- A clean and minimal layout was chosen for clarity and readability.
- Navigation links were styled as buttons to improve visibility.
- Consistent spacing and rounded corners were applied for a modern appearance.
- Color variables were used to maintain theme consistency.
- A dark mode option was included to improve accessibility and user preference flexibility.

## 8. User Experience

The website was designed with a strong focus on usability, clarity, and user guidance to ensure a smooth and intuitive experience.

Users are guided clearly through both navigation and interaction:

- The navigation menu at the top of the page allows users to easily move between sections.
- Each project includes a "Show details" button that enables users to interactively view additional information.
- Hover effects on buttons and interactive elements provide visual feedback, indicating that elements are clickable.
- The contact form includes clearly labeled input fields to improve usability and accessibility.

Clear feedback is provided during user interaction:

- Error messages inform users when inputs are missing or invalid and guide them on what needs to be corrected.
- A success message confirms when the form is submitted correctly.
- Messages are automatically cleared when the user starts typing again to prevent confusion.

Additional design choices further enhance the user experience:

- The responsive layout ensures accessibility across desktop, tablet, and mobile devices.
- Proper spacing, consistent styling, and rounded elements improve readability and visual clarity.
- The textarea is restricted to vertical resizing to maintain layout consistency while still allowing flexibility for longer messages.
- The dark mode feature allows users to personalize their viewing experience.
- The website includes a timer that provides real-time feedback on user interaction.
- The quote generator adds dynamic and engaging content to the website.

These design and interaction decisions ensure that users understand how to navigate the website and interact with its features effectively.

## 9. Performance Optimization

The website was optimized to ensure efficient performance and smooth user experience.

- Images were reviewed and kept at an appropriate file size to reduce loading time
- Unused code and files were removed to reduce unnecessary load
- CSS variables were used to avoid repetition and improve efficiency

The website was tested using Lighthouse in Chrome DevTools to evaluate performance and identify potential improvements.

## Conclusion

This project demonstrates both foundational and advanced front-end development skills, including semantic HTML structuring, responsive design using Flexbox, dynamic interactivity, API integration, state management, and performance optimization techniques. It also highlights the importance of user experience, effective feedback handling, and clean code organization in building modern web applications.