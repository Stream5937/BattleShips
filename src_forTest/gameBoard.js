//gameBoard.js


class GameBoard {

    constructor (boardData) {
        //cater for incorrect invocation i.e not using 'new' keyword
        if(!(this instanceof GameBoard)) {
            //throw error:
            throw Error('Error: Incorrect invocation');
            //or
            //return new GameBoard(boardData);
        }else{
            //console.log('boardData: ',boardData);
            this.board = boardData.id;      //which to keep
            this.id = boardData.id;         //which to keep
            this.status = boardData.status;       // setup / place / random / attack/ underFire / win /lose  
            this.grid = [];
            this.missed = [];
            this._placeShip = [0,0,0,0,0];      //placing ship 0 = false , 1 = true , -1 = done , -2 = no access
            this._shipsPlaced = [0,0,0,0,0];    // set to 1 as placed for Carrier, Battleship, Cruiser, Submarine, Destroyer
            this.carrierCount = 5;
            this.carrierLocale =[];
            this.cruiserCount = 3;
            this.cruiserLocale =[];
            this.battleshipCount = 4;
            this.battleshipLocale =[];
            this.submarineCount = 3;
            this.submarineLocale = [];
            this.destroyerCount = 2;
            this.destroyerLocale = [];
            this.carrierHits = 0;
            this.cruiserHits = 0;
            this.battleshipHits = 0;
            this.submarineHits = 0;
            this.destroyerHits = 0;
            this.Hits=[0,0,0,0,0,];     // set to 1 as sunk for Carrier, Battleship, Cruiser, Submarine, Destroyer
            this._shipToPlace = null;   //none yet 
            //set this boards sketch
            //this._sketch = display.doc.getSketch(boardData.id);
            this._ships = [];
        }
        return this;
    }

    //methods
    getBoardStatus(){
        return this.status;
    }

    setBoardStatus(status) {
        //console.log('status: ',status);
        switch(status){
            //valid
            case 'setup':
            case 'place':
            case 'random:':
            case 'attack':
            case 'underFire':
            case 'win':
            case 'lose': {
                this.status = status;
                break;
            }
            //invalid
            default: {
                console.log('Invalid status');
                break;
            }
        }//switch
    }//set



setBoardGrid(ships) {
    //within 11 x 11 grid of which 1-> 10 active
    let grid = [];
    let rows = 11;
    let cols = 11;
    //set each ACTIVE cell clear i.e. excludes i or j == 0
    for( let i=1; i< rows; i++){
        grid[i] = [];
        for(let j=1;j< cols; j++){  
            grid[i][j] = 0;  
        } 
    }

    let  numShips = Object.keys(ships).length;
   
    //let  shipType = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer' ];
    let  shipStr = ['C', 'b', 'c', 's', 'd'];

   // console.log('creating grid entries: ', numShips, shipType, shipStr);

    for( let n=0; n < numShips; n++ ){

       // console.log('n is : ',n);

        let id = shipStr[n];
        /*
        console.log('id: ',id);
        console.log('ships.carrier: ',ships.carrier);
        console.log(`keys[${n}]: `, Object.keys(ships)[n]);
        console.log(`values[${n}]: `, Object.values(ships)[n]);
        */
       // console.log('ships.shipType[0]: ', ships.shipType[0]);
       // console.log('ships.ship: ',ships.ship);
        let arr = Object.values(ships)[n].location;
        //console.log('arr: ', arr);
        let row = arr[0];
        let col = arr[1];
        let orientation = arr[2];
        let len = Object.values(ships)[n].length;
        /*
        console.log('len: ',len);
        console.log(`creating grid entries for ${ship} n= ${n}`);
        console.log('row: ',row, ' col: ',col);
        */
        // let orientation = Object.values(ships)[n].orientation;
        //see arr above let orientation = Object.values(ships)[n].location[2];
        //console.log('orientation: ',orientation);

        //horizontal
        if(orientation === 'H') {
            for(let j=0; j< len; j++) {
                grid[row][col+j] = id;
               // console.log(`id: ${id} `);
            }
        }else {
        //vertical
            for(let j=0; j< len; j++) {
                //console.log('row+j: ',row+j,' col: ', col, 'grid: ',grid[row+j][col]);
                grid[row+j][col] = id;
               // console.log(`id: ${id} `);
            }
        }
          
    }

    //print grid
    //print each ACTIVE cell  i.e. excludes i or j == 0
    console.log('printing grid: \n ', grid);
    this.grid = grid;
    //return grid;
}

setShipToPlace (ship){
    this._shipToPlace = ship;
}

getShipToPlace () {
    return this._shipToPlace;
}

setPlaceShip (array) {
    this._placeShip = array;
}

getPlaceShip () {
    return this._placeShip;
}

setShipsPlaced(index) {
    this._shipsPlaced[index]=1;
}

getShipsPlaced() {
    return this._shipsPlaced;
}
}

export {GameBoard};