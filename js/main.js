// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr = [
    'hello world',
    'lorem ipsum',
    'javascript is cool'
];
console.log('Arr: ', arr);

arr.forEach((value, index, array) => {
    console.log(`${value} - має таку довжину: ${array[index].length} символів`);
    });

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrUp = [];
arr.forEach((value, index, array) => {
    arrUp.push(value.toUpperCase());
    console.log(`Нижній регістр - ${value}, а тепер у верхньому регістрі = ${(value.toUpperCase())}`)
});
arr = arrUp;
console.log('У верхньому регістрі', arr);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let arrDown = [];
arr.forEach((value, index, array) => {
    arrDown.push(value.toLowerCase());
    console.log(`Верхній регістр - ${value}, а тепер у нижньому регістрі = ${(value.toLowerCase())}`)
});
arr = arrDown;
console.log('У нижньому регістрі', arr);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log('str before = ', str);
console.log('str after = ', str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let stringToarray = (str2) => {
    return str2.split(' ');
};
let str2 = 'Каждый охотник желает знать';
let arr3 = stringToarray(str2);
console.log(arr3);
document.write(arr3);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//      що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str3 = 'Каждый охотник желает знать';
let delete_characters = (str3, length) => {
    return str3.slice(0, length);
};
console.log('Повернутий підрядок: ', delete_characters(str3, 7))
document.write(`<p>Повернутий підрядок:  ${delete_characters(str3, 7)}</p>`); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str4 = "HTML JavaScript PHP";
let insert_dash = (str4) => {
    return str4.replaceAll(' ', '-').toUpperCase();
};
console.log('Вставляєм тире (-) між словами та всі символи рядка переводимо у верхній регістр', insert_dash(str4));
document.write(`Вставляєм тире (-) між словами та всі символи рядка "HTML JavaScript PHP" переводимо у верхній регістр: ${insert_dash(str4)}`); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str5 = "javaScript";
let firstDush = (str5) => {
    return  str5[0].toUpperCase() + str5.slice(1);
};
console.log('Перетворює регістр першого символу рядка "javaScript" з нижнього регістру у верхній', firstDush(str5));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str6 = 'dirty string'
let firstLetterUp = (str6) => {
    return str6.split(' ').map(iter => iter.charAt(0).toUpperCase() + iter.slice(1)).join(' ');
};
console.log('Рядок, кожне слово починається з великої літери', firstLetterUp(str6));