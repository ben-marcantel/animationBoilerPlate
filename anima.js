const canvas = document.getElementById("canvas");
const c =canvas.getContext('2d');
canvas.width = 1080;
canvas.height = 720 ;

   
function Circle(x,y,x1,y1,x2,y2,dx,dy,dx1,dy1,dx2,dy2,radius,dRadius,r,dr,g,dg,b,db){
    this.x =x;
    this.y =y;
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.dx = dx;
    this.dy = dy;
    this.dx1 = dx1;
    this.dy1 = dy1;
    this.dx2 = dx2;
    this.dy2 = dy2;
    this.radius = Math.floor((Math.random() * 100) +6);
    this.dRadius =1/4;
    this.r = Math.floor((Math.random() * 255) +1);
    this.dr= .25;
    this.g = Math.floor((Math.random() * 255) +1);
    this.dg= .25;
    this.b = Math.floor((Math.random()* 255)+1);
    this.db = .25;

    this.draw = function (){
        c.beginPath();
        c.lineTo(this.x,this.y)
        c.lineTo(this.x+10,this.y)
        c.lineTo(this.x+10,this.y+20)
        c.lineTo(this.x1,this.y1)
        c.lineTo(this.x1+10,this.y1)
        c.lineTo(this.x1+10,this.y1+20)
        c.lineTo(this.x2,this.y2)
        c.lineTo(this.x2+10,this.y1)
        c.lineTo(this.x2+10,this.x2+20)

        

        
        
   
        c.closePath();
        
        c.strokeStyle='rgb(' + this.r +',' + this.g + ',' + this.b + ')';
        c.stroke();
        // c.fillStyle = 'rgb(' + this.r +',' + this.g + ',' + this.b + ')';
        // c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        if (this.x1 + this.radius > canvas.width || this.x1 - this.radius < 0) {
            this.dx1 = -this.dx1;
        }
        if (this.y1 + this.radius > canvas.height || this.y1 - this.radius < 0) {
            this.dy1 = -this.dy1;
        }
        if (this.x2 + this.radius > canvas.width || this.x2 - this.radius < 0) {
            this.dx2 = -this.dx2;
        }
        if (this.y2 + this.radius > canvas.height || this.y2 - this.radius < 0) {
            this.dy2 = -this.dy2;
        }
        if(this.r > 255 || this.r<1){
            this.dr= -this.dr;
        }
        if(this.g > 255 || this.g<1){
            this.dg= -this.dg;
        }
        if(this.b > 255 || this.b<1){
            this.db= -this.db;
        }
        if(this.radius>100|| this.radius<1){
            this.dRadius = -this.dRadius; 
        }
        this.x += this.dx;
        this.y += this.dy;
        this.x1 += this.dx1;
        this.y1 += this.dy1;
        this.x2 += this.dx2;
        this.y2 += this.dy2;
        this.r += this.dr;
        this.g += this.dg;
        this.b += this.db;
        this.radius += this.dRadius;
        this.draw();
    }
}  

let circleArray =[];

for (i=0;i<1;i++){
   let radius = Math.floor((Math.random() * 100) +6);
   let dRadius =1/4;
   let x = Math.random() * (canvas.width - radius* 2) + radius;
   let y = Math.random()* (canvas.height - radius *2) +  radius;
   let x1 = Math.random() * (canvas.width - radius* 2) + radius;
   let y1 = Math.random()* (canvas.height - radius *2) +  radius;
   let x2 = Math.random() * (canvas.width - radius* 2) + radius;
   let y2 = Math.random()* (canvas.height - radius *2) +  radius;
   let dx = 1/3;
   let dy = 1/3;
   let dx1 = 1/4;
   let dy1 = 1/4;
   let dx2 = 1/5;
   let dy2 = 1/5;
   let r = Math.floor((Math.random() * 255) +1);
   let dr= .25;
   let g = Math.floor((Math.random() * 255) +1);
   let dg= .25;
   let b = Math.floor((Math.random()*255)+1);
   let db = .25;
   circleArray.push(new Circle(x,y,x1,y1,x2,y2,dx,dy,dx1,dy1,dx2,dy2,radius,dRadius,r,dr,g,dg,b,db))
}


function animate(){
        requestAnimationFrame(animate);
        // c.clearRect(0, 0, innerWidth, innerHeight);
        // c.fillRect(0,0,canvas.width,canvas.height,)
        // c.fillStyle="rgba(0,0,0,0.015)";
        for(i=0;i<circleArray.length; i++){
            circleArray[i].update();
        } 
    }

   animate();











    

  