var ballpit = [];

ballpit.push(new Ball(100,200));
ballpit.push(new Ball(75,250));
ballpit.push(new Ball(200,200));

ballpit[0].speed.x=2;
ballpit[0].speed.y=2;

ballpit[1].speed.x=5;
ballpit[1].speed.y=3;

//var myBall = new Ball(100, 100);
//myBall.speed.x = 2;
//myBall.speed.y = 2;

//var mySecondBall = new Ball(75,200)
//mySecondBall.speed.x = 5;
//mySecondBall.speed.y = 3;

//var myThirdBall = new Ball (200,200)

setup = function () {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  ballpit.forEach(function updateAndDisplay (ball) {
    ball.update();
    ball.display();
  });
};
