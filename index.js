// 1. Drum Button Clicks
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // 'this' refers to the button that was clicked
    makeSound(this.innerHTML); 
  });
}

// 2. Keyboard Presses
// Added missing curly braces around the function body
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});

// 3. Reel Code
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('./sounds/Ace.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('./sounds/Chamber.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('./sounds/neon-movement.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('./sounds/Revive.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('./sounds/waylay-enemy-ult.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('./sounds/tom-2.mp3'); // Nice Valorant reference!
      audio.play();
      break;
    default:
      console.log("Key pressed: " + key);
  }
}

//Real Code
// function makeSound(key) {
//   switch (key) {
//     case "w":
//       var audio = new Audio('./sounds/tom-1.mp3');
//       audio.play();
//       break;
//     case "a":
//       var audio = new Audio('./sounds/tom-2.mp3');
//       audio.play();
//       break;
//     case "s":
//       var audio = new Audio('./sounds/tom-3.mp3');
//       audio.play();
//       break;
//     case "d":
//       var audio = new Audio('./sounds/tom-4.mp3');
//       audio.play();
//       break;
//     case "j":
//       var audio = new Audio('./sounds/crash.mp3');
//       audio.play();
//       break;
//     case "k":
//       var audio = new Audio('./sounds/kick-bass.mp3');
//       audio.play();
//       break;
//     case "l":
//       var audio = new Audio('./sounds/revive-me-jett.mp3'); // Nice Valorant reference!
//       audio.play();
//       break;
//     default:
//       console.log("Key pressed: " + key);
//   }
// }