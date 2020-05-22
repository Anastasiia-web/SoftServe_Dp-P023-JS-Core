// task 1 DNA ready
/*
let DNA = 'TTATTTAATGC'    // 'ATTGC' return "TAACG"

console.log(DNA);

DNA = DNA.split("A").join("X");
DNA = DNA.split("T").join("A");         // only original Ts will become As
DNA = DNA.split("X").join("T");
DNA = DNA.split("G").join("Y");        
DNA = DNA.split("C").join("G");         // only original Cs will become Gs
DNA = DNA.split("Y").join("C");

console.log(DNA);
*/
/*
//TASK 2.1 ready
  
function text_for_numbers(number) {
    let first = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'];
    let dozens_second_part =  ['надцать'];
    let dozens_first_part = ['дцать'];
    let dozens = ['', '', '', '','сорок', 'десят', 'десят', 'десят', 'десят', 'девяносто'];
    
    if(number > 0 && number < 11) {
        return first[number];
    } 
    switch (number) {
    case 11:
        return first[1] + dozens_second_part[0];
        break;
    case 12:
        let a_twelve = first[2];
        let b_twelve = Array.from(a_twelve);
        b_twelve.splice(2, 1, 'енадцать');
        return b_twelve.join().replace(/[\s.,'a-z',%]/g, '');
            break;
    case 13:
        return first[3] + dozens_second_part[0];
        break;
    case 14:
        let b_fourteen = Array.from(first[4]);
        b_fourteen.splice(5, 1, 'надцать');
        return b_fourteen.join().replace(/[\s.,'a-z',%]/g, '');
            break;
    case 15:
        let b_fifteen = Array.from(first[5]);
        b_fifteen.splice(5, 1, 'надцать');
        return b_fifteen.join().replace(/[\s.,'a-z',%]/g, '');
            break;
    case 16:
        let b_sixteen = Array.from(first[6]);
        b_sixteen.splice(4, 1, 'надцать');
        return b_sixteen.join().replace(/[\s.,'a-z',%]/g, '');
            break;
    case 17:
        let b_seventeen = Array.from(first[7]);
        b_seventeen.splice(3, 1, 'надцать');
        return b_seventeen.join().replace(/[\s.,'a-z',%]/g, '');
            break;
    case 18:
        let b_eighteen = Array.from(first[8]);
        b_eighteen.splice(5, 1, 'надцать');
        return b_eighteen.join().replace(/[\s.,'a-z',%]/g, '');
            break;
    case 19:
        let b_nineteen = Array.from(first[9]);
        b_nineteen.splice(5, 1, 'надцать');
        return b_nineteen.join().replace(/[\s.,'a-z',%]/g, '');
            break;
    }
    if(number > 20 && number < 40 && number != 30) {
        let a21 = number.toString();
        return first[a21[0]] + dozens_first_part[0] + ' ' + first[a21[1]];
    } else if(number == 20 || number == 30) {
        let a20 = number.toString();
        return first[a20[0]] + dozens_first_part[0];
    } 
    if(number > 40 && number < 50) {
        let a40 = number.toString();
        return dozens[a40[0]] + ' ' + first[a40[1]];
    }
    if(number > 50 && number < 90 && number != 60 && number != 70 && number != 80) {
        let a50 = number.toString();
        return first[a50[0]] + dozens[a50[0]] + ' ' + first[a50[1]];
    } 
    if(number > 90 && number < 100) {
        let a90 = number.toString();
        return dozens[a90[0]] + ' ' + first[a90[1]];
    } 
    if(number == 40 || number == 90) {
        let round_dozen = number.toString();
        return dozens[round_dozen[0]];
    } 
    if(number == 50 || number == 60 || number == 70 || number == 80) {
        let round_dozen2 = number.toString();
        return first[round_dozen2[0]] + dozens[round_dozen2[0]];
    }
}

console.log(text_for_numbers(59));
*/

