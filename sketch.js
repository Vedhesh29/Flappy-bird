var bird,birdImg; 
var cityImg, city;
var pipe,pipeImg, pipeG; 
var gameState = "play";
var a,b,c;

a = 120; 
b = 380; 


function preload(){
birdImg = loadImage("bird.png"); 
cityImg = loadImage("city.png"); 
pipeImg = loadImage("pipe.png");
}

function setup() {
  createCanvas(600,400);

 city = createSprite(350,200,600,600);
 city.addImage(cityImg);
 city.scale=0.9;



 bird = createSprite(200,200,20,20);
 bird.addImage(birdImg);
 bird.scale=0.1;

pipeG = new Group();

}

function draw() {
  background(0);  


  if (gameState === "play"){
    if (keyDown("space")){
      bird.velocityY=-5;
    }
    bird.velocityY = bird.velocityY+0.5; 
  
    if (pipeG.isTouching(bird) || bird.y>400){
      bird.destroy();
      gameState  = "end";
    }
  
   spawnPipe();
    drawSprites();
  }


  if (gameState==="end"){
    fill("white");
    textSize(25);
    text("GAME OVER", 250,200);

  }


  
}



function spawnPipe(){
  if (frameCount%100===0){
    pipe = createSprite(600,400,30,50);
    pipe.addImage(pipeImg);
    pipe.scale=0.3;
    pipe.lifetime=800;
    pipe.setCollider("rectangle", 0,0,200,800);


    c=Math.round(random(1,2));

    if (c === 1){
      pipe.y = a; 
    }

    else{
      pipe.y= b; 
    }

  
    
    pipe.velocityX=-4;

    pipeG.add(pipe);
    
    
  }
}