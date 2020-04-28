const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var array1 = [];
var fruit ;
var gameState = "start";
var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snake = new Snake(400,200,20,20);
  walll1 = new Wall(10,200,20,760);
  walll2 = new Wall(790,200,20,760);
  walll3 = new Wall(400,10,800,20);
  walll4 = new Wall(400,390,800,20);
  var options = {
    isStatic: false
  };
  fruit = Bodies.rectangle(random(50,750),random(50,350),20,20,options);
  World.add(world,fruit);
  console.log(fruit.speed);
  console.log(score);
  
}

function draw() {
  if(gameState === "start"){
    background(255);
    snake.destroy();
    snake.display();
    snake.keyPressed1();
    walll1.display();
    walll2.display();
    walll3.display();
    walll4.display();
    push();
    fill("red")
  rect(fruit.position.x,fruit.position.y,20,20);
pop(); }
  if(gameState === "end"){
    background(0);
    push();
    textSize(50);
    fill("white");
    text("You Lose!!",200,200);
    text("Your Score is "+ score,200,300);
    pop();}
  engine.world.gravity.y = 0;
  Engine.update(engine);
  
  increase1();
    }
function increase1(){
  if(fruit.speed>0){
    score +=1;
    Matter.Body.setPosition(fruit,{x:random(50,750),y:random(50,350)});
   Matter.Body.setVelocity(fruit,{x:0,y:0});
   part2 = Bodies.rectangle(snake.part.position.x,snake.part.position.y,20,20);
   
  World.add(world,part2);
   snake.body.push(part2);
  // snake.connect();
   //snake.display1();
}
}

