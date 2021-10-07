class Box {
  constructor(x,y,width,height){
    var options = {
      'restitution' : 0.8
    }

    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;

    World.add(world,this.body)

  }

  display(){
       var p = this.body.position
       var a = this.body.angle
      push()
      translate(p.x,p.y)
      rotate(a)
      rectMode(CENTER)
      strokeWeight(3);
      stroke("blue");
      fill("brown")
      rect(0,0,this.width,this.height)
      pop()
  }
};
