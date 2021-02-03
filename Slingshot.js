class Slingshot {
    constructor(bodyA,bodyB){
    this.Slingshot = constraint.create(options);

    World.add(world, this.Slingshot);
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        lenght: 10
    }

    }
    display(){
var pointA = this.Slingshot.bodyA.position
var pointB = this.Slingshot.bodyB.position
strokeweight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}