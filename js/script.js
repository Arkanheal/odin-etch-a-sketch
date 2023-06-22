const containerDiv = document.querySelector(".container");

for (let i = 0; i < 16; ++i) {
  const createdDiv = document.createElement("div");
  createdDiv.className = "drawing-square";
  containerDiv.appendChild(createdDiv);
}
