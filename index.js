"use strict";
/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// const time = 903;
// const hours = Math.floor(time / 60);
// const updatedHours = hours <= 9 ? `0${hours}` : `${hours}`;
// const minutes = (time % 60).toString().padStart(2, "0");

// console.log(`${updatedHours}:${minutes}`);

// ------------------------------------------

// const str = "24px";
// console.log(parseFloat(str));

// console.log(NaN == NaN)
// ------------------------------------------

// const smNumber = NaN;
// console.log(typeof smNumber);
// console.log(Number.isNaN(smNumber));
// console.log(smNumber !== smNumber);

// console.log(Math.max(1, 2, 3, 4, 6));

// const str = "Hello world";
// str.replace("l", "r");

// console.log(str.indexOf("l"));
//

// console.log(3 > 2 > 1);
// console.log(true == 1);
// console.log(null > 0);
// console.log(null == 0);

// console.log(null >= 0);

// console.log(false && true);

// console.log(false || false);

// console.log( ?? );

/*
Пояснення:
Я дам вам ціле число. Поверніть мені фігуру, довжина і ширина якої дорівнює цьому числу. Число буде цілим числом від 0 до 50.

Приклад: Ціле число = 3; Я хочу отримати квадрат 3x3 у вигляді рядка, як показано нижче.

Розв'язок:

+++
+++
+++
*/
// --------------------------------------
// VERSOIN 1
// console.log("+++\n+++");
// const value = 5;
// const figure = [];
// for (let i = 1; i <= value * value; i += 1) {
//   figure.push("+");
//   if (value * value !== i && i % 5 === 0) {
//     figure.push("\n");
//   }
// }
// console.log(figure.join(""));
// -------------------------------------------------------------------------
// VERSOIN 2
// console.log(Array(5).fill("+".repeat(5)).join("\n"));
/*
Опис:
Це досить проста задача. Ваша мета - написати функцію, яка видаляє перший та останній символи рядка.
Вам задано один параметр - вихідний рядок. 
Вам не потрібно турбуватися про рядки, що містять менше двох символів.
*/
// const strRow = "Hello";
// const remadedRow = strRow.slice(1, -1);
// console.log(remadedRow);
// ---------------------------------------------------------------------
// Опис:
// Історія
// Джо Стой у своїй книзі "Денотативна семантика" розповідає таку історію:

// Рішення, в який бік біжать цифри, звичайно, математично тривіальне.
// Дійсно, в одному з перших британських комп'ютерів цифри йшли справа наліво (тому що
// пляма на трубці осцилографа рухається зліва направо, але в послідовній логіці
//  спочатку опрацьовуються найменш значущі цифри).

// Тьюрінг мав звичку містифікувати аудиторію на публічних лекціях, коли, цілком випадково, він
// переходив у цей режим навіть для десяткової арифметики і писав щось на кшталт 73+42=16.

// [К. Стречі - особисте повідомлення.]
// Ви будете грати роль глядачів і судити про істинність рівнянь Тюрінга.

// Завдання
// Вам задано рядок s. Це рівняння виду "a+b=c", де a, b, c - числа, що складаються з цифр від 0 до 9.
// Допускається наявність початкових та кінцевих нулів.Рівняння не містять пропусків.

// Ваша задача полягає у тому, щоб визначити, чи є s правильним рівнянням Тьюринга.
// Повертайте true або false, відповідно, в інтерпретації Тьюринга, тобто числа, прочитані задом наперед.

// Все ще не зрозуміли завдання? Подивіться на наступний приклад ;-)

// Наступну версію машини було зроблено більш традиційною, просто перехрестивши дроти
// х-відхилення дротів: це, однак, занепокоїло інженерів, чиї форми хвиль були всі
// задом наперед. Цю проблему було вирішено шляхом створення невеликого вікна, щоб інженери (які, як правило, були
// інженери (які, як правило, сиділи за комп'ютером) могли бачити екран осцилографа
// екран осцилографа ззаду.
// [К. Стречі - особисте повідомлення.]
// Ви будете грати роль глядачів і судити про істинність рівнянь Тюрінга.

// Завдання
// Вам задано рядок s. Це рівняння виду "a+b=c", де a, b, c - числа, що складаються з цифр від 0 до 9.
// Допускається наявність початкових та кінцевих нулів.Рівняння не містять пропусків.
// Приклад
// Для s = "73+42=16" вивести true.
// 73 -> 37
// 42 -> 24
// 61 -> 61
// 37+24===61

// Для s = "5+8=13" вивести false.
// 5 -> 5
// 8 -> 8
// 13 -> 31
// 5+8!==31

// Для s = "10+20=30" вивести true.
// 10 -> 01 -> 1
// 20 -> 02 -> 2
// 30 -> 03 -> 3

// 1+2===3

// const str = "73+42=16";
// const arr = str.replace("+", "=").split("=");
// const firstArg = Number(arr[0].split("").reverse().join(""));
// const secondArg = Number(arr[1].split("").reverse().join(""));
// const thirdArg = Number(arr[2].split("").reverse().join(""));
// console.log(firstArg + secondArg === thirdArg);

