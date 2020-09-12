const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, rope1;
var world;
var bg, bgIMG;

function preload()
{
	bgIMG = loadImage("bg.png");
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, height/4, 400, 20);

	bobDiameter = 10;

	startBobPositionX = width/2;
	startBobPositionY = height/4 + 500;
	
	bob1 = new Bob(200, 600, 10);
	bob2 = new Bob(300, 600, 10);
	bob3 = new Bob(400, 600, 10);
	bob4 = new Bob(500, 600, 10);
	bob5 = new Bob(600, 600, 10);

	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*1, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*1, 0);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);

	Engine.run(engine);  
}


function draw() 
{
	if(bgIMG)
		background(bgIMG)

  rectMode(CENTER);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites(); 
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
		console.log("Hello");
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;

	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}