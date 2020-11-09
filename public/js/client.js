

// Init items
let win;
let fps = 60; // Frames per second
let DEBUG = 0;

let imgWidth = 0;
let imgHeight = 0;


// Initial Setup
function setup() {
  // Set drawing parmameters
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  // Set window size and push to the main screen
  // Good DEV size
  win = { width: 600, height: 600 };
  // Good PROD size
  //  win = { width: 900, height: 700 };
  let canvas = createCanvas(win.width, win.height, WEBGL);
  canvas.parent('sketch-holder');

  // Set the framerate so everyone is *hopefully* the same
  frameRate(fps); // As low as possible to not tax slow systems

  // Setup view items

  
}
  
// Draw the screen and process the position updates
function draw() {
    background(0);


}