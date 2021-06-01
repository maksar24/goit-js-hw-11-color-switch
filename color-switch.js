export const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

function switcherColors() {
  const currentColor = colors[randomIntegerFromInterval(0, colors.length-1)];
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = currentColor;
  }, 1000);
  start.disabled = true;
}

start.addEventListener("click", switcherColors);

console.log(colors)



