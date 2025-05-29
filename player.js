import {GameBoard} from './gameBoard.js';

class Player {

    constructor (player){
        //cater for incorrect invocation i.e not using 'new' keyword
        if(!(this instanceof Player)) {
            //throw error:
            throw Error('Error: Incorrect invocation');
            //or
            //return new Player(player);
        }else{
            this.name = player;
            this.shipPlacement= null;
            this.shipsData = null;
            let board = {'id': player, 'status': 'setup'};
            this.gameBoard = new GameBoard(board);
        }
    }

    //methods
    setShipData (shipsData) {
        this.shipsData = shipsData;
    }

    getShipData() {
        return this.shipsData;
    }

    set board (board) {
        this.gameBoard = board;
    }

    get board () {
        return this.gameBoard;
    }

    gridUpdate(){
        this.gameBoard.setBoardGrid(this.shipsData);
        this.gameBoard.renderGameBoardContent();
    }
}

export {Player}