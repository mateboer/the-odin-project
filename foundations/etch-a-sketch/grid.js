// Grid deletion then recreation
function resetGrid(size) {
    console.log(size);
    deleteGrid();
    createGrid(size);
  }

// Grid creation
function createGrid(size) {
    const container = document.querySelector("#grid-container");
    for (let i = 0; i < size; i++) {
        createRow(container, size);
    }
}
  
function createRow(parent, rowLenght) {
const row = document.createElement("div");
row.classList.add("row");
parent.appendChild(row);
for (let i = 0; i < rowLenght; i++) {
    createCell(row);
}
}

function createCell(parent) {
    const element = document.createElement("div");
    element.classList.add("cell");
    resetTransparency(element);
    parent.appendChild(element);
}

// Grid deletion
function deleteGrid() {
    const container = document.querySelector("#grid-container");
    container.replaceChildren();
}
  
// Grid color
function resetTransparency(cell) {
    cell.style.backgroundColor = `rgba(16, 99, 95, 0)`;
}

function increaseTransparency(cell) {
    const alpha = cell.style.backgroundColor.match(/[\d.]+(?=\))/)?.[0] || "0";
    cell.style.backgroundColor = `rgba(16, 99, 95, ${parseFloat(alpha) + 0.1})`;
}

export { resetGrid, resetTransparency, increaseTransparency };