const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var stand1,stand2;
var slingshot;
var score ;
score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
   
   polygon = Bodies.polygon(50,200,50,{friction:1.0,density:1.0,restitution:0.8},6);
    World.add(world,polygon);
     
    text("SCORE : " ,score,750,40);


   
    
  
  
   slingshot = new SlingShot(this.polygon,{x:100,y:200});
   //base layer
   block1 = new Block(300,275,30,40);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   //L3   
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   //L2
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   //top
   block16 = new Block(390,155,30,40);
   
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  
   
}
    
function draw() {
  background(0,0,0);  
  drawSprites();
}
