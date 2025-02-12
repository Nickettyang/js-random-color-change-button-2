document.addEventListener("DOMContentLoaded", () => {
  //Declare the button as a variable in the DOM

  const colorButton = document.querySelector(".container");

  //Create a function that generates random colors

  function randomColorGenerator() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    //Create a loop that iterates through and creates 6 colors

    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //Create a function that applies the color change

  function colorChange() {
    colorButton.style.backgroundColor = randomColorGenerator();
  }
  colorButton.addEventListener("click", colorChange);
});
