let num = 266219;
let number = Array.from(String(num))

console.log(number)


function multiply() {
    let a = 1;
    for (let i = 0; i < number.length; i++)
    a = a * number[i]
    return a
}
console.log(multiply())
const result = multiply() ** 3

console.log(String(result).slice(0, 2))