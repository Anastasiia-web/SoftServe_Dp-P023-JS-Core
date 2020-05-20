// КОНКАТАНАЦИЯ
// arr.concat(arg1, arg2...) - метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

const my_sentence = 'My name is.';

let sentence_array = Array.from(my_sentence); // если предложение сразу, то бьет по буквам, split() по словам или знакам
console.log(sentence_array);

sentence_array.pop(); // удаляем точку в конце

let new_s = sentence_array.join(''); // возвращаем в предложение

console.log(new_s);

let sentence = new_s.concat(' Ivashchenko Anastasiia'); // добавляем слова

alert(sentence); // без точки

let for_adding_dot = Array.from(sentence);

for_adding_dot.push('.'); // добавляем точку
let back_to_sentence = for_adding_dot.join('');
alert(back_to_sentence);

//pop() - извлекает элемент из конца


const my_string = ['apple', 'banana', 'pineapple']
alert(`${my_string} - заданный первоначальный массив`);

alert(`${my_string.pop()} - выводим слово, которое убираем в конце массива через pop`); // убираем слово с конца и алертим его
alert(`${my_string} - измененный массив`); // алертим измененный массив

// arr.push(...items) – добавляет элементы в конец

my_string.push('beetroot');
alert(`${my_string} - добавили через push новое слово в конец (измененный массив)`);

// arr.shift() – извлекает элемент из начала

alert(`${my_string.shift()} - первое слово, которое убираем через shift`); // алертим первое слово на вылет
alert(`${my_string} - измененный массив`); // алертим новый массив

// arr.unshift(...items) – добавляет элементы в начало

my_string.unshift('cucumber');
alert(`${my_string} - добавили в начало через unshift новое слово (измененный массив)`);

/*

//pop() - извлекает элемент из конца

const my_string = ['apple', 'banana', 'pineapple']
alert(`${my_string} - заданный первоначальный массив`);

alert(`${my_string.pop()} - будем убирать это слово в конце массива через pop`); // убираем слово с конца и алертим его
alert(`${my_string} - измененный массив`); // алертим измененный массив

// arr.push(...items) – добавляет элементы в конец

my_string.push('beetroot');
alert(`${my_string} - добавили через push новое слово в конец (измененный массив)`);

// arr.shift() – извлекает элемент из начала

alert(`${my_string.shift()} - первое слово, которое убираем через shift`); // алертим первое слово на вылет
alert(`${my_string} - измененный массив`); // алертим новый массив

// arr.unshift(...items) – добавляет элементы в начало

my_string.unshift('cucumber');
alert(`${my_string} - добавили в начало через unshift новое слово (измененный массив)`);
*/



/*

let full_sentence_array = sentence_into_words.concat(array_addition); // добавили слова в предложение
console.log(full_sentence_array);

let full_sentence = full_sentence_array.join(' '); // вывели обратно строкой новое предложение (массив)
console.log(full_sentence);
alert(full_sentence);

*/
/*
let sentence_into_words = my_sentence.split(' '); //разбили по словам, получили массив
console.log(sentence_into_words);

let full_sentence_array = sentence_into_words.concat('Ivashenko', 'Anastasiia', '.'); // добавили слова в предложение
console.log(full_sentence_array);

let full_sentence = full_sentence_array.join(' '); // вывели обратно строкой новое предложение (массив)
console.log(full_sentence);
*/

/*
let sentence_array = Array.from(sentence_into_words); // если предложение сразу, то бьет по буквам
console.log(sentence_array);
*/