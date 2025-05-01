//player.test.js

//import {GameBoard}from "../src_forTest/gameBoard.js";
import {Player} from "../src_forTest/player.js";
//import {TestClass} from "../src_forTest/testClass.js";

//player
describe('expect player.js file to exist', function() {
  it('file should exist', function() {
      expect(require('../src_forTest/player.js')).toBe.defined;
  });
});

//setShipData()
describe('expect Player.setShipData  method to exist', () => {
  
  const player = new Player('playerName');

  const data = {'type' : 'carrier'} ; 
  player.setShipData(data);

  it('player should exist',() => {
    expect(player).toBe.defined;
  });

  it('player type is object',() => {
    expect(typeof player).toBe('object');
  });

  it('player method setSHipData() should exist',() => {
    expect(player.setShipData()).toBe.defined;
  });

  it('type of setSHipData() should be function',() => {
    expect(player.setShipData()).toHaveBeenCalled;
  });

  it('player.shipsData should be object', () => {
    expect(player.shipsData).toBe.object;
  });

  it('player.shipsData should equal set object', () => {
    player.setShipData(data); //needed here else undefined?
    expect(player.shipsData).toEqual(
      {'type' : 'carrier' }
    );
  });

});

//getShipData
describe('expect getShipData  method to exist', () => {
  
  const player = new Player('playerName');
  const data = {'type' : 'carrier'} ; 
  player.setShipData(data);

  it('function should exist', () => {
      expect(player.getShipData()).toBe.defined;
  });

  it('type of getSHipData() should be function',() => {
    expect(player.getShipData()).toHaveBeenCalled;
  });

  it('getShipData() should return set object', () => {
    player.setShipData(data); 
    const retObj = player.getShipData();
    expect(retObj).toEqual(
      {'type' : 'carrier' }
    );
  });

});


describe('expect Player to exist', () => {
  const player = new Player('playerName');
  it('player should exist',() => {
    expect(player).toBe.defined;
  });

});

describe('expect player.gameBoard.setBoardGrid(ships) to exist', () => {

  const player = new Player('playerName');
  
    it('player should exist', () => {
      expect(player).toBe.defined;
    });

    it('player.gameBoard should exist', () => {
      expect(player.gameBoard).toBe.defined;
    });

    let location = [];
   
    const shipsData = {
      //location tsetRnd() returns an array of start row, start col, and final entry orientation
      //NB so orientation now from location[2]
      carrier :      {
                      type: 'Carrier',
                      location: [1,1,'H'],
                      length: 5
                      }, 
      battleship :    {
                      type: 'Battleship',
                      location: [2,2,'H'],
                      length: 4
                      },
      cruiser :       {
                      type: 'Cruiser',
                      location: [3,3,'V'],
                      length: 3
                      }, 
      submarine :     {
                      type: 'Submarine',
                      location: [3,5,'V'],
                      length: 3
                      },
      destroyer :     {
                      type: 'Destroyer',
                      location: [3,7,'V'],
                      length: 2
                      }
      };

      //the above data input represents the following generated gameboard grid

      const grid = [
        ,
        [,'C','C','C','C','C',0,0,0,0,0],
        [,0,'b','b','b','b',0,0,0,0,0],
        [,0,0,'c',0,'s',0,'d',0,0,0],
        [,0,0,'c',0,'s',0,'d',0,0,0],
        [,0,0,'c',0,'s',0,0,0,0,0],  
        [,0,0,0,0,0,0,0,0,0,0],
        [,0,0,0,0,0,0,0,0,0,0],
        [,0,0,0,0,0,0,0,0,0,0],
        [,0,0,0,0,0,0,0,0,0,0],
        [,0,0,0,0,0,0,0,0,0,0]
      ];

    it('player.gameBoard.grid should exist', () => {
      player.gameBoard.setBoardGrid(shipsData);
      expect(player.gameBoard.grid).toBe.defined;
    });


    it('gameboard grid should match data set by shipsdata', () => {
      player.gameBoard.setBoardGrid(shipsData);
      expect(player.gameBoard.grid).toEqual(grid);
    });
});

