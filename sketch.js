const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;


function setup() {
  createCanvas(400,400);
  //creating the engine
  engine=Engine.create();
  world=engine.world;

  //creating the body
  var ground_options = {isStatic:true}
  ground=Bodies.rectangle(200,380,30,30,ground_options);

  var ball_options = {restitution: 0.5}
  ball=Bodies.circle(200,105,35,ball_options);
  console.log(ball);

  //adding to the world
  World.add(world,ground);
  World.add(world,ball);

}

function draw() {
  background(0,0,0);  

  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,35);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,450,5)
  drawSprites();
}