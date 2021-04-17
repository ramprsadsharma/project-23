var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 boxbase = new Box(200,300,50,50);
	 boxleft = new Box(240,100,50,100);
	 boxright = new Box(140,100,50,50);
	 
    box.Position.x=width/2-100
     box.y=615;


     boxleft=createSprite(pos.x,y,100,50);
     boxleft.shapeColor("red");

	boxleftBody = Bodies.rectangle(width/20, 150, width, 10 , {isStatic:true} );
 	World.add(world, boxleftBody);

	 boxbase = createSprite(pos.x+100,y+40,200,50);
     boxbase.shapeColor("red");

	 boxbasetBody = Bodies.rectangle(width/40, 250, width, 10 , {isStatic:true} );
 	World.add(world, boxbaseBody);

	  boxright = createSprite(pos.x+200,y+80,300,50);
	  boxbase.shapeColor("red");

      boxrighttBody = Bodies.rectangle(width/60, 350, width, 10 , {isStatic:true} );
 	World.add(world, boxrightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,400,20);
  boxleft.display();
  boxbase.display();
boxright.display();


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
 


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setScale(packageBody,true);
    
  }
}



