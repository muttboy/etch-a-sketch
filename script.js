let choice = 16
let colorValue = "#808080"
const colorButton = document.querySelectorAll('button');
const sizeButton = document.querySelectorAll('input');



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

    paintBox(colorValue);
}

// Changes color of each box in the grid when clicked
function paintBox(colorValue) {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = colorValue;
        })
    })
}

// Chooses color to be used for grid
colorButton.forEach(color => {
    color.addEventListener('click', function() {
        paintBox(color.id);
    })
})

makeGrid(choice);


