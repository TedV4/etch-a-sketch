// get grid-container
const container = document.querySelector('.grid-container');

// populate grid-container with cells
function populateGrid(cells) {
    for (let i = 0; i <= cells - 1; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

populateGrid(256);