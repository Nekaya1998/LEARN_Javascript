const clockLabel = document.getElementById("clockLabel");

updateCLock();
setInterval(updateCLock, 1000);

function updateCLock(){
    let date = new Date();
    clockLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let meridiem = hours >= 12 ? 'pm' : 'am';

        hours = (hours % 12) || 12;

        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);

        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    function formatZeros(time){
        time = time.toString();
        return time.length < 2 ? ("0"+ time) : time;
    }
}

