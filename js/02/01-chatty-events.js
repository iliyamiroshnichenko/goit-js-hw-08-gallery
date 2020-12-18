/*
    Chatty events
    Приемы thtottling и debouncing с lodash
*/
// Mousemove
const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCallbackCounter = 0;

const throttledMousemoveCallback = _.throttle((event) => {
  mouseMoveCallbackCounter += 1;
  coordsOutputRef.textContent = `
    Количество вызовов callback-функции: ${mouseMoveCallbackCounter},
    X: ${event.clientX},
    Y: ${event.clientY}
    `;
}, 200);

window.addEventListener("mousemove", throttledMousemoveCallback);

// input
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector(".js-output");
let inputCallbackCounter = 0;

const debouncedInputCallback = _.debounce((event) => {
  inputCallbackCounter += 1;
  outputRef.textContent = `
    Количество вызовов callback-функции: ${inputCallbackCounter},
    Значение: ${event.target.value}
    `;
}, 500);

inputRef.addEventListener("input", debouncedInputCallback);

