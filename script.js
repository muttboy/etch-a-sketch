let choice = 16
let colorValue = "#808080"
const grid = document.querySelector('#grid');
const clearButton = document.getElementById('new');
const slider = document.querySelector('#slider');


// Creates a grid
function makeGrid(choice) {
    for (i = 0; i < choice; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        for (j = 0; j < choice; j++) {
            let box = document.createElement('div');
            box.className = 'box';
            column.appendChild(box);
        }
        document.getElementById('grid').appendChild(column);
    }
}

makeGrid(choice);

// Changes color of each box in the grid when clicked
function paintBox(colorValue) {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = colorValue;
        })
    })
}

// Resets grid color to white
clearButton.addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    })
})

//Uses value from slider to make new grid
slider.addEventListener('mouseup', () => {
    removeCells();
    makeGrid(slider.value);
    paintBox(colorValue);
})

//Removes existing grid
function removeCells() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

paintBox(colorValue);

