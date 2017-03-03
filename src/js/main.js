import $ from 'jquery';


//defining the 'tile' constructor
class TILE  {
    constructor (x, y, face) {
        this.x = x;
        this.y = y;
        this.face = face;
        this.height = 70;
    }
}

//Tile.prototype.drawFaceDown = function()

//Tile.prototype.drawFaceUp = function()

//Tile.prototype.isMouseOver = function(x, y)


// defining the table//global variables
var NUM_COLS = 5;
var NUM_ROWS = 4;


// array of images to generate through
var faces = [
    getImage("/images/baby2.jpg"),
    getImage("/images/blackdahlia.jpg"),
    getImage("/images/blazesnake.jpg"),
    getImage("/images/camelkiss.jpg"),
    getImage("/images/chameleon.jpg"),
    getImage("/images/drogon.png"),
    getImage("/images/guineapig.png"),
    getImage("/images/hedgehog.png"),
    getImage("/images/iguana.jpg"),
    getImage("/images/leeloumacaw.jpg"),
    getImage("/images/tarantula.jpg"),
    getImage("/images/tortoise.jpg"),
    getImage("/images/ziggythecaique.jpeg")
];
