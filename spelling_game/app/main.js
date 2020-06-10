// ДВА ВОПРОСА: подсчет очков? глючит, если выбирать 1,2 подряд и основится на третьем варианте?
const level1 = document.querySelector('#first-level');
const level2 = document.querySelector('#second-level');
const level3 = document.querySelector('#third-level');
const userInput = document.querySelector('#user-input');
const userScore = document.querySelector('#score');
const GivenWordForSpelling = document.querySelector('#word-for-spelling'); 

const words = [
    'intelligence', 'weird', 'acceptable', 'accidentally', 'accommodate', 'acquire', 'believe', 'changeable', 'conscientious', 'definitely', 'discipline', 'embarrassment', 'equipment', 'exceed', 'existence', 'experience', 'foreign', 'guarantee', 'hierarchy', 'harass', 'height', 'immediate', 'jewelry', 'judgment', 'leisure', 'license', 'maintenance', 'misspell', 'neighbour', 'boulevard', 'occasionally', 'occurrence', 'possession', 'privilege', 'pronunciation', 'questionnaire', 'receipt', 'recommend', 'referred', 'reference', 'relevant', 'schedule', 'twelfth', 'until', 'weather', 'assessment', 'actually', 'acknowledgment', 'assessment', 'advantageous', 'aggressive'
]


function getWord(){

function randWord(min = 0, max = 50) {
    
    const rN = Math.floor(Math.random() * (max - min + 1) + min);
    const fin = rN + 1;

    const NewWord = words.slice(rN, fin).join('')
    GivenWordForSpelling.innerHTML = `${NewWord}`;
}
randWord();
}


function count() {  
    const GivenWordForSpellingInnerHTML = GivenWordForSpelling.innerHTML; 
    const userInputValue = userInput.value;
 
    let points = 0;
   
    if(userInputValue == GivenWordForSpellingInnerHTML) {
        result.innerHTML = 'Well done!';
        userInput.value = '';       
            points += 1;
            userScore.innerHTML = `Score: ${points}`;
    } else {
        function red(){
            userInput.style.color = 'red';
        }
        function black(){
            userInput.style.color = 'black';
        }
        setTimeout( red);
        setTimeout( black, 3000 );
        result.innerHTML = 'Oops, try again!';
    }  
}


function hide() {
    GivenWordForSpelling.style.color = `transparent`;
}


function show() {
    GivenWordForSpelling.style.color = `green`;
}


function firstLevel() {
    level1.style.backgroundColor = 'greenyellow';
    level2.style.backgroundColor = 'white';
    level3.style.backgroundColor = 'white';

getWord();

document.querySelector('#start').addEventListener('click', getWord);

document.querySelector('#user-input').addEventListener('change', count);

}

document.querySelector('#first-level').addEventListener('click', firstLevel);


function SecondLevel() {
    level2.style.backgroundColor = 'greenyellow';
    level1.style.backgroundColor = 'white';
    level3.style.backgroundColor = 'white';

getWord();

setInterval( hide, 5000 );

document.querySelector('#start').addEventListener('click', show);

document.querySelector('#start').addEventListener('click', getWord);

setInterval( hide, 5000 );

document.querySelector('#user-input').addEventListener('change', count);

}

document.querySelector('#second-level').addEventListener('click', SecondLevel);


function thirdLevel() {
    level3.style.backgroundColor = 'greenyellow';
    level1.style.backgroundColor = 'white';
    level2.style.backgroundColor = 'white';

getWord();

setInterval ( getWord, 5000 );

document.querySelector('#start').addEventListener('click', getWord);

setInterval ( getWord, 5000 );

document.querySelector('#user-input').addEventListener('change', count);

}

document.querySelector('#third-level').addEventListener('click', thirdLevel);





















