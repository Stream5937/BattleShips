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
//import "./styles.css";
//import {Display} from "./display.js";
import {Player} from "./player.js";
import {GameBoard} from "./gameBoard.js";
/*
import {
    btnListener,
    human_btnListenerObj, comp_btnListenerObj,
    player0_radioBtnListenerObj, player1_radioBtnListenerObj,
    confirm0_btnListenerObj, confirm1_btnListenerObj, 
    placeShipsMethod } from './listeners.js';
*/
//export const display = new Display(this);
//const display = new Display(this);
//let GAMEOVER = false;
//the set of player options
//export let players  = {'self':false,'human':false, 'computer':false}; //either human or computer set true from splassh screen
let players  = {'self':false,'human':false, 'computer':false}; //either human or computer set true from splassh screen
 
let player_0 = {}; //self
let player_1 = {}; //opponent 
//let attackingPlayer = null;                   //starts with self
                            
//the set of boards
const boards = {'myBoard':0,'theirBoard':1};
//var playerNotSelected = true;

player_0 = new Player('self');
//console.log('player: ', player_0, ' game board: ', player_0.gameBoard);
players.self = true;

//create computer opponent
player_1 = new Player('computer');
//console.log('player: ', player_1);

//Start screen 

//Control Logic <-------
//display screen       |  ---> index.html
//set listeners        |
//set the start screen button listeners
//play human
//const human = btnListener(human_btnListenerObj);  
//play computer
//const computer = btnListener(comp_btnListenerObj);
//action listeners     |  ---> listeners.js
//update ---------------

//await opponent selected
//let opponentSelected = false;
//awaitPlayerSelected();

//ship data entry screen
//Control Logic <-------
//display screen       |
//set listeners        |
//set the place ships btn listeners
//set Ships self
//const setShips0 = btnListener(player0_radioBtnListenerObj);
//const confirm0 =  btnListener(confirm0_btnListenerObj);
//setShips human
//const setShips1 = btnListener(player1_radioBtnListenerObj );
//const confirm1 =  btnListener(confirm1_btnListenerObj);
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

/*
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

  //set up grid and place ships player_0 from button listener
  
  player_0.gameBoard.initialiseBoardGrid();
  display.doc.gridSetUp(player_0.gameBoard);
  player_0.gameBoard.renderGameBoardContent();
  display.doc.monitorShipPlacement(player_0);
 
  //player 1 set up from button listener
  //set player_0 board status attack via btn player_0 confirm listener
  //set player_1 board status underFire via btn player_0 confirm listener
  let currentBoard = player_0.gameBoard;
  console.log('currentBoard.id: ',currentBoard.id);
  let opponentBoard = player_1.gameBoard;
  console.log('opponentBoard.id: ',opponentBoard.id);
  //monitor both boards for mouse down
  if(!GAMEOVER){
   GAMEOVER = display.doc.monitorBoard(currentBoard);
  }
  if(!GAMEOVER){
    GAMEOVER =display.doc.monitorBoard(opponentBoard);
  }
  if(GAMEOVER){
    console.log('Finished!');
  }

//on click check if grid id content is 0 else must be ship
//if ship register hit to ship
//register hit to player_0 board
//else register miss to player _0 board 
//at each go check if all this ship hit if so -> sunk
//at each go if ship sunk check if all sunk -> game over
//if not 
//set player_1 board status attack 
//set player_0 board status receive attack
//monitor player_0 board for mouse click
//on click check if grid id content is 0 else must be ship
//if ship register hit to ship
//register hit to player_1 board
//else register miss to player_1 board 
//at each go check if all this ship hit if so -> sunk
//at each go if ship sunk check if all sunk -> game over
//if not repeat at player_0
 // }
//else
//at game over
//display game over screen
//display winner
  
}

function setActivePlayer(player) {
  if(!(player === null )) {
    attackingPlayer = player;
  }
}
*/
export { players, player_0, player_1}
//export {display, GAMEOVER, players, player_0, player_1, attackingPlayer, playerSelected, setActivePlayer};