/*
//TASK 2.2 ready
const initial_string1 = prompt('Type your string and look into console for the statistics.')       // первоначальная строка
console.log(initial_string);

console.log(`кол-во букв ` + initial_string.replace(/[^\d][\s.',~!#^&*@%$0[0-9]/g, '').length);// длина строки из букв без цифр,пробелы,точки,запятые(В СКОБКАХ ТО, ЧТО НЕ ДОЛЖНО СЧИТАТЬСЯ!!!)
console.log(`кол-во цифр ` + initial_string.replace(/[^\d]+/g,"").length);  // длина строки из цифр без пробелы, точки, запятые
console.log(`кол-во символов ` + initial_string.toLowerCase().replace(/[\sa-z[0-9]/g, '').length) // без букв и цифр
*/

/*
//TASK 2.3
//Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.

const a11 = 'UHzzi j65*';

console.log(a11);

str_change = a11.replace(/\d/g, '_');
console.log(str_change);

let last_hope = str_change.toLowerCase();
console.log(last_hope);

let last_hope1 = last_hope.toUpperCase();
console.log(last_hope);

let a15 = Array.from(a11);
console.log(a15);
*/
/* не получилось поменять лоу на аппер
let str = 'abcde';

for (let char of str) {
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
}

*/
/*
a15.forEach(function (char) {
    console.log(char);
});
*/
/*
function capitalize(s) {
    for(let i = 0; i < chars.length; i++) {
        if(s[i] === s[i].toLowerCase()){
            return s[i].toUpperCase();
        }      
}
console.log(capitalize('uHi j65*'));
*/
/* не сработало?
function common() {
    let a12 = 'wehIKM< ';
    let chars = a12.split('');
    for (var i = 0; i < chars.length; i++) {
      if (chars[i] === chars[i].toUpperCase()) {
        chars[i] = chars[i].toLowerCase();
      } else {
        chars[i] = chars[i].toUpperCase();
      }
    }
      result = chars.join('');
  };
console.log(common())
*/

/* КОНСПЕКТ НА РАЗОБРАТЬСЯ
  function textNumber(number) {
    const dict = [
      ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', '', 'две', '', 'четыр', 'пят', 'шест', 'сем', 'восем', 'девят'], 
      ['', '', 'двадцать', 'тридцать', 'сорок', '', '', '', '', 'девяносто']
    ]; 
    if (number >= 0 && number <= 10)
      return dict[0][number]; 
    if (number > 10 && number <= 19)
      return (dict[0][number] || dict[0][number - 10]) + 'надцать'; 
    if (number >= 20 && number <= 99) {
      const [units=0, tens] = [...('' + number)].reverse().map(Number); 
      return [
        tens ? dict[1][tens] || (dict[0][tens] + 'десят') : '', 
        units ? dict[0][units] : ''
      ].join(' '); 
    }
  }
console.log(Array.from({ length: 100 }, 
    (v, i) => i + ': ' + textNumber(i)
  ).join('\n')); 
*/
/*
function textNumber(number) {
    let first = ['один', 'два', 'три', 'четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
    let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
    if (number > 0 && number <= 9) {
      return first[number - 1];
    }
    if (number >= 10 && number <= 20) {
      return second[number - 10];
    }
    if (number > 20 && number <= 99) {
      let str = `${number}`;
      str = str.split('');
      let firstNumber = str[0];
      let secondNumber = str[1];
      //return [ third[firstNumber - 2], first[secondNumber - 1] ];
      return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
    }
  }
console.log(textNumber(7));
console.log(textNumber(20));
console.log(textNumber(55));
*/

/*
// ФУНКЦИЯ НА РОЗОБРАТЬСЯ
// Copy the original DNA string to a new mutable char array
char[] dnaCopy = dna.toCharArray();

// Examine each character of array one time only and replace
// as necessary
for(int i = 0; i < dnaCopy.length; i++) {
  if(dnaCopy[i] == 'A') {
     dnaCopy[i] = 'T';
  }
  else if(dnaCopy[i] == 'T') {
     dnaCopy[i] = 'A';
  }
  else if(dnaCopy[i] == 'G') {
     dnaCopy[i] = 'C';
  }
  else if(dnaCopy[i] == 'C') {
     dnaCopy[i] = 'G';
  }
}
*/


