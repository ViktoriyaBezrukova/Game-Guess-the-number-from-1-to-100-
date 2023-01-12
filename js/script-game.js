function randomNumber() {
    let number = Math.floor(Math.random()*100);
    alert("Угадайте число от 1 до 100")
    for(let quesses = 1; quesses <= 10; quesses++){
        let result = +prompt("Попытка номер" + quesses + " , Введите число ")
        console.log(number)
        console.log(result)
        if(result == number) {
            return alert("Вы угадали число! Попыток: " + quesses + "Число: " + number)
        } else if(result < number) {
            alert("Ваше число " + result + " меньше загаданного. Попыток: " + quesses )        
        } else if(result > number) {
            alert("Ваше число " + result + " больше загаданного. Попыток: " + quesses)
        } else if(isNaN(parseFloat(result))){
            quesses = quesses - 1;
            alert("Введите число!")
        } else if(quesses = 10){
            return alert("Вы не угадали число! Число :" + number)
        }
        
    }
    return alert("Вы не угадали число! Число :" + number)
}
randomNumber()