/*
const words = [
    'intelligence', 'weird', 'acceptable', 'accidentally', 'accommodate', 'acquire', 'believe', 'changeable', 'conscientious', 'definitely', 'discipline', 'embarrassment', 'equipment', 'exceed', 'existence', 'experience', 'foreign', 'guarantee', 'hierarchy', 'harass', 'height', 'immediate', 'jewelry', 'judgment', 'leisure', 'license', 'maintenance', 'misspell', 'neighbour', 'boulevard', 'occasionally', 'occurrence', 'possession', 'privilege', 'pronunciation', 'questionnaire', 'receipt', 'recommend', 'referred', 'reference', 'relevant', 'schedule', 'twelfth', 'until', 'weather', 'assessment', 'actually', 'acknowledgment', 'assessment', 'advantageous', 'aggressive'
];

function randWord(min = 0, max = 50) {
   const wordForSpelling = document.querySelector('.word-for-spelling');
   const rN = Math.floor(Math.random() * (max - min + 1) + min);
   const fin = rN + 1;

   const NewWord = words.slice(rN, fin).join('');
   console.log(NewWord);
   //wordForSpelling.innerHTML = `${NewWord}`;
}

document.querySelector('.start').addEventListener('click', randWord);


*/

/*
const words = [
    {
        text : 'intelligence',
        id : 0
    },
    {
        text : 'weird',
        id : 1
    },
    {
        text : 'acceptable',
        id : 2
    },
    {
        text : 'accidentally',
        id : 3
    },
    {
        text : 'accommodate',
        id : 4
    },
    {
        text : 'acquire',
        id : 5
    },
    {
        text : 'believe',
        id : 6
    },
    {
        text : 'changeable',
        id : 7
    },
    {
        text : 'conscientious',
        id : 8
    },
    {
        text : 'definitely',
        id : 9
    },
    {
        text : 'discipline',
        id : 10
    },
    {
        text : 'embarrassment',
        id : 11
    },
    {
        text : 'equipment',
        id : 12
    },
    {
        text : 'exceed',
        id : 13
    },
    {
        text : 'existence',
        id : 14
    },
    {
        text : 'experience',
        id : 15
    },
    {
        text : 'foreign',
        id : 16
    },
    {
        text : 'guarantee',
        id : 17
    },
    {
        text : 'hierarchy',
        id : 18
    },
    {
        text : 'harass',
        id : 19
    },
    {
        text : 'height',
        id : 20
    },
    {
        text : 'immediate',
        id : 21
    },
    {
        text : 'jewelry',
        id : 22
    },
    {
        text : 'judgment',
        id : 23
    },
    {
        text : 'leisure',
        id : 24
    },
    {
        text : 'license',
        id : 25
    },
    {
        text : 'maintenance',
        id : 26
    },
    {
        text : 'misspell',
        id : 27
    },
    {
        text : 'neighbour',
        id : 28
    },
    {
        text : 'boulevard',
        id : 29
    },
    {
        text : 'occasionally',
        id : 30
    },
    {
        text : 'occurrence',
        id : 31
    },
    {
        text : 'possession',
        id : 32
    },
    {
        text : 'privilege',
        id : 33
    },
    {
        text : 'pronunciation',
        id : 34
    },
    {
        text : 'questionnaire',
        id : 35
    },
    {
        text : 'receipt',
        id : 36
    },
    {
        text : 'recommend',
        id : 37
    },
    {
        text : 'referred',
        id : 38
    },
    {
        text : 'reference',
        id : 39
    },
    {
        text : 'relevant',
        id : 40
    },
    {
        text : 'schedule',
        id : 41
    },
    {
        text : 'twelfth',
        id : 42
    },
    {
        text : 'until',
        id : 43
    },
    {
        text : 'weather',
        id : 44
    },
    {
        text : 'assessment',
        id : 45
    },
    {
        text : 'actually',
        id : 46
    },
    {
        text : 'acknowledgment',
        id : 47
    },
    {
        text : 'assessment',
        id : 48
    },
    {
        text : 'advantageous',
        id : 49
    },
    {
        text : 'aggressive',
        id : 50
    }
]


function render(data) {
    const newWord = document.querySelector('.word-for-spelling');
    newWord.innerHTML = data.map(word => {
      return `data-name = "${word.id == 1}"`;
    }).join('');
}

console.log(words);

render(words);
*/
/* // выводит все по очереди
var arr = ["Яблоко", "Апельсин", "Груша"];
console.log( arr );

arr.forEach(function(item) {
  console.log( item );
});
*/
/* КОНСПЕКТ учебник
var arr = ["Яблоко", "Апельсин", "Груша"];
console.log( arr );

arr.forEach(function(item) {
  console.log( item );
});

var arr2 = [-1, -1, -2, -2, 3];
console.log( arr2 );


var positiveArr = arr2.filter(function(number) {
  return number > 0;
});

console.log( positiveArr ); // 1,2,3


var arr2 = [-1, -1, -2, -2, 3];
console.log( arr2 );

var positiveArr = arr2.filter(function(number) {
  return number == -2;
});

console.log( positiveArr ); // 1,2,3
*/
/*
let arr3 = ["t", "e", "s", "t"];

console.log( arr3.slice(1, 2).join('') ); // e return (rand number + , + rand number + 1)

// работает случайный выбор объекта
function randletter(min = 0, max = 3) {
    let arr3 = ["word", "sense", "cartoon", "topic"];
    const rN = Math.floor(Math.random() * (max - min + 1) + min);
    const fin = rN + 1;

    const Try = arr3.slice(rN, fin).join('')
    console.log(Try);
}

randletter();
*/

