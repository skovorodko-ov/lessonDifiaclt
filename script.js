'use strict';

// переменные на выбор, из promt всегда приходит строка

// const str = 'hellow';
// const str = '   hellow    ';
// const str = 12121;
const str = '  Привет меня зовут Олег! Мне 31 год. Я родом из Минска.';

function foo(a) {
    if (typeof(a) !== 'string') {                   // проверка типа
        return console.log('вы ввели не строку!');  // оповещение пользователя, можно заменить на alert
    }
    a = a.trim();                                   // уберает пробелы в начале и конце у переменной
    if (a.length > 30) {                            // проверяем длинну строки
        return console.log(a.slice(0, 30) + '...'); // обрезаем до 30 знаков и добовляем "..."
    } else {
        return console.log(a);                      // если условия не выполнились возвращаем строку
    } 
}

foo(str);                                           // вызов функции