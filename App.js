// App.js
const root = document.getElementById("root");
const MAX_NUMBER = 500;
const MIN_NUMBER = 1;
const TOTAL_NUMBERS = MAX_NUMBER - MIN_NUMBER + 1;
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

// Big Display
const bigDisplay = document.createElement("div");
bigDisplay.className = "big-pill";
bigDisplay.textContent = "-";

// Header Row: "Generated Numbers" + Clear Button + Remaining Counter
const headingRow = document.createElement("div");
headingRow.className = "heading-row";

const listTitle = document.createElement("h2");
listTitle.textContent = "Generated Numbers";

const remainingCount = document.createElement("span");
remainingCount.className = "remaining-count";
remainingCount.textContent = `Remaining: ${TOTAL_NUMBERS - generatedNumbers.size}/${TOTAL_NUMBERS}`;

const clearButton = document.createElement("button");
clearButton.textContent = "Clear History";
clearButton.className = "clear-btn";

headingRow.append(listTitle, remainingCount, clearButton);

// Pills Container
const pillContainer = document.createElement("div");
pillContainer.className = "pill-list";

// Assemble Layout
container.append(title, button, bigDisplay, headingRow, pillContainer);
root.append(modeToggle, container);

// Update Remaining Counter
function updateRemainingCount() {
  remainingCount.textContent = `Remaining: ${TOTAL_NUMBERS - generatedNumbers.size}/${TOTAL_NUMBERS}`;
}

// Generate Logic
button.addEventListener("click", () => {
  if (generatedNumbers.size >= TOTAL_NUMBERS) {
    alert("All unique numbers in the range have been generated!");
    return;
  }

  let number;
  do {
    number = Math.floor(Math.random() * TOTAL_NUMBERS) + MIN_NUMBER;
  } while (generatedNumbers.has(number));

  generatedNumbers.add(number);
  updateRemainingCount();

  // Animate and show big number
  bigDisplay.textContent = number;
  bigDisplay.classList.add("pulse");
  setTimeout(() => {
    bigDisplay.classList.remove("pulse");
  }, 500);

  const smallPill = document.createElement("div");
  smallPill.className = "small-pill";
  smallPill.textContent = number;
  pillContainer.appendChild(smallPill);
});

// Clear History Logic
clearButton.addEventListener("click", () => {
  generatedNumbers.clear();
  pillContainer.innerHTML = "";
  bigDisplay.textContent = "-";
  updateRemainingCount();
});

// Dark Mode
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
