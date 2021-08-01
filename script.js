let num = 266219;
let mul = 1; // дополнительная переменная (начальное значение 1 т.к. произведение)

numString = num.toString(); // преобразование number в string

// перебераем строку
for (i = 0; i < numString.length; i++) {
    mul *= numString[i]; // умножаем mul на каждую цифру
};

console.log(mul);

mul = mul**3; // возведение в степень

// преобразование с string и вывод двух цифр числа
console.log(mul.toString().substring(0, 2)); 