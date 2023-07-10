let temp = 32;
temp = getCelsius(temp)

document.getElementById("convertButton").onclick = function(){
    let isFarenheitChecked = document.getElementById("farenheit").checked;
    let isCelsiusChecked = document.getElementById("celsius").checked;
    let tempLabel = document.getElementById("tempLabel");
    let input = Number(document.getElementById("degreeInput").value);

    if(isFarenheitChecked){
        tempLabel.innerHTML = getFarenheit(input) + "°F";
    } else if (isCelsiusChecked){
        tempLabel.innerHTML = getCelsius(input) + "°C";
    } else {
        tempLabel.innerHTML = "No unit selected. Select a unit";
    }
}

function getFarenheit(number){
    return number * 9 / 5 + 32
}

function getCelsius(number){
    return ((number - 32) * (5/9))
}