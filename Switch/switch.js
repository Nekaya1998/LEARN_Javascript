/**
 * switch statements examine a value/variable through cases and returns data based on the 
 * entered value. 
 */

let grade = "B";

switch(grade){
    case "A":
        console.log("Exceptional")
        break;
    case "B":
        console.log("Above average")
        break;
    case "C":
        console.log("Average")
        break;
    case "D":
        console.log("Below Average")
        break;
    default:
        console.log("Not passing")
        break;
}