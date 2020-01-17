const squareElement = document.querySelector("#square");

if (squareElement) {
  squareElement.addEventListener("click", function() {
    const currentValue = squareElement.textContent;

    if (currentValue === "") {
      squareElement.textContent = "X";
    } else if (currentValue === "X") {
      squareElement.textContent = "O";
    } else {
      squareElement.textContent = "";
    }
  });
}
