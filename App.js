// App.js
const root = document.getElementById("root");

// Create container
const container = document.createElement("div");
container.className = "container";

// Title
const title = document.createElement("h1");
title.textContent = "Random Number Generator";

// Range Input
const rangeWrapper = document.createElement("div");
rangeWrapper.className = "range-wrapper";

const minLabel = document.createElement("label");
minLabel.textContent = "Min: ";
const minInput = document.createElement("input");
minInput.type = "number";
minInput.value = "0";
minInput.className = "range-input";

const maxLabel = document.createElement("label");
maxLabel.textContent = "Max: ";
const maxInput = document.createElement("input");
maxInput.type = "number";
maxInput.value = "100";
maxInput.className = "range-input";

rangeWrapper.appendChild(minLabel);
rangeWrapper.appendChild(minInput);
rangeWrapper.appendChild(maxLabel);
rangeWrapper.appendChild(maxInput);

// Generate Button
const button = document.createElement("button");
button.textContent = "Generate Number";

// Big Display
const bigDisplay = document.createElement("div");
bigDisplay.id = "big-number-display";
bigDisplay.className = "big-pill";
bigDisplay.textContent = "-";

// Generated List Title
const listTitle = document.createElement("h2");
listTitle.textContent = "Generated Numbers";

// List Container (horizontal layout)
const list = document.createElement("div");
list.id = "number-list";
list.className = "pill-list";

// Assemble layout
container.appendChild(title);
container.appendChild(rangeWrapper);
container.appendChild(button);
container.appendChild(bigDisplay);
container.appendChild(listTitle);
container.appendChild(list);
root.appendChild(container);

// Event logic
button.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert("Please enter valid range (min < max)");
    return;
  }

  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  // Display big number
  bigDisplay.textContent = number;

  // Create new blue pill
  setTimeout(() => {
    const pill = document.createElement("div");
    pill.className = "small-pill";
    pill.textContent = number;
    list.insertBefore(pill, list.firstChild); // Add left to right
  }, 500);
});
