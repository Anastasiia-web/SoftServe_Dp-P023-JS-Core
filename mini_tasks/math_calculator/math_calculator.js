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