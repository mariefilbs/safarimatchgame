import $ from 'jquery';
import _ from 'lodash';

//set up Images array
var tileImages = [
    'baby2.jpg',
    'blackdahlia.jpg',
    'blazesnake.jpg',
    'camelkiss.jpg',
    'chameleon.jpg',
    'drogon.png',
    'guineapig.png',
    'hedgehog.png',
    'iguana.jpg'
]
//console.log(tileImages);

//put the DOM interaction in a variable
var gameboard = document.getElementById('memory-board');

//initate function
startGame();

///create memory board
function startGame () {
    //clear the memory board
    gameboard.innerHTML = '';
    for(var i = 0; i <= (tileImages.length * 2); i++) {
        displayImage(i);
    }
}

function displayImage(i) {
    console.log(i);
    gameboard.innerHTML += '<div class=column is-one-quarter>' + i + '</div>';
}
