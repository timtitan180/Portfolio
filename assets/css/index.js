var button = document.getElementById("button");

var buttonText = button.innerHTML;

button.addEventListener("click", function () {
  button.style.borderColor = "rgba(0, 0, 250, 0.6)";
  buttonText = "Loading...";
});