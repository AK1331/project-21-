var bullet;
var wall,thickness;
var speed;
var weight;


function setup(){
  createCanvas(1500,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  
  bullet=createSprite(300,200,25,15);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw(){
  background(0,0,0);
   
  if (hasCollided(bullet,wall)){

    bullet.velocityX=0;
    bullet.x=wall.x-30;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if (damage<10){
      wall.shapeColor=color(0,255,0);
    }
  
  }
  
  
  
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}