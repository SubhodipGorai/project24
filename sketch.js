const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,r1,r2,r3,r4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    r1 = new Rubber(200,500,40);
    r2 = new Rubber(250,500,40);
    r3 = new Rubber(300,500,40);
    r4 = new Rubber(350,500,40);
    b1 = new Box(400,500,40,50);
    b2 = new Box2(800,500,100,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    r1.display(r1.x,r1.y,40);
    r2.display();
    r3.display();
    r4.display();
    b1.display();
    b2.display();
}