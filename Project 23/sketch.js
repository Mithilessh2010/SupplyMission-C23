var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var catcher1,catcher2,catcher3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	// loading the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	// creating all sprites
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("peru");

	catcher1 = createSprite(400,660,200,10)
	catcher1.shapeColor=color("red");
	
	catcher2 = createSprite(300,610,10,100)
	catcher2.shapeColor=color("red");

	catcher3 = createSprite(500,610,10,100)
	catcher3.shapeColor=color("red");
	// Creating Engine
	engine = Engine.create();
	world = engine.world;
	// Making the package bounce
	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:1});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	
	// running the engine
	Engine.run(engine);
	// making catchers
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  // making the package postition the same as the helicopter
   packageSprite.x= packageBody.position.x ;
   packageSprite.y= packageBody.position.y ;
  drawSprites();
}
// saying if down arrow key is pressed then package drops
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}

function isTouching(object1,object2){
	if (object2.x - object1.x <= object1.width/2 + object2.width/2
	  && object1.x - object2.x <= object2.width/2 + object1.width/2
	  && object2.y - object1.y <= object1.height/2 + object2.height/2
	  && object1.y - object2.y <= object2.height/2 + object1.height/2) {
  return true;
	}
	else {
	  return false;
  
	}
  
	
  }



