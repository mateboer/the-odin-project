import { createColors, selectColor, shiftColor } from "./colors.js";
import { resetGrid, increaseTransparency } from "./grid.js";

(function index() {
  document.addEventListener("DOMContentLoaded", main);
})();

function main(event) {
  createColors();
  registerColorSelectionCallback();
  resetGrid(64);
  registerResizeFormCallback();
  registerHoverEffect();
}

function registerColorSelectionCallback() {
  document
    .querySelector("#color-container")
    .addEventListener("click", (event) => {
      const color = event.target;
      if (color?.classList.contains("color")) selectColor(color);
    });
}

function registerResizeFormCallback() {
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

function registerHoverEffect() {
  document
    .querySelector("#grid-container")
    .addEventListener("mousemove", (event) => {
      if (event.buttons > 0) {
        const cell = event.target;
        if (cell?.classList.contains("cell")) {
          increaseTransparency(cell);
          shiftColor(cell);
        }
      }
    });

  document
    .querySelector("#grid-container")
    .addEventListener("click", (event) => {
      const cell = event.target;
      if (cell?.classList.contains("cell")) increaseTransparency(cell);
    });
}
