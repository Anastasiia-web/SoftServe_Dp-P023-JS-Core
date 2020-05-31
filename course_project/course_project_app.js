const todos = [
    {
        text : 'Read new book', 
        isDone : false,
        id : 0
    },
    {
        text : 'Add new bookmark to bookmark list', 
        isDone : false,
        id : 1
    },
    {
        text : 'Buy a pet', 
        isDone : true,
        id : 2
    },
    {
        text : 'Wash my hands', 
        isDone : false,
        id : 3
    }
];

function render(data) {
    const list = document.querySelector('.todos-list');

    list.innerHTML = data.map(todo => {                         //создали массив data через map, todo - объект из массива
        const className = todo.isDone ? 'class="done"' : "";
        return `<li ${className} data-id = ${todo.id}>${todo.text}<li>`;
    }).join('');
}

function onTodoClick(ev){
    console.log('click to todo', ev.target);   
    console.dir(ev.target);                               //console.dir(ev.target); посмотреть на свойства в консоли
                                                
    const id = +ev.target.dataset.id;            // const id = ev.target.dataset.id;  добираемся через айди елемента

    todos.forEach(todo => todo.id === id ? todo.isDone = !todo.isDone : null);  

    render(todos);
}

document.querySelector('.todos-list').addEventListener('click', onTodoClick);

render(todos);


document.querySelector('#all_is_done').addEventListener('click', onCheckAllChange);


function onCheckAllChange(){
    todos.forEach(todo => todo.isDone = this.checked);
    render(todos);
}


function add_new_task() {
    let a = document.querySelector('#new_task');
    todos.push(generateListItem(a.value));
    a.value = '';
    render(todos);
}


function generateListItem(text = 'default text') {
    return {
        text,                                                // если совпадает, можно не повторять text
        isDone : false,
        id : (new Date()).valueOf().toString(16)             //генерация уникального айди в 16ричном виде через функцию времени
    }
}


// готово: работает удаление, но на всё поле
const list = document.querySelector('.todos-list');

list.oncontextmenu = function(event) {
    event.preventDefault();
    list.innerHTML = '';
    todos.length = 0;
  };

// готова статистика, но не учитываются изменения

function statDone() {

    const statisticsIsDone = todos.filter(item => item.isDone == true);
    const y = document.querySelector('#statistics-done');

    y.innerHTML = `Done: ${statisticsIsDone.length}`;
    render(todos);
    }

statDone();


let statisticsIsNotDone = todos.filter(item => item.isDone == false);
let z = document.querySelector('#statistics-not-done');
z.innerHTML = `Not done: ${statisticsIsNotDone.length}`;






/*
//работает, сохраняя предыдущий выбор
function cross_all(ev) {                                                      //не смогла добавить класс с line-through ??? 
    console.log('click to all_is_done', ev.target); 
    console.dir(ev.target);
    let checkBox = document.getElementById("all_is_done");
    const list = document.querySelector('.todos-list');
  
    if (checkBox.checked == true){
        list.style.textDecoration = 'line-through';
    } else {
        list.style.textDecoration = 'none';
    }
}
*/

/* // строка-поздравление с достижением 
all_is_done.onclick = function everything_done(){   
    let g = document.querySelector('#txt_done');
    g.style.color = 'rgb(255,0,0)';
    g.style.fontFamily = 'cursive';
    let timerId = setInterval(function(){ g.innerHTML = 'Congrats on your achievements!' }, 10); //?убрать показ через 2 сек с переменной setTimeout \ clearInterval
    setTimeout(() => { clearInterval(timerId); g.innerHTML = 'Everything is done :)'; g.style.color = 'rgb(0,0,0)'; }, 1500);
}
*/


 // странно, работает удаление после клика при клике на поле !!! https://learn.javascript.ru/introduction-browser-events
 /*
document.querySelector('#delete_todo').addEventListener('click', deleteTodo);

function deleteTodo(ev) {
    todos.length = 0;                                  //удаление массива
    console.log(todos);
}
*/


/*
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  console.log(users);
  // возвращает массив, состоящий из двух первых пользователей
  let someUsers = users.filter(item => item.name == "Вася" || item.name == "Маша");
  console.log(someUsers);            // показать объекты с такими данными
  console.log(someUsers.length);         // показать кол-во объектов с такими данными
  
 // console.log(someUsers.length); // 2        ДЛЯ СТАТИСТИКИ!!!
*/
/*
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      }
      
      let arr = [ 1, 2, 15 ];
      
      arr.sort(compareNumeric);
*/

  



/*
contextmenu
selectNodeContents(node) выделить всё содержимое node
deleteContents() – удалить содержимое диапазона из документа
*/
/*
// до консультации работает
function add_new_task() {
    let a = document.querySelector('#new_task');
    let f = a.value;
    console.log(f);
    
}
*/
    
/* мое реагирует
function add_new_task() {
    let a = document.querySelector('#new_task');
    let f = a.value;
    console.log(f);
}
*/


/* Одно и тоже с эрроу фанкшн !!!
function onTodoClick(ev){
    console.log('click to todo', ev.target);   
    console.dir(ev.target);                               //console.dir(ev.target); посмотреть на свойства в консоли

    const inText = ev.target.innerText;
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].text === inText) {
            todos[i].isDone = true;
            break;
        }
    }
}

или через инне текст и эрроу фанкшр

const inText = ev.target.innerText;
todos.forEach(todo => todo.text === inText ? todo.isDone = true : null);
*/
/*
function onTodoClick(ev){
    console.log('click to todo', ev.target);   
    console.dir(ev.target);                               //console.dir(ev.target); посмотреть на свойства в консоли
                                                 // const id = ev.target.dataset.id;  добираемся через айди елемента
    const id = +ev.target.dataset.id;                 //const inText = ev.target.innerText; считываются данные текста

    todos.forEach(todo => todo.id === id ? todo.isDone = !todo.isDone : null);  //возвращает строку, поэтому ==, а не === //как с инне текст вместе с dataset. Если поставить + перед ивентом в константе айди, можно три равно === (будет число)
    render(todos);
}
*/
