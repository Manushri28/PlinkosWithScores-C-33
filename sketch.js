const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score = 0;

var particle;
var gamestate = "fallParticles";
var count = 0;

function setup() {
  createCanvas(720, 800);

  engine = Engine.create();
  world = engine.world;

   ground = new Ground(width/2,height,width,20);

   particle = new Particles(-50, 10, 10, 10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(25)
  Engine.update(engine);

  text("Score : " + score, 30, 30);

  text("500", 25, 500);
  text("500", 105, 500);
  text("500", 185, 500);

  text("100", 260, 500);
  text("100", 340, 500);
  text("100", 420, 500);

  text("200", 500, 500);
  text("200", 585, 500);
  text("200", 665, 500);

  ground.display();
 
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  if(particle !== null){
    particle.display();

    if(particle.body.position.x > 0 && particle.body.position.x < 240 && particle.body.position.y > 770){
      score = score + 500
      particle = null;
    }
  
  }
  if(particle !== null){
    particle.display();

    if(particle.body.position.x > 240 && particle.body.position.x < 480 && particle.body.position.y > 770){
      score = score + 100
      particle = null;
    }
    
  }
  if(particle !== null){
    particle.display();

    if(particle.body.position.x > 480 && particle.body.position.x < 720 && particle.body.position.y > 770){
      score = score + 200
      particle = null;
    }
    
  }

  if(count >= 5){
      gamestate = "end"
      textSize(60);
      textFont("Georgia");
      text("GAME OVER", 220, 250);
  }

  }

function mousePressed(){
   if(gamestate === "fallParticles"){
      count++;
      particle = new Particles(mouseX, 10, 10, 10);
   }

}