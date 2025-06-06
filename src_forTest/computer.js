//computer.js
//the computers attack logic

import {player_0} from './index.js';

//initially fire at random
//randomise
//a local grid to fit position of ships 
let grid = [];
let rows = 11;
let cols = 11;

for(let i = 1; i < rows; i++){
    grid[i]= [];
    for(let j = 1 ; j < cols; j++){
        grid[i][j] = '0';
    }
}

//pick random row col 1 -> 10
let row; //Math.floor(1+(Math.random() * 10));
let col; //Math.floor(1+(Math.random() * 10));


function compAttack(){
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
            if(grid[row][col] === '0'){
                attack = false;
                //gameBoard_0 id 
                let id = (row*11) + col;
                gameOver = player_0.gameBoard.receiveAttack(id);
               // if(gameOver){
                    console.log('returning gameOver: ',gameOver);
                    return gameOver;    //here true
               // }
            }
            if(count < 0 ) { attack = false;}
        }
    }
    if(count < 0){
        console.log('count < 0', count);
    }
    return gameOver; //here should be false
}

export {compAttack};