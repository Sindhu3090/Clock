var hr;
var mn;
var sec;
var secAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  
  

}

function draw() {
  background(1);
  translate(200,200)
  rotate(-90);

  hr=hour();
  mn=minute();
  sec=second();

  strokeWeight(4);
  stroke(255,0,0);
  noFill();
  secAngle=map(sec,0,60,0,360);
  arc(0,0,300,300,0,secAngle);

  stroke(0,255,0);
  mnAngle=map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  stroke(0,0,255);
  hrAngle=map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(secAngle);;
  stroke(255,0,0);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);;
  stroke(0,255,0);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);;
  stroke(0,0,255);
  line(0,0,50,0);
  pop();


  /*fill(255);
  noStroke();
  text(hr+':'+mn+':'+sec,10,200)*/
  drawSprites();
}