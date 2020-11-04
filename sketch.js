
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
	ball = Bodies.circle(50,200,25,{restitution:1,friction:0})
	World.add(world,ball)

	ball2 = Bodies.circle(325,340,25,{restitution:1,friction:0})
	World.add(world,ball2)

	ball3 = Bodies.circle(375,340,25,{restitution:1,friction:0})
	World.add(world,ball3)

	ball4 = Bodies.circle(425,340,25,{restitution:1,friction:0})
	World.add(world,ball4)

	ball5 = Bodies.circle(475,340,25,{restitution:1,friction:0})
	World.add(world,ball5)

	
//isstatic,restitution,friction,density
	Engine.run(engine);
	sling1 = new Rope(ball,{x:300,y:100})
	sling2 = new Rope(ball2,{x:350,y:100})
	sling3 = new Rope(ball3,{x:400,y:100})
	sling4 = new Rope(ball4,{x:450,y:100})
	sling5 = new Rope(ball5,{x:500,y:100})
	
	hang = createSprite(400,100,250,15)
	
}


function draw() {
  rectMode(CENTER);
  background(225);
  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,50,50)
  ellipse(ball2.position.x,ball2.position.y,50,50)
  ellipse(ball3.position.x,ball3.position.y,50,50)
  ellipse(ball4.position.x,ball4.position.y,50,50)
  ellipse(ball5.position.x,ball5.position.y,50,50)
//   force()
// apply()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:-0.08,y:-0.08})

	}
}
//0.12
//0.08


