const counter = document.getElementById("counter");
const decrementButton = counter.querySelector("[data-action='decrement']");
const incrementButton = counter.querySelector("[data-action='increment']");
const valueSpan = document.getElementById("value");

let counterValue = 0;
function decrement() {
  counterValue -= 1;
  updateCounter();
}
function increment() {
  counterValue += 1;
  updateCounter();
}

function updateCounter() {
  valueSpan.textContent = counterValue;
}
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);


updateCounter();
