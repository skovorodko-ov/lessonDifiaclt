'use strict';

// создаем объект, содержащий переменные и функции
let date = {
    now: 0,         // переменная времени в настоящий момент
    hours: ['час', 'часа', 'часов',],               // массив выбора склонения
    minuts: ['минута', 'минуты', 'минут',],         // массив выбора склонения
    seconds: ['секунда', 'секунды', 'секунд',],     // массив выбора склонения
    week: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], // массив с днями недели
    month: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],  // массив с названиями месяцев
    declOfNum: function (n, array) {        // функция приминения склонения в зависимости от числа "n"
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        if (n > 10 && n < 20) {
            return array[2];
        }
        if (n1 > 1 && n1 < 5) {
            return array[1];
        }
        if (n1 === 1) {
            return array[0];
        }
        return array[2];
    }, 
    addZero: function (n) {             // функция добавления "0" если цифра единичная
        if (n < 10) {
            return '0' + n;
        } else {
            return n
        }
    }
};

let div, div1;                          // вспомогательные перемнные для создания в html тега <div>

let creatingDiv = function(){           // функция создающая теги <div> в html
    div = document.createElement('div');
    document.body.append(div);
    div1 = document.createElement('div');
    document.body.append(div1);
};

/* функция формирует запись даты и времени согласно п. а) задания, а также обновляет время и дату в текущий момент */
let timer = function() {               
    date.now = new Date;
    return div.innerHTML = 'Сегодня ' + date.week[date.now.getDay() - 1] + 
    ', ' + date.now.getDate() + ' ' + date.month[date.now.getMonth()] + ' ' + 
    date.now.getFullYear() + ' года, ' + 
    date.now.getHours() + ' ' + date.declOfNum(date.now.getHours(), date.hours) + ' ' + 
    date.now.getMinutes() + ' ' + date.declOfNum(date.now.getMinutes(), date.minuts) + ' ' +
    date.now.getSeconds() + ' ' + date.declOfNum(date.now.getSeconds(), date.seconds);
};

/* функция формирует запись даты и времени согласно п. б) задания */
let timer1 = function () {
    return div1.innerHTML = date.addZero(date.now.getDate()) + '.' + 
    date.addZero(date.now.getMonth()) + '.' + date.now.getFullYear() + ' - ' + 
    date.now.toTimeString().replace(/ .*/, '');     // метод который создает строку содержащую текущее время, методом replace при помощи регулярного выражения заменяем лишнее на постую строку
};

creatingDiv(); // запуск функции создания дивов

/* функция запускающая выполение функций timer и timer1 каждую секунду */
setInterval(
    () => {
        timer();
        timer1();
    }, 1000
);