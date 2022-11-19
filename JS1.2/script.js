//Задание1 Возведение в степень
function functionRaisingDegree(
  basis,
  indicator,
  degree = 1,
  counter = indicator
) {
  if (indicator == 0) return console.log(1);
  else if (indicator > 0) {
    if (counter > 0) {
      degree *= basis;
      return functionRaisingDegree(basis, indicator, degree, --counter);
    } else return console.log(degree);
  } else {
    if (counter < 0) {
      degree *= basis;
      return functionRaisingDegree(basis, indicator, degree, ++counter);
    } else return console.log("1/" + degree + " " + "or" + " " + 1 / degree);
  }
}

//Задание2 Нахождение НОД
function functionNOD(a, b) {
  if (a < 0) -1 * a;
  if (b < 0) -1 * b;
  if (a % b > 0) return functionNOD(b, a % b);
  else return b;
}

//Задание3 Нахождение большей цифры в числе
function functionMaxFigute(number, max_num = 0) {
  number = number < 0 ? -1 * number : number;
  if (number % 10 > 0) {
    if (max_num < number % 10) max_num = number % 10;
    return functionMaxFigute(Math.trunc(number / 10), max_num);
  } else return max_num;
}

//Задание4 Проверка простое ли чесло
function functionPrimeNumber(number, iter = 2) {
  number = number < 0 ? -1 * number : number;
  if (Math.sqrt(number) == 1 || Math.sqrt(number) == 0) return -1;
  if (iter < Math.sqrt(number) || iter == Math.sqrt(number)) {
    if (number % iter != 0) return functionPrimeNumber(number, ++iter);
    else return 0;
  }
  return 1;
}

//Задание5 Разложение на множители
function functionMultipleirsNumber(
  number,
  control_switch = 1,
  iter = 2,
  arr = []
) {
  number = number < 0 ? -1 * number : number;
  if (control_switch) {
    if (functionPrimeNumber(number) < 0)
      return console.log("Число не является простым либо составным");
    else if (functionPrimeNumber(number)) {
      arr.push(1);
      arr.push(number);
      return arr;
    }
  }
  if (number > 1) {
    if (number % iter == 0 && functionPrimeNumber(iter) == 1) {
      arr.push(iter);
      number /= iter;
      return functionMultipleirsNumber(number, 0, iter++, arr);
    } else return functionMultipleirsNumber(number, 0, ++iter, arr);
  }
  return arr;
}

//Задание6 Число Фибоначи по порядковому номеру
function functionFibonacciNumber(
  item_number,
  number1 = 1,
  number2 = 1,
  counter = 3
) {
  if (counter <= item_number) {
    let c = number1 + number2;
    number1 = number2;
    number2 = c;
    return functionFibonacciNumber(item_number, number1, number2, ++counter);
  }
  return number2;
}
//Задание1
ch = "true";
while (ch) {
  basis = prompt("Возведение в степень\n Основание степени");
  indicator = prompt("Показатель степени");
  functionRaisingDegree(basis, indicator);
  ch = confirm("Продолжить?");
}
console.log("***************************************");
//Задание2
ch = "true";
while (ch) {
  a = prompt("НОД\n Введите число");
  b = prompt("Введите число");
  console.log(functionNOD(a, b));
  ch = confirm("Продолжить?");
}
console.log("***************************************");
//Задание3
ch = "true";
while (ch) {
  number = prompt("Нахождение большей цифры в числе\n Введите число");
  console.log(functionMaxFigute(number));
  ch = confirm("Продолжить?");
}
console.log("***************************************");
//Задание4
ch = "true";
while (ch) {
  number = prompt("Простое ли число\n Введите число");
  if (functionPrimeNumber(number) == -1)
    console.log("Число не является простым либо составным");
  else
    functionPrimeNumber(number)
      ? console.log("Число простое")
      : console.log("Число составное");
  ch = confirm("Продолжить?");
}
console.log("***************************************");
//Задание5
ch = "true";
while (ch) {
  number = prompt("Разложение числа на множители\n Введите число");
  console.log(functionMultipleirsNumber(number));
  ch = confirm("Продолжить?");
}
console.log("***************************************");
//Задание6
ch = "true";
while (ch) {
  item_number = prompt(
    "Число Фибоначи по порядковуму номеру\n Введите порядковый номер"
  );
  console.log(functionFibonacciNumber(item_number));
  ch = confirm("Продолжить?");
}
