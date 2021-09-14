var runner,runner_running;
var path,pathImage;
var left_boundary,right_boundary;
var topic,topicImage;
function preload(){
  
  //pre-load images
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadAnimation("path.png");
  topicImage = loadAnimation("Subway Surfers Image.png"); 
}

function setup(){
  createCanvas(600,600);
  
  //creating a moving background
  path = createSprite(300,300);
  path.addAnimation("path",pathImage);
  path.scale = 1.3;
  path.velocityY = 4; 
  path.y=path.height/230;
 
  //creating topic for game
  topic = createSprite(300,76,200,0);
  topic.addAnimation("topic",topicImage);
  topic.scale = 0.4;
  
  //creating a runner sprite
  runner = createSprite(500,350,400,400);
  runner.addAnimation("running",runner_running);
  runner.scale = 0.1; 

  //creating boundaries
   left_boundary = createSprite(0,500,300,800);
   right_boundary = createSprite(590,500,280,800);
   left_boundary.visible=false;
   right_boundary.visible=false;
}
function draw() {
  background("black");

 runner.x = World.mouseX;
  
 //code to reset background
if(path.y > 600){
  path.y = height/2;
}
 

edges = createEdgeSprites();
runner.collide(left_boundary);
runner.collide(right_boundary);
runner.collide(edges[3]); 

drawSprites();

}
