document.addEventListener("DOMContentLoaded", function () {
    // Get the color palette button (GIF)
    const colorPaletteButton = document.querySelector(".color-palette-button");
  
    // Function to change the background color and SVG colors
    function changeColors() {
      const randomBackgroundColor = getRandomColor();
      document.body.style.backgroundColor = randomBackgroundColor;
  
      // Get the SVG paths
      const svgPaths = document.querySelectorAll("svg path");
  
      // Change the fill color of each SVG path to a random color
      svgPaths.forEach(function (path) {
        const randomSvgColor = getRandomColor();
        path.setAttribute("fill", randomSvgColor);
      });
    }
  
    // Function to generate a random color
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Add click event listener to the color palette button (GIF)
    colorPaletteButton.addEventListener("click", changeColors);
  });
  