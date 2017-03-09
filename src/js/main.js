import $ from 'jquery';
import _ from 'lodash';
import Game from './classes/game';
import Tile from './classes/tiles';

var game = new Game;
$('#memory-board').html(game.template());

$('#memory-board').click(function(event){
    var target = Number(event.target.id);
    //console.log(event.target.id)
    game.selectTile(target);
});



export { game };
