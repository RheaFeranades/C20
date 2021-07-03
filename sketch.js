var car,wall
var speed,weight

function setup() {

  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (car.width +wall.width)/2){
car.velocityX=0
var deformmation=0.5*weight*speed*speed/22500
 if(deformmation>180){
car.shapeColor="red"
 }
 // Greater than 80 and less than 180
 if(deformmation>80 && deformmation<180){
  car.shapeColor="orange"

  }
  if(deformmation<80){
    car.shapeColor="green"
     }

}
  drawSprites();
}