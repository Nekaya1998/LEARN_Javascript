/**
 * get methods bind an object property to a function when that 
 * property is accessed
 * 
 * set methods bind an object property to a function when 
 * that property is assigned a value
 */

class Car{
    constructor(power){
        //the underscore makes this a protected  property
        this._power=power;
        this._gas = 25;
    }

    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L`;
    }
    
    set gas(value){
        if(value > 50){
            value = 50;
        } else if (value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);
console.log(car.power)

car.gas = 13;
console.log(car.gas)