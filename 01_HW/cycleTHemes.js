// Array of CSS files
const cssFiles = [
  "SKINS/basic.css",
  "SKINS/dark.css",
  "SKINS/modern.css"
];

// Track current index
let currentIndex = 0;

// Get button and link element
const button = document.getElementById("cycle-btn");
const themeLink = document.getElementById("theme-link");

// Add click event
button.addEventListener("click", () => {
  // Increment index and loop back if needed
  currentIndex = (currentIndex + 1) % cssFiles.length;

  // Update href to the next CSS file
  themeLink.href = cssFiles[currentIndex];
});
