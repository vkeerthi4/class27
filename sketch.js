var bunny;
var target;
var edges;
function preload() {
  //load game assets
 
}

function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  bunny = createSprite(40,550,30,30); 
  target = createSprite(560,40,30,30);
  brick1 = createSprite(300,120,100,20);
  brick1.velocityX = 5;
  brick2 = createSprite(300,320,100,20);
  brick2.velocityX = -5;
  target.shapeColor = "orange"
  brick2.shapeColor = "white"
  brick1.shapeColor = "white"
  brick3 = createSprite(300,220,100,20);
  brick3.velocityX = 5;
  brick4 = createSprite(300,420,100,20);
  brick4.velocityX = -5;
  target.shapeColor = "orange"
  brick4.shapeColor = "white"
  brick3.shapeColor = "white"
 
}

function draw() {
  background("purple");  
 
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  brick1.bounceOff(edges[1]);
  brick1.bounceOff(edges[0]);
  brick2.bounceOff(edges[1]);
  brick2.bounceOff(edges[0]);
  brick3.bounceOff(edges[1]);
  brick3.bounceOff(edges[0]);
  brick4.bounceOff(edges[1]);
  brick4.bounceOff(edges[0]);
if(keyDown("up")){
  bunny.y=bunny.y-3;
}
if(keyDown("down")){
  bunny.y=bunny.y+3;
}
if(keyDown("left")){
  bunny.x=bunny.x-3;
}
if(keyDown("right")){
  bunny.x=bunny.x+3;
}
textSize(20)
if(bunny.isTouching(target)){
  text("YOU WIN",200,200);
}
if(bunny.isTouching(brick1)){
  brick1.velocityX=0;
  brick2.velocityX=0;
  brick3.velocityX=0;
  brick4.velocityX=0;
  text("GAME OVER",200,200);
}
if(bunny.isTouching(brick2)){
  brick1.velocityX=0;
  brick2.velocityX=0;
  brick3.velocityX=0;
  brick4.velocityX=0;
  text("GAME OVER",200,200);
}
if(bunny.isTouching(brick3)){
  brick1.velocityX=0;
  brick2.velocityX=0;
  brick3.velocityX=0;
  brick4.velocityX=0;
  text("GAME OVER",200,200);
}
if(bunny.isTouching(brick4)){
  brick1.velocityX=0;
  brick2.velocityX=0;
  brick3.velocityX=0;
  brick4.velocityX=0;
  text("GAME OVER",200,200);
}
  drawSprites();
}
