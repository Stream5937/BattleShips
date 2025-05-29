//index.js
/*
    display start screen await input
    accept player1 data input
    accept player2 data input if not computer
    start play
    accept player1 play
    swap screens unless computer play
    if human accept player2 play
    report result of play
    check game over if so display game over screen then back to Start screen
    else repeat at accept player 1 play
*/
import "./styles.css";
import {Display} from "./display.js";
import {Player} from "./player.js";
import {GameBoard} from "./gameBoard.js";
import {
    btnListener,
    human_btnListenerObj, comp_btnListenerObj,
    player0_radioBtnListenerObj, player1_radioBtnListenerObj,
    confirm0_btnListenerObj, confirm1_btnListenerObj, 
    placeShipsMethod } from './listeners.js';

//export const display = new Display(this);
const display = new Display(this);
//the set of player options
let players  = {'self':false,'human':false, 'computer':false}; //either human or computer set true from splash screen
 
let player_0 = {}; //self
let player_1 = {}; //opponent 
let attackingPlayer = null;                   //starts with self
                            
//the set of boards
const boards = {'myBoard':0,'theirBoard':1};
var playerNotSelected = true;

//Start screen 

//Control Logic <-------
//display screen       |  ---> index.html
//set listeners        |
//set the start screen button listeners
//play human
const human = btnListener(human_btnListenerObj);  
//play computer
const computer = btnListener(comp_btnListenerObj);
//action listeners     |  ---> listeners.js
//update ---------------

//await opponent selected
let opponentSelected = false;
awaitPlayerSelected();

//ship data entry screen
//Control Logic <-------
//display screen       |
//set listeners        |
//set the place ships btn listeners
//set Ships self
const setShips0 = btnListener(player0_radioBtnListenerObj);
const confirm0 =  btnListener(confirm0_btnListenerObj);
//setShips human
const setShips1 = btnListener(player1_radioBtnListenerObj );
const confirm1 =  btnListener(confirm1_btnListenerObj);
//action listeners      |  ---> listeners.js    |
//update ---------------

//game play screen
//Control Logic <-------
//display screen       |  ---> index.html
//set listeners        |
//action listeners     |
//update ---------------

//game over screen
//Control Logic <-------
//display screen       |
//set listeners        |
//action listeners     |
//update ---------------


//functions
function awaitPlayerSelected(){
  if (playerNotSelected){
      console.log('waiting for player selection');
      setTimeout(awaitPlayerSelected, 100);
  }
}

//create both players once opponent selected
function playerSelected(){
  playerNotSelected = false;
  if(players.human){
    //create human opponent
    player_1 = new Player('human');
    console.log('player: ', player_1);
  }
  if(players.computer){
    //create computer opponent
    player_1 = new Player('computer');
    console.log('player: ', player_1);
  }
  //create self player 0
  player_0 = new Player('self');
  console.log('player: ', player_0, ' game board: ', player_0.gameBoard);
  players.self = true;
  setActivePlayer('self');
  //set up grid and place ships player_0 from button listener
  /* moved to btn listener */
  player_0.gameBoard.initialiseBoardGrid();
  display.doc.gridSetUp(player_0.gameBoard);
  player_0.gameBoard.renderGameBoardContent();
  display.doc.monitorShipPlacement(player_0);
 
  //player 1 set up from button listener
  //set player_0 board status attack via btn player_0 confirm listener
  //set player_1 board status underFire via btn player_0 confirm listener
  let currentBoard = player_0.gameBoard;
  let opponentBoard = player_1.gameBoard;
  //monitor both boards for mouse down
  display.doc.monitorBoard(currentBoard);
  display.doc.monitorBoard(opponentBoard);
}

function setActivePlayer(player) {
  console.log('set active attacker: ',player);
  if(!(player === null )) {
    console.log('attacking player reset to: ',player);
    attackingPlayer = player;
    if(player.name === 'self'){
      console.log('player is: ', player.name);
      console.log('now monitor player_1 game board');
      //set player_1 gameboard status to underFire
      player_1.gameBoard.status='underFire';
 //     display.doc.monitorBoard(player_1.gameBoard);
    }
    if(player.name === 'human'){
      console.log('player is: ', player.name);
      console.log('now monitor player_0 game board');
      //set player_0 gameboard status to underFire
      player_0.gameBoard.status='underFire';
 //     display.doc.monitorBoard(player_0.gameBoard);
    }
  }
}

export {display, players, player_0, player_1, attackingPlayer, playerSelected, setActivePlayer};
