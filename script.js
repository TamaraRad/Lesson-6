/* let demo = -11;

if (demo < 0 && demo < -10) {
    console.log(`Число ${demo} отрицательное и оно меньше -10`);
} else if (demo == 0) {
    console.log(`Число является нулем`);
} else {
    console.log(`Число ${demo} положительное.`);
}

let a = 300;

//Если чило больше 100 то выводить "число больше 100"
//Если чило больше 50 то выводить "число больше 50"
//Если чило больше 30 то выводить "число больше 30"

if (a > 30 && a <= 50) {
    console.log(`Число ${a} больше 30`);
} else if (a > 50 && a <= 100) {
    console.log(`Число ${a} больше 50`);
} else if (a > 100) {
    console.log(`Число ${a} больше 100`);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue
    console.log(i);
}

// i= 0 => 0<10 => 0 
//0+1 => 1<10 => 1
//1+1 => 2<10 => 2
//.......
//9+1 => 10<10 => false
//0 1 2 3 4 5 6 7 8 9

let j = 10;
while (j < 5) {
    console.log(`Hello ${j}`);
    j++;
}

console.log('** Задание 1 **')

do {
    console.log(`Hello ${j}`);
    j++;
} while (j < 5)

// 0<5 => 0

//task 4
// Товары на сумму больше 2000 рублей – скидка – 5%; 
// Товары на сумму больше 5000 рублей – 10%; 
// Товары на сумму больше 10000 рублей – 15%. 
// Пример: В корзине товары на сумму 6000 рублей. С учетом скидки – 5400 рублей.
// При выборе товаров на сумму до 1000 выводить сообщение – «Бесплатная доставка от 1000 рублей, до бесплатной доставки не хватает [посчитать сколько не хватает]»

let price = 3000;
let sale = 0;

if (price > 2000 && price < 5000) {
    sale = price * 0.05;
} else if (price > 5000 && price < 10000) {
    sale = price * 0.10;
} else if (price > 10000) {
    sale = price * 0.15;
} else if (price < 1000) {
    console.log (`Бесплатная доставка от 1000 рублей. Не хватает ${1000 - price}`)
}

console.log(`В корзине товаров на сумму ${price} рублей. С учетом скидки - ${price - sale}`);

let value = 10000;
let promo = prompt(`Стоимость товара в корзине - ${value}. Введите промокод`);

if(promo === "DELFA") {
    console.log(`Скидка по промокоду - 50%. Стоимость товара ${value-value*0.5}`)
} else { 
    console.log('Промокод не походит');
}

let myName = prompt('Введите имя');
let city = prompt('Введите город');
let year = +prompt('Год рождения');

console.log(`Добрый день, ${myName}. Вам ${2022 - year} лет. Вы живете в городе ${city}`); */
/*
let abc = 100;

if (abc > 50) {
    console.log("Цена завышена");
} else {
    console.log("Можно покупать");
}

let a = 20;
let b = 10;
*/

//Если a<10 то a-b, иначе если a=10 то b-a, во всех остальных случаях a+b
/*
if (a < 10) {
    console.log(a - b);
} else if (a == 10) {
    console.log(b - a);
} else {
    console.log(a + b);
}
*/


/*
let pass = "qwerty";
let count = 0;
let errorCount = 0;

while (count < 5) {
    let passInput = prompt("Введите пароль");

    if (passInput == pass) {
        console.log("Пароль верный");
        break;
    } else {
        console.log("Введите пароль еще раз");
        errorCount++;
    }
    if (errorCount == 5) {
        console.log("Попытки ввода пароля закончились");
        break;
    }
    count++;
}
*/

let sum = 0;
for(let i = 0; i<10; i++) {
    let numb = +prompt('Введите число');
    if (numb > 0) {
        console.log(numb);
        sum = sum + numb;
    }
    
}
console.log('Сумма введенных положительных чисел=${sum}');