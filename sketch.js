var path,runner;
var pathImg,runnerImg;

function preload(){
  pathImg = loadImage("path.png");
  runnerImg=loadImage("Runner-1.png","Runner-2.png")
  pathImg = loadAnimation("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

  

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg);
 path.velocityY = 4;
 
  path.scale = 1.2;
  
  runnerImg = createSprite(100,50,100,50)
  runnerImg.addImage(runnerImg)
  runnerImg.scale = 0.25
  
  
  



}

function draw() {
  background(0);
  runnerImg.addAnimation("Runner-1.png","Runner-2.png")
  if(path.y> 400){
    path.y = height/2
  }
  

  drawSprites()
}
