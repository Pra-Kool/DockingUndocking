var iss, issImg
var spacebgImg
var spacecraft1, spacecraft2, spacecraft3, spacecraft4, spacecraft
var hasDocked=false

function preload(){
issImg = loadImage('./assets/iss.png')
spacebgImg = loadImage('./assets/spacebg.png')
spacecraft1 = loadImage('./assets/spacecraft1.png')
spacecraft2 = loadImage('./assets/spacecraft2.png')
spacecraft3 = loadImage('./assets/spacecraft3.png')
spacecraft4 = loadImage('./assets/spacecraft4.png')
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  backgroundImage(spacebgImg);
  iss.createSprite(50, 50, 100,100)
  iss.addImage(issImg)
  iss.scale=0.5

  spacecraft.createSprite(70,70, 200, 200)
  spacecraft.addImage(spacecraft1)

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(!hasdocked){
    spacecraft.x=random(100, 300)
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.changeImage(spacecraft4)
    spacecraft.x=spacecraft.x-5
  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.changeImage(spacecraft3)
    spacecraft.x=spacecraft.x+5
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft.changeImage(spacecraft2)
  }

  if(spacecraft.isTouching(iss)){
    hasDocked=true
    text("Docking Successful!")

  }
}