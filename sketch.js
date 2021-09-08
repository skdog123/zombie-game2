const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

function preload() {
  zombie1 = loadImage("assets/zombie1.png")
  zombie2 = loadImage("assets/zombie2.png")
  zombie3 = loadImage("assets/zombie3.png")
  zombie4 = loadImage("assets/zombie4.png")
  bg = loadImage("assets/background.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground= new Base(width/2,height-10,width,20)
leftWall= new Base(100,height-300,200,600)
rightWall= new Base(width-100,height-300,200,600)
stone = new Stone(random(width/2-120,width/2+120),0,25)
stone2 = new Stone(random(width/2-120,width/2+120),0,25)
stone3 = new Stone(random(width/2-120,width/2+120),0,25)
stone4 = new Stone(random(width/2-120,width/2+120),0,25)
stone5 = new Stone(random(width/2-120,width/2+120),0,25)
stone6 = new Stone(random(width/2-120,width/2+120),0,25)
stone7 = new Stone(random(width/2-120,width/2+120),0,25)
stone8 = new Stone(random(width/2-120,width/2+120),0,25)

zombie = createSprite(width / 2, height - 110);
zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
zombie.scale = 0.1;
zombie.velocityX = 10;

breakButton = createButton("");
breakButton.position(width - 200, height / 2 - 50);
breakButton.class("breakbutton");
breakButton.mouseClicked(handleButtonPress);

bridge=new Bridge(30,{x:200,y:height/2-70})
secondConnect = new Link(bridge,{x:width-230,y:height/2-70})
var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:windowWidth, height:windowHeight, wireframes:false } }); Matter.Render.run(render);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.show()
  //leftWall.show()
  //rightWall.show()
  bridge.show()
  stone.show()
  stone2.show()
  stone3.show()
  stone4.show()
  stone5.show()
  stone6.show()
  stone7.show()
  stone8.show()

  if (zombie.x >= width - 300) {
    zombie.velocityX = -10;
    zombie.changeAnimation("righttoleft");  
    }  
    if (zombie.x <= 300) {   
      zombie.velocityX = 10;
    zombie.changeAnimation("lefttoright"); 
    }  
    drawSprites()
}

function handleButtonPress() {
  secondConnect.detach();
  setTimeout(() => {
  bridge.break();
  }, 1500);
  }