/*

//получилось, работает ПОМЕНЯЛА НА АЙДИ В html КЛАССЫ !!!

function getWord(ev){
const words = [
     'intelligence', 'weird', 'acceptable', 'accidentally', 'accommodate', 'acquire', 'believe', 'changeable', 'conscientious', 'definitely', 'discipline', 'embarrassment', 'equipment', 'exceed', 'existence', 'experience', 'foreign', 'guarantee', 'hierarchy', 'harass', 'height', 'immediate', 'jewelry', 'judgment', 'leisure', 'license', 'maintenance', 'misspell', 'neighbour', 'boulevard', 'occasionally', 'occurrence', 'possession', 'privilege', 'pronunciation', 'questionnaire', 'receipt', 'recommend', 'referred', 'reference', 'relevant', 'schedule', 'twelfth', 'until', 'weather', 'assessment', 'actually', 'acknowledgment', 'assessment', 'advantageous', 'aggressive'
]

function randWord(min = 0, max = 50) {
    const wordForSpelling = document.querySelector('.word-for-spelling');
    const rN = Math.floor(Math.random() * (max - min + 1) + min);
    const fin = rN + 1;

    const NewWord = words.slice(rN, fin).join('')
    //console.log(NewWord);
    wordForSpelling.innerHTML = `${NewWord}`;
}
randWord();
}

document.querySelector('#start').addEventListener('click', getWord);
*/






/* // отдельно функции
}
let arr3 = ["t", "e", "s", "t"];

console.log( arr3.slice(1, 2).join('') ); // e return (rand number + , + rand number + 1)

function randletter(min = 0, max = 3) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


*/






/*
let randomWordForSpelling = function() {
    const A = randWord();
    
    function randWord(min = 0, max = 50) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    const start = function() {
        const newWord = document.querySelector('.word-for-spelling');
        newWord.innerHTML = A;
        }
    }
    
    start();
    
    function count() {  
        const userAnswer = document.querySelector('.user-input').value;
        if(userAnswer == A) {
            result.innerHTML = 'Well done!';
           // userAnswer.value = ''; 
        } else {
            result.innerHTML = 'Try again!';
           // userAnswer.value = '';                    //через айди.value очищается поле ввода
        }  
    }
    
    submit.onclick = count;
    
    w.value = '';
    
    }
    
    more.onclick = mathCalculator;
    //setInterval ( mathCalculator, 5000 );
    */

    /*
function onStartClick(ev) {
  
}
*/








    /*
    //из чего лепим 
    let randomWordForSpelling = function() {
    const A = randWord();
  
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
    */
