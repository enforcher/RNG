// App.js
const root = document.getElementById("root");

// Main Container
const container = document.createElement("div");
container.className = "container";

// Title
const title = document.createElement("h1");
title.textContent = "Random Number Generator";

// Range Controls
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

// Big Display
const bigDisplay = document.createElement("div");
bigDisplay.className = "big-pill";
bigDisplay.textContent = "-";

// Subtitle
const listTitle = document.createElement("h2");
listTitle.textContent = "Generated Numbers";

// Pill Container
const pillContainer = document.createElement("div");
pillContainer.className = "pill-list";

// Assembling DOM
container.append(title, rangeWrapper, button, bigDisplay, listTitle, pillContainer);
root.appendChild(container);

// Button Logic
button.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert("Invalid range. Min should be less than Max.");
    return;
  }

  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  // Display big number
  bigDisplay.textContent = number;

  // Add small pill after short delay
  setTimeout(() => {
    const smallPill = document.createElement("div");
    smallPill.className = "small-pill";
    smallPill.textContent = number;
    pillContainer.insertBefore(smallPill, pillContainer.firstChild);
  }, 500);
});
