/*
class Information {
    constructor(text, id) {
        this.text = text;
        this.id = (new Date()).valueOf().toString(16);
    }
    showUnderstanding() {
    let a = document.querySelector('.input-info-to-remember');
    console.log(a.value);
    }
}
*/


/*
const notes = {
    text : "",
    id :  ""                                        
}
*/

//// ДОБАВЛЕНИЕ ИНФЫ О СТУДЕНТАХ

const notesAboutStudents = [
{
    text : "",
    id :  ""                                        
}
]

function renderForNotes(data) {
    const infoBoard = document.querySelector('.notes');

    infoBoard.innerHTML = data.map(note => {                        
        return `<li data-id = ${note.id}>${note.text}<li>`;
    }).join('');
}

function generateListItem(text = 'default text') {

    return {
        text,                                                
        id : (new Date()).valueOf().toString(16)         
    }
}

function addNewNoteLastLesson() {
    let infaFromInput = document.querySelector('.input-info-to-remember');
    let infaText = infaFromInput.value;

    //const className = 'class="last"';

    //notesAboutStudents.unshift(generateListItem(`<li ${className}> Last lesson: ${infaText}<li>`));
    notesAboutStudents.unshift(generateListItem(`Last lesson: ${infaText}`));
    infaFromInput.value = '';
    renderForNotes(notesAboutStudents);
}

function addNewNoteDeposit() {
    let infaFromInput = document.querySelector('.input-info-to-remember');
    let infaText = infaFromInput.value;

    notesAboutStudents.unshift(generateListItem(`Deposit: ${infaText}`));
    infaFromInput.value = '';
    renderForNotes(notesAboutStudents);
}

function addNewNoteLoan() {
    let infaFromInput = document.querySelector('.input-info-to-remember');
    let infaText = infaFromInput.value;

    notesAboutStudents.unshift(generateListItem(`Loan: ${infaText}`));
    infaFromInput.value = '';
    renderForNotes(notesAboutStudents);
}

document.querySelector('#btn-info-last-lesson').addEventListener('click', addNewNoteLastLesson);
document.querySelector('#btn-info-deposit').addEventListener('click', addNewNoteDeposit);
document.querySelector('#btn-info-loan').addEventListener('click', addNewNoteLoan);

function ClickDeleteNote(ev){
    const id = ev.target.dataset.id;                    
    const index = notesAboutStudents.findIndex(n => n.id == id);

    event.preventDefault();
    if (index !== -1) {
        notesAboutStudents.splice(index, 1);
        renderForNotes(notesAboutStudents);
}
};

document.querySelector('.notes').addEventListener('contextmenu', ClickDeleteNote);


//// добавление информации в блок-профайл под фото первого студента

const firstPlaceStudentProfile = [
    {
        text : "",
        id :  ""                                        
    }
    ]
    
    function renderFirstPlaceStudentProfile(data) {
        const ProfileBoard = document.querySelector('.first-place-student-info');
    
        ProfileBoard.innerHTML = data.map(note => {                        
            return `<li data-id = ${note.id}>${note.text}<li>`;
        }).join('');
    }
    
    function generateListItem(text = 'default text') {
    
        return {
            text,                                                
            id : (new Date()).valueOf().toString(16)         
        }
    }

function addNewInfoFirstPlaceStudent() {
    let infaFromInput = document.querySelector('.input-info-to-remember');
    let infaText = infaFromInput.value;

    firstPlaceStudentProfile.unshift(generateListItem(infaText));
    infaFromInput.value = '';
    renderFirstPlaceStudentProfile(firstPlaceStudentProfile);
}

document.querySelector('.first-place-student-photo').addEventListener('click', addNewInfoFirstPlaceStudent);

function ClickDeleteInfoFirstPlaceStudent(ev){
    const id = ev.target.dataset.id;                    
    const index = firstPlaceStudentProfile.findIndex(n => n.id == id);

    event.preventDefault();
    if (index !== -1) {
        firstPlaceStudentProfile.splice(index, 1);
        renderFirstPlaceStudentProfile(firstPlaceStudentProfile);
}
};

document.querySelector('.first-place-student-info').addEventListener('contextmenu', ClickDeleteInfoFirstPlaceStudent);


