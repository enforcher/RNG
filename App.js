// App.js
const root = document.getElementById("root");

// Create elements
const container = document.createElement("div");
container.className = "container";

const title = document.createElement("h1");
title.textContent = "Random Number Generator";

const button = document.createElement("button");
button.textContent = "Generate Number";

// BIG NUMBER display
const bigDisplay = document.createElement("div");
bigDisplay.id = "big-number-display";
bigDisplay.style.fontSize = "48px";
bigDisplay.style.fontWeight = "bold";
bigDisplay.style.margin = "20px 0";
bigDisplay.style.height = "60px"; // Fixed height to avoid layout shift

// List container
const listTitle = document.createElement("h2");
listTitle.textContent = "Generated Numbers";

const list = document.createElement("ul");
list.id = "number-list";

// Append to container
container.appendChild(title);
container.appendChild(button);
container.appendChild(bigDisplay);
container.appendChild(listTitle);
container.appendChild(list);

// Add container to root
root.appendChild(container);

// Add event listener to button
button.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 100); // Change max if needed

  // Show it big first
  bigDisplay.textContent = number;

  // Then add to the list after a brief moment
  setTimeout(() => {
    const item = document.createElement("li");
    item.textContent = number;
    list.appendChild(item);
  }, 1000); // 1 second delay
});
