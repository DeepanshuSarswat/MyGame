alert(
  "Khamma Ghani sa 🙏 , This Is Boy Dipanshu Saraswat welcome you to this game"
);
var numsequre = 6;
var colors = genraterandomcolors(numsequre);
var msg = document.querySelector("#msg");
var sequreBox = document.querySelectorAll(".sequre");
var pickedColor = PickedColor();
var colorDisplay = document.querySelector("#colorDisplay");

var h1 = document.querySelector("h1");
var resetButtonAndNewColor = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  var numsequre = 3;
  colors = genraterandomcolors(numsequre);
  pickedColor = PickedColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < sequreBox.length; i++) {
    if (colors[i]) {
      sequreBox[i].style.background = colors[i];
    } else {
      sequreBox[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numsequre = 6;
  colors = genraterandomcolors(numsequre);
  pickedColor = PickedColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < sequreBox.length; i++) {
    sequreBox[i].style.background = colors[i];

    sequreBox[i].style.display = "block";
  }
});

resetButtonAndNewColor.addEventListener("click", function () {
  colors = genraterandomcolors(numsequre);
  pickedColor = PickedColor();
  colorDisplay.textContent = pickedColor;
  msg.textContent = "";
  resetButtonAndNewColor.textContent = "NEW COLORS";
  for (var i = 0; i < sequreBox.length; i++) {
    sequreBox[i].style.background = colors[i];
  }
  h1.style.background = "steelblue ";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < sequreBox.length; i++) {
  sequreBox[i].style.background = colors[i];
  sequreBox[i].addEventListener("click", function () {
    var ClickedColor = this.style.background;
    if (ClickedColor === pickedColor) {
      msg.textContent = "Correct!";
      ChangedColor(ClickedColor);
      h1.style.background = ClickedColor;
      resetButtonAndNewColor.textContent = "Play Again";
    } else {
      this.style.background = "#232323";
      msg.textContent = "Try Again";
    }
  });
}

function ChangedColor(color) {
  for (var i = 0; i < sequreBox.length; i++) {
    sequreBox[i].style.background = color;
  }
}

function PickedColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function genraterandomcolors(num) {
  // 1. hum phle ek empty arry bnaenge
  var arR = [];
  // 2. usme random values dalenge
  for (var i = 0; i < num; i++) {
    // 3. use return krenge
    arR.push(colorComponenet());
  }
  return arR;
}

function colorComponenet() {
  // pick red from 0-255
  var r = Math.floor(Math.random() * 255);
  // pick green from 0-255
  var g = Math.floor(Math.random() * 255);
  // pick blue  from 0-255
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
