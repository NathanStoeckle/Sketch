// Code for JavaScript for Etch a Sketch style

"use strict";

window.onload = init;


//GLOBALS
var canvas, ctx, dragging = false,
  lineWidth, strokeStyle, currentTool, fillStyle, origin, topCanvas, topCtx;

//CONSTANTS
var default_line_width = 3;
var default_stroke_style = 'black';
var tool_pencil = "toolPencil";
var tool_line = "toolLine";
var deltaX = 0;
var deltaY = 0;

//Added window event listeners, this may need to be moved somewhere
window.addEventListener("keydown", getArrowKeys, false);
window.addEventListener("keyup", keysReleased, false);

var keys = []

//Will add in more depending on what we might need
//  Examples like a clear, save, load, color buttons

//Functions
function init() {
  // initialize some globals
  canvas = document.querySelector('#mainCanvas');
  ctx = canvas.getContext('2d');
  lineWidth = default_line_width;
  strokeStyle = default_stroke_style;
  currentTool = tool_pencil;
  origin = {};
  topCanvas = document.querySelector('#topCanvas');
  topCtx = topCanvas.getContext('2d');

  //Set the initial properties
  topCtx.lineWidth = ctx.lineWidth = lineWidth;
  topCtx.strokeStyle = ctx.strokeStyle = strokeStyle;

  //Event Listeners
  canvas.getArrowKeys = getArrowKeys;


}

//Reset the top canvas since it was drawn on primarly
function clearTopCanvas() {
  topCtx.clearRect(0, 0, topCtx.canvas.width, topCtx.canvas.height);
}

//Reset Function - Should clear the top canvas...
function reset() {

  console.log('Reset Called');
  topCtx.clearRect(0, 0, topCtx.canvas.width, topCtx.canvas.height);
}

function getMouse(e) {
  var mouse = {}
  mouse.x = e.pageX - e.target.offsetLeft;
  mouse.y = e.pageY - e.target.offsetTop;
  return mouse;
}

//Using doMouseDown to detect when it is being drawn, and using the arrow keys to move the lines.
function doMouseDown(e) {
  console.log(e.type);
  dragging = true;

  //Get the location of the mouse coordinates
  var mouse = getMouse(e);

  ctx.beginPath();
  ctx.moveTo(deltaX, deltaY);
  ctx.lineTo(deltaX, deltaY);
  ctx.closePath();
}

function pencilTool() {
  //PENCIL TOOL
  //Set ctx.strokeStyle and ctx.lineWidth to correct global values
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;

  // Draw a line to x, y of mouse
  //ctx.lineTo(mouse.x, mouse.y);

  //Stroke the line
  ctx.stroke();
}

//This function should cancel out the original function
function doMouseup(e) {

  //This should cancel the effects of drawing
  dragging = false;
}

function getMouse(e) {
  var mouse = {}
  mouse.x = e.pageX - e.target.offsetLeft;
  mouse.y = e.pageY - e.target.offsetTop;
  return mouse;
}


//This site was helpful in programming it in the correct way, or at least in the right direction
//  https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm
function getArrowKeys(e) {
  //Use onkeydown to find triggers of arrow keys

  //This will allow us to be able to press two different keys at the same time
  keys[e.keyCode] = true;

  //Left Key  
  if (keys[37]) {
    deltaX -= 2;
  }

  //Up key
  if (keys[38]) {
    deltaY += 2;
  }

  //Right key
  if (keys[39]) {
    deltaX += 2;
  }

  //Down key
  if (keys[40]) {
    deltaY -= 2;
  }

  //Space key
  if (keys[32]) {
    clearTopCanvas();
  }

  //Prevent the defaults from happening
  e.preventDefault();

  //Draw the line here?
}

function keysReleased(e) {
  // This should mark the keys that were released
  keys[e.keyCode] = false;
}
