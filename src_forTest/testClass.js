class TestClass {

    constructor (data){
        //cater for incorrect invocation i.e not using 'new' keyword
        if(!(this instanceof TestClass)) {
            //throw error:
            throw Error('Error: Incorrect invocation');
            //or
            //return new TestClass();
        }else{
            //this.name = 'Fred';   //obj_1
            this.name = data.name;  //obj_2
        }
        return this;
    }
    
}
/*
let obj_1 = new TestClass();

console.log ('a new obj_1 TestClass', obj_1 );
*/

let data = {'name':'Fred'};
let obj_2 = new TestClass(data);

console.log ('a new obj_2 TestClass', obj_2 );

export {TestClass} ;

