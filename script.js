const squareContainer = document.querySelector('.gridContainer');
const gridButton = document.querySelector('.gridBtn');


// Change to alter grid dimensions, ex 16x16 grid //
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

gridButton.addEventListener('click', () => {
  let gridSize = prompt('What is the size of the grid?'); 
    if (gridSize > 100 || isNaN(gridSize) ){
    alert('Please enter a number less than 100');
    return 1;
  }
  console.log(`${gridSize}`);
});

