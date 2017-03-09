import Tile from './tiles';
import $ from 'jquery';
import _ from 'lodash';
import { game } from '../main';

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
        console.log(id)
        let tile = _.find(this.tiles, { id: id });
        //brit's problem solving \/
        // let tile = _.find(this.tiles, function (obj, key, collection) {
        //   if (obj.id === id) {
        //     console.log("found it");
        //     return true;
        //   }
        // })
        console.log(this.tiles);
        console.log(tile);

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
        var tilesHtml = "";

        this.tiles.forEach(function (tile) {
          //console.log(index);
            tilesHtml += `<div><img id="${tile.id}" src="${tile.currentImage}" class="each-grid"></div>`;
        });

        return `
        <div class="column is-third">
          ${tilesHtml}
        </div>
      `;

        // for(var i = 0; i < this.tiles.length; i++){
        //     //console.log(this.tiles.length);
        //     $('#memory-board').append(`<div class="column each-grid"><img src="${this.tiles[i].currentImage}"/></div>`);
        //
        // }
    }
}

export default Game;

//
