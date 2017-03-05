import $ from 'jquery';
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
    '/images/iguana.jpg'
]
//console.log(tileImages);

//put the DOM interaction in a variable
var gameboard = document.getElementById('memory-board');
//double the images in the tileImages array
var doubledArray = tileImages.concat(tileImages);
shuffleTiles(doubledArray);

//this console.log shows that it is regenerating every time!
//console.log(doubledArray);

//initate function;
startGame();

///create memory board
function startGame () {
    //clear the memory board for beginning of game
    gameboard.innerHTML = '';
    for(var i = 0; i < doubledArray.length; i++) {
        displayImage(i);
    }
}

function displayImage(i) {
    //console.log(i);
    gameboard.innerHTML += `<div class=column is-one-quarter><img id="tileImage" src="${doubledArray[i]}" class="flipimage"></div>`;
}

$('#memory-board img').click(function(image) {
    console.log(this);
    this.src = '/images/logo.png';

})


//I intend to switch this out with the lodash _.shuffle method next
function shuffleTiles(d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d
}
