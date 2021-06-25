const board = document.querySelector('#board');
const colors = ['#d72631', '#a2d5c6', '#077b8a', '#5c3c92','#1e3d59', '#f5f0e1', '#ff6e40', '#ffc13b'];
const SQUARES_NUMBER = 1200;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)
    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor(){
   return colors[Math.floor(Math.random() * colors.length)];
}
