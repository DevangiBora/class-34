class rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.rock = loadImage("images/rock1.png");
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        imageMode(CENTER);
        image(this.rock,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  