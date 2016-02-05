var ballpit = [];

var updateAndDisplay = function(ball) {
  ball.update();
  ball.display();
};

setup = function() {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  //iterateFunctionally(ballpit);
  //iterateWithWhileLoop(ballpit);
  iterateWithForLoop(ballpit);
  if (mouseIsPressed) ballpit.push(new Ball(mouseX, mouseY));
};

var iterateFunctionally = function (array) {
  array.forEach(updateAndDisplay);
};

var iterateWithWhileLoop = function (ballpit) {
  var index = 0;
  while (index < array.length) {
    ballpit[index].update();
    ballpit[index].display();
    ++index; //index +=1; index = index + 1;
  }
};

var iterateWithForLoop = function (ballpit) {
  for (var i = 0; i < array.length; ++i) {
    ballpit[i].update();
    ballpit[i].display();
  }
};
