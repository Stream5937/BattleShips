//display.js
import {Dom_fns} from './dom-fns.js';

//A Display Controller class
class Display {

    // a BattleShip game creation display object constructor 
    // access via key word new
   constructor (game_instance) {
    //cater for incorrect invocation i.e not using 'new' keyword
        if(!(this instanceof Display))  {
            //throw error:
            throw Error('Error: Incorrect invocation');
            //or
            //return new Display:
            //return new Display(game_instance);
        }else{
            //for the display
            this.doc= new Dom_fns(document);           //a new dom_fns instance
          //  this.renderGameBoard(0);
          //  this.renderGameBoard(1);
        }
    }

    //display methods
    renderGameBoard(board) {
       this.doc.gridSetUp(board);
    }

}

export {Display}