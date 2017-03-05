import $ from 'jquery';
import _ from 'lodash';

class Tile {
    constructor (face) {
        this.face = face;
        this.element = this.generateElement(face);
  }


    generateElement() {function(face){
      //declaring our variable
      var element;

      //creating an empty div in jquery
      element = $("<div/>");
      //setting the data to face
      element.data("card", this);
      //adding classes card and back
      element.addClass("card back");
      //setting the text
      element.text(face);

      return element;
    },
  }

  export { Tile };
