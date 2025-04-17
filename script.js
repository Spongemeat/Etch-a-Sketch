const squareContainer = document.querySelector('.container');

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


