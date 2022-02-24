const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


var button1, button2;
var ball;
var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(200,395,400,20)
  left=new Ground(10,200,20,400)
  right=new Ground(395,200,20,400)
  top_wall=new Ground(200,5,400,20)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball_options={
  restitution:0.8

  }
ball=Bodies.circle(200,200,20,ball_options)
World.add(world, ball)

button1=createImg("right.png")
button1.position(100,30)
button1.size(50,50)
button1.mouseClicked(hforce)

button2=createImg("up.png")
button2.position(40,30)
button2.size(38,50)
button2.mouseClicked(vforce)


}


function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
  top_wall.show();
  ellipse(ball.position.x, ball.position.y, 20)
  Engine.update(engine);
}
function hforce() {
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05,y:0})
}
function vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}