const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
var options ={

isStatic:true
};
playerBase =Bodies.rectangle(200,300,100,100,options)
weorld.add(world,playerBase);
  //criar corpo do jogador
 player = Bodies.rectangle(150,50,100,options);
 world.add(World.palyer)


}

function draw() {
  background(backgroundImg);
Engine.update(engine);
  //exibir a imagem do jogador usando a função image()

Image(baseimage,playerBase.position.x,playerBase.position.y ,100,100)
  //exibir a imagem da base do jogador usando a função image()
image (playerBase,player.position.x.player.position.y,50,100)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}

