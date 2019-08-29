// Code for JavaScript for Etch a Sketch style

//Declare the box's width and height size for canvas to be drawn upon the screen
const boxWidth = 500;
const boxHeight = 800;
const dragging = false;

//It should be wrapped around a container since it will be drawn upon it...
//  Note: This will be called from HTML file, not JS file
const container = document.getElementById('container');

//Creates a new element depending on what you want
const draw = document.createElement('div');

draw.setAttribute('id', 'draw');

//Will add in more depending on what we might need
//  Examples like a clear, save, load, color buttons

//Functions

//Reset Function
function reset() {

  //Calls the div field from the HTML file
  const div = draw.querySelector('div');

  //.forEach goes through an array, which is what the grid for this will typically contain
  div.forEach((div) => {

    //Change the color to white
    div.style.background = 'white';
  });
}

//Function for listening for mouseover function?
//  This might change to become a mouse click
function mouseListen() {
  const div = draw.querySelectorAll('div');
  div.forEach((div) => {

    //Use an addEventLister to catch the trigger when the mouse is being called upon
    div.addEventListener('mouseover', (e) => {
      e.target.style.background = 'black';
    });

    //This should be the onclick method...
    div.addEventListener('onclick', (e) => {
      e.target.style.background = 'black';
    });
  });
}

function mouseDown(e) {
  console.log(e.type);
  dragging = true;

  //Get the location of the mouse coordinates
  var mouse = getMouse(e);


}

//This function should cancel out the original function
function doMouseup(e) {
  switch (currentTool) {
    //PENCIL TOOL
    case tool_pencil:
      ctx.closePath();
      break;
    case tool_rectangle:
    case tool_line:
      if (dragging) {
        ctx.drawImage(topCanvas, 0, 0);
        clearTopCanvas();
      }
      break;
  }
  dragging = false;
}

function getMouse(e) {
  var mouse = {}
  mouse.x = e.pageX - e.target.offsetLeft;
  mouse.y = e.pageY - e.target.offsetTop;
  return mouse;
}

function getArrowKeys() {
  //Use onkeydown to find triggers of arrow keys
  
}

//Found some code that I've done on a previous exercise - USED as reference
/*
// EVENT CALLBACK FUNCTIONS
		function doMousedown(e) {
			console.log(e.type);
			dragging = true;

			//get the location of the mouse in canvas coordinates
			var mouse = getMouse(e);

			switch (currentTool) {
				//PENCIL TOOL
				case tool_pencil:
					ctx.beginPath();

					//Move pen to x, y of mouse
					ctx.moveTo(mouse.x, mouse.y);
					break;

				case tool_rectangle:
				case tool_line:
					origin.x = mouse.x;
					origin.y = mouse.y;
					break;
			}
		}
*/
