const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    b1=Bodies.circle(300,400,20,{restitution:0.5,friction:0.2})
	b2=Bodies.circle(350,400,20,{restitution:0.5,friction:0.2})
	b3=Bodies.circle(400,400,20,{restitution:0.5,friction:0.2})
	b4=Bodies.circle(450,400,20,{restitution:0.5,friction:0.2})
	b5=Bodies.circle(500,400,20,{restitution:0.5,friction:0.2})
	World.add(world,b1)
	World.add(world,b2)
	World.add(world,b3)
	World.add(world,b4)
	World.add(world,b5)
	Engine.run(engine);
	r1=new Rope(b1,roof,-80,0)
	r2=new Rope(b2,roof,-40,0)
	r3=new Rope(b3,roof,0,0)
	r4=new Rope(b4,roof,40,0)
	r5=new Rope(b5,roof,80,0)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
r1.display()
r2.display()
r3.display()
r4.display()
r5.display()

  
  //create ellipse shape for multiple bobs here
  ellipse(b1.position.x,b1.position.y,20)
  ellipse(b2.position.x,b2.position.y,20)
  ellipse(b3.position.x,b3.position.y,20)
  ellipse(b4.position.x,b4.position.y,20)
  ellipse(b5.position.x,b5.position.y,20)

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
if(keyCode===DOWN_ARROW){
	Matter.Body.applyForce(b1,b1.position,{x:-10,y:40})
}
}