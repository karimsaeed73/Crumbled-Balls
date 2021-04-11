class Dustbin {
    constructor (x,y) { 
        var options = {isStatic :true } 
        this.bottom = Bodies.rectangle (x, y, 200,20, options);
        this.left = Bodies.rectangle (x-100, y, 20,240, options);
        this.right = Bodies.rectangle (x+100, y, 20,240, options);
        
        this.image = loadImage("dustbingreen.png");
        this.x = x;
        this.y = y;

        World.add(world, this.bottom);
        World.add(world, this.left);
        World.add(world, this.right);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 200,240);
    }


}


