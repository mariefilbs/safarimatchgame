import $ from 'jquery';
import _ from 'lodash';


class Tile {
    constructor (index, image) {
        this.frontImage = '';
        this.id = index;
        this.currentImage = this.frontImage;
        this.backImage = image;
    }
    faceUp() {
        this.currentImage = this.backImage;
    }
    faceDown() {
        this.currentImage = this.frontImage;
    }
}


export default Tile;
