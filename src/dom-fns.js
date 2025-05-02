//dom-fns.js

import {players,player_0, player_1} from './index.js';
import {compAttack} from './computer.js';


export class Dom_fns {

    //private NB different names for private variables
    _doc;
   // _shipToPlace;
   // _shipsPlaced;

    //constructor
    constructor (document){
        this._doc = document;
        //this._shipToPlace = '';              //to be selected

    }

    //methods
    //dom_loaded (domLoadedObj){
    dom_loaded (){
        this._doc.addEventListener("DOMContentLoaded", (event) => {
            //console.log(domLoadedObj.message);
        });
        return true;
    }

    renderCellContent ( id, content) {
        const cell = document.getElementById(id);
        //const content = grid[i][j];
        //display it if not 0
        if(!(content === 0)){
            const text = document.createTextNode(content);
            cell.appendChild(text);
        }
    }

    hideCellContent(id){
       // console.log('cell id: ', id);
        const elem = document.getElementById(id);
        const textChild = (elem.firstElementChild||elem.firstChild);
       // console.log('text: ',textChild);
        if(textChild){
           // textChild.parentNode.removeChild(textChild);
           textChild.classList.add('hidden');
        }
    }

    hideGridContent(player){
        let cell;
        let id;
        console.log('player: ',player.name);
        switch (player.name) {
            case 'self': {
                for(let i =0; i < 11; i++){
                    for(let j=0; j < 11 ; j++){
                        id = (i*11) + j;
                        cell = document.getElementById(id);
                        cell.classList.add('hidden');
                    }
                }
                break;
            }
            case 'human':
            case 'computer': {
                for(let i =0; i < 11; i++){
                    for(let j=0; j < 11 ; j++){
                        id = (i*11) + j + 121;
                        cell = document.getElementById(id);
                        cell.classList.add('hidden');
                    }
                }
                break;
            }
        }
    }

    showCellContent(id) {
        const cell = document.getElementById(id);
        cell.classList.remove('hidden');
        const textChild = (cell.firstElementChild||cell.firstChild);
        console.log('text: ',textChild);
        if(textChild){
           // textChild.parentNode.removeChild(textChild);
           textChild.classList.remove('hidden');
        }
    }

    gridSetUp(board){
        this.resetGrid(board);
        console.log(`setting up ${board.id}`);
        let sketch;
        let bkgCol;
        let col;
        //set the board colours
        //if board for player 0
        if(board.id === 'self') {
            sketch = document.querySelector('.sketch0');
            bkgCol = 'cyan';
            col = 'black';
        }else {
            //board for player 1
            sketch = document.querySelector('.sketch1');
            bkgCol = 'lightyellow';
            col = 'black';
        }
        
        //grid allows for potential square referencing but may never be used
        let num = 11; //the number of cells per side  10 plus extra 1 for co-ord naming
        let maxSketchWidth = 500;
        let gridSize = Math.round(maxSketchWidth/num);
        let rowContainer;
        let element;
        let text;
        /*
        console.log("grid size = "+ gridSize);
        console.log("as String "+(gridSize.toString()+'px'));
        console.log("sketch is: " + sketch);
        console.log("num: " +num);
        */
        for(let j=0; j< num; j++) {
            //each row container
              rowContainer= document.createElement('div');
              rowContainer.classList.add('rowContainer');
              rowContainer.style.width= (gridSize.toString()+'px');
              rowContainer.style.height= (gridSize.toString()+'px');
              sketch.appendChild(rowContainer);
              
              for(let i= 0; i< num; i++){
                  element = document.createElement('div');
                  element.classList.add('gridDiv');
                  element.style.width= (gridSize.toString()+'px');
                  element.style.height= (gridSize.toString()+'px');
                  if((j>0)&&(i>0)){ element.style.backgroundColor= bkgCol;}
                  element.style.color= col;
                  //change id here to distinguish between boards 0 self and 1 computer or human
                  if(board.id === 'self') { 
                    //corrected 13/04'25
                    element.id=((j*10)+j+i);            //active grid cells 1 -> 10 first row -> 91 -> 100 last
                  }else{
                    //board must be for player 1
                    //corrected 13/04'25
                    element.id=((j*10)+j+i + 121);      //active grid cells 101 -> 110 first row -> 191 -> 200 last
                  }
                  if(i === 0) {
                    element.style.backgroundColor= 'lightgrey';
                    element.classList.add('hidden');
                    if(j > 0){
                        text = document.createTextNode(j.toString());
                        element.appendChild(text);
                    }
                  }
                  
                  if(j === 0) {
                    element.style.backgroundColor= 'lightgrey';
                    element.classList.add('hidden');

                    if(i > 0){
                        text = document.createTextNode(String.fromCharCode((64+i).toString()));
                        element.appendChild(text);
                    }   
                  }
                  rowContainer.appendChild(element);
                }
        } //for loop
        
    } //set up grid
      
