// --створити масив з:
//     - з 5 числових значень
// let arrayNumbers = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
// let arrayStrings = ['first', 'second', 'third', 'fourth', 'fifth'];
// - з 5 значень стрічкового, числового та булевого типу
// let arrayMix = [24, 'something', true, false, -34];
// - та вивести його в консоль
// for (let i = 0; i < arrayNumbers.length; i++) {
//     const number = arrayNumbers[i];
//     console.log(number);
// }
// for (let i = 0; i < arrayStrings.length; i++) {
//     const string = arrayStrings[i];
//     console.log(string);
// }
// for (let i = 0; i < arrayMix.length; i++) {
//     const mix = arrayMix[i];
//     console.log(mix);
// }
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrayEmpty = [];
// arrayEmpty[0] = 'couch';
// arrayEmpty[1] = 345;
// arrayEmpty[2] = false;
// for (let i = 0; i < arrayEmpty.length; i++) {
//     const element = arrayEmpty[i];
//     console.log(element)
// }

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrayFulfilled = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// let i = 0;
// while (i < arrayFulfilled.length) {
//     console.log(arrayFulfilled[i]);
//     i++
// }
// //     2. перебрати його циклом for
// for (let j = 0; j < arrayFulfilled.length; j++) {
//     const element = arrayFulfilled[j];
//     console.log(element);
// }
// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let index = 0;
// while (index < arrayFulfilled.length) {
//     if (arrayFulfilled[index] % 2 !== 0) {
//         console.log(arrayFulfilled[index]);
//     }
//     index++;
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 0; j < arrayFulfilled.length; j++) {
//     const element = arrayFulfilled[j];
//     if (element % 2 !== 0) {
//         console.log(element);
//     }
// }
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let ind = 0;
// while (ind < arrayFulfilled.length) {
//     if (arrayFulfilled[ind] % 2 === 0) {
//         console.log(arrayFulfilled[ind]);
//     }
//     ind++;
// }
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let j = 0; j < arrayFulfilled.length; j++) {
//     const element = arrayFulfilled[j];
//     if (element % 2 === 0) {
//         console.log(element);
//     }
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// for (let j = 0; j < arrayFulfilled.length; j++) {
//     const element = arrayFulfilled[j];
//     if (element % 3 === 0) {
//         console.log('okten');
//     } else {
//         console.log(element);
//     }
// }
// // 8. вивести масив в зворотньому порядку.
// for (let j = arrayFulfilled.length-1; j >=0; j--) {
//     const element = arrayFulfilled[j];
//     console.log(element);
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let i = arrayFulfilled.length-1;
// while (i >=0) {
//     console.log(arrayFulfilled[i]);
//     i--
// }
// for (let j = arrayFulfilled.length-1; j >=0; j--) {
//     const element = arrayFulfilled[j];
//     console.log(element);
// }
// let index = arrayFulfilled.length-1;
// while (index >=0) {
//     if (arrayFulfilled[index] % 2 !== 0) {
//         console.log(arrayFulfilled[index]);
//     }
//     index--;
// }
// for (let j = arrayFulfilled.length - 1; j >= 0; j--) {
//     const element = arrayFulfilled[j];
//     if (element % 2 !== 0) {
//         console.log(element);
//     }
// }
// let ind = arrayFulfilled.length - 1;
// while (ind >= 0) {
//     if (arrayFulfilled[ind] % 2 === 0) {
//         console.log(arrayFulfilled[ind]);
//     }
//     ind--;
// }
// for (let j = arrayFulfilled.length - 1; j >= 0; j--) {
//     const element = arrayFulfilled[j];
//     if (element % 2 === 0) {
//         console.log(element);
//     }
// }for (let j = arrayFulfilled.length - 1; j >= 0; j--) {
//     const element = arrayFulfilled[j];
//     if (element % 3 === 0) {
//         console.log('okten');
//     } else {
//         console.log(element);
//     }
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (let j = 0; j < numberArray.length; j++) {
//     const numberArrayElement = numberArray[j];
//     console.log(numberArrayElement);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringArray = ['a', 'sdf', 'weqd', 'afdac', 'qrq', 'bvxc', 'ada', 'qfsz', 'adqdqw', 'qeffs'];
// for (const string of stringArray) {
//     console.log(string);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mixedArray = ['asfasf', 344, true, NaN, false, 'greater good', 'false', 35, true, 900];
// for (const element of mixedArray) {
//     console.log(element);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mixedArray1 = ['asfasf', 344, true, NaN, false, 'greater good', undefined, 35, NaN, 900];
// for (const element of mixedArray1) {
//     if (typeof element === "boolean") {
//         console.log(element);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mixedArray2 = ['asfasf', 344, true, NaN, false, 'greater good', undefined, 35, 1000000, 900];
// for (const element of mixedArray2) {
//     if (typeof element === "number" && !isNaN(element)) {
//         console.log(element);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mixedArray3 = ['asfasf', 344, true, NaN, false, 'greater good', undefined, 35, 1000000, 900];
// for (const element of mixedArray3) {
//     if (typeof element === "string") {
//         console.log(element);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let newArray = [];
newArray[0] = 17;
newArray[1] = 'string1';
newArray[2] = true;
newArray[3] = NaN;
newArray[4] = 756;
newArray[5] = 'second string';
newArray[6] = false;
newArray[7] = undefined;
newArray[8] = 'NaN';
newArray[9] = 902;
for (const element of newArray) {
    console.log(element);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i+=2) {
    console.log(i);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        name:'Book1',
        pagesCount:999,
        authors:'author1',
        genre:'fantasy',
    },
    {
        name:'Book2',
        pagesCount:6475,
        authors:['author2', 'author3'],
        genre:'drama',
    },
    {
        name:'Book3',
        pagesCount:3,
        authors:'author4',
        genre:['romcom','comedy'],
    },
    {
        name:'Book4',
        pagesCount:13121,
        authors:'unknown',
        genre:'sci-fi',
    }
];
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор