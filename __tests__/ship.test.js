//ship.test.js
//NB only test object’s public interface. 
//Only methods or properties that are used outside of the ‘ship’ object need unit tests.

import {Ship} from "../src_forTest/ship.js";


describe('expect ship.js file to exist', function() {
    it('file should exist', function() {
        expect(require('../src/ship.js')).toBe.defined;
    });
});

describe('expect input to ship constructor to be obj with given properties', function () {

    it('input works', () => {
        const located = [['a',1],['a',2],['a',3],['a',4],['a',5]];
        const obj = new Ship({type: 'Carrier', location: located, length: located.length, hits: 0});
        expect(typeof obj).toBe('object');
        expect(obj.type).toBe('Carrier');
        expect(Array.isArray(obj.location)).toBe(true);
        expect(obj.length).toBe(5);
        expect(obj.hits).toBe(0);
        expect(obj.is_Sunk).toBe(false);
    });
});


describe('expect methods to work', function () {

    it(' hit() & isSunk() works', () => {
        const located = [['a',1],['a',2],['a',3],['a',4],['a',5]];
        const obj = new Ship({type: 'Carrier', location: located, length: located.length, hits: 0});
        for(let i =0; i< obj.length+1; i++ ){
            if(obj.hit(['a',i]), () => {
                if(i>0){expect(obj.hits).toBeGreaterThan(0);}
                if(obj.isSunk()){
                    expect(obj.is_Sunk).toBe(true);
                }
                else{
                    expect(obj.is_Sunk).toBe(false);
                }
            });
        }
    });

    it('setLocale()  works horizontal ', () => {
        //cruiser of length 3 starts at row 6, col 3 and is aligned horizontal orientation
        const located = [6,3,'H'];
        const data = {type : 'cruiser', location: located, length: 3 };
        const obj = new Ship (data);
        const locality = obj.shipLocale;
        expect (locality).toEqual( [[6,3],[6,4],[6,5]] ) ;
    });

    it('setLocale()  works vertical ', () => {
        //cruiser of length 3 starts at row 6, col 3 and is aligned verticalal orientation
        const located = [6,3,'V'];
        const data = {type : 'cruiser', location: located, length: 3 };
        const obj = new Ship (data);
        const locality = obj.shipLocale;
        expect (locality).toEqual( [[6,3],[7,3],[8,3]] ) ;
    });

    it('get locale', () => {
        const data = {type: 'Carrier', location: [5,3,'V'], length: 3, hits: 0}
        const ship = new Ship(data);
        const locality = ship.shipLocale;
        expect(locality).toMatchObject([[5,3],[6,3],[7,3]]);
    })
});


