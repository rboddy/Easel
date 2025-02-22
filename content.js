// This script adds in a canvas element that overlays the entire page

// Check if the canvas exists and add it. Otherwise, remove it.
if (document.getElementById("overlayCanvas") === null) {
  // Create the canvas
  let canvas = document.createElement("canvas");

  // Style the canvas
  canvas.id = "overlayCanvas";
  canvas.style.width = "100%";
  canvas.style.height = "100vh";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.zIndex = "1000";
  canvas.style.border = "5px dashed yellow";

  document.body.appendChild(canvas);
}
else {
  document.body.removeChild(document.getElementById("overlayCanvas"));
}
