const randomNumber = Math.floor(Math.random()*10 + 1);

let guesses = 0;
document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses++;
    
    if(guess==randomNumber){
        alert(`you guessed the right number of ${guess} in ${guesses} guesses`)
    } else if (guess < randomNumber) {
        alert("higher")
    } else {
        alert("lower")
    }
}