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
    












/* КАЛЬКУЛЯТОР VICE VERSE
html
<main>
        <div class="identification">#</div>
        <div class="in">IN</div>
        <div class="out">OUT</div>
        <div class="index_number"></div>
        <div class="set_number"></div>
        <div class="user_input">
            <input type="text" class="user_enter_input" placeholder="3 * 4 =" onchange="a_value(this);"/>
            <span class="assessment"></span>
        </div>
    </main>

css
body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
}
main {
    display: grid;
    grid-template: 30% 70% / 10% 35% 55%;
    width: 350px;
    height: 300px;
}
.identification, .in, .out, .index_number, .set_number, .user_input {
    padding-top: 20px;
    padding-left: 12px;
    border: 1px solid green;
}
.identification {
    grid-area: 1 / 1;
    border-bottom: 1px solid transparent;
}
.in {
    grid-area: 1 / 2;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
}
.out {
    grid-area: 1 / 3;;
    border-bottom: 1px solid transparent;
}
.index_number {
    grid-area: 2 / 1;
}
.set_number {
    grid-area: 2 / 2;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
}
.user_input {
    grid-area: 2 / 3;
}
.user_enter_input {
    border: 1px solid transparent;
    outline: none;
}
.assessment {
    position: relative;
    top: 50px;
}

js

function randNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let given_number = document.querySelector('.set_number');
given_number.innerHTML = randNumber();


let makeNumber = function() {
    for (let i = 1; i < 10; i++) {
        return i++;
      }    
}
let task_number = document.querySelector('.index_number');
task_number.innerHTML = makeNumber();


function a_value() {
    let userInput = document.querySelector('.user_enter_input');
    console.log(userInput.value);
    let write_answer = document.querySelector('.set_number');
    console.log(write_answer.value);

    if(userInput.value == 0) {
        console.log('Wow');
    } 
    if(userInput.value == write_answer.value){
        console.log(`It's time to send a message!`);
    }
}


/* работает с информацией введенной пользователем в инпут
function a_value(o) {
console.log(o.value);
}
*/