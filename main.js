const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const changeColors = () =>{
  let color = randomIntegerFromInterval(0, colors.length - 1);
  body.bgColor = colors[color];
}

let viewColors;

const started = () =>{
  start.disabled = true;
  viewColors = setInterval(changeColors, 1000);
}

const stopped = () =>{
  clearInterval(viewColors);  
  start.disabled = false;
}

start.addEventListener('click', started);
stop.addEventListener('click', stopped);