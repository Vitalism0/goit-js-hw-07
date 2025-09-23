const body = document.querySelector("body");
const backgroundColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(e) {
  e.preventDefault();
  const hexColor = getRandomHexColor();
  backgroundColor.textContent = hexColor;
  body.style.backgroundColor = hexColor;
}