/*
let a = DNA.replace( /A/g, "T" );
console.log(a);
let b = DNA.replace( /T/g, "A" );
console.log(DNA);
let c = DNA.replace( /G/g, "C" );
let d = DNA.replace( /C/g, "G" );

console.log(d);
*/
/*
//УЧЕБНИК меняем слова в строке местами
const str = 'Boris Britva'; // инициализируем строковое значение
const newstr = str.replace(/(\w+)\s(\w+)/, '$2 $1');
console.log(newstr); // Britva Boris
*/

/*
let arr_dna = Array.from(DNA);
console.log(arr_dna);

let result = DNA.match(/A/g);
*/

/* пример из учебника замена в строке
console.log( '12-34-56'.replace( /-/g, ":" ));
// alert( 'Gogogo now!'.match(/(go)+/i) ); в скобках все совпадения выведет     Скобочные группы регулярные группы https://learn.javascript.ru/regexp-groups
*/


/*
let result2 = DNA.match(/T/g);


console.log( result[0] );
console.log( result2[0] );
*/
/*
let str = "I love JavaScript";

let result = str.match(/Java(Script)/g);

alert( result[0] ); // JavaScript
alert( result.length ); // 1

console.log(arr_dna);
*/

/*
let arr_a = Array.from(a);
console.log(arr_a);
*/


/*
let new_dna1 = Array.from(DNA.replace(new RegExp("A", "g"), "T"));   // заменяем во всех местах
let new_dna2 = Array.from(DNA.replace(new RegExp("T", "g"), "A")); 
let new_dna3 = Array.from(DNA.replace(new RegExp("G", "g"), "C")); 
let new_dna4 = Array.from(DNA.replace(new RegExp("C", "g"), "G")); 




console.log(new_dna1);
console.log(new_dna2);
console.log(new_dna3);
console.log(new_dna4);

*/

/*
let arr_a = Array.from(a);
console.log(arr_a);
*/
/* ПЕРЕБОР ПО ОДНОМУ СИМВОЛУ ПОСТРОЧНО ЗАМЕНЯЯ
let new_dna1 = Array.from(DNA.replace(new RegExp("A"), "T"));   // заменяем во всех местах
let new_dna2 = Array.from(DNA.replace(new RegExp("T"), "A")); 
let new_dna3 = Array.from(DNA.replace(new RegExp("G"), "C")); 
let new_dna4 = Array.from(DNA.replace(new RegExp("C",), "G")); 
console.log(new_dna1);
console.log(new_dna2);
console.log(new_dna3);
console.log(new_dna4);

let b = new_dna1.splice(0, 1);    // выделяем нужный символ
console.log(b);

let c = new_dna1.splice(2, 1);
console.log(c);

let f = (b + c);
// console.log(Array.from(f).join(', '));  если надо соединить через знак (разбираем на массив и добавляем знак)



//console.log(new_dna1.splice(0, 1));

//console.log(new_dna1.splice(2, 1));

//console.log(new_dna1.splice(2, 1) + new_dna1.splice(2, 1));

*/

/*
new_dna1.forEach(el => {
    console.log(2, el);
})

*/

 
//ВЗЯТЬ С 0 МЕСТА, С 3 МЕСТА И Т. Д. И СЛОЖИТЬ НОВУЮ СТРОКУ





//КОНСПЕКТ
/*
var str = "Hello World, World, World"; 
// заменяем "World" на "AAA" 
var str1 = str.replace("World", "AAA"); // только 1 раз замена
console.log(str1);
var str = "Hello World, World, World"; 
// заменяем "World" на "AAA" 
var str2 = str.replace(new RegExp("World","g"), "AAA"); // замена во всех случаях
console.log(str2);
*/
/*
function replacer(match, p1, p2, p3, offset, string) {
    // p1 - не цифры, p2 - цифры, p3 - не буквы и не цифры
    return [p1, p2, p3].join(' - ');
  }
  var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

console.log(newString)
*/
/*
const initial_string1 = 'Hello my @3 friends.'  
console.log('АЛФАВИТ'.toLowerCase()); // 'алфавит'
let new_initial_string1 = initial_string1.toLowerCase(); // приведение к LowerCase
console.log(new_initial_string1);

console.log(initial_string1.replace(/[\s.'a-z',%]/g, '')) // первый аргумент удаляет, после запятой добавляет заменяя (если '', то ничего вместо, просто обрезаем)
console.log(initial_string1.replace(/[\s'a-z',%[0-9]/g, '')) // без букв и цифр
console.log(initial_string1.replace(/[\s'a-z',%]/g, '')) // без букв 
*/
//console.log(`кол-во других знаков ` + initial_string.replace(/[^\d]+/g,"").length);  // длина строки из цифр без пробелы, точки, запятые

