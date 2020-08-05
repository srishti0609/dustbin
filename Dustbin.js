class Dustbin{
    constructor(x,y,w,h){
    var options={
  isStatic: true
    }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body);
    this.image=loadImage('dustbingreen.png');

}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
   
   image(this.image,655,280,105,150);
  
}
}