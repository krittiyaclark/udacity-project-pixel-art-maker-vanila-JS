// Select color input
const colorPicker = document.querySelector('#colorPicker');
// Submit button
let submitButton = document.querySelector('#submitButton');
// Grid
let grid = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  makeGrid()
  console.log('Work!');
}); 

function makeGrid() {
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
