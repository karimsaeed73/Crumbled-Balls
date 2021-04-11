
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject= new Paper(100,600,20);

	ground = new Ground(400,690,800,20);
	
	dustbinObject= new Dustbin (650,580);
	Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  background(200);
  
  paperObject.display();
  ground.display();
  dustbinObject.display();
}

function keyPressed (){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-80})

}

}