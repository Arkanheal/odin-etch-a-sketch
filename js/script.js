const containerDiv = document.querySelector(".container");

for (let i = 0; i < 16; ++i) {
  const createdDiv = document.createElement("div");
  createdDiv.className = "drawing-square";
  containerDiv.appendChild(createdDiv);
}

const createdDivs = document.querySelectorAll(".drawing-square");

for (div of createdDivs) {
  div.addEventListener("mouseover", (e) => updateColor(e, "red"));
  div.addEventListener("mouseleave", (e) => updateColor(e, "white"));
}

function updateColor(event, color) {
  event.target.style.backgroundColor = color;
}
