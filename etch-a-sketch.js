let rows = 16;
let columns = 16;


//add 1 row of grid boxes as many times as columns
//at end of row, repeat as many times as rows
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

//reset grid backgrounds
const reset_button = document.querySelector('#reset_button');
reset_button.onclick = function(){
    const grid_reset = document.querySelectorAll('.grid_black');
    grid_reset.forEach(function(to_remove){
        to_remove.classList.remove('grid_black');
    });
}

//row and column input forms
const rows_input = document.querySelector('#rows_input');
const rows_input_form = document.createElement('form');
rows_input_form.value = '1';
rows_input_form.type = text;
rows_input_form.setAttribute('type', text)


rows_input.appendChild(rows_input_form);


const columns_input = document.querySelector('#columns_input');