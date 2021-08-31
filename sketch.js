var Nihal 
function setup() {
  createCanvas(400,400);
Nihal = createSprite(200,200,100,100);
Nihal.shapeColor = "Green"
}

function draw() {
background(30);
if (keyDown (RIGHT_ARROW)) {
Nihal.position.x +=5  
}
if (keyDown(LEFT_ARROW)) {
  Nihal.position.x -=5
}
if (keyDown(UP_ARROW)) {
  Nihal.position.y -=5
}
if (keyDown(DOWN_ARROW)) {
  Nihal.position.y +=5
}


drawSprites();
}




