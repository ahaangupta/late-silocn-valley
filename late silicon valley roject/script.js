var astroid
var astroidImg
var astroid2
var astroid3
var astroid4
var ship
var shipImg

function  preload() {
astroidImg = loadImage('astroid.png')  
shipImg = loadImage('spacecraft.png')  
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    ship = createSprite(windowWidth/2,windowHeight/2,40,40)
    ship.addImage(shipImg)


}

function draw(){
    background("black")
drawSprites()

}