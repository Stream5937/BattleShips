//gameBoard.js
/*
the GameBoard class
Gameboards should be able to place ships at specific coordinates by calling the ship class.
Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
Gameboards should keep track of missed attacks so they can display them properly.
Gameboards should be able to report whether or not all of their ships have been sunk.
*/

import {display,players, player_0, player_1,setActivePlayer,attackingPlayer} from './index.js';
import {Ship} from './ship.js';
import {compAttack } from './computer.js';

class GameBoard {
    

    constructor (boardData) {
        //cater for incorrect invocation i.e not using 'new' keyword
        if(!(this instanceof GameBoard)) {
            //throw error:
            throw Error('Error: Incorrect invocation');
            //or
            //return new GameBoard(boardData);
        }else{
            console.log('boardData: ',boardData);
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
            this._sketch = display.doc.getSketch(boardData.id);
            this._ships = [];
        }
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
        //console.log('board status set: ', this.status);
    }//set

    //placing which ship?
    setShipToPlace (ship){
        this._shipToPlace = ship;
        console.log('setting ship',ship);
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

    //place ship at specific coordinates from mouse click event e by calling the ship class
    placeShip (e) {
        let row;
        let col;
        let placeShip = this.getPlaceShip();
        let ship = this.getShipToPlace();
        let error = false;
        
        row = Math.floor(e.id/11);      //eg [row 2 col 9] e.id = (j=2)*11 + (i=9 ) = 31 row = 2
        if(e.id > 120) { row = row - 11;}   //caters for board_1 player_1
        col = e.id % 11;                // 31 % 11 = 31-22 = 9  col = 9

        // console.log('e.id: ', e.id, ' row: ',row,' col: ',col);

        // console.log(ship);
        // console.log('at place ships');
        //if currently no ship
        //console.log('grid: ',this.grid );
        // console.log('grid[row][col]: ',this.grid[row][col] );
        if(this.grid[row][col] === 0) {
            const cell = document.getElementById(e.id);
            const text = document.createTextNode(this.getShipToPlace());
            //console.log('*text', text);

            switch (ship) {
                case 'C':
                {   
                    //check not yet placed i.e.> -1                         
                    if(placeShip[0] > -1){
                        //indicate placing true = 1
                        placeShip[0] = 1;           //starting placement flagged to local array
                        //flag other ship placement not accessible = -2
                        placeShip[1] =  placeShip[2] = placeShip[3] = placeShip[4] = -2; // no access 
                        //placement currently active so complete process
                        if(placeShip[0] > 0){  
                            //not yet reached ship length     
                            if((this.carrierCount--) > 0){
                                //console.log('placeShip: ',placeShip,' carrierCount ',this.carrierCount);
                                cell.appendChild(text);
                                //console.log('text', text);
                                this.grid[row][col]=text;
                                this.carrierLocale.push([row,col]);
                            }else{error = true;}
                            if(this.carrierCount === 0 ){
                                this.setShipsPlaced(0);     //flag carrier position set
                                //create the ship data
                                let shipData = {'type':'carrier', 'location':[],'length': 5 };
                                let orientation;
                                //is it placed horizontal or vertical
                                const locale = this.carrierLocale;
                                let isHorizontal = this.checkHorizontal(locale);
                                //need to cater for higher grid id set before lower grid id
                                let origin = this.checkOrigin(locale);
                                if(isHorizontal){
                                    orientation = 'H';
                                }else{
                                    orientation = 'V';
                                }
                                shipData.location = [origin[0], origin[1], orientation];
                                //console.log('Carrier shipData: ',shipData);
                                this._ships[0] = new Ship(shipData);
                                //console.log('carrier: ',this._ships[0]);
                                placeShip[0]= -1;   //completed flagged to local array
                                placeShip[1] =  placeShip[2] = placeShip[3] = placeShip[4] = 0; //clear to set
                            }
                        }
                    }
                    break;
                }
                case 'b':{
                    if(placeShip[1] > -1){
                        placeShip[1] = 1;           //starting placement flagged to local array
                        placeShip[2] = placeShip[3] = placeShip[4] = -2; // no access 
                        if(placeShip[1] > 0){       //currently active so complete
                            if(this.battleshipCount-- > 0){
                                cell.appendChild(text);
                                //console.log('text', text);
                                this.grid[row][col]=text;
                                this.battleshipLocale.push([row,col]);
                            }else{error = true;}
                            if(this.battleshipCount === 0 ){
                                this.setShipsPlaced(1);     //flag battleship position set

                               //create the ship data
                                let shipData = {'type':'battleship', 'location':[],'length': 4 };
                                let orientation;
                                //is it placed horizontal or vertical
                                const locale = this.battleshipLocale;
                                let isHorizontal = this.checkHorizontal(locale);
                                //need to cater for higher grid id set before lower grid id
                                let origin = this.checkOrigin(locale);
                                if(isHorizontal){
                                    orientation = 'H';
                                }else{
                                    orientation = 'V';
                                }
                                shipData.location = [origin[0], origin[1], orientation];
                                //console.log('Battleship shipData: ',shipData);
                                this._ships[1] = new Ship(shipData);
                                //console.log('battleship: ',this._ships[1]);

                                placeShip[1]= -1;   //completed flagged to local array
                                placeShip[2] = placeShip[3] = placeShip[4] = 0; //clear to set
                            }
                        }
                    }
                    break;
                }
                case 'c':{
                    if(placeShip[2] > -1){
                        placeShip[2] = 1;           //starting placement flagged to local array
                        placeShip[3] = placeShip[4] = -2; // no access 
                        if(placeShip[2] > 0){       //currently active so complete
                            if(this.cruiserCount-- > 0){
                                cell.appendChild(text);
                                //console.log('text', text);
                                this.grid[row][col]=text;
                                this.cruiserLocale.push([row,col]);
                            }else{error = true;}
                            if(this.cruiserCount === 0 ){
                                this.setShipsPlaced(2);     //flag cruiser position set

                                //create the ship data
                                let shipData = {'type':'cruiser', 'location':[],'length': 3 };
                                let orientation;
                                //is it placed horizontal or vertical
                                const locale = this.cruiserLocale;
                                let isHorizontal = this.checkHorizontal(locale);
                                //need to cater for higher grid id set before lower grid id
                                let origin = this.checkOrigin(locale);
                                if(isHorizontal){
                                    orientation = 'H';
                                }else{
                                    orientation = 'V';
                                }
                                shipData.location = [origin[0], origin[1], orientation];
                                //console.log('cruiser shipData: ',shipData);
                                this._ships[2] = new Ship(shipData);
                                //console.log('cruiser: ',this._ships[2]);

                                placeShip[2]= -1;   //completed flagged to local array
                                placeShip[3] = placeShip[4] = 0; //clear to set
                            }
                        }
                    }
                    break;
                }
                
                case 's':{
                    if(placeShip[3] > -1){
                        placeShip[3] = 1;           //starting placement flagged to local array
                        placeShip[4] = -2; // no access 
                        if(placeShip[3] > 0){       //currently active so complete
                            if(this.submarineCount-- > 0){
                                cell.appendChild(text);
                                //console.log('text', text);
                                this.grid[row][col]=text;
                                this.submarineLocale.push([row,col]);
                            }else{error = true;}
                            if(this.submarineCount === 0 ){
                                this.setShipsPlaced(3);      //flag submarine position set

                                //create the ship data
                                let shipData = {'type':'submarine', 'location':[],'length': 3 };
                                let orientation;
                                //is it placed horizontal or vertical
                                const locale = this.submarineLocale;
                                let isHorizontal = this.checkHorizontal(locale);
                                //need to cater for higher grid id set before lower grid id
                                let origin = this.checkOrigin(locale);
                                if(isHorizontal){
                                    orientation = 'H';
                                }else{
                                    orientation = 'V';
                                }
                                shipData.location = [origin[0], origin[1], orientation];
                                //console.log('submarine shipData: ',shipData);
                                this._ships[3] = new Ship(shipData);
                                //console.log('submarine: ',this._ships[3]);

                                placeShip[3]= -1;   //completed flagged to local array
                                placeShip[4] = 0;   //clear to set
                            }
                        }
                    }
                    break;
                }
                case 'd':{
                    if(placeShip[4] > -1){
                        placeShip[4] = 1;           //starting placement flagged to local array
                        if(placeShip[4] > 0){       //currently active so complete
                            if(this.destroyerCount-- > 0){
                                cell.appendChild(text);
                                //console.log('text', text);
                                this.grid[row][col]=text;
                                this.destroyerLocale.push([row,col]);
                            }else{error = true;}
                            if(this.destroyerCount === 0 ){
                                this.setShipsPlaced(4);     //flag destroyer position set

                                //create the ship data
                                let shipData = {'type':'destroyer', 'location':[],'length': 2 };
                                let orientation;
                                //is it placed horizontal or vertical
                                const locale = this.destroyerLocale;
                                let isHorizontal = this.checkHorizontal(locale);
                                //need to cater for higher grid id set before lower grid id
                                let origin = this.checkOrigin(locale);
                                if(isHorizontal){
                                    orientation = 'H';
                                }else{
                                    orientation = 'V';
                                }
                                shipData.location = [origin[0], origin[1], orientation];
                                //console.log('destroyer shipData: ',shipData);
                                this._ships[4] = new Ship(shipData);
                                //console.log('destroyer: ',this._ships[4]);

                                placeShip[4]= -1;   //completed flagged to local array
                            }
                        }
                    }
                    break;
                }
            }// switch ship
            //update this._placeShip 
            this.setPlaceShip(placeShip);

        }else{error = true;}
        if(error){
            console.log('error: a clash OR  exceeds permitted length');
        }

    }

    //randomly place shipping
    randomiseShips(){
        //randomise
        //a local grid to fit position of ships 
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

        const shipsData = {
            //location tsetRnd() returns an array of start row, start col, and final entry orientation
            //NB so orientation now from location[2]
            carrier :      {
                            type: 'Carrier',
                            location: this.setRnd('C',grid,5),
                            length: 5
                            }, 
            battleship :    {
                            type: 'Battleship',
                            location: this.setRnd('b',grid,4),
                            length: 4
                            },
            cruiser :       {
                            type: 'Cruiser',
                            location: this.setRnd('c',grid,3),
                            length: 3
                            }, 
            submarine :     {
                            type: 'Submarine',
                            location: this.setRnd('s',grid,3),
                            length: 3
                            },
            destroyer :     {
                            type: 'Destroyer',
                            location: this.setRnd('d',grid,2),
                            length: 2
                            }
            };

            this.createShips(shipsData);
            return shipsData;
    }     

    //method to set ship locations randomly without clashing
    setRnd(s,grid,n){

        //console.log('ship: ',s,' grid: ',JSON.stringify(grid),' n: ',n);

        let row;
        let startRow;
        let col; 
        let startCol ;
        let built = false;
        let cellsClear = true;
        let count;
        let canBuild_H = true;
        let canBuild_V = true; 
        let shipLocation = [];      //location to return as array of start row, start col, and final entry orientation

        let tempCounter = 0;
        while(!built){
            while(tempCounter < 40) {
            //select random cell to start
            row = Math.floor(1+(Math.random() * (10-(n))));
            col = Math.floor(1+(Math.random() * (10-(n))));
            startRow = row;
            startCol = col;

            //check if can build horizontally or vertically from here
            if (grid[row][col] === 0){
                count = 0;
                //try to build horizotally
                while(count < n){
                    if(grid[row][col++] === 0){
                        count++ ;
                    }
                    else {
                        cellsClear = false;
                        count = 10;
                        canBuild_H = false;
                    }
                    if(count === n){
                        canBuild_H=true;
                        count = 10;
                    }
                }
                //check both H & V
                //reset
                cellsClear = true;
                count = 0;
                //try to build vertically
                //reset row col to start row col
                row = startRow;
                col = startCol;
                while(count <= n){
                    if(grid[row++][col] === 0){
                        count++ ;
                    }
                    else {
                        cellsClear = false;
                        count = 10;
                        canBuild_V = false;
                    }
                    if(count === n){
                        canBuild_V = true;
                        count = 10;
                    }
                }
            }
            else{
                canBuild_H = false;
                canBuild_V = false;
                cellsClear = true;
                built = false;
            }
            if(canBuild_H || canBuild_V){
                if(canBuild_H && canBuild_V) {
                    //select which
                const hor_ver = Math.floor(Math.random()*2);
                    switch( hor_ver ) {  
                        case 0: {
                            //build horizontal
                            for(let i=0; i<n; i++){
                                grid[startRow][startCol+i] = s;
                            }
                            built = true;
                            shipLocation[0] = startRow;
                            shipLocation[1] = startCol;
                            shipLocation[2] = 'H';
                            break;
                        }
                        case 1: {
                            //build vertical
                            for(let i=0; i<n; i++){
                                grid[startRow+i][startCol] = s;
                            }
                            built = true;
                            shipLocation[0] = startRow;
                            shipLocation[1] = startCol;
                            shipLocation[2] = 'V';
                            break;
                        }
                    }
                }else{
                    if(canBuild_H){
                        //build horizontal
                        for(let i=0; i<n; i++){
                            grid[startRow][startCol+i] = s;
                        }
                        built = true;
                        shipLocation[0] = startRow;
                        shipLocation[1] = startCol;
                        shipLocation[2] = 'H';
                    }else{
                        if(canBuild_V){
                            //build vertical
                            for(let i=0; i<n; i++){
                                grid[startRow+i][startCol] = s; 
                            }
                            built = true;
                            shipLocation[0] = startRow;
                            shipLocation[1] = startCol;
                            shipLocation[2] = 'V';
                        }
                    }
                }
            }
            if(built === true){
                tempCounter = 100;
            }
        }//tempCounter
        }//while not built
        //done built
        //return shipsData.ship.location as array of start row and start column + orientation
        return  shipLocation;
    }//setRnd()

    setBoardGrid(ships) {
        console.log('setBoardGrid() called, id: ', this.id);
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

        for( let n=0; n < numShips; n++ ){

            let id = shipStr[n];
            let arr = Object.values(ships)[n].location;
            let row = arr[0];
            let col = arr[1];
            let orientation = arr[2];
            let len = Object.values(ships)[n].length;
            console.log('n length: ',n,' ',len);
            let gridID;

            //horizontal
            if(orientation === 'H') {
                for(let j=0; j< len; j++) {
                    grid[row][col+j] = id;
                    gridID = ((row*11)+(col+j));
                    if(this.board === 'self'){
                        display.doc.addShipClass(gridID);
                    }
                }
            }else {
            //vertical
                for(let j=0; j< len; j++) {
                    console.log('j: ', j, ' row: ',row,' col: ',col);
                    grid[row+j][col] = id;
                    gridID = (((row+j)*11)+(col));
                    if(this.board === 'self'){
                        display.doc.addShipClass(gridID);
                    }
                }
            }
              
        }
        this.grid = grid;
    }

    //render gameBoard
    renderGameBoardContent() {     
        let id;
        for(let i =1; i<11; i++){
            for(let j=1; j<11; j++){
               if(this.board === 'self'){
                     id = ((i)* 11) +j;
                     const content = this.grid[i][j];
                     display.doc.renderCellContent( id, content);
               }else{
                     id = ((i)* 11) +j + 121;    //0 -> 120 for board 1 
                     const content = this.grid[i][j];
                     display.doc.renderCellContent( id, content);
                     //board 1 so hide cell content for now
                     display.doc.hideCellContent(id);
                     //display.doc.hideGridContent('computer');
               }
            }
        }
    }

    //initialise board grid to empty
    initialiseBoardGrid() {
        //within 11 x 11 grid of which 1-> 10 active
        let rows = 11;
        let cols = 11;
        //set each ACTIVE cell clear i.e. excludes i or j == 0
        for( let i=1; i< rows; i++){
            this.grid[i] = [];
            this.missed[i] = [];
            for(let j=1;j< cols; j++){  
                this.grid[i][j] = 0; 
                this.missed[i][j] = 0; 
            } 
        }
    }
   
    //get sketch
    getSketch() {
        return this._sketch;
    }

    //create individual ships from combined data set
    createShips (data){
        let count = 0;
        let oldCount = 0;
        Object.keys(data).forEach(key => {
            let ship = null; 
            ship = new Ship(data[key]);
            this._ships[count++] = ship;
            //console.log(`ship[${oldCount++}]:  ${key}: ${JSON.stringify(ship)}`); 
        });
   }

   //check ship origin from locale data
   checkOrigin(locale) {
        let origin = locale[0];
        locale.forEach(item => {
            let row = item[0];
            let col = item[1];
            //find lowest values 
            if((row < origin[0]) || (col < origin[1])) { origin = item;}
        });
        return origin;
   }

   //locale is an array of ship placements [[row,col],....,[row,col]]
   checkHorizontal(locale) {
        let horizontal = false;
        let origin = locale[0];
        let row;
        locale.forEach(item =>{
            row = item[0];
            if(row === origin[0]){horizontal = true;}else{horizontal = false;} 
        });
        return horizontal;
   }

    //check ships placed
    checkBoardsShipsPlaced (){
        let arr =  this.getShipsPlaced(); 
        let sum = 0;
        arr.map(e => sum += e);
        if(sum === 5){
           return sum;       //true;
        }else{
         return sum;         //false;
        }
     }

     //receiveAttack
     receiveAttack (id) {
        console.log('id: ', id);
        let gameOver = false;
        let aHit = false;
        let shipSank = false;
        let gridID = id;
        if(gridID > 120){gridID = id-121;}
        //console.log('gridID: ',gridID);
        const row = Math.floor( gridID/11);
        //console.log('row: ', row);
        const col = gridID % 11;
        //console.log('col: ', col);
        const pos = [row,col];
        console.log('pos: ',pos);
        const content = this.grid[row][col];
        console.log('content of grid[row][col]: ', content, ' pos: ',pos);
        if(!(content === 0)){
            switch (content) {
                case 'C' : {
                        if(this.Hits[0] === 0){
                            //console.log('at C ');
                            aHit =  this._ships[0].hit(pos);
                            console.log('aHit: ',aHit);
                            if(aHit){
                                display.doc.showHit(this._ships[0],id);
                                shipSank = this._ships[0].isSunk();
                                console.log('ship: C sunk?: ', shipSank);
                                if(shipSank) {
                                    this.Hits[0]=1;
                                    display.doc.showSunk(this._ships[0],id);
                                }
                            } 
                        }else{console.log('Carrier already sunk!');}
                        break;
                    }
                case 'b' : {
                        if(this.Hits[1] === 0){
                        //console.log('at b ');
                            aHit =  this._ships[1].hit(pos);
                            console.log('aHit: ',aHit);
                            if(aHit){
                                console.log('hit at id: ',id);
                                display.doc.showHit(this._ships[1],id);
                                shipSank = this._ships[1].isSunk();
                                console.log('ship: b sunk?: ', shipSank);
                                if(shipSank) {
                                    this.Hits[1]=1;
                                    display.doc.showSunk(this._ships[1],id);
                                }
                            }
                        }else{console.log('Battleship already sunk!');}
                        break;
                    }
                case 'c' : {
                        if(this.Hits[2] === 0){
                        //console.log('at c ');
                            aHit =  this._ships[2].hit(pos);
                            console.log('aHit: ',aHit);
                            if(aHit){
                                display.doc.showHit(this._ships[2],id);
                                shipSank = this._ships[2].isSunk();
                                console.log('ship: c sunk?: ', shipSank);
                                if(shipSank) {
                                    this.Hits[2]=1;
                                    display.doc.showSunk(this._ships[2],id);
                                }
                            }
                        }else{console.log('Cruiser already sunk!');}
                        break;
                    }
                case 's' : {
                        if(this.Hits[3] === 0){
                            //console.log('at s ');
                            aHit =  this._ships[3].hit(pos);
                            console.log('aHit: ',aHit);
                            if(aHit){
                                display.doc.showHit(this._ships[3],id);
                                shipSank = this._ships[3].isSunk();
                                console.log('ship: s sunk?: ', shipSank);
                                if(shipSank) {
                                    this.Hits[3]=1;
                                    display.doc.showSunk(this._ships[3],id);
                                }
                            }
                        }else{console.log('Submarine already sunk!');}
                        break;
                    }
                case 'd' : {
                        if(this.Hits[4] === 0){
                            //console.log('at d ');
                            aHit =  this._ships[4].hit(pos);
                            console.log('aHit: ',aHit);
                            if(aHit){
                                display.doc.showHit(this._ships[4],id);
                                shipSank = this._ships[4].isSunk();
                                console.log('ship: d sunk?: ', shipSank);
                                if(shipSank) {
                                    this.Hits[4]=1;
                                    display.doc.showSunk(this._ships[4],id);
                                }
                            }
                        }else{console.log('Destroyer already sunk!');}
                        break;
                    }
            }
        }else{
            //swap players 
            //log missed attack to opponents board
            console.log('calling missedAttack() at id ',id);
            gameOver = this.missedAttack(id);
        }
        //are all sunk
        let sum = this.Hits.reduce((a,b) => a + b, 0);
        if(sum === 5){
          //flag all ships sunk 
          if(this.board === 'self'){ 
            this.setBoardStatus('lose');
            player_1.board.setBoardStatus('win');
            //display game over screen
            display.doc.showGameOver('oppo');
          }
          else{ 
            this.setBoardStatus('lose');
            player_0.board.setBoardStatus('win');
            //display game over screen
            display.doc.showGameOver('self');
          }
            //end game
            //console.log('Game Over !')
            //console.log('this board: ', this.board,' this board status: ',this.getBoardStatus()); 
            //exit function
            gameOver =  true;
        }
        //swap boards under fire unless last was ahit
        if(aHit){
            //keep attacking
            aHit = false;
            console.log('a hit so attacking again');
            console.log('Active player:',attackingPlayer);
            if(attackingPlayer === player_1 ){
                //if player_1 is computer
                if(players.computer){
                    console.log('gb 800 calling computer attack function');
                    gameOver = compAttack();
                }else{
                    console.log('awaiting human opponents attack');
                }
             }else{
                console.log('awaiting self to attack');
             }
    
        }else{
            //change attacker
            if(this.board === 'self'){ 
                //monitoring self under fire
                if(this.status === 'underFire'){ 
                    this.status = 'attack';
                    player_1.gameBoard.status = 'underFire';
                    setActivePlayer(player_0);
                }
            }else{
                //must be monitoring player_1 under fire
                if(this.status === 'underFire'){ 
                    this.status = 'attack';
                    player_0.gameBoard.status = 'underFire';
                    setActivePlayer(player_1);
                   // console.log('players.computer: ', players.computer);
     //               console.log('Active player:',attackingPlayer);
                    //if player_1 is computer
                    if(players.computer){
                        console.log('gB 828 calling computer attack function');
                        gameOver = compAttack();
                    }
                }
            }
        }
        return gameOver;
     }

     //log missedAttack (id ) where id is the attacked grid row col but need to display other board so adjust id
    missedAttack (id){ 
            let row;
            let col;
            let gameOver = false;
            id = Number(id);
            console.log('at missed attack');
    
            if(id > 120){
                id = id-121;
                row = Math.floor(id/11);
                col = id % 11;
                if(player_1.gameBoard.missed[row][col]=== 0){
                    player_1.gameBoard.missed[row][col]= 'X';
                    display.doc.showMissed(id);
                }
            }
            else{
                row = Math.floor(id/11);
                col = id % 11;
                id = id + 121;
                console.log('pl_0 missed[r][c]: ',player_0.gameBoard.missed[row][col]);
                if(player_0.gameBoard.missed[row][col]=== 0){
                    player_0.gameBoard.missed[row][col]= 'X';
                    display.doc.showMissed(id);
                }
            }
            console.log('attacking player: ',attackingPlayer);
            console.log('this.board', this.board);
            //change attacker
            /*
             if(this.board === 'self'){ 
                //monitoring self under fire
                if(this.status === 'underFire'){ 
                    this.status = 'attack';
                    player_1.gameBoard.status = 'underFire';
           //         setActivePlayer(player_0);
                    //console.log('players.self attacking: ', players.self);
                    //console.log('players array: ', players);
                    //console.log('awaiting player_0 attack');
                    display.doc.monitorBoard(player_1.gameBoard);    
                }
            }else{
                //must be monitoring player_1 under fire
                if(this.status === 'underFire'){ 
                    this.status = 'attack';
           //         setActivePlayer(player_1);
                    player_0.gameBoard.status = 'underFire';
                    console.log('player_1 attacking: ', players.computer);
                    if(players.computer){
                        console.log('gB 882 calling computer attack function');
                        gameOver = compAttack();
                        if(gameOver){console.log('returning gameOver: ',gameOver);return true;}
                    }else{
                        console.log('awaiting human opponents attack');
                    }
                }
            }
            */
            return false; //game not over
     }

     //receiveTEST
     receiveTEST(id){
        console.log('at receiveTEST receive attack id: ',id);
     }

     /*
     addShipsClass () {
        console.log('adding ships class');
        let grid = this.grid;
        let i = 1;
        let j = 1;
        let e;
        let c;
        
        for(i=1;i<11;i++){
            for(j=1;j<11;j++){
               e = grid[i][j];
               console.log(typeof(e), e.valueOf());
               e = e.valueOf();
               console.log('grid cell i j e: ', i, ' ', j, ' ', e), 'char code', e.charCodeAt(0);
               console.log("C".valueOf(),' ',"C".charCodeAt(0) );
               if( (e == "C")||(e === "C" ) || (e === "b")  ||(e === "c")
                 || (e === "s" ) || (e === "d") ){
                    id = (i*11)+j;
                    console.log('id: ',id);
                    display.doc.addShipClass(id);
               }else{
                console.log('false e: ',e);
               }
            }
        }
        console.log("C".charCodeAt(0) );
        console.log("b".charCodeAt(0) );
        console.log("c".charCodeAt(0) );
        console.log("s".charCodeAt(0) );
        console.log("d".charCodeAt(0) );
     }
        */

     addShipsClass (player) {
        /*
        for(let i = 0; i< 5; i++){
          const  ship = player.gameBoard.ships[i];
          const shipLocale = ship.getLocale();
        }
          */
         this.setBoardGrid(this._ships);
     }

}

export {GameBoard}