let a = "Ехала машина, в яму упала!      !  ";


function stringOrnot(a) {
    if (typeof a == "string") {
        alert("I'm a string!");
    } else{
        alert("I'm not a string!");
    }
    a = a.trim()
    if(a.length > 30) {
        a = a.substr(0, 30) + "..."
    }
    return a
}
console.log(a.length)
console.log(stringOrnot(a));
