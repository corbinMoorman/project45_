var gameState = "start"
var fsImg1, fsImg2
var rightRunanimation, leftRunanimation
var jump1, jump2
var jL, jR
var runL, runR
var bgImg
var futureSldr

function preload(){
bgImg = loadImage("background.png")  
fsImg1 = loadAnimation("future_soldier1.png")
fsImg2 = loadAnimation("future_soldier2.png")
jump1 = loadAnimation("fsldr_jump1.png")
jump2 = loadAnimation("fsldr_jump2.png")
rightRunanimation = loadAnimation("fsldr_runR1.png","fsldr_runR2.png","fsldr_runR3.png","fsldr_runR4.png","fsldr_runR5.png","fsldr_runR6.png")
leftRunanimation = loadAnimation("fsldr_runL2.png","fsldr_runL3.png","fsldr_runL4.png","fsldr_runL5.png")
}
function setup() {
  createCanvas(900,600);
 
  startButton = createSprite(500, 340, 50, 50);
  startButton.shapeColor = "green"

  //PC
  futureSldr = createSprite(466,486,70,70)
  futureSldr.addAnimation("normal1",fsImg1)
  futureSldr.addAnimation("jumpL",jump1)
  futureSldr.addAnimation("jumpR",jump2)
  futureSldr.addAnimation("RunL",leftRunanimation)
  futureSldr.addAnimation("RunR",rightRunanimation)
  futureSldr.changeAnimation("normal1",fsImg1)
  futureSldr.scale = 2

  //invisibleGround
  invisibleGround = createSprite(450,540,900,10)
  invisibleGround.visible = false


}

function draw() {
  background(bgImg) 
  fill ("white")
  text(mouseX+','+ mouseY,mouseX,mouseY);

   // Start 
   if(gameState ===  "start"){
    textSize(40) 
    fill ("red")
    stroke ("black")
    strokeWeight (4)
    text("Zombie Slayer",350, 250)

    //change gameState to play
    if(mousePressedOver(startButton)){
     gameState = "play"
     startButton.destroy()
    }
   }

   //play state
   if(gameState ===  "play"){
    //PC movement
    if(keyWentDown(LEFT_ARROW)){
      futureSldr.velocityX = -5
      futureSldr.changeAnimation("RunL")

    } 
    if(keyWentUp(LEFT_ARROW)){
      
      futureSldr.changeAnimation("normal1")
      futureSldr.velocityX = 0
    } 
    if(keyWentDown(RIGHT_ARROW)){
      futureSldr.velocityX = 5
      futureSldr.changeAnimation("RunR")
    }
    if(keyWentUp(RIGHT_ARROW)){
    
      futureSldr.changeAnimation("normal1")
      futureSldr.velocityX = 0
    } 
    if(keyWentDown(UP_ARROW)){
      futureSldr.velocityY = -20
      futureSldr.changeAnimation("jumpL")
    }
    if(keyWentUp(UP_ARROW)){
      futureSldr.changeAnimation("normal1")
      futureSldr.velocityY = 1
    }
    
    

    //applying Gravity
    futureSldr.velocityY = futureSldr.velocityY +1
   }

   //colliding the future soldier with the ground 
   futureSldr.collide(invisibleGround)
  
  drawSprites();
}