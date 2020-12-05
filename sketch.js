
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var BananasGroup,StoneGroup;
var score;
var ground;
var SurvivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,300);
 monkey=createSprite(70,250,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
   
  ground=createSprite(500,290,1200,20);
  ground.velocityX = -3;
 BananasGroup = new Group();
  StoneGroup = new Group();
  
 SurvivalTime = 0;
  
}


function draw() {
  background("Cyan");
  
   textSize(20);
   text("Survival Time: "+ SurvivalTime,300,50);
 
  if(keyDown("space")) {
        monkey.velocityY = -12;
        
    }
    if(ground.x < 300) {
      ground.x = 300;
    }
   monkey.velocityY = monkey.velocityY + 0.8;
  
  SurvivalTime = SurvivalTime + Math.round(getFrameRate()/63);
   
  
    monkey.collide(ground);
  spawnBananas();
  spawnObstacles();
  

  drawSprites();
  
  if(StoneGroup.isTouching(monkey)){
    monkey.velocityY = 0;
    ground.velocityX = 0;
    BananasGroup.setLifetimeEach(-1);
    StoneGroup.setLifetimeEach(-1);
    SurvivalTime=0;
    BananasGroup.setVelocityXEach(0);
    StoneGroup.setVelocityXEach(0);
     
  }
  
  
  
}

 function spawnBananas(){
  if (frameCount % 80 === 0) {
    var bananas = createSprite(650,270,20,20);
    bananas.addAnimation("bananas",bananaImage);
    bananas.scale=0.1;
    bananas.y = Math.round(random(75,150));
    bananas.velocityX=-2;
    bananas.lifetime=300;
    BananasGroup.add(bananas);
  }
}

function spawnObstacles(){
  if (frameCount % 300 === 0) {
    var stones = createSprite(800,262,20,20);
    stones.addAnimation("stones",obstacleImage);
    stones.scale=0.1;
    stones.x = Math.round(random(600,700));
    stones.velocityX=-2;
    stones.lifetime=300;
    StoneGroup.add(stones);
  
  }
}








