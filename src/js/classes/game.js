import Tile from './tiles';
import _ from 'lodash';

//set up Images array
var tileImages = [
    '/images/baby2.jpg',
    '/images/blackdahlia.jpg',
    '/images/blazesnake.jpg',
    '/images/tarantula.jpg',
    '/images/chameleon.jpg',
    '/images/drogon.png',
    '/images/guineapig.png',
    '/images/hedgehog.png',
    '/images/iguana.jpg',
    '/images/ziggythecaique.jpeg'
];

//double the images in the tileImages array
var doubledArray = _.shuffle(tileImages.concat(tileImages));

class Game {
    constructor () {
        this.tiles = [];
        for(var i = 0; i < doubledArray.length; i++) {
            this.tiles.push(new Tile(i, doubledArray[i]));
        }
        console.log();
        this.prevSelected = null;
        this.current = null;
    }

    selectTile(tile) {
        tile.faceUp();
        if (this.prevSelected == null){
            this.prevSelected = tile;
        } else {
            this.current = tile;
        }
    }
    compareTiles() {
        let comparison = this.prevSelected.backImage == this.current.backImage;
        this.prevSelected = null;
        this.current = null;
        return comparison;
    }

    template() {
        let grid = `<div class="each-grid">test</div>`;
        return grid;
    }
}

export default Game;

//
