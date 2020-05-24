function randNumber(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandColor() {
    return (`rgb(${randNumber()}, ${randNumber()}, ${randNumber()}`);
}
setInterval(function () {
    let v = document.querySelectorAll('.square');
    v.forEach(element => {
        element.style.backgroundColor = getRandColor();
    });
}, 1000);

var duration = 100; //'slow'  1000 = 1s
$(".square").each(function(index) { 
    $(this).delay(duration * index).fadeIn(duration); 
});

var duration = 10000; //'slow'     100000 = 100s
let display_duration = 1;
$("#final").each(function(index) { 
    $(this).delay(duration).show(display_duration); 
});


/*
//работает
var duration = 100; //'slow' 
$(".square").each(function(index) { 
    $(this).delay(duration * index).fadeIn(duration); 
});

*/

/*
//работает появляется и исчезает
$('.animated').show(1000, function(){
    setTimeout(function(){
      $('.animated').hide(500);
    }, 5000);
  });
*/


//element.classList.add('animated');
/* 
РАБОТАЮЩЕЕ
v.forEach(element => {
    element.style.backgroundColor = getRandColor();
    element.style.display = 'block';
    element.style.anumationDuration = 2000;
});
}, 1000);
*/
/* работающее
setInterval(function () {

square2.style.backgroundColor = getRandColor();
let v = document.querySelector('.square')
v.style.backgroundColor = getRandColor();

}, 1000);
*/
/*
//учебник   //https://w3schoolsrus.github.io/js/js_arrays.html
//let elements = document.querySelectorAll('ul > li:last-child'); запрос получает все элементы <li>, которые являются последними потомками в <ul>

$('#message').show(1000, function(){              //ИЗЧЕЗАЕТ https://itchief.ru/lessons/javascript/javascript-show-and-hide-elements
    setTimeout(function(){
      $('#message').hide(500);
    }, 5000);
  });

*/

   /*


//работающая функция времени
setInterval(function () {
    console.log(getRandColor());
}, 1000);

//работающее
square2.style.backgroundColor = getRandColor();
let v = document.querySelector('.square')
v.style.backgroundColor = getRandColor();


var array = ['1', '2', '3', '4', '5', '6', '7'];
var item = function(){return array[Math.floor(Math.random()*array.length)]};
setInterval(function () {
        console.log(item());
}, 1000);

*/

/*

let start = Date.now(); // запомнить время начала

let timer = setInterval(function() {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;

  if (timePassed >= 1000) {
    clearInterval(timer); // закончить анимацию через 2 секунды
    return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);

}, 1000);

function draw(timePassed) {
    square2.style.backgroundColor = getRandColor();
}
*/