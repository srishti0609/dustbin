const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var dustbin;
var ground;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;
dustbin1=new Dustbin(595,300,20,140);
dustbin2=new Dustbin(655,362,100,180);
dustbin3=new Dustbin(715,300,20,140);
ground=new Ground(400,380,900,20);
paper=new Paper(80,200,50,50);
launcher=new Launcher(paper.body,{x:200,y:100});

  
}

function draw() {
  Engine.update(engine);
  background(255,255,255); 
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  launcher.display();
  
 
}

function mouseDragged(){
Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}



function mouseReleased(){
launcher.fly();
}

