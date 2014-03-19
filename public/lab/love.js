/***************************************************
**************** Golobal Parameters ****************
***************************************************/

// Parameters for the canvas object
var c;			// the canvas object
var ctx;		// the context of the canvas
var width;		// width of the canvas
var height;		// height of the canvas

// Parameter to hold the circles
var circles = [];
var points = [];

/***************************************************
**************** Golobal Classes *******************
***************************************************/

// A defined Circle class object
function Circle (x_ini, y_ini, r_ini, color_ini)
{
	// position of the ball
	// start: starting position
	// now: current position
	// end: ending position
	this.x_start = x_ini;
	this.y_start = y_ini;
	this.x_now = x_ini;
	this.y_now = y_ini;
	this.x_end = x_ini;
	this.y_end = y_ini;
	// radius of the ball
	this.r = r_ini;
	// color of the ball
	this.color = color_ini;
	var rate = 0.05;

	// function to update the circle's ending position
	this.move = function (x_fin, y_fin)
	{
		this.x_end = x_fin;
		this.y_end = y_fin;
	}

	// function to update the current position (animation)
	this.update = function ()
	{
		//////////////////////////////////////////////////
		//// TODO: add code to complete the animation ////
		//////////////////////////////////////////////////
		// update step
		if (Math.abs(this.x_now-this.x_end)>0.01 && Math.abs(this.y_now-this.y_end)>0.01)
		{
			this.x_now = this.x_now + (this.x_end-this.x_now)*rate;
			this.y_now = this.y_now + (this.y_end-this.y_now)*rate;
			// draw the circle
			ctx.beginPath();
			ctx.arc(this.x_now, this.y_now, this.r, 0, 2*Math.PI, false);
			ctx.fillStyle = this.color;
			ctx.fill();

		}

	}
}

/***************************************************
**************** Golobal Functions *****************
***************************************************/

// Function to paint at given frames per second (FPS)
function paint ()
{
	// clear the canvas
	ctx.clearRect(0,0,width,height);
	// update every circle
	for (var k=0; k<circles.length; k++)
	{
		circles[k].update();
	}
	ctx.font="30px Arial";
    ctx.fillStyle = 'white';
	
	var imageObj = new Image();
	imageObj.onload = function() {
        //ctx.drawImage(imageObj, 500, 10, 360, 480);
      };
      //imageObj.src = "us.jpg";
}

// Utility function to generate a random color
function random_color ()
{
	//////////////////////////////////////////////////
	////// TODO: you can change the color pool ///////
	//////////////////////////////////////////////////
	var pool = ["#FFEEBB","#FFCC55","#FFAA22","#CCDDAA","#99CC99","#77AA88","#557777","#EE6655","#BB2222"];
	var count = Math.floor(Math.random()*pool.length);
	return pool[count];
}

// Utility function to generate a random number between min and max
function random_number (min, max)
{
	var number = min + Math.random()*(max-min);
	return number;
}

function heartShape(r,dx,dy){//r:大小;dx:水平偏移;dy:垂直偏移;c:颜色

    var m,n,x,y,i;
    for(i = 0; i <= 200; i += 0.04){
        m = i;
        n = -r * (((Math.sin(i) * Math.sqrt(Math.abs(Math.cos(i)))) / (Math.sin(i) + 1.4)) - 2 * Math.sin(i) + 2);
        x = n * Math.cos(m) + dx;
        y = n * Math.sin(m) + dy;
        var p = [x,y];
		points.push(p);
    }
}


// Function to setup the canvas and related functions
function initialize ()
{
	// initialize the canvas object
	c = document.getElementById("main");
	ctx = c.getContext("2d");
	width = window.innerWidth;
	height = window.innerHeight;
	ctx.canvas.width = width;
	ctx.canvas.height = height;

	
	heartShape(100,width/2,height/4);
	
	// add mouse click event listeners to the canvas
	c.addEventListener('mousemove', function(evt){
		//////////////////////////////////////////////////
		//// TODO: create circle when mouse is moved /////
		//////////////////////////////////////////////////
		var rect = c.getBoundingClientRect();
		var mouse_x = evt.clientX - rect.left;
		var mouse_y = evt.clientY - rect.top;
		var a = new Circle(mouse_x,mouse_y,random_number(5,20),random_color());
		var r = Math.floor((Math.random()*4999));
		var p = points[r]
		a.move(p[0],p[1]);
		circles.push(a);
	}, false);
		
	// add the paint() function with certain FPS
	setInterval(function(){paint()}, 1000/60);
}

/***************************************************
**************** Main Functions ********************
************* (Program starts here) ****************
***************************************************/

initialize();
