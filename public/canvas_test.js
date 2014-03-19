var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
var window_width = window.innerWidth
var window_height = window.innerHeight
canvas.width = window_width;
canvas.height = window_height;

$('#canvas').drawImage({
  layer: true,
  name: 'personal',
  source: 'images/personal.jpg',
  x: window_width * 1/4 , y: window_height/2,
  width: 150,
  height: 150,
  click: function(layer) {
    to_side_bar();
  }
}).drawImage({
  layer: true,
  name: 'blog',
  source: 'images/blog.png',
  x: window_width * 2/4 , y: window_height/2,
  width: 150,
  height: 150,
  click: function(layer) {
    to_side_bar();
	$('.content').show();
  }
}).drawImage({
  layer: true,
  name: 'lab',
  source: 'images/lab.png',
  x: window_width * 3/4 , y: window_height/2,
  width: 150,
  height: 150,
  click: function(layer) {
    window.location.replace("love/love");
	
  }
});

function to_side_bar ()
{
	$('canvas').animateLayer('personal', {
	  x: window_width * 1/20, y: window_height * 2/10,
	  width: 100, height: 100
	}, 1000);
	$('canvas').animateLayer('blog', {
	  x: window_width * 1/20, y: window_height * 4/10,
	  width: 100, height: 100
	}, 1000);
	$('canvas').animateLayer('lab', {
	  x: window_width * 1/20, y: window_height * 6/10,
	  width: 100, height: 100
	}, 1000);
}