    resetGrid(board){
        let element;
        if(board.id === 0) {
            element= document.querySelector('.sketch0');
        }else
        {
            //board = 1
            element= document.querySelector('.sketch1');
        }
        while(element.firstChild){
            //console.log('removing child: ',element.lastChild);
          element.removeChild(element.lastChild);
        }
    } 

    getSketch(id) {
        let sketch;
        switch(id){
            case 'self': {sketch = this._doc.querySelector('.sketch0'); break; }
            case 'human': {sketch = this._doc.querySelector('.sketch1'); break;  }
            case 'computer': {sketch = this._doc.querySelector('.sketch1'); break; }
            default: {console.log('error setting sketch');break;}
        }
        return sketch;
    }
    
    //monitorBoard for mouse action
    monitorBoard(board){
        console.log('player / monitoring: ', board.id );
        let sketch = board.getSketch();
        let enableHighlight;
        let boardStatus = board.status;
        let gameOver = false;
       
        sketch.onmousedown = (event) =>{
            //get the current board status
            boardStatus = board.getBoardStatus();
           // enableHighlight = enableHighlight ? false : true;
           console.log('board status: ', boardStatus);
           let e = event.target.closest('div');
           const cell = document.getElementById(e.id);
           console.log('@ cell,: ',cell,' e.id : ',e.id);

           switch (boardStatus) {
                //on mouse down print out cell id number to cll
                case 'preset': {
                    console.log('at preset');
                    const text = document.createTextNode(obj.toString());
                    cell.appendChild(text);
                    break;
                }
                //on mouse down print out selected ship to cell
                case 'place': {
                    console.log('placing');
                    board.placeShip(e);
                    
                    break;
                }//place
/*
                //react to mouse action for live game 
                case  'live' : {
                    console.log('receive attack')
                    board.receiveAttack(e);
                    break;
                }
*/
                //board is currently attacking opponent
                case 'attack': {
                    console.log('board.name currently attacking is: ', board.id);
                    gameOver = compAttack();
                    if(gameOver){
                        console.log('returning gameOver: ',gameOver);

                        return true;
                    }
                   // board.missedAttack(e.id);
                    break;
                }

                //board is currently under fire from opponent
                case 'underFire': {
                    console.log('board.name currently under fire is: ', board.id);
                    gameOver = board.receiveAttack(e.id);
                    if(gameOver){console.log('returning gameOver: ',gameOver);return true;}
                    break;
                }
                //react to mouse action once game over
                case 'win':
                case 'loose':
                case 'dead': {
                    console.log('dying');
                    gameOver = true;
                    break;
                }

                //on mouse down do nothing
                      default:
                case 'random':{
                    console.log('default / random');
                    //################################
                    break;
                }
            }   //switch boardStatus

            let done = board.checkBoardsShipsPlaced();
            console.log('done: ', done);
            if (done === 5) {
                let doneBtn;
                if(board.id === 'self'){
                    doneBtn = document.querySelector('.donePlacing0'); 
                }else{
                    doneBtn = document.querySelector('.donePlacing1'); 
                }
                doneBtn.classList.remove('hidden');
                console.log('done actioned');
            }
        }   //onmousedown
        if(gameOver){
            console.log('at mouseDown-returning gameOver: ',gameOver)
            return gameOver;
        }
    }//monitor board