//получилось, работает с 347 стр
/* Есть !!!
// рабочая функция получить рэндом слово
    function getWord(ev){
        const words = [
             'intelligence', 'weird', 'acceptable', 'accidentally', 'accommodate', 'acquire', 'believe', 'changeable', 'conscientious', 'definitely', 'discipline', 'embarrassment', 'equipment', 'exceed', 'existence', 'experience', 'foreign', 'guarantee', 'hierarchy', 'harass', 'height', 'immediate', 'jewelry', 'judgment', 'leisure', 'license', 'maintenance', 'misspell', 'neighbour', 'boulevard', 'occasionally', 'occurrence', 'possession', 'privilege', 'pronunciation', 'questionnaire', 'receipt', 'recommend', 'referred', 'reference', 'relevant', 'schedule', 'twelfth', 'until', 'weather', 'assessment', 'actually', 'acknowledgment', 'assessment', 'advantageous', 'aggressive'
        ]
        
        function randWord(min = 0, max = 50) {
            const wordForSpelling = document.querySelector('#word-for-spelling');
            const rN = Math.floor(Math.random() * (max - min + 1) + min);
            const fin = rN + 1;
        
            const NewWord = words.slice(rN, fin).join('')
            //console.log(NewWord);
            wordForSpelling.innerHTML = `${NewWord}`;
        }
        randWord();
        }

    document.querySelector('#start').addEventListener('click', getWord);


// рабочая функция для проверки готова, но без подсчета очков :(

//onchange = "count()" НУЖНО html, если вешать функцию там

    function count() {  
        const GivenWordForSpelling = document.querySelector('#word-for-spelling').innerHTML;
        const userInput = document.querySelector('#user-input');
        const userScore = document.querySelector('#score');
        const userInputValue = userInput.value;
        let points = 0;
       
        if(userInputValue == GivenWordForSpelling) {
            result.innerHTML = 'Well done!';
            userInput.value = '';       
                points +=1;
                console.log(points);
                userScore.innerHTML = `Score: ${points}`;
        } else {
            userInput.style.color = 'red';
            result.innerHTML = 'Oops, try again!';
        }  
    }

    document.querySelector('#user-input').addEventListener('change', count);
*/

/*
    document.querySelector('#first-level').addEventListener('click', change);
    document.querySelector('#second-level').addEventListener('click', change);
    document.querySelector('#third-level').addEventListener('click', change);
*/



    /*
    до измененний
    //получилось, работает с 347 стр

const game = function() {
   const wordToSpell = getWord();

    function getWord(ev){
        const words = [
             'intelligence', 'weird', 'acceptable', 'accidentally', 'accommodate', 'acquire', 'believe', 'changeable', 'conscientious', 'definitely', 'discipline', 'embarrassment', 'equipment', 'exceed', 'existence', 'experience', 'foreign', 'guarantee', 'hierarchy', 'harass', 'height', 'immediate', 'jewelry', 'judgment', 'leisure', 'license', 'maintenance', 'misspell', 'neighbour', 'boulevard', 'occasionally', 'occurrence', 'possession', 'privilege', 'pronunciation', 'questionnaire', 'receipt', 'recommend', 'referred', 'reference', 'relevant', 'schedule', 'twelfth', 'until', 'weather', 'assessment', 'actually', 'acknowledgment', 'assessment', 'advantageous', 'aggressive'
        ]
        
        function randWord(min = 0, max = 50) {
            const wordForSpelling = document.querySelector('#word-for-spelling');
            const rN = Math.floor(Math.random() * (max - min + 1) + min);
            const fin = rN + 1;
        
            const NewWord = words.slice(rN, fin).join('')
            //console.log(NewWord);
            wordForSpelling.innerHTML = `${NewWord}`;
        }
        randWord();
        }
        }

    
    document.querySelector('#start').addEventListener('click', game);
    */