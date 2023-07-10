/**
 * cookie is a small text file stored on your computer and 
 * is used to remember information about the user saved in
 * name=value pairs
 */

//check to see if cookie is enabled
console.log(navigator.cookieEnabled)

//update and expire a cookie. you can add more than one
document.cookie = "firstName = Amelia; expires=Sat, 9 July, 2023 12:00:00 UTC; path=/";
document.cookie = "lastName = Bedilia; expires=Sat, 9 July, 2023 12:00:00 UTC; path=/";
setCookie("email", "kaydlovett@gmail.com", 365);

deleteCookie("email");
console.log(getCookie("firstName"));
//console.log(document.cookie);


//function to set cookie
function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires="+date.toUTCString();

    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(";");
    let result = null;
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    })
    return result;
}