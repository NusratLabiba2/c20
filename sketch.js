var fixracked, movingracked;

function setup() {
  createCanvas(1200,800);
  fixracked = createSprite(200, 200, 50, 80);
  fixracked.shapeColor = "green"
  movingracked = createSprite(400, 200, 80, 30);
  movingracked.shapeColor = "green"
}

function draw() {
  background(0);  
  movingracked.x = World.mouseX
  movingracked.y = World.mouseY
  if (movingracked.x - fixracked.x < fixracked.width/2 + movingracked.width/2
    && fixracked.x - movingracked.x < fixracked.width/2 + movingracked.width/2
    && movingracked.y - fixracked.y < fixracked.height/2 + movingracked.height/2
    && fixracked.y - movingracked.y < fixracked.height/2 + movingracked.height/2) {
    movingracked.shapeColor = "red";
    fixracked.shapeColor = "red";
  }
  else {
    movingracked.shapeColor = "green";
    fixracked.shapeColor = "green";
  }
    
  drawSprites();
}