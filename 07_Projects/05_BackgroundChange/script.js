//generate random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
let intervalId
const startColorChange = function () {
   intervalId = setInterval(changeColor, 1000);
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopColorChange = function () {
    clearInterval(intervalId)
};

document.querySelector("#start").addEventListener("click", startColorChange);

document.querySelector("#stop").addEventListener("click", stopColorChange);