/*
let a = inp_str.split(" ").join("");   // удаляем пробелы:))
console.log(a);
let a = initial_string.replace(/[\s.,%]/g,'').length; // длина строки  с цифрами без пробелы, точки, запятые

console.log(",,131oo42..124.12.4...124..12.4asdf.afsgsfg12451.125dfg12.12.123".replace(/[^\d]+/g,"")) // в replace  первым аргументом указываем то, уберем из строки!
let c = inp_str.replace(/[\s.,%]/g, ''); // удаляем пробелы, точки, запятые!!! Функция replace заменяет (а без второго параметра удаляет) совпавшую по регулярке строку.Следовательно регулярка должна находить то, что не имеет права встречаться в строке. Либо разрешенная часть должна выбираться в групы захвата (()) и подставляться вторым параметром replace(//,'$1')
console.log("13142..124.12.4...124..12.4asdf.afsgsfg12451.125dfg12.12.123".replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' ))

*/

/*
УБИРАЕМ ЛИШНИЕ ПРОБЕЛЫ
var str = ' some     string  and        something  ';
console.log(str);
str = str.replace(/ +/g, ' ').trim();
console.log(str);
//let a = initial_string.replace(/[\s.,%]/g,'').length; // длина строки  с цифрами без пробелы, точки, запятые
*/

/*
    return inp_str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
*/
/*

console.log(inp_str.indexOf(' ', 0));          //возвращает индекс заданного элемента
const el_for_del = inp_str.indexOf(' ', 0);

console.log(inp_str.findIndex(' '));
*/
/*
console.log(inp_str.split(' '));         // разделенная строка на массивы - слова



console.log(inp_str.split(' ').length); // длина разделенной на слова строка
const arr_inp_str = Array.from(inp_str); 



*/

