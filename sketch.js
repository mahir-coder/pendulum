
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(50,200,50)
	World.add(world,ball)
//isstatic,restitution,friction,density
	Engine.run(engine);
	sling1 = new Rope(ball.body,{x:50,y:50})
}


function draw() {
  rectMode(CENTER);
  background(0);
  sling1.display()
  drawSprites();
 
}



