alert("Угадайте число от 1 до 100")
let number = Math.floor(Math.random()*100);
quesses = 0;

function randomNumber() {   
    let result = prompt("Введите число ")   
    if(result == number) {
        return alert("Вы угадали число! Попыток: " + quesses + "Число: " + number)
    } else if(result < number && result != 0) {
        alert("Ваше число " + result + " меньше загаданного. Попыток: " + quesses )   
        quesses++;
    } else if(result > number) {
        alert("Ваше число " + result + " больше загаданного. Попыток: " + quesses)
        quesses++;
    } else if(isNaN(parseFloat(result)) || result === ""){
        quesses = quesses - 1;
        alert("Введите число!")
    } else if(result === null){
        return alert("Игра окончена! Вы нажали отмена")
    }

    if(quesses < 10) {
        randomNumber();
        
    } else {
        return alert("Вы не угадали число")
    }
    console.log(result)
}
randomNumber()
console.log(typeof(prompt))
console.log(number)
