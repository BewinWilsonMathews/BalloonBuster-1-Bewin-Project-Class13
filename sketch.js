//create all the variables
var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score = 0;
var lives = 3

function preload(){
  //load all images
  backgroundImage = loadImage("background0.png");

  arrowImage = loadImage("arrow0.png");

  bowImage = loadImage("bow0.png");

  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //create all the groups
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();

  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0    
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }

  if(score == 10){
    console.log("You Win")
  }

  //destroying the balloon when it touches bow
   if(redB.x >= 220){
     redB.destroyEach()
     lives = lives - 1
   }

   if(blueB.x >= 220){
    blueB.destroyEach()
    lives = lives - 1
  }

  if(pinkB.x >= 220){
    pinkB.destroyEach()
    lives = lives - 1
  }

  if(greenB.x >= 220){
    greenB.destroyEach()
    lives = lives - 1
  }

  //creating continous enemies
  if (frameCount % 50 ===0){
    var select_balloon = Math.round(random(1,4));
    switch(select_balloon){
      case 1: redBalloon();
              break;
      case 2: blueBalloon()
              break;
      case 3: greenBalloon();
              break;
      case 4: pinkBalloon();
              break;
      default: break;
    }
  }  

  //make the balloon disappear when arrow touches it
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 1;
}

 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 1;
}

 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 1;
}

if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 1;
}

  drawSprites();

//displaying the score
fill("green")
textSize(15)
text("Score: "+ score, 310,50);

//displaying the lives
fill("red")
textSize(15)
text("Lives: "+ lives, 240,50);

//credit
fill("black")
textSize(20)
text("Made By Bewin",10,50)

}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}

 //creating all the balloons
 function redBalloon() {
   var red = createSprite(0,Math.round(random(40, 360)), 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
   redB.add(red);
 }

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(40, 360)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(40, 360)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(40, 360)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.25
  pinkB.add(pink);
}
