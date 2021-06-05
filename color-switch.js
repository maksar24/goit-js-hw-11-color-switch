import { colors } from './colors_base.js';

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

function randomColors() {
  const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  return currentColor;
};

start.addEventListener("click", () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = randomColors();
  }, 1000);
  start.disabled = true;
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  start.disabled = false;
});