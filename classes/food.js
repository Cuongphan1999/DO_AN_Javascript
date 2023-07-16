class Food{
    constructor(canvas, x, y){
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.width = 20;  
        this.height = 20;
        this.canvas = canvas;
        this.dir = DIR_BUTTOM;
    }
    drawFood(){ //snake draw
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath(); // start draw
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath(); //close draw
    }

     

    autoMove(key){
        
        switch(key){
            case DIR_LEFT:
                this.x -= this.speed;
                //this.dr = DIR_LEFT;
                break;
            case DIR_RIGHT:
                this.x += this.speed;
                //this.dr = DIR_RIGHT;
                break;
            case DIR_TOP:
                this.y -= this.speed;
                //this.dr = DIR_TOP;
                break;
            case DIR_BUTTOM:
                this.y += this.speed;
                //this.dr = DIR_BUTTOM;
                break;
        }
        this.dir = key;
    }
    
}