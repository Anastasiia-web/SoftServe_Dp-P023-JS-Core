






/*
let user_number = +(prompt('Give a number!'));
let a = (user_number + 1)

let bigger_number = function() {
  return (a);
}

alert(a);
/*

/*
let sum = (a, b) => a + b;

ИЛИ8

let sum = function(a, b) {
  return a + b;
};

alert( sum(1, 2) ); // 3
*/
/*let x = +(prompt('X?'));
let n = +(prompt('N?'));

function multi() {
  for (i = 1; i < n; i++) {
  alert(x ** n);
}
}
alert(multi());

*/

/*
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

ИЛИ

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}
*/
/*

let browser = prompt('Your broser?');

if(browser == 'Edge') {
  alert( "You've got the Edge!" );
} else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
иЛИ

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
ИЛИ
/*
let browser = prompt('Your browser?');

switch(browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

/*
ВЫВЕДЕНИЕ ЧЕТНЫХ ЧИСЕЛ
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

*/
/*
let login = prompt('Who \'s there?');
let message = login == "Я главный" ? "Здравствуйте!" :
login == "" ? "Неверный пароль" :
"Отменено";
alert(message);
*/
/*
let login = prompt('Who are you?');

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
alert(message);
*/
/*
let number = prompt('Your number?')

let message = number > 0 ? '1 - полож' :
number < 0 ? '-1 - negative' :
'0';

alert(message);

ИЛИ

let number = prompt('Your number?')
number > 0 ? alert('1 - полож') :
number < 0 ? alert('-1 - negative') :
alert('0');
*/
/*
let name = prompt('What \'s the "официальное название" JavaScript?');
name == 'ECMAScript' ? alert('Yes!') : alert('No!');
*/
/*
ТЕРНАРНЫЙ ОПЕРАТОР
без объявления переменной

let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');

ИЛИ ОБЪЯВЛЯТЬ переменную

let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );

*/
/*
let year = prompt('What?');
if(year == 2015) {
    alert('Yes!');
} else {
    alert('No:(');
}

ИЛИ

let cond = (year == 2015); // преобразуется к true или false

if (cond) {
  ...
}

ИЛИ

let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}

Присутствие блока else не является обязательным.
*/

/*
let name = prompt('What is your name?', '')
alert(name);
*/
/*
const ourPlanetName = 'EARTH';
let currentUserName = "User";
*/

/*
let admin;
let name = 'John';
admin = name;
alert(admin);
console.log(admin);
*/

/*newFunction();
function newFunction() {
    console.log("nastya");
}

*/