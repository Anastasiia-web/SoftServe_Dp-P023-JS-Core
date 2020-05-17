
const number = prompt('Enter any number at least 2 symbols size!');

let split_number = Array.from(number); // разбили на символы

let oldest_age = Math.max.apply(null, split_number); // находим максимальное
let do_less = split_number.pop(); // удаляем в конце массива елемент
let second_oldest_age = Math.max.apply(null, split_number);
alert(`Two oldest ages ${second_oldest_age}, ${oldest_age}`);







//РАБОТА С МАССИВАМИ

// alert(arr.length);

/*
let styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock-and-roll'); // добавляем слово в конец массива
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Классика"; // меняем слово в центре массива
console.log(styles);

alert( styles.shift() ); // удаляем елемент и показываем его

styles.unshift("Рэп", "Регги"); // добавляем в начало массива
console.log(styles);
*/
/*
styles[2] = 'z'; // меняем слово
console.log(styles);
*/

/*
let fruits = ["Яблоко", "Апельсин", "Слива"];
console.log(fruits);

let my_number = */
/*
let arr = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] ); //выводится каждый следующий элемент массива
}
ИЛИ
let fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям
for (let fruit of fruits) {
  alert( fruit );   //выводится каждый следующий элемент массива
}
*/