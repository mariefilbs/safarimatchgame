// Import Chai
import chai from 'chai';
import Game from '../src/js/classes/game';
import Tile from '../src/js/classes/tiles';

// Import Any Files to Test

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Ari\'s Safari Memory Game', function () {

  describe('The creation of the memory game board', function () {

    it('should exist after we create it', function () {
      let x = new Game;
      expect(x).to.be.an.instanceof(Game);
    });

    it('have a grid of 20 tiles', function () {
      let game = new Game;
      expect(game.tiles.length).to.equal(20)
    });

  });
  describe('playing a game', function () {

    it('each tile starts off face down', function () {
      let tile = new Tile;
      expect(tile.frontImage).to.equal('/images/logo.png')
    });

    it('should be able to select a tile', function () {
      let tile = new Tile;
      let game = new Game;
      game.selectTile(tile);
      expect(tile.backImage).to.not.equal('/images/logo.png')
    });

    it('should be able to compare two tiles', function () {
      let game = new Game;
      let tile1 = new Tile;
      let tile2 = new Tile;
      let comparison = game.compareTiles(tile1, tile2);
      expect(comparison).to.equal(true);
    });

    // it('when two image paths match, remain face up', function () {
    //   let tile1 = new Tile;
    //   let tile2 = new Tile;
    //   let game = new Game;
    //   game.selectTile(tile1);
    //   game.selectTile(tile2);
    //   expect(tile1.path).to.equal(tile2.path);
    // });
  });

});
