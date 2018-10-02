function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
	createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(6);
}

function draw() {
  // put drawing code here
	background(0);
	//central
	push();
  translate(width/2, height/2);
  noFill();
  stroke(lerpColor(color('#000000'), color('#ffffff'), frameCount/100));
  for (var a = 0; a <= 180; a ++) {
    if (a<=frameCount*2){
    line(100*cos(a*2), -100*sin(a*2),100,0)}
  }
  pop();
	push();
	noFill();
	stroke(lerpColor(color('#000000'), color('#ffffff'), frameCount/100));
	ellipse(770, 360, 380, 100);
	pop();
	//bottomright
	push();
	translate(width*0.8, height*0.7);
	scale(1.5);
	noFill();
	stroke(lerpColor(color('#2c2487'), color('#fff538'), frameCount/50));
	for (var a = 0; a <= 180; a ++) {
		if (a<=frameCount*5){
		line(-100*cos(a*2), 100*sin(a*2),-100,0)}
	}
	pop();
	//right
	push();
	translate(width*0.7, height/4);
	scale(0.9);
	noFill();
	stroke(lerpColor(color('#07911e'), color('#7f0606'), frameCount/90));
	for (var a = 0; a <= 180; a ++) {
		if (a<=frameCount*6){
		line(-100*cos(a*2), 100*sin(a*2),-100,0)}
	}
	pop();
	//top
	push();
	translate(width/2, height/7);
	scale(0.5);
	noFill();
	stroke(lerpColor(color('#7f0606'), color('#07911e'), frameCount/80));
	for (var a = 0; a <= 180; a ++) {
		if (a<=frameCount*3){
		line(-100*cos(a*2), 100*sin(a*2),-100,0)}
	}
	pop();
	//bottom
	push();
	translate(width/3, height*0.8);
	scale(0.7);
	noFill();
	stroke(lerpColor(color('#fff538'), color('#2c2487'), frameCount/60));
	for (var a = 0; a <= 180; a ++) {
		if (a<=frameCount*3){
		line(-100*cos(a*2), 100*sin(a*2),-100,0)}
	}
	pop();
	//left
	push();
	translate(width/5, height/3);
	scale(1.2);
	noFill();
	stroke(lerpColor(color('#7f5606'), color('#fc9005'), frameCount/50));
	for (var a = 0; a <= 180; a ++) {
		if (a<=frameCount*5){
		line(-100*cos(a*2), 100*sin(a*2),-100,0)}
	}
	pop();

}
