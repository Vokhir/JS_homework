// 1. Створити пустий масив та :
let emptyArray = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
let a = 2;
let k = 0;
while (a <= 100 && k < 50) {
    emptyArray[k] = a;
    a += 2;
    k++;
}
console.log(emptyArray);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let i = 1;
while (i <= 100 && k >= 50 && k < 100) {
    emptyArray[k] = i;
    i += 2;
    k++;
}
console.log(emptyArray);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    emptyArray[i] = Math.floor(Math.random() * 20)
}
console.log(emptyArray);

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    emptyArray[i] = Math.floor(Math.random() * 732) + 8
}
console.log(emptyArray);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let k = 2; k < emptyArray.length; k += 3) {
    console.log(emptyArray[k]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let k = 2; k < emptyArray.length; k += 3) {
    if (emptyArray[k] % 2 === 0) {
        console.log(emptyArray[k]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArray = [];
for (let j = 2; j < emptyArray.length; j += 3) {
    const newArrayElement = emptyArray[j];
    if (newArrayElement % 2 === 0) {
        newArray.push(newArrayElement);
    }
}
console.log(newArray)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// for (let k = 0; k < emptyArray.length; k++) {
//     if (emptyArray[k] % 2 === 0) {
//         console.log(emptyArray[k - 1]);
//     }
// }
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let example = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let k = 0; k < example.length; k++) {
//     if (example[k] % 2 === 0) {
//         console.log(example[k - 1]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let price = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let k = 0; k < price.length; k++) {
//     const priceElement = price[k];
//     sum += priceElement;
// }
// console.log(sum);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let random = [1231, 343, -55, 8473, 2, 94, 5847, -448];
// let newRandom = [];
// for (let k = 0; k < random.length; k++) {
//     const randomElement = random[k];
//     newRandom[k] = randomElement * 5;
// }
// console.log(newRandom);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let mix = ['error', true, 23293, false, 'furry porn :D', true, 134];
// let mixNum = [];
// for (let k = 0; k < mix.length; k++) {
//     const mixElement = mix[k];
//     if (typeof mixElement === 'number') {
//         mixNum[k] = mixElement;
//     }
// }
// console.log(mixNum)
// let g = 0;
// let h = 0;
// while (g < mix.length && h < mix.length) {
//     if (typeof mix[g] === 'number') {
//         mixNum[h] = mix[g];
//     }
//     g++;
//     h++;
// }
// console.log(mixNum);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithCities = [];
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let c = 0;
// while (c<usersWithId.length) {
//     usersWithCities[c] = usersWithId[c];
//     let l = 0;
//     while (l < citiesWithId.length) {
//         if (citiesWithId[l].user_id === usersWithCities[c].id) {
//             usersWithCities[c].address = citiesWithId[l];
//         }
//         l++;
//     }
//     c++;
// }
// console.log(usersWithCities);

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]


//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let numArray = [];
// for (let j = 0; j < 10; j++) {
//     numArray[j] = j;
// }
// for (let j = 0; j < numArray.length; j++) {
//     const numArrayElement = numArray[j];
//     if (numArrayElement % 2 === 0 && numArrayElement !== 0) {
//         console.log(numArrayElement);
//     }
// }

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let newNumArray = [];
// for (let j = 0; j < numArray.length; j++) {
//     newNumArray[j] = numArray[j];
// }
// console.log(newNumArray);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let sumWord = '';
// for (let j = 0; j < array.length; j++) {
//     const arrayElement = array[j];
//     sumWord += arrayElement;
// }
// console.log(sumWord);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let w = 0;
// let newWord = '';
// while (w < array.length) {
//     newWord += array[w];
//     w++;
// }
// console.log(newWord);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let newNWord = '';
// for (const element of array) {
//     newNWord += element;
// }
// console.log(newNWord);