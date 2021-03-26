var garden , gardenImg
var tom , tom_running , tom1 , tom2
var jerry , jerry_teasing , jerry1 , jerry2

function preload() {
    //load the images here

    gardenImg=
    loadImage('images/garden.png')

    tom1 =
    loadAnimation('images/cat1.png')

    tom2 =
    loadAnimation('images/cat4.png')

    tom_running=
    loadAnimation('images/cat2.png' , 'images/cat3.png')

    jerry1 =
    loadAnimation('images/mouse1.png')

    jerry2 =
    loadAnimation('images/mouse4.png')

    jerry_teasing=
    loadAnimation('images/mouse2.png' , 'images/mouse3.png')
    
}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites hererry

    garden=createSprite(250,250,30,30)
    garden.addImage(gardenImg)

    tom=createSprite(600,450,30,30);
    tom.addAnimation("running" , tom1);
    tom.scale=0.2;

    jerry=createSprite(100,450,20,20)
    jerry.addAnimation("teasing" , jerry1)
    jerry.scale=0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){

        tom.addAnimation('2',tom2)
        tom.changeAnimation('2')
        jerry.addAnimation('2',jerry2)
        jerry.changeAnimation('2')
        tom.velocityX=0

    }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    
    //For moving and changing animation write code here

    tom.velocityX=-2
    tom.addAnimation('running',tom_running)
    tom.changeAnimation('running')
    jerry.addAnimation('teasing',jerry_teasing)
    jerry.changeAnimation('teasing')
    
}
  

}