/*
arr_inp_str.splice(0[, deleteCount, elem1, ..., elemN])
arr.splice(index[, deleteCount, elem1, ..., elemN])
*/
/*
console.log(arr_inp_str);
console.log(arr_inp_str.length);   // длина массива строки (к0л-во символов строки)
*/
/*

console.log(arr_inp_str);
function countEl() {
    arr_inp_str.forEach(el {

    })
}


const exp = students.reduce((count, el) => {       // reduce - получить 1 результат по операции с элементами массива
    count += el.experience;
    return count;     
}, 0);
*/
/* КОНСПЕКТ  map, reduce, filter, forEach
const students = [
    {
        name : 'Nick',
        sex : 'male',
        age : 28,
        location : 'Dnipro',
        experience : 10
    },
    {
        name : 'Valerii',
        sex : 'male',
        age : 31,
        location : 'Kharkiv',
        experience : 1
    },
    {
        name : 'Anna',
        sex : 'female',
        age : 23,
        location : 'I-Frankivsk',
        experience : .5
    },
    {
        name : 'Anatolii',
        sex : 'male',
        age : 40,
        location : 'Kharkiv',
        experience : 1
    },
    {
        name : 'Maksym',
        sex : 'male',
        age : 25,
        location : 'Kharkiv',
        experience : .5
    },
    {
        name : 'Anastasiia',
        sex : 'female',
        age : 43,
        location : 'Dnipro',
        experience : .25
    }
];

students.forEach(el => {  // вывод в консоль объектов массива, forEach перебор елементов массива
    console.log(el);
})

students.forEach((el, i) => {  // вывод c index - порядковый номер элемента в консоль объектов массива
    console.log(i, el);
})


const newStudents = students.map(el => {   // map - создали новый измененный массив из существующего
    el.company = 'SoftServe';              // !!!SoftServe будет теперь у массива students тоже, ЕСЛИ НАДО УБРАТЬ: const students = Object.assign({}, el) нужно добавить эту строку. Object.assign({}, el) - копирование объекта по значению! 
    return el;                                        // обязательно для колбэк функции
});
console.log(newStudents);

const kharkivCitizens = students.filter(el => el.location == 'Kharkiv'); // фильтрация(уменьшение) по определенному условию filter ЖДЁТ TRUE\FALSE
console.log(kharkivCitizens);                         

const exp = students.reduce((count, el) => {       // reduce - получить 1 результат по операции с элементами массива
    count += el.experience;
    return count;     
}, 0);                // !!! REDUCE ОБЯЗАТЕЛЬНО 0 В КОНЦЕ - ЭТО ИНДЕКС С КОТОРОГО НАЧНЕТ!!!

console.log(exp);
*/
    /*
    function ticTacChecker(field) {
        const x = 1;
        const o = 2;
    if (checkDiagonals(field, x) || checkLines(field, x)){
        return 1;
    }
    
    if (checkDiagonals(field, o) || checkLines(field, o)){
        return 2;
    }
    
    if (emptySlots(field)) {
        return -1;
    }
    return 0;
    }
    
    function emptySlots(field) {
        let result = true;
        field.forEach(element => {
            result = element.includes(0);
        });
        return result;
    }
    
    function checkDiagonals(field, side) {
        let mainDiagonal = true;
        let secondDiagonal = true;
        let size = field.length;
        for (let i = 0; i < size; i++) {
            mainDiagonal &= (field[i][i] == side);
            secondDiagonal &= (field[size - i - 1][i] == side)
        }
        if(mainDiagonal || secondDiagonal) {
            return true;
        }
    return false;
    }
    
    function checkLines(field, side) {
        let col = true;
        let row = true;
        for (let i = 0; i < field.length; i++) {
            col = true;
            row = true;
            for (let j = 0; j < field.length; j++) {
                col &= (field[i][j] == side);
                row &= (field[j][i] == side);
            }
            if (col || row) {
                return true;
            }
        }
        return false
    }
    
    console.log(ticTacChecker([[0, 0, 1], [0, 1, 2], [2, 1, 0]]));
    console.log(ticTacChecker([[1, 1, 1], [0, 1, 2], [2, 1, 0]]));
    console.log(ticTacChecker([[1, 2, 2], [2, 2, 1], [2, 1, 2]]));
    
    
    /*
    function meeting(arr, chairNeeded) {
        if (chairNeeded == 0) {
            return 'Game On';
        }
        let counter = 0;
        let resultArr = [];
        for (let element of arr) {
            let delta = element[1] - element[0].length;
            if (delta <= 0) {
                resultArr.push(0); continue;
            }
        counter == delta;
    
        resultArr.push(delta);
        if (counter >= chairNeeded) {
            break;
        }
        }
        return counter < chairNeeded ? 'Not enought!' : resultArr;
    }
    
    console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
    console.log(meeting([['XXX', 1], ['XXXXXXXXX', 6], ['X', 2], ['X', 8], ['X', 3], ['XXX', 1]], 5));
    console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
    console.log(meeting([['X', 2], ['X', 6], ['X', 4]], 0));
    
    */
    /*
    for(i = 0; i < 0; i++) {
        let sum = i + 10;
        console.log(sum);
    }
    */
    /*let set_2 = +(set.slice(0, 1)); //вывели первый элемент и преобразовали в число*/
    /*
    const set = ['1', '2', '0', '1', '1', '0', '0', '0', '2'];
    console.log(set);
    console.log(set.sort()); // собираем символы по значению и изменяем массив перезаписывая его
    */
    /*let set_2 = set.slice(0, 1); //вывели первый элемент и преобразовали в число*/
    /*console.log(set_2);*/
    /*set.forEach(element = set_2 => {*/
    /*    console.log('4');*/
    /*});*/
    /*
    const a = '11 12 13 12 15 16 17 18 19';
    
    let f = Array.from(a); // разберёт отдельно по символу цифры
    console.log(f);
    
    let m = a.split(' '); // получаем массив из строки
    console.log(m);
    
    m.forEach(element => {
        if(element == '12') {
            alert('Hi!');             // алертит 2 раза перебирая весь массив
        } else if(element != '40') {
            alert('Couldn\'t find:(') // алертит 7 раз перебирая весь массив
        }
    });
    
    function coun(){
    for(i==12; i<0; i++){
                let z = i += 1;
            }
        }
    
    console.log(count());
    */
    /*
    coun.forEach(element => {
        if(element == '12') {
            let w = 0;
            let q = w++;
            alert(q);
        } else if(element != '40') {
            alert('Couldn\'t find:(')
        }
    });
    */



