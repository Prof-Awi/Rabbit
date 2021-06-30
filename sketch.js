var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createapples()
  createleaves()
  drawSprites();
  rabbit.x = World.mouseX
}


function createapples(){
  if (frameCount % 80 === 0){
    var num = Math.round(random(30,371))
    apple = createSprite(num,-30)
    apple.addImage(appleImg)
    apple.scale = 0.2
    var num2 = Math.round(random(7,9))
    apple.velocityY = num2
    apple.lifetime = (400/num2)+20
  }
}


function createleaves(){
  if (frameCount % 80 === 0){
    var num3 = Math.round(random(30,371))
    leaf = createSprite(num3,-30)
    leaf.addImage(leafImg)
    leaf.scale = 0.4
    var num4 = Math.round(random(1,3))
    leaf.velocityY = num4
    leaf.lifetime = (400/num4)+10
  }
}