var canvas;
var music;
var Gsurface, Rsurface, Bsurface, Ysurface;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    Gsurface = createSprite(2,590,200,20);
    Gsurface.shapeColor="Green";
    Rsurface = createSprite(200,590,200,20);
    Rsurface.shapeColor="Red";
    Bsurface = createSprite(400,590,200,20);
    Bsurface.shapeColor="Blue";
    Ysurface = createSprite(600,590,200,20);
    Ysurface.shapeColor="Yellow";

    //create box sprite and give velocity
    box = createSprite(250,300,30,30);
    box.velocityY=-5
    box.velocityX=3
    box.shapeColor="Black";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    



    //add condition to check if box touching surface and make it box
    /*if(keyDown=LEFT_ARROW){
        box.velocityX=-5
    }
    if(keyDown=RIGHT_ARROW){
        box.velocityX=+5
    }
    if(keyDown=DOWN_ARROW){
        box.velocityY=+5
    }
    if(keyDown=UP_ARROW){
        box.velocityX=-5
    }
   */
    if(box.isTouching(Gsurface)&& box.bounceOff(Gsurface)){
        box.shapeColor="Green";

    }
   
    if(box.isTouching(Rsurface)&& box.bounceOff(Rsurface)){
        box.shapeColor="Red";
    }
   
    if(box.isTouching(Bsurface)&& box.bounceOff(Bsurface)){
        box.shapeColor="Blue";
    }
   
    if(box.isTouching(Ysurface)&& box.bounceOff(Ysurface)){
        box.shapeColor="Yellow";
    }
   
   drawSprites();
}
