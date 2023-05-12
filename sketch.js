var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");

  //loadAnimation de boy (niño)
  boyImg = loadAnimation ("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
 
}

function setup(){
  
createCanvas(400,400);
 
//crear sprite de path (camino) 
 path = createSprite(200,200,50,50);
 path.addAnimation("pathMov",pathImg);
 path.scale = 1.6;
 path.velocityY = 4;

//crear sprite de boy (niño)
boy = createSprite(200,300,50,50);
boy.addAnimation("runner",boyImg);
boy.scale = 0.8;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(-10,0,20,800);
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,20,800);
rightBoundary.visible = false;
}

function draw() {
  
  background(0);
  
  // boy moviéndose en el eje X con el mouse
  boy.x = mouseX;
 
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
