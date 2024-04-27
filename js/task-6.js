const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", checkBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function checkBoxes() {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
    }
}

function createBoxes(amount) {
    boxes.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = 30 + 10 * i + "px";
        box.style.height = 30 + 10 * i + "px";
        box.style.backgroundColor = getRandomHexColor();
        boxes.append(box)
    }

    input.value = "";
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function destroyBoxes() {
    boxes.innerHTML = "";
}