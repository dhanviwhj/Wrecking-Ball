class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.rope = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA =null;
    }

    attach(body){
        this.rope.bodyA = body;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            stroke("black")
            line(pointB.x,pointB.y, pointA.x,pointA.y);
            pop()
        }
    }
    
}