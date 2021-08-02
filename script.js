let lang;

lang = prompt('Ввидите язык: ru или en');

// через if
if (lang === 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресение');
} else if (lang === 'en') {
    console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else {
    console.log('введено не верное значение');
}

// через switch-case 
switch (lang) {
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресение');
        break;
    case 'en':
        console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
        break;
    default:
        console.log('введено не верное значение');
}

// через многомерный массив
// первый вариант если использовать объект и ключи
let array = {};

array.ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
array.en = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

console.log(array[lang]);

// второй вариант если использовать тернарный оператор, что не запрещено условиями задачи, и именно массив
let array02 = [];

array02[0] = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
array02[1] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

let resault = lang === 'ru' ? 0 : lang === 'en' ? 1 : console.log('не верно введено значение');
console.log(array02[resault]);

// третий вариант если использовать именно массив и без логическихх операторов
let resault02 = +lang.includes('en'); // вот только не придумал как сообщить что введено не то что надо
console.log(array02[resault02]);

// вторая часть дополнительного задания
let namePerson = prompt('ввидите имя');

let resaul03 = namePerson === 'Артем' ? console.log('директор') : (namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент'))