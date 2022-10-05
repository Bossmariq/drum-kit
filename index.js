let buttons = document.querySelectorAll(".set > button");

// THIS FUNCTION LISTENS FOR MOUSE CLICKS ON THE BUTTONS

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let key = this.innerHTML;
    makeSound(key);
    addAnimation(key);
  });
}

// THIS FUNCTION TAKES RECORD OF KEYBOARD PRESS

document.addEventListener("keydown", function (event) {
  let key = event.key.toLowerCase();
  makeSound(key);
  addAnimation(key);
});

// THIS FUNCTION PLAYS THE SOUND

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log("not found");
      break;
  }
}

// THIS FUNCTION ADDS THE ANIMATION ON THE BUTTONS WHEN PLAYED

function addAnimation(argument) {
  let item = document.querySelector(`.${argument}`);
  item.classList.add("pressed");

  setTimeout(() => {
    item.classList.remove("pressed");
  }, 100);
}
