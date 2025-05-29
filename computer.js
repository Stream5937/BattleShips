//computer.js
//the computers attack logic

import {player_0} from './index.js';

//initially fire at random
//randomise
//a local grid to to log attacks 
let local_grid = [];
let rows = 11;
let cols = 11;

for(let i = 1; i < rows; i++){
    local_grid[i]= [];
    for(let j = 1 ; j < cols; j++){
        local_grid[i][j] = '0';
    }
}

//pick random row col 1 -> 10
let row; //Math.floor(1+(Math.random() * 10));
let col; //Math.floor(1+(Math.random() * 10));


function compAttack(){
    console.log('Computer attacking start');
    let attack = true;
    let count = 1000;
    let gameOver = false;
    //break after a 1000 tries
    while(count-- > 0){
       while(attack){
            row = Math.floor(1+(Math.random() * 10));
            col = Math.floor(1+(Math.random() * 10));
            console.log('comp rnd attack row: ', row);
            console.log('comp rnd attack col: ', col);
            if(local_grid[row][col] === '0'){
                local_grid[row][col] = 1;       //logs have attacked this cell
                attack = false ;                //found cell to attack;
                count = -1;                     //so stop attacks unless hit recorded -> dealt with by hit(pos)
                let id = (row*11) + col;
                gameOver = player_0.gameBoard.receiveAttack(id);
                return gameOver; 
            }
            
            if(count < 0 ) { attack = false;}
       }
    }
   if(count < 0){
    console.log('count < 0', count);
   }
    console.log('Computer attacking end @count < 0');
    return gameOver;
}

export {compAttack};