class Ball {
    constructor(x, y, width, height,angle) {
      var options = {
         frictionAir : 0.005
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var a = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(a)
      rectMode(CENTER);
      ellipse(0,0,this.width,this.height)
      pop()
      
    }
  };