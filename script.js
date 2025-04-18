const squareContainer = document.querySelector('.gridContainer');
const gridButton = document.querySelector('.gridBtn');


// ets up grid on load
let gridSize = 16;
for (let i = 0; i <16; i++){
  for (let j = 0; j < 16; j++){
    let squareSetUp = document.createElement('div');
    squareSetUp.classList.add('square');
    squareContainer.appendChild(squareSetUp);
  }
};

const squares = document.querySelector('.square');

//if mouse enters element, square turns grey
document.addEventListener('mouseover', function(event){
    if(event.target.classList.contains('square')){
      event.target.style.backgroundColor='grey';
    }
  }
);

//if mouse clicks square, square turns white
document.addEventListener('click', function(event){
    if(event.target.classList.contains('square')){
      event.target.style.backgroundColor='white';
    }
  }
);

//button click trigger to create new grid when user input < 100
gridButton.addEventListener('click', () => {
  let gridSize = prompt('What is the size of the grid?'); 
    if (gridSize > 100 || isNaN(gridSize) ){
    alert('Please enter a number less than 100');
    return 1;
  }
  clearGrid();
  populateNewGrid(gridSize);
  console.log(`${gridSize}`);
});

//clears existing grid
function clearGrid(){
  while(squareContainer.hasChildNodes()){
  squareContainer.removeChild(squareContainer.firstChild);
  }
  return;
};

//creates new grid 
function populateNewGrid(number){
  //get square dimensions 960/number
  let newSquareDimensions = 960/number;

  for (let i = 0; i < number; i++){
    for (let j = 0; j < number; j++){
      let squareSetUp = document.createElement('div');
      squareSetUp.classList.add('square');
      squareContainer.appendChild(squareSetUp);
      squareSetUp.style.width = `${newSquareDimensions}px`;
      squareSetUp.style.height = `${newSquareDimensions}px`;
    }
  } 
  console.log(`sum is ${newSquareDimensions}`);
  return;
};