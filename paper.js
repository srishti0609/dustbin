class Paper{
  constructor(x, y, w,h){
    var options={
      isStatic: false,
      restitution:0.8,
      friction:0.5,
     'frictionStatic':1,
     'inertia': Infinity,
      density:1.2
      
    }
   
  this.body = Bodies.rectangle(x,y,w,h,options);
  this.w = w;
 this.h =h;  
  
  this.image=loadImage("paper.png")
  World.add(world,this.body)
  }
  display(){
  
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
