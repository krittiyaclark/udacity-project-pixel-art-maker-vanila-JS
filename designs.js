// Submit button
let sizePicker = document.querySelector('#sizePicker');
// Grid
let grid = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  grid.innerHTML = '';
  makeGrid();
  console.log('Work!');
}); 

// Create grid function
function makeGrid() {
  //grid.innerHTML = '';
  // Select size input
  let inputHeight = document.querySelector('#inputHeight').value;
  let inputWidth = document.querySelector('#inputWidth').value;
  for (let row = 1; row <= inputHeight; row++) {
    let makeRow = document.createElement('tr')
    grid.appendChild(makeRow);
    for (let col = 1; col <= inputWidth; col++) {
      let makeCol = document.createElement('td');
      makeRow.appendChild(makeCol);
    }
  }
}

// Fill color function
function fillColor() {
  grid.addEventListener('click', function(e) {
    e.preventDefault();
    // Select table input
    // e.target is the clicked element!
    // If it was a td
    if(e.target && e.target.nodeName == 'TD') {
      console.log('Color Work!');
      // Select color input
      const colorPicker = document.querySelector('#colorPicker').value;
      e.target.style.backgroundColor = colorPicker;
    }
  });

  // Remove color
  grid.addEventListener('dblclick', function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = null;

  });
}

fillColor();