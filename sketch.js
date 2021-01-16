const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
function setup() {

  createCanvas(800,400);
engine=Engine.create();
 world=engine.world
 var option={isStatic:true}
 ground=Bodies.rectangle(400,390,800,10,option)
 World.add(world,ground)
var option={restitution:3}
ball=Bodies.circle(400,100,50,option)
World.add(world,ball)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}

