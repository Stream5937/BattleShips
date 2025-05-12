//listeners.js

//imports
import {Player} from './player.js'
import {display, players, player_0, player_1, playerSelected} from './index.js'

//globals
let placeShipsMethod = null;

//generic button listener
const btnListener = (btn_obj) => {
    let e = document.querySelector(btn_obj.selector);
    e.addEventListener('click', btn_obj.b_function);
    console.log(`confirm ${btn_obj.selector}: created`); 
}

//start screen  computer button onClick listener obj
const comp_btnListenerObj = {
    'selector' : '.btn-right',
    'b_function' : function () {
        let containerDiv = document.querySelector('#container');
        let e = document.querySelector('.start');
        e.style.opacity = 0;
        //hide the startscreen
        e.classList.add('hidden');
        //show the container content
        containerDiv.classList.remove('hidden');
        //confirm player selected
        console.log('selected player1: is computer');
        players.computer = true;
        players.human = false;
        //player instantiated at index.js
        //flag can stop waiting for player selection
        playerSelected();
        player_1.gameBoard.status = 'random';
        //set the player shipsData
        player_1.setShipData(player_1.gameBoard.randomiseShips());
        player_1.gameBoard.initialiseBoardGrid();
        //display the empty grid
        display.doc.gridSetUp(player_1.gameBoard);
        //update the board grid from the shipsData
        player_1.gridUpdate();
        let setDiv = document.querySelector('.computerSet');
        setDiv.classList.remove('hidden');
        //set gameBoard status to eventually be under attack assumes player self starts
        player_1.gameBoard.status = 'underFire';
        return true;
    },
}

//start screen  human button onClick listener obj
const human_btnListenerObj = {
    'selector' : '.btn-left',
    'b_function' : function () {
        let containerDiv = document.querySelector('#container');
        let e = document.querySelector('.start');
        e.style.opacity = 0;
        //hide the startscreen
        e.classList.add('hidden');
        //show the container content
        containerDiv.classList.remove('hidden');
        //confirm human player selected
        console.log('selected player1: is human');
        players.human = true;
        players.computer = false;
        //player instantiated at index.js
        //flag can stop waiting for player selection
        playerSelected();
        return true;
    },
}

//player0 radio button listener obj
const player0_radioBtnListenerObj = {
    'selector' : '.setShips0',
    'b_function' : function () {
        let btn = document.querySelector('#confirm0');
        btn.classList.remove('hidden');
    }
}

//player1 radio button listener obj
const player1_radioBtnListenerObj = {
    'selector' : '.setShips1',
    'b_function' : function () {
        let btn = document.querySelector('#confirm1');
        btn.classList.remove('hidden');
    }
}

//confirm for player0
const confirm0_btnListenerObj = {
    'selector' : '.radconfirm0',
    'b_function' : function () {
        let place = document.querySelector('.play0');
        place.classList.add('hidden');
        let playerStr = '0';
        placeShipsMethod = confirmSetShipsMethod(playerStr);
        //show the place ships div for player0
        if(placeShipsMethod === 'place'){
            let pickShips0 = document.querySelector(".pickShips0");
            pickShips0.classList.remove('hidden');
            player_0.gameBoard.status = 'place';
        }else{
            player_0.gameBoard.status = 'random';
            //set the player shipsData
            player_0.setShipData(player_0.gameBoard.randomiseShips());
            player_0.gameBoard.initialiseBoardGrid();
            //update the board grid from the shipsData
            player_0.gridUpdate();
            const attack= document.querySelector('.attack0');
            attack.classList.remove('hidden');
            //display the player_1 board for set  up if 'human'
            if(player_1.name === 'human'){
                let ships1 = document.querySelector('.play1'); 
                ships1.classList.remove('hidden');
            }
            // ###############    MOVE TO ALL SHIPS PLACED BUTTON ??  as well ################
            player_0.gameBoard.status = 'attack';
            player_1.gameBoard.status = 'underFire';
        }
    }
}

//confirm for player1
const confirm1_btnListenerObj = {
    'selector' : '.radconfirm1',
    'b_function' : function () {
        let place = document.querySelector('.play1');
        place.classList.add('hidden');
        let playerStr = '1';
        placeShipsMethod = confirmSetShipsMethod(playerStr);
        //show the place ships div for player1
        if(placeShipsMethod === 'place'){
            let pickShips1 = document.querySelector(".pickShips1");
            pickShips1.classList.remove('hidden');
            player_1.gameBoard.status = 'place';
            //display the player_1 board for set  up if 'human'
            if(player_1.name === 'human'){
                player_1.gameBoard.initialiseBoardGrid();
                //display the empty grid
                display.doc.gridSetUp(player_1.gameBoard);
                player_1.gameBoard.renderGameBoardContent();
                display.doc.monitorShipPlacement(player_1);
                let ships1 = document.querySelector('.pickShips1'); 
                ships1.classList.remove('hidden');
            }
        }else{
            player_1.gameBoard.status = 'random';
            //set the player shipsData
            player_1.setShipData(player_1.gameBoard.randomiseShips());
            player_1.gameBoard.initialiseBoardGrid();
            display.doc.gridSetUp(player_1.gameBoard);      //####
            //update the board grid from the shipsData
            player_1.gridUpdate();   
            let setDiv = document.querySelector('.humanSet');
            setDiv.classList.remove('hidden');

            // ###############    MOVE TO ALL SHIPS PLACED BUTTON ??  as well ################
            //set board status to attack to flag start game
            player_0.gameBoard.status = 'attack';
            player_1.gameBoard.status = 'underFire';
            //#####
        }
    }
}


//functions
function confirmSetShipsMethod(str) {
    let val;
    let placeMethod = null;
    let elName = "placeShips"+ str;
    var radioButtons = document.getElementsByName(elName);
    for(var i = 0; i < radioButtons.length; i++)
        {
        if(radioButtons[i].checked === true)
        {
            val = radioButtons[i].value;
            switch (val) {
                case 'set' : {
                    //implement provision for user to set gameboard ship positions manually
                    placeMethod = 'place';
                    break;
                }
                case 'rnd' : {
                    //implement provision for user to set gameboard ship positions randomly
                    placeMethod = 'random';
                    break;
                }
                default: {
                    console.log('error radio button selection');
                    placeMethod = null;
                    break;
                }
            }
           
        }
    }
    return placeMethod;
} // end confirm selection

//exports
export {
    btnListener,
    human_btnListenerObj, comp_btnListenerObj,
    player0_radioBtnListenerObj, player1_radioBtnListenerObj,
    confirm0_btnListenerObj, confirm1_btnListenerObj,
    placeShipsMethod
  };