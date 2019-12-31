


function setup() {
  createCanvas(800,800);
  //structure
  var s1=createSprite(225,225,350,90);
  //pillar
  var s2=createSprite(90,150,80,90);
  var s3=createSprite(90,120,100,50);
  var s4=createSprite(360,200,80,140);
  var s5=createSprite(360,120,100,50);
 
 //blocks
  var s5=createSprite(53,85,25,30); 
  var s6=createSprite(90,85,25,30);
  var s7=createSprite(127,85,25,30);
  var s8=createSprite(397,85,25,30);
  var s9=createSprite(360,85,25,30);
  var s10=createSprite(322,85,25,30);
  //door
var d1=createSprite(120,320,140,100);
var d1=createSprite(330,320,140,100);
//design
var d3=createSprite(225,180,165,50);
var d4=createSprite(163,150,35,35);
var d4=createSprite(205,150,35,35);
var d4=createSprite(250,150,35,35);
var d4=createSprite(290,150,35,35);
//flag
var f1 =createSprite(220,130,10,70);
var flag=createSprite(233,100,35,25);

var f2 =createSprite(360,70,10,70);
var flag=createSprite(370,40,30,20,);

var f3 =createSprite(90,70,10,70);
var flag=createSprite(80,40,30,20);
}



function draw() {
  background(255,255,255);  
  drawSprites();
  }