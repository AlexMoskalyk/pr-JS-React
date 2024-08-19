let count = 0;
let inc = 0;
let margin = 0;
let slider = document.getElementById("slider-width");
let itemsToDisplay = 0;

if (screen.width > 1024) {
  itemsToDisplay = document
    .getElementById("slider-container")
    .getAttribute("item-display-d");
  margin = itemsToDisplay * 5;
}

if (screen.width > 768 && screen.width < 1024) {
  itemsToDisplay = document
    .getElementById("slider-container")
    .getAttribute("item-display-t");
  margin = itemsToDisplay * 6.8;
}

if (screen.width > 320 && screen.width < 768) {
  itemsToDisplay = document
    .getElementById("slider-container")
    .getAttribute("item-display-m");
  margin = itemsToDisplay * 20;
}

let items = document.getElementsByClassName("item");
let itemLeft = items.length % itemsToDisplay;
let itemsToSlide = Math.floor(items.length / itemsToDisplay) - 1;

for (let i = 0; i < items.length; i += 1) {
  items[i].style.width = screen.width / itemsToDisplay - margin + "px";
}

function next() {
  if (inc !== itemsToSlide + itemLeft) {
    if (inc === itemsToSlide) {
      inc = inc + itemLeft;
      count = count - (screen.width / itemsToDisplay) * itemLeft;
    } else {
      inc += 1;
      count = count - screen.width;
    }
  }

  slider.style.left = -screen.width + "px";
}

function prev() {
  if (inc !== 0) {
    if (inc === itemLeft) {
      inc = inc - itemLeft;
      count = count + (screen.width / itemsToDisplay) * itemLeft;
    } else {
      inc -= 1;
      count = count + screen.width;
    }
  }

  slider.style.left = -screen.width + "px";
}
