class Paper{
    constructor(x,y,radius){

        var options = {
            isStatic:false,
           restitution:0.3,
            friction:0.5,
           density:1.2,
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){

       push();
       fill("magenta");
       var pos = this.body.position;
       var radius = this.radius;
       ellipseMode(RADIUS);
       circle(pos.x,pos.y,radius);

       pop();

    }
}