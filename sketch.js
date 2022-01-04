var Box;

function setup() {
  createCanvas(400,400);
  Box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if (keyDown("UP_ARROW")){
    Box.y = Box.y - 1;
  }
  if (keyDown("DOWN_ARROW")){
    Box.y = Box.y + 1;
  }
  if (keyDown("LEFT_ARROW")){
    Box.x = Box.x - 1;
  }
  if (keyDown("RIGHT_ARROW")){
    Box.x = Box.x + 1;
  }
  drawSprites();

}




