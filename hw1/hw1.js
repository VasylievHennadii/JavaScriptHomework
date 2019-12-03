let string = 'some test string'
console.log(`Данная строка: ${string}`);

// 1.Сделать первую и последнюю буквы строки в верхнем регистре. При помощи конкатенации и через шаблонные строки.
let newString = string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase();
console.log(`First&Last letter in string: ${newString}`);

// 2.найти положение слова 'string' в строке
console.log(`положение 'string' в строке: ${string.indexOf("string")}`);

// 3.Найти положение второго пробела в строке (“вручную” ничего не считать).
let firstSpace = string.indexOf(" ");
let secondSpace = string.indexOf(" ", firstSpace + 1);
console.log(`положение второго пробела в строке: ${secondSpace}`);

// 4.получить строку с 5 по 9 символы
console.log(`строкa с 5 по 9 символы: ${string.substring(5, 9)}`);

// 5.Получить число pi из Math, округленное до 2-х знаков после точки
console.log('число pi из Math, округленное до 2-х знаков после точки:');
console.log(parseFloat(Math.PI.toFixed(2)));

// 6.Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51.
console.log("исходный ряд: 15, 11, 16, 12, 51, 12, 13, 51. Находим min и max");
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));

// 7.Получить случайное число и округлить его до двух цифр после запятой.
console.log("случайное число, округленное до 2-х знаков после запятой:")
console.log(parseFloat(Math.random().toFixed(2)));

// 8.Получить случайное целое число от 0 до X. X - любое произвольное число.
console.log("случайное число от 0 до мах:");
let max = 654;
console.log(`max = ${max}`);
console.log(Math.floor(Math.random()*max + 1));

// 9.Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log('проверить и привести к нормальному виду результат 0.6 + 0.7');
console.log(0.6 + 0.7);
let first = 0.6;
let second = 0.7;
let res = (first*10 + second*10)/10;
console.log(res);

// 10. Создать объект с полем **product**, равным 'iPhone'.
let obj = {
    product: 'iPhone'
}
console.log(obj);
// 11. Добавить в объект поле **price**, равное 1000 и поле **currency**, равное 'dollar'.
obj.price = 1000;
obj.currency = 'dollar';
console.log(obj);
// 12. Добавить поле **details**, которое будет содержать объект с полями **model** и **color**
obj.details = {
    model: '6s 3/64',
    color: 'red'
}
console.log(obj);