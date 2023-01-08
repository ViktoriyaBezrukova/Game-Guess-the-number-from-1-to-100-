let money = 35000;
let income = "Таксую";
let deposit = true;
let mission = 150000;
let period = 10;
let budgetDay = money / 30




console.log(typeof money)
console.log(typeof income)
console.log(typeof deposit)
console.log("Цель заработать " + mission + " рублей");




money = +prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую (пример: Квартплата, проездной, кредит)")
deposit = confirm("Есть ли у вас депозит в банке?");
expenses1 = prompt("Введите обязательную статью расходов?");
expenses2 = prompt("Введите обязательную статью расходов?");


let amount1 = +prompt("Во сколько " + expenses1 + " обойдется?");
let amount2 = +prompt("Во сколько " + expenses2 + " обойдется?");


console.log("Бюджет на день: " + Math.floor(budgetDay) + "рублей");

if(budgetDay > 1200) {
    alert("У вас высокий уровень дохода")
} if(1200 >= budgetDay > 600) {
    alert("У вас средний уровень дохода")
} if(600 >= budgetDay > 0) {
    alert("К сожалению у вас уровень дохода ниже среднего")
} if (0 >= budgetDay ) {
    alert("Что то пошло не так")
}
console.log(addExpenses);

function getExpensesMonth(a, b) {
    const sum = a + b;
    return sum;
}

function getAccumulatedMonth(a, b) {
    const dif = a - b;
    return dif;
}

function getTargerMonth(a, b) {
    const division = a / b;
    return division
}
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2))
budgetDay = accumulatedMonth / 30;




console.log([addExpenses])
console.log("Сумма обязательных расходов: " + getExpensesMonth(amount1, amount2));
console.log("Накопления за месяц: " + accumulatedMonth);
console.log("Цель будет достигнута за " + Math.ceil(getTargerMonth(mission, accumulatedMonth)) + " месяцев(-а)")
console.log("Бюджет на день : " + budgetDay);
