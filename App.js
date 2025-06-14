// App.js
const root = document.getElementById("root");

// Track generated numbers
const generatedNumbers = new Set();

// DARK MODE Toggle
const modeToggle = document.createElement("button");
modeToggle.textContent = "🌙 Toggle Dark Mode";
modeToggle.className = "mode-toggle";

// Main Container
const container = document.createElement("div");
container.className = "container";

// Title
const title = document.createElement("h1");
title.textContent = "Random Number Generator";

// Range Inputs
const rangeWrapper = document.createElement("div");
rangeWrapper.className = "range-wrapper";

const minLabel = document.createElement("label");
minLabel.textContent = "Min:";
const minInput = document.createElement("input");
minInput.type = "number";
minInput.value = "0";
minInput.className = "range-input";

const maxLabel = document.createElement("label");
maxLabel.textContent = "Max:";
const maxInput = document.createElement("input");
maxInput.type = "number";
maxInput.value = "100";
maxInput.className = "range-input";

rangeWrapper.append(minLabel, minInput, maxLabel, maxInput);

// Generate Button
const button = document.createElement("button");
button.textContent = "Generate Number";
button.className = "generate-btn";

// Big Pill (Green Display)
const bigDisplay = document.createElement("div");
bigDisplay.className = "big-pill";
bigDisplay.textContent = "-";

// Clear Button
const clearButton = document.createElement("button");
clearButton.textContent = "Clear History";
clearButton.className = "clear-btn";

// List Title
const listTitle = document.createElement("h2");
listTitle.textContent = "Generated Numbers";

// Pills Container
const pillContainer = document.createElement("div");
pillContainer.className = "pill-list";

// Assemble DOM
container.append(title, rangeWrapper, button, bigDisplay, clearButton, listTitle, pillContainer);
root.append(modeToggle, container);

// Generate Logic
button.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);
  const totalPossible = max - min + 1;

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert("Invalid range. Min must be less than Max.");
    return;
  }

  if (generatedNumbers.size >= totalPossible) {
    alert("All unique numbers in the range have been generated!");
    return;
  }

  let number;
  do {
    number = Math.floor(Math.random() * totalPossible) + min;
  } while (generatedNumbers.has(number));

  generatedNumbers.add(number);

  // Update big display with animation
  bigDisplay.textContent = number;
  bigDisplay.classList.remove("animate");
  void bigDisplay.offsetWidth;
  bigDisplay.classList.add("animate");

  // Add to pill list
  const smallPill = document.createElement("div");
  smallPill.className = "small-pill";
  smallPill.textContent = number;
  pillContainer.insertBefore(smallPill, pillContainer.firstChild);
});

// Clear logic
clearButton.addEventListener("click", () => {
  generatedNumbers.clear();
  pillContainer.innerHTML = "";
  bigDisplay.textContent = "-";
});

// Toggle dark mode
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
