/**
 * Modules are files of reusable code. We can import
 * sections of pre-written code to use whenever we want.
 * They are great for reusability and maintainability
 */

import {PI, getCircumference, getArea} from "./es6-modules-utils.js";

console.log(PI);

let circumference = getCircumference(15);
console.log(circumference);

let area = getArea(15);
console.log(area)