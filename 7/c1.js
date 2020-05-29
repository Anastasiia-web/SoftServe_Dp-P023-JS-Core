let mathCalculator = function() {
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

const start = function() {
    if(C == 1){
        given.innerHTML = `${A} + ${B}`;
    } else if(C == 2){
        given.innerHTML = `${A} - ${B}`;
    } else if(C == 3){
        given.innerHTML = `${A} * ${B}`;
    } else if(C == 4){
        given.innerHTML = `${A} / ${B}`;
    }
}

start();

function count() {  
    g = w.value;
    if(g == optionS || g == optionM || g == optionMul || g == optionD) {
        result.innerHTML = 'Well done!';
    } else {
        result.innerHTML = 'Try again!';
        //w.value = '';                    //через айди.value очищается поле ввода
    }  
}

submit.onclick = count;

w.value = '';

}

more.onclick = mathCalculator;
setInterval ( mathCalculator, 5000 );


let limit = mathCalculator("limit")||5;
limit = parseInt(limit);

processTimer();

function processTimer() {
  if (limit > 0) {
    setTimeout("processTimer()", 1000);
    limit--;
  } else {
    timer.style.color = `rgb(255, 0, 0)`;
    timer.style.fontSize = '25px';
  }
  let limit_div = ("0"+parseInt(limit / 60)).slice(-2); // минуты
  let limit_mod = ("0"+(limit - limit_div * 60)).slice(-2); // секунды
  // вывод времени
  el_timer = document.getElementById("timer");
  if (el_timer) el_timer.innerHTML = limit_div+":"+limit_mod;
}


/* //конспект работающий таймер

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    
    return {
      total: t,
      seconds: seconds
    };
  }
   
  function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let secondsSpan = clock.querySelector(".seconds");
   
    function updateClock() {
      let t = getTimeRemaining(endtime);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
        let deadline = new Date(Date.parse(new Date()) + 5 * 1000);
        initializeClock('countdown', deadline);
      }
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
   
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  }
   
  let deadline = new Date(Date.parse(new Date()) + 5 * 1000);
  initializeClock("countdown", deadline);

  if (t.total <= 0) {
    clearInterval(timeinterval);
    let deadline = new Date(Date.parse(new Date()) + 5 * 1000);
    initializeClock('countdown', deadline);
  }

*/
/* КОНСПЕКТ
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
//ИВЕНТ
/*
document.getElementById("more").addEventListener("click", newTask);

function newTask() {
    w.value = '';
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

/* РАБОТАЮЩЕЕ С ОНЧЭНДЖ В html и через //const a = document.getElementsByTagName("userInput");

function count(value) {  
    let g = value;
    if(g == optionS || g == optionM || g == optionMul || g == optionD) {
        result.innerHTML = 'Well done!';
    } else {
        result.innerHTML = 'Try again!';
        //w.value = '';                    //через айди.value очищается поле ввода
    }  
}
*/
/*
//РАБОТАЕТ ТАЙТЕР ОТДЕЛЬНЫЙ
    
let limit = mathCalculator("limit")||5;
limit = parseInt(limit);

processTimer();

function processTimer() {
  if (limit > 0) {
    setTimeout("processTimer()", 1000);
    limit--;
  } else {
    timer.style.color = `rgb(255, 0, 0)`;
    timer.style.fontSize = '25px';
  }
  let limit_div = ("0"+parseInt(limit / 60)).slice(-2); // минуты
  let limit_mod = ("0"+(limit - limit_div * 60)).slice(-2); // секунды
  // вывод времени
  el_timer = document.getElementById("timer");
  if (el_timer) el_timer.innerHTML = limit_div+":"+limit_mod;
}

setInterval ( processTimer, 5000 );
*/