///////////////////// ПОНЕДЕЛЬНИК , а хотелось бы через родительский класс в понедельник или другой день в зависимости от кнопки

const thisWeekLessons = [
    {
        text : "",
        id :  ""                                        
    }
    ]

    function renderForThisWeekLesson(data) {
        const calendarThisWeek = document.querySelector('.monday');
    
        calendarThisWeek.innerHTML = data.map(note => {                        
            return `<li data-id = ${note.id}>${note.text}<li>`;
        }).join('');
    }
    
    function generateListItem(text = 'default text') {
    
        return {
            text,                                                
            id : (new Date()).valueOf().toString(16)         
        }
    }
    
    function addNewLessonThisWeek() {
        let LessonFromInput = document.querySelector('.input-this-week-lesson');
        let LessonText = LessonFromInput.value;
    
        thisWeekLessons.push(generateListItem(LessonText));
        LessonFromInput.value = '';
        renderForThisWeekLesson(thisWeekLessons);
    }

    document.querySelector('.day-monday').addEventListener('click', addNewLessonThisWeek);

    function ClickDeleteThisWeekLesson(ev){
        const id = ev.target.dataset.id;                    
        const index = thisWeekLessons.findIndex(n => n.id == id);
    
        event.preventDefault();
        if (index !== -1) {
            thisWeekLessons.splice(index, 1);
            renderForThisWeekLesson(thisWeekLessons);
    }
    };
    
    document.querySelector('.monday').addEventListener('contextmenu', ClickDeleteThisWeekLesson);
    








/* работающее копия кода

const notesAboutStudents = [
{
    text : "",
    id :  ""                                        
}
]

function renderForNotes(data) {
    const infoBoard = document.querySelector('.notes');

    infoBoard.innerHTML = data.map(note => {                         //создали массив data через map, todo - объект из массива
        return `<li data-id = ${note.id}>${note.text}<li>`;
    }).join('');
}

function generateListItem(text = 'default text') {

    return {
        text,                                                // если совпадает, можно не повторять text
        id : (new Date()).valueOf().toString(16)         //генерация уникального айди в 16ричном виде через функцию времени
    }
}

function addNewNoteLastLesson() {
    let infaFromInput = document.querySelector('.input-info-to-remember');
    let infaText = infaFromInput.value;

    notesAboutStudents.unshift(generateListItem(`Last lesson: ${infaText}`));
    infaFromInput.value = '';
    renderForNotes(notesAboutStudents);
}

function addNewNoteDeposit() {
    let infaFromInput = document.querySelector('.input-info-to-remember');
    let infaText = infaFromInput.value;

    notesAboutStudents.unshift(generateListItem(`Deposit: ${infaText}`));
    infaFromInput.value = '';
    renderForNotes(notesAboutStudents);
}

function addNewNoteLoan() {
    let infaFromInput = document.querySelector('.input-info-to-remember');
    let infaText = infaFromInput.value;

    notesAboutStudents.unshift(generateListItem(`Loan: ${infaText}`));
    infaFromInput.value = '';
    renderForNotes(notesAboutStudents);
}

document.querySelector('#btn-info-last-lesson').addEventListener('click', addNewNoteLastLesson);
document.querySelector('#btn-info-deposit').addEventListener('click', addNewNoteDeposit);
document.querySelector('#btn-info-loan').addEventListener('click', addNewNoteLoan);


function ClickDeleteNote(ev){
    const id = ev.target.dataset.id;                    
    const index = notesAboutStudents.findIndex(n => n.id == id);

    event.preventDefault();
    if (index !== -1) {
        notesAboutStudents.splice(index, 1);
        renderForNotes(notesAboutStudents);
}
};

document.querySelector('.notes').addEventListener('contextmenu', ClickDeleteNote);
*/






/*
function showUnderstanding() {
    let infaFromInput = document.querySelector('.input-info-to-remember');
    let text = infaFromInput.value;
    let infoBoard = document.querySelector('.notes');
    infoBoard.innerHTML = `Last lesson: ${text}`;
    infaFromInput.value = '';
    }

document.querySelector('#btn-info-last-lesson').addEventListener('click', showUnderstanding);
*/