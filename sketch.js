var a,aImg1,aImg2,aImg3;
var b,bImg1,bImg2,bImg3;
var bg;
var to;

function preload() {
    //load the images here
    bg=loadImage('images/garden.png');
aImg1=loadAnimation('images/cat1.png');
aImg2=loadAnimation('images/cat2.png','images/cat3.png');
aImg3=loadAnimation('images/cat4.png');
bImg=loadAnimation('images/mouse1.png');
bImg2=loadAnimation('images/mouse2.png','images/mouse3.png');
bImg3=loadAnimation('images/mouse4.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    
    a=createSprite(880,600);
    a.addAnimation('sg',aImg1)
    a.scale=0.2

    b=createSprite(200,600);
    b.addAnimation('hj',bImg1);
    b.scale=0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(a.x-b.x<(a.width-b.width)/2){
a.velocityX=0;
a.addAnimation('bruh',aImg3);
a.x=300;
a.scale=0.2
a.changeAnimation('bruh');

b.addAnimation('yo',bImg3);
b.scale=0.15
b.changeAnimation('yo');


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyPressed === LEFT_ARROW){
    a.velocityX=-5
    a.addAnimation('rrt',aImg2);
    a.changeAnimation('rrt');

    b.addAnimation('tty',bImg2);
    b.frameDelay=25
    b.changeAnimation('tty')
}

}
