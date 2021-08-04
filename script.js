'use strict';

// первое задание:

let arr = ['235', '498', '765', '456987', '9875', '3265', '24597']; // создаем массив
const re = /^[2, 4]/; //константа для регулярного выражения (в начале строки 2 или 4)

// цикл перебора массива
for (let i = 0; i < arr.length; i++) {
    if (re.exec(arr[i])) {              // проверяем елементы массива через регулярку
        console.log(arr[i]);            // выводим в консоль полученный элемент
    }
}

// второе задание:

for (let i = 2; i <= 100; i++) {    // перебираем числа от 2 до 100
    let flag = 1;                   // флаг
    if (i > 2 && i % 2 !== 0) {     // условие при котором не будут перебираться четные числа
        /* для нахождения наименьшего делителя, 
        достаточно проверить делится ли число на корень квадратный от делителя, 
        а так же проскакиевем четные числа: */
        for (let j = 3; j * j <= i; j += 2) {    
            if (i % j === 0) {  // true если число поделилось без остатка
                flag = 0;       // в таком случае флагу присваем нуль
                break;          // останавливаем выполнение цикла, число уже не простое
            }
        }
    } else {
        if (i !== 2) {flag = 0;} // если i не равно 2 присваеваем флаг 0, т.к. 2 тоже простое число
        }
    if (flag === 1) {              // если флаг у числа равен 1, то выводим его в консоль
        console.log(i + ', делитель этого числа 1 и ' + i);
    }
}