/*
function ticTacChecker(field) {
    const x = 1;
    const o = 2;
if (checkDiagonals(field, x) || checkLines(field, x)){
    return 1;
}

if (checkDiagonals(field, o) || checkLines(field, o)){
    return 2;
}

if (emptySlots(field)) {
    return -1;
}
return 0;
}

function emptySlots(field) {
    let result = true;
    field.forEach(element => {
        result = element.includes(0);
    });
    return result;
}

function checkDiagonals(field, side) {
    let mainDiagonal = true;
    let secondDiagonal = true;
    let size = field.length;
    for (let i = 0; i < size; i++) {
        mainDiagonal &= (field[i][i] == side);
        secondDiagonal &= (field[size - i - 1][i] == side)
    }
    if(mainDiagonal || secondDiagonal) {
        return true;
    }
return false;
}

function checkLines(field, side) {
    let col = true;
    let row = true;
    for (let i = 0; i < field.length; i++) {
        col = true;
        row = true;
        for (let j = 0; j < field.length; j++) {
            col &= (field[i][j] == side);
            row &= (field[j][i] == side);
        }
        if (col || row) {
            return true;
        }
    }
    return false
}

console.log(ticTacChecker([[0, 0, 1], [0, 1, 2], [2, 1, 0]]));
console.log(ticTacChecker([[1, 1, 1], [0, 1, 2], [2, 1, 0]]));
console.log(ticTacChecker([[1, 2, 2], [2, 2, 1], [2, 1, 2]]));


/*
function meeting(arr, chairNeeded) {
    if (chairNeeded == 0) {
        return 'Game On';
    }
    let counter = 0;
    let resultArr = [];
    for (let element of arr) {
        let delta = element[1] - element[0].length;
        if (delta <= 0) {
            resultArr.push(0); continue;
        }
    counter == delta;

    resultArr.push(delta);
    if (counter >= chairNeeded) {
        break;
    }
    } 
    return counter < chairNeeded ? 'Not enought!' : resultArr;
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 1], ['XXXXXXXXX', 6], ['X', 2], ['X', 8], ['X', 3], ['XXX', 1]], 5));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
console.log(meeting([['X', 2], ['X', 6], ['X', 4]], 0));

*/


/*
for(i = 0; i < 0; i++) {
    let sum = i + 10;
    console.log(sum);
}
*/
//let set_2 = +(set.slice(0, 1)); //вывели первый элемент и преобразовали в число


/*
const set = ['1', '2', '0', '1', '1', '0', '0', '0', '2'];
console.log(set);
console.log(set.sort()); // собираем символы по значению и изменяем массив перезаписывая его
*/

//let set_2 = set.slice(0, 1); //вывели первый элемент и преобразовали в число
//console.log(set_2);

//set.forEach(element = set_2 => {
//    console.log('4');
//});


/*
const a = '11 12 13 12 15 16 17 18 19'; 

let f = Array.from(a); // разберёт отдельно по символу цифры
console.log(f);

let m = a.split(' '); // получаем массив из строки
console.log(m);

m.forEach(element => {
    if(element == '12') {
        alert('Hi!');             // алертит 2 раза перебирая весь массив
    } else if(element != '40') {
        alert('Couldn\'t find:(') // алертит 7 раз перебирая весь массив
    }
});

function coun(){
for(i==12; i<0; i++){
            let z = i += 1;
        }
    }

console.log(count());
*/

/*
coun.forEach(element => {
    if(element == '12') {
        let w = 0;
        let q = w++;
        alert(q);
    } else if(element != '40') {
        alert('Couldn\'t find:(')
    }
});
*/






//alert(element == '12'); // true для 12, false для остальных