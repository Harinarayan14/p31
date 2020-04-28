class Snake{
    constructor(x, y, width, height ) {
      var options = {
          'restitution':1,
          'friction':3.0,
          'density':1.0
      }
      this.body = [];
      this.part = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.body.push(this.part);
      World.add(world, this.body);
    }
    destroy(){
      if(this.part.position.x<31 || this.part.position.x>769 ||this.part.position.y<31 ||this.part.position.y>369 )
  {
    World.remove(world,this.part);
    gameState = "end";
  }
   
   }
    keyPressed1 (){
        if(keyCode === 38){
          Matter.Body.setVelocity(this.part,{x:0,y:-4});
        }
        if(keyCode === 40){
          Matter.Body.setVelocity(this.part,{x:0,y:4});
         }
         if(keyCode ===37){
          Matter.Body.setVelocity(this.part,{x:-4,y:0});
         }
         if(keyCode ===39){
          Matter.Body.setVelocity(this.part,{x:4,y:0});
         }
      }
    display(){
      for(let i = 0; i < this.body.length; i++) {
        push();
        translate(this.body[i].position.x, this.body[i].position.y);
        fill(0,255,0);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
/*connect (){
  var options ={
  bodyA: this.bodyA,
 bodyB: this.bodyB,
 stiffness:1,
 length:1
};
for(let i = 0; i < this.body.length; i++) {
  this.bodyA = this.body[i];
  this.bodyB = this.body[i];
  this.chain=  Matter.Constraint.create(options);
  }

}
display1(){
if(this.bodyA!=null){
var pointA = this.bodyA.position;
var pointB = this.bodyB.position;
strokeWeight(4);
line(pointA.x, pointA.y, pointB.x,pointB.y);
}
}*/
}

