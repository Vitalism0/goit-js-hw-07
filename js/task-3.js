const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function changeName(event) {
  event.preventDefault();
  nameOutput.textContent = event.target.value.trim() || "Anonymous";
}
nameInput.addEventListener("input", changeName);
