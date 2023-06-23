// Creates the square
const containerDiv = document.querySelector(".container");

// Utility functions
function updateColor(event) {
  const currentBackgroundColor = event.target.style.backgroundColor;

  const filter = event.target.style.filter;
  const brightnessRe = /brightness\((\d+)%\)/;
  const brightness = filter.match(brightnessRe);

  if (currentBackgroundColor && !filter) {
    event.target.style.filter = "brightness(90%)";
  } else if (filter && parseInt(brightness[1]) > 0 && currentBackgroundColor) {
    event.target.style.filter = `brightness(${parseInt(brightness[1]) - 10}%)`;
  } else {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = `#${newColor}`;
    event.target.style.filter = "brightness(100%)";
  }

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
    createdDiv.addEventListener("mouseover", (e) => updateColor(e));
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
  } while (sizePrompt !== null && (isNaN(size) || size < 4))
  if (sizePrompt !== null) {
    generateGrid(size);
  }
});

generateGrid(16);
