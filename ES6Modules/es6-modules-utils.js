/**
 * Utility file for es6 module
 * 
 * Math utils
 */

export const PI = Math.PI;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * Math.pow(radius, 2);
}