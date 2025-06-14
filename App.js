// App.js
const root = document.getElementById("root");

// Create UI container
const container = document.createElement("div");
container.className = "container";

// Title
const title = document.createElement("h1");
title.textContent = "Random Number Generator";

// Range input
const rangeWrapper = document.createElement("div");
rangeWrapper.style.margin = "20px 0";

const minLabel = document.createElement("label");
minLabel.textContent = "Min: ";
const minInput = document.createElement("input");
minInput.type = "number";
minInput.value = "0";
minInput.style.marginRight = "10px";

const maxLabel = document.createElement("label");
maxLabel.textContent = "Max: ";
const maxInput = document.createElement("input");
maxInput.type = "number";
maxInput.value = "100";

rangeWrapper.appendChild(minLabel);
rangeWrapper.appendChild(minInput);
rangeWrapper.appendChild(maxLabel);
rangeWrapper.appendChild(maxInput);

// Big number display
const bigDisplay = document.createElement("div");
bigDisplay.id = "big-number-display";
bigDisplay.style.fontSize = "48px";
bigDisplay.style.fontWeight = "bold";
bigDisplay.style.margin = "20px 0";
bigDisplay.style.height = "60px";

// Button
const button = document.createElement("button");
button.textContent = "Generate Number";

// Number list
const listTitle = document.createElement("h2");
listTitle.textContent = "Generated Numbers";

const list = document.createElement("ul");
list.id = "number-list";

// Assemble DOM
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
    alert("Please enter a valid min and max (min < max).");
    return;
  }

  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  bigDisplay.textContent = number;

  setTimeout(() => {
    const item = document.createElement("li");
    item.textContent = number;
    list.appendChild(item);
  }, 1000);
});
