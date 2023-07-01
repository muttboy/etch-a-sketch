// Creates a 16x16 grid
function makeGrid() {
    for (i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (j = 0; j < 16; j++) {
            let column = document.createElement('div');
            column.className = 'column';
            row.appendChild(column);
        }
        document.getElementById('grid').appendChild(row);
    }
}

makeGrid();