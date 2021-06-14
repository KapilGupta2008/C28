class Slingshot 
{
  constructor(bodyA,bodyB)
   {
   var option = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:6,
    stiffness:0.02
   }
   this.chain = Constraint.create(option);
    World.add(world,this.chain);
}
    display()
    {   
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}