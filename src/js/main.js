import $ from 'jquery';
import _ from 'lodash';
import Game from './classes/game';
import Tile from './classes/tiles';

var game = new Game;
$('#memory-board').html(game.template());

$('#memory-board').click(function(event){
    var target = event.target.id;
    game.selectTile(target);
    var newHTML = game.template();

    $('#memory-board').html(newHTML);

})



export { game };
