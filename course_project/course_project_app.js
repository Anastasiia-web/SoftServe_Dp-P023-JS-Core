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

function cross_all() {
    let checkBox = document.getElementById("all_is_done");
    const todos = document.querySelector(".todos-list");
  
    if (checkBox.checked == true){
        todos.style.textDecoration = "line-through";
    } else {
        todos.style.textDecoration = "none";
    }
}

function add_new_task() {
    let a = document.querySelector('#new_task');
    let f = a.value;
    console.log(f);
    todos.push(f);
    console.log(todos);
}

    







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
