var fixedRect , movingRect;
var rect1,rect2;



function setup() {
  createCanvas(1200,800);
fixedRect=createSprite(400,400,50,80);
fixedRect.shapeColor="green";
fixedRect.debug=true;

movingRect=createSprite(400,400,80,30);
movingRect.shapeColor="green";
movingRect.debug=true;

rect1=createSprite(1000,100,50,50);
rect1.shapeColor="green";
rect1.debug=true;
rect1.velocityY=+5;

rect2=createSprite(1000,800,50,50);
rect2.shapeColor="green";
rect2.debug=true;
rect2.velocityY=-5;
}

function draw() {
  background(0);  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
    
  }
else{

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

if(rect2.y-rect1.y<rect1.height/2+rect2.height/2
  &&rect1.y-rect2.y<rect1.height/2+rect2.height/2){
    rect1.velocityY=rect1.velocityY*(-1);
    rect2.velocityY=rect2.velocityY*(-1);
  }



  drawSprites();
}