    monitorShipPlacement (player) {
        let ship;
        let board;
        if(player.name === 'self'){board = 0;}else{board = 1;}
       // console.log('player', player.name, 'board :',  board );
        let ships;
        let attack;
        let btnHighlight = false;
        let sketch;
        let buttonHighlights = { 'C': false, 'c':false, 'b':false, 's':false, 'd':false }
        console.log('player: ',player.name);
        this.monitorBoard(player.gameBoard);

        //set the sketch 
        if(board === 0) {
            ships= document.querySelector('.pickShips0');        //later pickShips_0 ?
            sketch = document.querySelector('.sketch0'); 
            attack= document.querySelector('.attack0');
            btnHighlight = false;
        }else {
            //board === 1
            ships= document.querySelector('.pickShips1');        //later pickShips_1 ?
            sketch = document.querySelector('.sketch1'); 
            attack= document.querySelector('.attack1');
            btnHighlight = false;
        }

        ships.onmousedown = (event) =>{            
            let e = event.target.closest('button');
            if(e){console.log('e.id: ',e.id, ' event target',event.target);}
            let placingShips = true;
            if(e.nodeName === 'BUTTON'){
                const shipBtn = document.getElementById(e.id);
                console.log('shipBtn')
                switch(shipBtn.id){
                    //now moved to gameBoard
                case 'C': 
                case 'C1': {ship = 'C';if(player.gameBoard._placeShip[0] > -2){shipBtn.classList.add('btnHighlight'); break;}}
                case 'b':
                case 'b1': {ship = 'b'; if(player.gameBoard._placeShip[1] > -2){shipBtn.classList.add('btnHighlight'); break;}}
                case 'c':
                case 'c1': {ship = 'c'; if(player.gameBoard._placeShip[2] > -2){shipBtn.classList.add('btnHighlight'); break;}}
                case 's':
                case 's1': {ship = 's'; if(player.gameBoard._placeShip[3] > -2){shipBtn.classList.add('btnHighlight'); break;}}
                case 'd':
                case 'd1': {ship = 'd'; if(player.gameBoard._placeShip[4] > -2){shipBtn.classList.add('btnHighlight'); break;}}   
                //the donePlacing button
                case 'D': {
                            //hide the ship placement buttons and donePlacing button
                            ships.classList.add('hidden');
                            attack.classList.remove('hidden');
                            //display the player_1 board for set  up
                            // if(board === 0) {
                            // let ships1 = document.querySelector('.pickShips1'); 
                            //show ship placement if human opponenet
                            if(players.human === true){
                                let ships1 = document.querySelector('.play1'); 
                                ships1.classList.remove('hidden');
                            }
                            // }else{
                            //hide the cell contents
                            //    this.hideGridContent(player);   //should be player_1
                            //check player_1 board ships set
                            //start the game
                            // runGame();
                            player.gameBoard.status = 'attack';
                           // player_1.gameBoard.status = 'underFire';
                            console.log('boardStatus-0 reset to: ',player.gameBoard.status);
                           // console.log('boardStatus-1 reset to: ',player_1.gameBoard.status);
                           placingShips = false;
                            break;
                        }
                case 'D1': {
                            //hide the ship placement buttons and donePlacing button
                            ships.classList.add('hidden');
                            let ships1 = document.querySelector('.humanSet');
                            ships1.classList.remove('hidden');
                            //hide the cell contents
                            player.gameBoard.renderGameBoardContent();
                            let id;
                            for(let i =0; i<11; i++){
                                for(let j=0; j<11; j++){
                                    if((i===0)||(j===0)){/*miss out*/}
                                    else{
                                        id = ((i)* 11) +j + 121; 
                                        this.hideCellContent(id);   //should be player_1
                                    }
                                }
                            }
                            //check player_1 board ships set
                            //start the game
                            // runGame();
                            //set board status to under fire to flag start game
                           // player_0.gameBoard.status = 'attack';
                            player.gameBoard.status = 'underFire';
                            console.log('boardStatus-1 reset to: ',player.gameBoard.status);
                            placingShips = false;
                            break;
                        }
                }//switch
                if(placingShips){
                    player.gameBoard.setShipToPlace(ship);
                    console.log('nodeID: ', e.id);
                    console.log('ship: ',ship);
                    console.log('from board ship is : ',player.gameBoard.getShipToPlace());
                    }
                }//NodeName
                else{
                    console.log('node: ', e);
                } 
            }
    }

