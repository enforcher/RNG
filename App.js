// App.js
const root = document.getElementById("root");

// Track generated numbers
const generatedNumbers = new Set();

// Dark Mode Toggle
const modeToggle = document.createElement("button");
modeToggle.textContent = "🌙 Toggle Dark Mode";
modeToggle.className = "mode-toggle";

// Main Container
const container = document.createElement("div");
container.className = "container";

// Title
const title = document.createElement("h1");
title.textContent = "Random Number Generator";

// Generate Button
const button = document.createElement("button");
button.textContent = "Generate Number";
button.className = "generate-btn";

// Big Pill
const bigDisplay = document.createElement("div");
bigDisplay.className = "big-pill";
bigDisplay.textContent = "-";

// Clear Button
const clearButton = document.createElement("button");
clearButton.textContent = "Clear History";
clearButton.className = "clear-btn";

// Pills Title
const listTitle = document.createElement("h2");
listTitle.textContent = "Generated Numbers";

// Pills Container
const pillContainer = document.createElement("div");
pillContainer.className = "pill-list";

// Assemble layout
container.append(title, button, bigDisplay, clearButton, listTitle, pillContainer);
root.append(modeToggle, container);

// Generate Logic (range fixed from 1 to 500)
button.addEventListener("click", () => {
  const min = 1;
  const max = 500;
  const totalPossible = max - min + 1;

  if (generatedNumbers.size >= totalPossible) {
    alert("All unique numbers in the range have been generated!");
    return;
  }

  let number;
  do {
    number = Math.floor(Math.random() * totalPossible) + min;
  } while (generatedNumbers.has(number));

  generatedNumbers.add(number);

  // Animate green pill
  bigDisplay.textContent = number;
  bigDisplay.classList.add("pulse");
  setTimeout(() => {
    bigDisplay.classList.remove("pulse");
  }, 500);

  // Add number to pill list (rightmost)
  const smallPill = document.createElement("div");
  smallPill.className = "small-pill";
  smallPill.textContent = number;
  pillContainer.appendChild(smallPill);
});

// Clear Logic
clearButton.addEventListener("click", () => {
  generatedNumbers.clear();
  pillContainer.innerHTML = "";
  bigDisplay.textContent = "-";
});

// Dark Mode
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
