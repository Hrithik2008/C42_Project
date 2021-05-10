class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.batman = loadImage("bat/Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,70,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount <= 200){
            image(this.image,pos.x,pos.y+35,400,400);
        }else{
            image(this.batman,pos.x,pos.y+15,160,400);
        }
    }
}
