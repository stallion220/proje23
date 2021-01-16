class  Log{
    constructor(x, y,height,width) {
      var options = {
          'restitution':0.8,
          'friction':1.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }












 