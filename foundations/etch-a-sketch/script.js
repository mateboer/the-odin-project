import { resetGrid, increaseTransparency, resetTransparency } from "./grid.js";

(function index() {
  document.addEventListener("DOMContentLoaded", main);
})();

function main(event) {
  resetGrid(16);
  registerResizeFormCallback();
  registerHoverEffect();
}

function registerResizeFormCallback()
{
    document
    .querySelector("#grid-resize-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const gridSize = formData.get("grid-size");
      if (gridSize > 0 && gridSize <= 128) resetGrid(gridSize);
      else alert("Your grid size must be between 1 and 128.");
    });
}

function registerHoverEffect()
{
    document
    .querySelector("#grid-container")
    .addEventListener("mouseover", (event) => {
      const cell = event.target;
      if (cell?.classList.contains("cell")) increaseTransparency(cell);
    });
}

