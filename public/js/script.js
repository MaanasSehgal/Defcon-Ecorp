function getInt() {
  return Math.random() > 0.5 ? 1 : 0;
}

function init() {
  let row = document.querySelector(".section");
  let form = document.querySelector("#loginForm");
  let column = "";

  for (let i = 0; i < 149; i++) {
    column += `<span class=\"box\">${getInt()}</span>\n`;
  }
  row.insertAdjacentHTML("afterbegin", column);
  randomAnimationDelay(); // Apply animation to the new spans
}

function randomAnimationDelay() {
  let boxes = document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    let randomDuration = Math.floor(Math.random() * 5);
    boxes[i].style.animationDelay = randomDuration + "s";
    boxes[i].style.animationPlayState = "running";
  }
}
window.onload = () => {
  init();
  setInterval(randomAnimationDelay, 3000); // Call init() every 3 seconds
};

window.onresize = () => {
  // columnResponsive(window.innerHeight);
  randomAnimationDelay();
};

