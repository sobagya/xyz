var bullet , wall;
var speed,weight,thickness,lbullet,lwall;

function setup(){
createCanvas(1000,1000)
speed = random(223,321)
weight = random(30,52)
bullet = createSprite(50,200,50,50);
wall = createSprite(800,200,thickness,height/2)
bullet.velocityX = speed;
thickness = random(22,83)

  }


function draw(){
  

background("white")


  


if(hasCollided(bullet,wall)){
  car.velocityX=0;
var damage =0.5 * weight * speed * speed/(thickness*thckness*thickness);
if(damage > 10) {
wall.shapeColor = color(255,0,0);
}

if(damage < 10 ) {
wall.shapeColor = color(0,255,0);
}
}
drawSprites();  

  }


function hasCollided(lbullet,lwall){
bulletRightEdge= lbullet.x + lbullet.width;
wallLeftEdge= lwall.x;
if(bulletRightEdge>=wallLeftEdge){

return true
}
return false


}


