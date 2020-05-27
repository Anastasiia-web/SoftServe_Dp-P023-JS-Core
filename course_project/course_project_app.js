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
        isDone : false,
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



function cross_all(ev) {                                                      //не смогла добавить класс с line-through ??? 
    console.log('click to all_is_done', ev.target); 
    console.dir(ev.target);
    let checkBox = document.getElementById("all_is_done");
  
    if (checkBox.checked == true){
        document.getElementsByClassName('todos-list li').classList.add('done');
    } else {
        null;
    }
}

document.querySelector('#all_is_done').addEventListener('click', cross_all);


function add_new_task() {
    let a = document.querySelector('#new_task');
    let f = a.value;
    todos.push(generateListItem(f));
    console.log(todos);
    render(todos);
    if(a.length >= 0){                //функция очистки поля ввода ??? не работает
        return f = "";
      }
}


// c консультации
function generateListItem(text = 'default text') {
    return {
        text,                                                // если совпадает, можно не повторять text
        isDone : false,
        id : (new Date()).valueOf().toString(16)             //генерация уникального айди в 16ричном виде через функцию времени
    }
}
console.log(generateListItem());

// paзбераться через ивенты!!!

function ontxt_doneClick(){   
    let g = document.querySelector('#txt_done');
    g.style.color = 'rgb(255,0,0)';
    g.style.fontFamily = 'cursive';
    let timerId = setInterval(function(){ g.innerHTML = 'Congrats on your achievements!' }, 10); //?убрать показ через 2 сек с переменной setTimeout \ clearInterval
    setTimeout(() => { clearInterval(timerId); g.innerHTML = 'Everything is done :)'; g.style.color = 'rgb(0,0,0)'; }, 1500);
}


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






  /* мое недоделанное с событием
function mark_all(ev) {
    //console.log('all_is_done', ev.target);
    const marked = ev.target.all_is_done;
    for(let i = 0; i < todos.length; i++) {
        if(marked == checked) {
            todos[i].isDone = true;
            break;
        }
    }
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
