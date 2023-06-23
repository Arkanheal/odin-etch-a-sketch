// Creates the square
const containerDiv = document.querySelector(".container");

// Utility functions
function updateColor(event, color) {
  event.target.style.backgroundColor = color;
}

function generateGrid(size) {
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.lastChild);
  }
  const flexBasis = 100 / size;
  for (let i = 0; i < size * size; ++i) {
    const createdDiv = document.createElement("div");
    createdDiv.className = "drawing-square";
    createdDiv.style.flex = `1 1 ${flexBasis}%`;
    createdDiv.addEventListener("mouseover", (e) => updateColor(e, "red"));
    createdDiv.addEventListener("mouseleave", (e) => updateColor(e, "white"));
    containerDiv.appendChild(createdDiv);
  }
}

// Change grid size
const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", () => {
  let size = -1;
  let sizePrompt = null;
  do {
    sizePrompt = prompt("Enter a size");
    size = parseInt(sizePrompt);
    console.log(size);
  } while (sizePrompt !== null && (isNaN(size) || size < 4))
  if (sizePrompt !== null) {
    generateGrid(size);
  }
});

generateGrid(16);
