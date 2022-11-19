//Задание1 Сравнение чисел
function comparisonFunction(number1, number2) {
  if (number1 == number2) return console.log(0);
  else {
    c = number1 > number2 ? 1 : -1;
    return console.log(c);
  }
}
//Задание2 Факториал
function factorialFunctin(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return console.log(fact);
}
//Задание3 Преобразование цифр в число
function numberFunction(num) {
  let n = 0;
  let counter = num.length;
  let number = 0;
  for (let i = 0; i < counter; i++) {
    number += (num % 10) * 10 ** n++;
    num = Math.trunc(num / 10);
  }
  console.log(number);
}
//Задание4 Площадь фигуры
function areaFunction(wd, lg) {
  if (lg == 0) return console.log("Площадь фигуры равна ", (wd **= 2));
  else return console.log("Площадь фигуры равна ", (wd *= lg));
}
//Задание5 Совершенное число
function perfectNumberFunction(num) {
  let perfect_num = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) perfect_num += i;
  }
  return perfect_num == num ? 1 : 0;
}
//Задание6 Совершенное число в диапазоне
function perfectsNumbersFunction(a, b) {
  if (a > b) {
    let min = b;
    b = a;
    a = min;
  }
  for (; a <= b; a++) {
    if (perfectNumberFunction(a)) console.log(a);
    else continue;
  }
}
//Задание7 Вывод времени в формате чч:мм:сс
function functionTime(h, m, s) {
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  console.log(h + ":" + m + ":" + s);
}
//Задание8 Нахождение секунд
function functionReturnSecond(h, m, s) {
  return h * 3600 + m * 60 + s * 1;
}
//Задание9 Перевод секунд в ч.м.с
function functionReturnTime(sec) {
  let hh, mm, ss;
  hh = Math.trunc(sec / 3600);
  sec %= 3600;
  mm = Math.trunc(sec / 60);
  ss = sec % 60;
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  console.log(hh + ":" + mm + ":" + ss);
}
//Задание10 Разница между датами
function functionReturnData(h1, m1, s1, h2, m2, s2) {
  difference_tim =
    functionReturnSecond(h1, m1, s1) - functionReturnSecond(h2, m2, s2);
  difference_tim = difference_tim < 0 ? -1 * difference_tim : difference_tim;
  functionReturnTime(difference_tim);
}

alert("Задание1 Сравнение чисел");
ch = "true";
while (ch) {
  number1 = +prompt("Enter number1:");
  if (number1 == 0) break;
  number2 = +prompt("Enter number2:");
  if (number2 == 0) break;
  console.log(comparisonFunction(number1, number2));
  ch = confirm("Продолжить?");
}
console.log("##############################");
//Задание2
ch = "true";
while (ch) {
  number = +prompt("Факториал числа");
  if (number == 0) break;
  factorialFunctin(number);
  ch = confirm("Продолжить?");
}
console.log("##############################");
alert("Задание3 Преобразование цифр в число");
ch = "true";
while (ch) {
  number = prompt("Введите три цифры");
  if (!number) break;
  ch = confirm("Продолжить?");
}
console.log("##############################");
//Задание4
ch = "true";
while (ch) {
  width = +prompt("Введите ширину");
  if (width == 0) break;
  length = +prompt("Введите длину");
  if (length == 0) break;
  areaFunction(width, length);
  ch = confirm("Продолжить?");
}
console.log("##############################");
//Задание5,6
ch = "true";
while (ch) {
  if (
    confirm(
      'Хотите узнать совершенное ли число "OK"\n Хотите найти совершенное число в диапазоне "Отмена"'
    )
  ) {
    number = +prompt("Введите число");
    perfectNumberFunction(number)
      ? console.log(number, "Число совершенное")
      : console.log(number, "Число не является совершенным");
  } else {
    min = +prompt("Введите начало диапазона");
    max = +prompt("Введите конец диапазона");
    perfectsNumbersFunction(min, max);
  }

  ch = confirm("Продолжить?");
}
console.log("##############################");
alert("Задание7 Вывод времени в формате hh:mm:ss");
ch = "true";
while (ch) {
  functionTime(
    prompt("Введите время:\nЧасы"),
    prompt("Введите время:\nМинуты"),
    prompt("Введите время:\nСекунды")
  );
  ch = confirm("Продолжить?");
}
console.log("##############################");
alert("Задание8,9,10 Функции времени");
ch = "true";
while (ch) {
  (h = prompt("Введите время:\nЧасы")),
    (m = prompt("Введите время:\nМинуты")),
    (s = prompt("Введите время:\nСекунды"));
  console.log(functionReturnSecond(h, m, s), "секунд");
  console.log("##############################");
  functionReturnTime(functionReturnSecond(h, m, s));
  console.log("##############################");
  (h1 = prompt("Введите первую дату:\nЧасы")),
    (m1 = prompt("Минуты")),
    (s1 = prompt("Секунды"));
  (h2 = prompt("Введите вторую дату:\nЧасы")),
    (m2 = prompt("Минуты")),
    (s2 = prompt("Секунды"));
  functionReturnData(h1, m1, s1, h2, m2, s2);
  ch = confirm("Продолжить?");
}
