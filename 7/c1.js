let a = document.getElementsByTagName("userInput");
const A = randNumber();
const B = randNumber();
const C = randOperand();
const optionS = A + B;
const optionM = A - B;
const optionMul = A * B;
const optionD = A / B;

function randNumber(min = 10, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randOperand(min = 1, max = 4) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

if(C == 1){
    given.innerHTML = `${A} + ${B}`;
} else if(C == 2){
    given.innerHTML = `${A} - ${B}`;
} else if(C == 3){
    given.innerHTML = `${A} * ${B}`;
} else if(C == 4){
    given.innerHTML = `${A} / ${B}`;
}

function count(value) {  
    let g = value;
    if(g == optionS || g == optionM || g == optionMul || g == optionD) {
        result.innerHTML = 'Well done!';
    } else {
        result.innerHTML = 'Try more!';
    }  
}












//  не получилось очистить
/*
more.onclick = function () {
    a.innerText = '';
}
*/

/*
function moreExe() {
    a.value = '';
}

moreExe.onclick = moreExe;
*/
/*
let more_but = document.querySelector('#more');

more_but.addEventListener("click", moreExe);
*

/*
let plus = ["+"];                             // сделали элементом массива      
let minus = ["-"];
let division = ["/"];
let milti = ["*"];
*/
/* считаваем данные инпута через ивент и делаем эррэй

function asd(value) {                         //ивент onchange в html
    console.log(value);
    let b = value;
    console.log(b);
    console.log([b]);                         // массив из одного дял всего инпута
    let arr = Array.from(b);                  // разбиваем на массив из символов
    console.log(arr);                         //arr.forEach(alert);  показывает каждый элемент
    arr.forEach(count);

function count(i) {
  if(i == "+") {
      alert('Hi!')
  }
}
}

*/


/* функция считывания инпута
function asd(value) {                         //ивент onchange в html
    console.log(value);
    let b = value;
    console.log(b);
    console.log([b]);                         // массив из одного
    let arr = Array.from(b);               // разбиваем на массив из символов
    console.log(arr);
    return arr;  
}
*/




