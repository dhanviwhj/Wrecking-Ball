const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,700,1500,20);
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70); 
    box7 = new Box(1000,100,70,70);
    box8 = new Box(1000,100,70,70);
    box9 = new Box(1000,100,70,70);
    box10 = new Box(1000,100,70,70);
    box11 = new Box(1000,100,70,70);
    box12 = new Box(1000,100,70,70);
   
    ball = new Ball(200,200,100,100);
    rope = new Rope(ball.body,{x:650,y:300})
}



function draw(){
    background("aqua");
    Engine.update(engine);
     
    ground.display();
    box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();




     ball.display();
     rope.display();


}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY})
}
