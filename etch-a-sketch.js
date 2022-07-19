let rows = 16;
let columns = 16;
//make the default grid on load
make_grid();

//add 1 row of grid boxes as many times as columns
//at end of row, repeat as many times as rows

function make_grid(){
    const grid_container = document.querySelector('#grid_container');
    for (let x = 0; x < rows; x++) {
        const grid_row = document.createElement('div');
        grid_row.classList.add('grid_row');
        grid_container.appendChild(grid_row);
        for(y = 0; y < columns; y++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.addEventListener('mouseover', () =>{
                grid.classList.add('grid_black');
            });
            grid_row.appendChild(grid);
        }
    }
}

//submit button
const submit_button = document.querySelector('#submit_button');
submit_button.onclick = function(){submit_grid()};

//reset button to reset grid backgrounds
const reset_button = document.querySelector('#reset_button');
reset_button.onclick = function() {reset_grid()};

function reset_grid(){
    const grid_reset = document.querySelectorAll('.grid_black');
    grid_reset.forEach(function(to_remove){
        to_remove.classList.remove('grid_black');
    });
}

//row and column input forms
const rows_input = document.querySelector('#rows_input');
const columns_input = document.querySelector('#columns_input');

function delete_grid(){
    const grid_remove = document.querySelectorAll('.grid');
    grid_remove.forEach(function(del_grid){
    del_grid.remove();
    });
    const grid_row_remove = document.querySelectorAll('.grid_row');
    grid_row_remove.forEach(function(del_grid_row){
    del_grid_row.remove();
    });
}
function submit_grid(){
    reset_grid();
    delete_grid();
    rows = rows_input.value;
    columns = columns_input.value;
    make_grid();
}