    showHit(ship,id){
        let locate = ship.location;
        console.log('show hit at id ',id);
        const cell = document.getElementById(id);
        cell.classList.add('hit');
        let row = locate[0];
        let col = locate[1];
        let content;
        let player;
        if(id < 121){
            //must be player_0 'self'
            player = player_0;
        }else{
            //must be player_1
            player = player_1;
        }
        content = player.gameBoard.grid[row][col];
        this.renderCellContent(id, content);
        let newHTML;
        const textChild = (cell.firstElementChild||cell.firstChild);
        console.log('textChild at id  is: ',textChild);
        console.log('cell inner html: ',cell.innerHTML);
        if(textChild){
            // textChild.classList.remove('hidden');
            // cell.textChild.classList.add('sunk');
            //opening and closing tags
            const openingTag = '<span style="color:red">'
            const closingTag = '</span>' 
            newHTML = openingTag+cell.innerText+closingTag;
            cell.innerHTML = newHTML;
        }          
    }

    showSunk(ship, id) {
        let locate = ship.location;
        let len = ship.length;
        let row = locate[0];
        let col = locate[1];
        let orientation = locate[2];
        let j = 0;;
        if(orientation === 'V'){j = 11;}
        let cellID = (row*11) + col;
        //board player_0 or player_1 ?
        if (id > 120){cellID = cellID + 121;}
        let content;
        let player;
        if(id < 121){
            //must be player_0 'self'
            player = player_0;
        }else{
            //must be player_1
            player = player_1;
        }
        let cell;
        let colIncrement;
        // loop through ship
        for(let i=0; i < len; i++){
            if(i === 0){colIncrement = 0}else{colIncrement += j;}
            if(orientation === 'H') {
                content = player.gameBoard.grid[row+i][col];
             //   this.renderCellContent(cellID +i, content);
                cell = document.getElementById(cellID + i);
            } else {
                content = player.gameBoard.grid[row][col + colIncrement];
              //  this.renderCellContent(cellID +i, content);
                cell = document.getElementById(cellID + colIncrement);
            }
           // console.log('show sunk at id ',cellID+i, ' cell is: ',cell);
            cell.classList.remove('hit');
            cell.classList.add('sunk');
            let newHTML;
            const textChild = (cell.firstElementChild||cell.firstChild);
            console.log('textChild at id  is: ',textChild);
            console.log('cell inner html: ',cell.innerHTML);
            if(textChild){
               // textChild.classList.remove('hidden');
               // cell.textChild.classList.add('sunk');
               //opening and closing tags
                const openingTag = '<span style="background-color:red">'
                const closingTag = '</span>' 
                newHTML = openingTag+cell.innerText+closingTag;
                cell.innerHTML = newHTML;

            }
        }
    }

    //id automatically distinguishes boards but id to be used is for opponents board
    //id adjusted before call to show
    showMissed (id) {
       // let newID;
       // if(id < 121){ newID = id+120;}else{newID=id-120;}
       console.log('id: ',id);
        const cell = document.getElementById(id);
        const text = document.createTextNode('-X-');
        cell.appendChild(text);
        cell.classList.add('missed');
        cell.style.backgroundColor='lightgreen';

    }

    showGameOver (player) {
        const gameScreen = document.querySelector('.container');
        gameScreen.classList.add('hidden');
        const over = document.querySelector('.GameOver');
        over.classList.remove('hidden');
        switch (player){
            case 'self': {
                const winner = document.querySelector('.selfWin');
                winner.classList.remove('hidden');
                break;
            }
            case 'oppo': {
                const winner = document.querySelector('.oppoWin');
                winner.classList.remove('hidden');
                break;
            }
        }
    }
}