const canvas = document.querySelector("canvas");
const c =canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

   
function Circle(x,y,dx,dy,radius,dRadius,r,dr,g,dg,b,db){
    this.x =x;
    this.y =y;
    this.dx = dx;
    this.dy = dy;
    this.radius = Math.floor((Math.random() * 100) +6);
    this.dRadius =1;
    this.r = Math.floor((Math.random() * 255) +1);
    this.dr= .25;
    this.g = Math.floor((Math.random() * 255) +1);
    this.dg= .25;
    this.b = Math.floor((Math.random()* 255)+1);
    this.db = .25;

    this.draw = function (){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        // c.lineTo(this.x,this.y);  /*Line maker  */
        // c.lineTo(this.x*x,this.y*y);
        c.strokeStyle='rgb(' + this.r +',' + this.g + ',' + this.b + ')';
        c.stroke();
        // c.fillStyle = 'rgb(' + this.r +',' + this.g + ',' + this.b + ')';
        // c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
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
   let dRadius =1;
   let x = Math.random() * (innerWidth - radius* 2) + radius;
   let y = Math.random()* (innerHeight - radius *2) +  radius;
   let dx = 1/2 
   let dy = 1
   let r = Math.floor((Math.random() * 255) +1);
   let dr= .25;
   let g = Math.floor((Math.random() * 255) +1);
   let dg= .25;
   let b = Math.floor((Math.random()*255)+1);
   let db = .25;
   circleArray.push(new Circle(x,y,dx,dy,radius,dRadius,r,dr,g,dg,b,db))
}


function animate(){
        requestAnimationFrame(animate);
        // c.clearRect(0, 0, innerWidth, innerHeight);  
        for(i=0;i<circleArray.length; i++){
            circleArray[i].update();
        } 
    }

   animate();











    

  