var ground;
var dustbin1;
var dustbin2;
var dustbin3;
var paper;
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,750,800,20);

  dustbin1 = new Dustbin(600,685,13,100);
  dustbin2 = new Dustbin(720,685,13,100);
  dustbin3 = new Dustbin(660,740,110,13);
  paper = new Paper(50,420,10);
 
}

function draw() {
  background("black");
  

  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper.display();

   if(ground.depth === 1){
     dustbin3.depth+1;
   }

  Engine.update(engine);

  //keyPressed();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-25});
  }
}