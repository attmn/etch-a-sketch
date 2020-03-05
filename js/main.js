const container = document.querySelector("#mainContainer");
const gridSetup = document.querySelector("#gridSetup");
let width = 16;
let height = 16;


function createGrid(width, height) {
  for (let gridNumber = 0; gridNumber < width * height; gridNumber++) {
    let squareGrid = document.createElement("div");
    squareGrid.classList.add("squareGrid");
    container.appendChild(squareGrid);
  }
}

createGrid(width, height);
container.style["grid-template-columns"] = `repeat(${width},auto)`;
mouseOverEffect();

const clearGridButton = document.querySelector("#clearGrid");
clearGridButton.addEventListener("click", clearGrid);

function clearGrid() {
  let squareGrids = document.querySelectorAll(".squareGrid");
  squareGrids.forEach(squareGrid => {
    squareGrid.style.backgroundColor = "white";
  });
}

function resetGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

function resizeGrid() {
  resetGrid();
  width = parseInt(document.querySelector("#width").value);
  height = parseInt(document.querySelector("#height").value);
  createGrid(width, height);
  mouseOverEffect();
  container.style["grid-template-columns"] = `repeat(${width},auto)`;
}

//Mouseover effect to leave trail behind mouse
function mouseOverEffect() {
  let squareGrids = document.querySelectorAll(".squareGrid");
  squareGrids.forEach(squareGrid => {
    squareGrid.addEventListener("mouseover", () => {
      squareGrid.style["background-color"] = "black";
    });
  });
}
