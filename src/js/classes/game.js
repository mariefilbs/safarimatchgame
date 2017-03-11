import Tile from './tiles';
import $ from 'jquery';
import _ from 'lodash';
// import { game } from '../main';

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
let doubledArray = _.shuffle(tileImages.concat(tileImages));
var turnCount = 0;

class Game {
    constructor () {
        this.tiles = [];
        for(var i = 0; i < doubledArray.length; i++) {
            this.tiles.push(new Tile(i, doubledArray[i]));
        }
        //console.log(this.tiles)
        this.prevSelected = null;
        this.current = null;
    }

    selectTile(id) {
        let tile = _.find(this.tiles, { id: id });
        turnCount++;
        console.log(turnCount);
        tile.faceUp();
        this.updateTiles(tile);
        if (turnCount > 2) {
            tile = null;
        }

    }

    updateTiles (tile) {
      // First click...
      if (this.prevSelected == null) {
          this.prevSelected = tile;
          this.template();
      // Second click
      } else {
          this.current = tile;
          this.template();
          this.checkMatch();
          turnCount = 0;

      }
    }

    checkMatch () {
        setTimeout(function(game) {
            if (!game.compareTiles()) {
                game.prevSelected.faceDown();
                game.current.faceDown();
            }
            game.prevSelected = null;
            game.current = null;
            game.template();
        }, 1000, this);
    }

    compareTiles () {
        return this.prevSelected.backImage == this.current.backImage;
    }

    template() {
        var tilesHtml = "";

        this.tiles.forEach(function (tile) {
          //console.log(index);
            tilesHtml += `<div><img id="${tile.id}" src="${tile.currentImage}" class="each-grid"></div>`;
        });

        $('#memory-board').html(`
            <div class="column is-third">
              ${tilesHtml}
            </div>
          `);

        // for(var i = 0; i < this.tiles.length; i++){
        //     //console.log(this.tiles.length);
        //     $('#memory-board').append(`<div class="column each-grid"><img src="${this.tiles[i].currentImage}"/></div>`);
        //
        // }
    }
}

export default Game;

//
