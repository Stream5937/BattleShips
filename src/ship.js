//ship.js
/*  BattleShips
    the Ship class:

    ‘ships’ objects that include their length, 
            the number of times they’ve been hit, and 
            whether or not they’ve been sunk.
    'types' No. 	Class of ship 	Size
            1 	    Carrier 	    5
            2 	    Battleship 	    4
            3 	    Cruiser 	    3
            4 	    Submarine 	    3
            5 	    Destroyer 	    2

    only test object’s public interface. 
             Only methods or properties that are used outside of the ‘ship’ object need unit tests.

    Ships should have:
            a hit() function that increases the number of ‘hits’ to the ship.
            isSunk() should be a function that calculates whether a ship is considered sunk based             on its length and the number of hits it has received.
*/

class Ship {
    //locale = the grid array [row col] co-ords of this ship
    shipLocale = [];

    constructor (shipData){
        //cater for incorrect invocation i.e not using 'new' keyword
        if(!(this instanceof Ship)) {
            //throw error:
            throw Error('Error: Incorrect invocation');
            //or
            //return new Ship:
            //return new Ship(shipsData);
        }else{
            console.log(shipData);
            this.type = shipData.type;
            this.location = shipData.location;
            this.length = shipData.length;
            this.hits  = 0;
            this.shipHitPositions = [];
            this.is_Sunk = false;
            //this.shipLocale = the grid array row col co-ords of this ship
            this.shipLocale= this.setLocale();
        }
    }

    //methods
    //pos is a row col array & location is a row col orientation array
    //set shipLocal to be the array of row/cols occupied
    //uses string comparisons to check pos included in locality
   
    hit (pos) {
        //check not an already hit position
        let a = Array.from(this.shipHitPositions);
        console.log('a: ',a);
        let found = this.checkSub(a,pos);
        //console.log('found: ',found);
        //check for hit if not already found
        if(!found) {
            //check if a hit
            a = this.shipLocale;
            let hit = this.checkSub(a,pos);
            if(hit){
                //increment hits
                console.log('hit at ',pos);
                this.hits++;
                //save the hit
                this.shipHitPositions = this.shipHitPositions + pos;
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    isSunk () {
        if(this.hits === this.length){
            return this.isSunk = true;
        }else{
            return false;
        }
    }

/*
   setLocale() sets the locality array from this.location array
   The locality array being the space to check for hits etc
   eg for battleship location might be : location : [5, 4,'H'], ==> [start-row, start-col, orientation)
   location shows orientation to be 'H' horizontal : this.length could be 4
   so grid  cols     col4    col5    col6    col7
      grid  row 5     'b'     'b'     'b'     'b'      indicate battle ship
   so locality will be the array [ [5,4], [5,5], [5,6], [5,7] ]
   however if orientation was vertical
   the locality array would be   [ [5,4], [6,4], [7,4], [8,4] ]
*/

    setLocale () {
        //horizontal or vertical in grid
        let row = this.location[0];   
        let col = this.location[1];
        let orientation = this.location[2];
        let locality_row = [];
        let locality_col = [];
        let locality = [];

        if (orientation === 'H'){
            //horizontal so cols increase
            for(let i = 0; i < this.length; i++){
                locality_row[i] = row;
                locality_col[i] = col + i;
            }
        }else{
            //vertical so rows increase
            for(let i = 0; i < this.length; i++){
                locality_row[i] = row +i;
                locality_col[i] = col;
            }
        }
        for(let i = 0; i < this.length; i++){
            locality[i] = [locality_row[i], locality_col[i]];
        }
       
        return locality;
    }

    getLocale () {
        //return the locale array
        return this.locale;
    }

    // check for existence of sub array sub in array a returns true or false
    checkSub(a, sub) {
        return a.join(',').includes(sub.join(','));
    }

}


export {Ship}