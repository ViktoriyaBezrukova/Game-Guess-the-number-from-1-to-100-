let a = "      (.апарварв.)       ";

function stringOrnot(a) {
    if (typeof a == "string") {
        alert("I'm a string!");
    } else{
        alert("I'm not a string!");
    }
    if(a.length > 30) {
        a = a.substr(0, 30) + "..."
    } 
    return a.trim()
    
}

console.log(stringOrnot(a))