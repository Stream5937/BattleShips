//gameBoard.test.js

import {GameBoard} from "../src_forTest/gameBoard.js";

//gameBoard
describe('expect gameBoard.js file to exist', function() {
    it('file should exist', function() {
        expect(require('../src_forTest/player.js')).toBe.defined;
    });
  });


  //global test use
  let data = {'id': 'self','status': 'win' };
  let gameboard = new GameBoard(data);
  gameboard.setShipToPlace('Carrier');
  gameboard.setPlaceShip([0,1,-1,2,0]);
  let index = 4;
  gameboard.setShipsPlaced(index);
  console.log('_shipsPlaced: ', gameboard.getShipsPlaced());

describe('expect gameboard to exist',() => {
  it('game board should exist',() => {
    expect(gameboard).toBe.defined;
  });

  it('gameboard type is object',() => {
    expect(typeof gameboard).toBe('object');
  });
})

describe('expect gameBoard methods to exist', () => {

    it('setBoardStatus method to exist', () => {
        expect(gameboard.setBoardStatus).toBe.defined;
    });

    it('setBoardStatus method to work', () => {
        expect(gameboard.status).toEqual('win');
    });

    it('getBoardStatus method to exist', () => {
        expect(gameboard.getBoardStatus).toBe.defined;
    });

    it('getBoardStatus method to work', () => {
        let val = gameboard.getBoardStatus();
        expect(val).toEqual('win');
    });

    it('setShipToPlace method to exist', () => {
        expect(gameboard.setShipToPlace).toBe.defined;
    });

    it('getShipToPlace method to work', () => {
        let val = gameboard.getShipToPlace();
        expect(val).toEqual('Carrier');
    });

    it('setPlaceShip method to exist', () => {
        expect(gameboard.setPlaceShip).toBe.defined;
    });

    it('getPlaceShip method to work', () => {
       // console.log('_placeShip',gameboard._placeShip);
        let arr = gameboard.getPlaceShip();
        expect(arr).toEqual([0,1,-1,2,0]);
    });

    it('setShipsPlaced method to exist', () => {
        expect(gameboard.setShipsPlaced).toBe.defined;
    });

    it('getShipsPlaced method to work', () => {
        gameboard.setShipsPlaced(0);
        let arr = gameboard.getShipsPlaced();
        expect(arr).toEqual([1,0,0,0,1]);
    });
  });

  //NB method setBoardGrid(shipsData) tested from Player.test.js

