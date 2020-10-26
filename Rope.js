class Rope{
    constructor(bodyA,pointB){
        this.options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Matter.Constraint.create(this.options);
       World.add(world,this.sling) 
    }

display(){
    strokeWeight(4)
    this.pointA=this.sling.bodyA.position
        this.pointB=this.sling.pointB
    line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y)
}


}