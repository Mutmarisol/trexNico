var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var numeros = [1,5,3,5,5,2,2,5,96,6,3,32,3,232,52,6]


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  for ( var i=2; i<9; i++){
    console.log(numeros[i]);
  }
  
  //crear sprite de trex 
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //establecer color de fondo
  background(220);
  
  
  
  //hacer que el trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evitar que el trex salte
  trex.collide(invisibleGround);

  
  drawSprites();
  
}



