let rows = 16;
let columns = 16;

const grid_container = document.querySelector("#grid_container");

//add 1 row of grid boxes as many times as columns
//at end of row, repeat as many times as rows
for (let x = 0; x < rows; x++) {
    const grid_row = document.createElement('div');
    grid_row.classList.add('grid_row');
    grid_container.appendChild(grid_row);
    for(y = 0; y < columns; y++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseover', () =>{
            grid.style.background = ('black');
        });
        grid_row.appendChild(grid);
     }
}
    //for(y = 0; y < columns; y++){

     //}
//}