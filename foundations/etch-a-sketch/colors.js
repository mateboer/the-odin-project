var chosenColor;
var colors = new Map();

// Colors creation
function createColors() {
  const container = document.querySelector("#color-container");
  createColor(container, "black", true);
  createColor(container, "white");
  createColor(container, "grey");
  createColor(container, "cyan");
  createColor(container, "blue");
  createColor(container, "green");
  createColor(container, "yellow");
  createColor(container, "orange");
  createColor(container, "red");
}

function createColor(parent, colorName, selected = false) {
  const color = document.createElement("div");
  color.classList.add("color");
  if (selected) selectColor(color);
  color.style.backgroundColor = colorName;
  colors.set(colorName, color);
  parent.appendChild(color);
}

// Grid color
function selectColor(color) {
  if (chosenColor) chosenColor.classList.remove("color-selected");
  color.classList.add("color-selected");
  chosenColor = color;
}

function shiftColor(target) {
  const [_basePrefix, baseR, baseG, baseB, baseA = "1"] = getComputedStyle(
    target
  ).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  const [_chosenPrefix, chosenR, chosenG, chosenB] = getComputedStyle(
    chosenColor
  ).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)\)/);
  const newR =
    parseInt(chosenR) - parseInt(baseR) < 0
      ? Math.max(parseInt(baseR) - 10, 0)
      : Math.min(parseInt(baseR) + 10, 255);
  const newG =
    parseInt(chosenG) - parseInt(baseG) < 0
      ? Math.max(parseInt(baseG) - 10, 0)
      : Math.min(parseInt(baseG) + 10, 255);
  const newB =
    parseInt(chosenB) - parseInt(baseB) < 0
      ? Math.max(parseInt(baseB) - 10, 0)
      : Math.min(parseInt(baseB) + 10, 255);
  target.style.backgroundColor = `rgba(${newR}, ${newG}, ${newB}, ${baseA})`;
}

export { createColors, selectColor, shiftColor };
