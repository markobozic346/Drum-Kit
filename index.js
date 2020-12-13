// get all button in aray
var allButtons = document.querySelectorAll(".drum");

var allButtonsInnerHTML = [];

//give each button a click event listener

allButtons.forEach(function (currentBtn) {
  // push inner html of all buttons to array
  allButtonsInnerHTML.push(currentBtn.innerHTML);

  currentBtn.addEventListener("click", function () {
    // execute code below when button is clicked

    // play sound for clicked drum
    playSound(this.innerHTML);

    // gives animation to clicked drum
    drumAnimation(this.innerHTML);
  });
});

//waits for keyboard button to be pressed
document.addEventListener("keydown", function (buttonClicked) {
  //plays soun for keyboard pressed drum
  playSound(buttonClicked.key.toLowerCase());

  // gives animation to keyboard pressed drum
  drumAnimation(buttonClicked.key.toLowerCase());
});

// plays sound
function playSound(key) {
  switch (key) {
    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    default:
      // do nothing
      break;
  }
}

// activated drum animation

function drumAnimation(currentDrum) {
  //checks if currentDrum exist
  if (allButtonsInnerHTML.includes(currentDrum)) {
    //if yes do code below

    //gives class .pressed to activated drum
    document.querySelector("." + currentDrum).classList.add("pressed");

    // removes class after 0.1 seconds
    setTimeout(function () {
      document.querySelector("." + currentDrum).classList.remove("pressed");
    }, 100);
  }
  // if no exist
  else {
    // do nothing
  }
}