// --------
// перевернуть масив не используя методы масива и новых масивов

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length / 2; i += 1) {
//   let temp = arr[i];
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
// }

// console.log(arr);
// ------------------------
// const arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10];
// const filtredArr = arr.filter((item, idx) => arr.indexOf(item) === idx);
// console.log(filtredArr);
// const filtredArr = arr.reduce((acc, item) => {
//   if (!acc.includes(item)) {
//     acc.push(item);
//   }
//   return acc;
// }, []);
// const filtredArr = arr.reduce(
//   (acc, item) => (!acc.includes(item) ? [...acc, item] : acc),
//   []
// );
// console.log(filtredArr);

// const arr = [1, 2, 3];
// const newArr = arr.map((item) => {
//    item * 2;
// });

// console.log(newArr);

// const customMap = (arr, callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     result.push(callback(arr[i], i, arr));
//   }
//   return result;
// };

// console.log(customMap([1, 2, 3], (item) => item * 2));

// ----------------------
// Array.prototype.myReduce = function (callback, initialValue) {
//   if (typeof callback !== "function") {
//     throw new Error(callback + "is not a function");
//   }

//   let accumulator = initialValue !== undefined ? initialValue : this[0];
//   const startIndex = initialValue !== undefined ? 0 : 1;

//   const reducer = (acc, curr, index, array) =>
//     callback(acc, curr, index, array);

//   for (let i = startIndex; i < this.length; i += 1) {
//     accumulator = reducer(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Вывод: 15

// const product = numbers.myReduce((acc, curr) => acc * curr);
// console.log(product); // Вывод: 120

// -------------------------
// Array.prototype.myFind = function (callback) {
//   if (typeof callback !== "function") {
//     throw new Error(callback + " is not a function");
//   }

//   for (let i = 0; i < this.length; i += 1) {
//     if (callback(this[i], i, this)) {
//       return this[i];
//     }
//   }

//   return undefined;
// };

// const numbers = [1, 2, 3, 4, 5];
// const found = numbers.myFind((element) => element > 3);
// console.log(found);
// const notFound = numbers.myFind((element) => element > 10);
// console.log(notFound);
// -------------------------

// Array.prototype.customFilter = function(callback) {
//   if (typeof callback !== 'function') {
//     throw new Error(callback + ' is not a function');
//   }

//   const result = [];
//   for (let i = 0; i < this.length; i += 1) {
//     if (callback(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];
// const greaterThanThree = numbers.customFilter((element) => element > 3);
// console.log(greaterThanThree);
// ----------------------------
// Array.prototype.customEvery = function(callback) {
//   if (typeof callback !== 'function') {
//     throw new Error(callback + ' is not a function');
//   }

//   for (let i = 0; i < this.length; i += 1) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };

// const numbers = [1, 2, 3, 4, 5];
// const allGreaterThanZero = numbers.customEvery((element) => element > 0);
// console.log(allGreaterThanZero);

// const allGreaterThanThree = numbers.customEvery((element) => element > 3);
// console.log(allGreaterThanThree);
// ------------------------------
// Array.prototype.customSome = function(callback) {
//   if (typeof callback !== 'function') {
//     throw new Error(callback + ' is not a function');
//   }

//   for (let i = 0; i < this.length; i += 1) {
//     if (callback(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };

// const numbers = [1, 2, 3, 4, 5];
// const someGreaterThanThree = numbers.customSome((element) => element > 3);
// console.log(someGreaterThanThree);

// const someGreaterThanTen = numbers.customSome((element) => element > 10);
// console.log(someGreaterThanTen);
// -------------------------------

const people = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//нарцис  'Jhon'

const people1 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса'

const people3 = [
  {
    name: "Alex",
    know: ["Alex", "Eva"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса

const people4 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Eva"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса'
//
// Нарциса знають всі, нарцис незнає нікого

// const name = "Mango";
// console.log(name.__proto__);
// console.log(String.prototype.__proto__);

// console.log(Object.prototype === String.prototype.__proto__);
// =-----======================
// Щоб розуміти, що це за __proto__, потрібно точно знати за допомогою якої функції-конструктора або класу був створений даний об'єкт
// ================================
// __proto__ є у всіх об'єктів  а  prototype тільки у Классів та Функціях конструкторів.

// const a = 21;
// const b = 34;

// console.log(name.__proto__);

// function multiply() {} // new Function(...)
// const fn = function () {}; // new Function(...)
// const arrowAdd = () => {}; // new Function(...)

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// } // new Function(...)
// const mango = new User("alex");
// // console.log(mango.getName());
// // =======================================
// function Component(name) {
//   this.componentName = name;
// }

// Component.prototype.getComponentName = function () {
//   return this.componentName;
// };

// const friendList = new Component("friendList");
// console.log(friendList.getComponentName());

// console.log(User.prototype === Component.prototype); false

//

// посмотреть кто главней Function.prototype или Object.prototype
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Function.prototype === Object.__proto__);

// console.log(Component.__proto__ === Function.prototype);

// console.log(Number.__proto__ === Function.prototype);
// console.log(String.__proto__ === Function.prototype);
// console.log(Array.__proto__ === Function.prototype);

// const book = {
//   title: "The Last Kingdom",
// };
// // console.log(book.__proto__);
// // console.log(book.prototype);

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   hello() {
//     console.log(this.name);
//   }
// }

// const mango = new User("Mango");
// console.log(User.__proto__ === Function.prototype);
// console.log(User.prototype.__proto__ === Function.prototype.__proto__);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(User.prototype.__proto__ === Object.prototype);
// ----------------------------------------

// const arrowAdd = () => {};
// console.log(arrowAdd.prototype);
// console.log(arrowAdd.__proto__);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Function.prototype.__proto__.__proto__);
// console.log(
//   Function.prototype.__proto__.__proto__ === Object.prototype.__proto__
// );

// function Component() {}
// function Component1() {}
// // console.log(Component.prototype === Component1.prototype);
// // console.log(Component.__proto__ === Component1.__proto__);
// // console.log(Component.prototype.__proto__ === Object.prototype);
// const age = 21;
// console.log(age.__proto__.__proto__.__proto__ === Object.prototype.__proto__);
// console.log(Number.prototype.__proto__ === Object.prototype);
// console.log(Boolean.prototype.__proto__ === Object.prototype);
