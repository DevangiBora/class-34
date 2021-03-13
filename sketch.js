const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    boggie = new Boggie(50,170,50,50);
    boggie2 = new Boggie(150,170,50,50);
    boggie3 = new Boggie(250,170,50,50);
    boggie4 = new Boggie(350,170,50,50);
    boggie5 = new Boggie(450,170,50,50);
    chain1 = new SlingShot(boggie.body,boggie2.body);
    chain2 = new SlingShot(boggie2.body,boggie3.body);
    chain3 = new SlingShot(boggie3.body,boggie4.body);
    chain4 = new SlingShot(boggie4.body,boggie5.body);
    Rock = new rock(1000,200,100,100);
}

function draw(){
    background("grey"); 

    Engine.update(engine);
    ground.show();
    boggie.show();
    boggie2.show();
    boggie3.show();
    boggie4.show();
    boggie5.show();
    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    Rock.show();

}

function keyPressed(){
    if(keyCode==32){
        Matter.Body.applyForce(boggie5.body,{x:boggie5.body.position.x,y:boggie5.body.position.y},{x:0.5,y:0});
    }

}













