// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => {
    return a * b;
}
console.log(square(18, 30));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => {
    return Math.PI * Math.pow(r, 2);
};
console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let fullSquareOfCylinder = (r, h) => {
    return 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
};
console.log(fullSquareOfCylinder(10, 20));

let sideSquareOfCylinder = (r, h) => {
    return 2 * Math.PI * r * h;
};
console.log(sideSquareOfCylinder(10, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
users = [
    {"id": 1, "name": "Alice", "age": 25},
    {"id": 2, "name": "Bob", "age": 30},
    {"id": 3, "name": "Charlie", "age": 28},
    {"id": 4, "name": "David", "age": 22},
    {"id": 5, "name": "Eve", "age": 29},
    {"id": 6, "name": "Frank", "age": 35},
    {"id": 7, "name": "Grace", "age": 27},
    {"id": 8, "name": "Hannah", "age": 24},
    {"id": 9, "name": "Ian", "age": 31},
    {"id": 10, "name": "Jessica", "age": 26},
    {"id": 11, "name": "Kevin", "age": 32},
    {"id": 12, "name": "Linda", "age": 23},
    {"id": 13, "name": "Mike", "age": 33},
    {"id": 14, "name": "Natalie", "age": 28},
    {"id": 15, "name": "Oliver", "age": 30},
    {"id": 16, "name": "Pamela", "age": 29},
    {"id": 17, "name": "Quincy", "age": 27},
    {"id": 18, "name": "Rachel", "age": 25},
    {"id": 19, "name": "Samuel", "age": 34},
    {"id": 20, "name": "Tina", "age": 26},
]

let eachElement = (array) => {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        console.log(arrayElement);
    }
};
eachElement(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let newP = (text) => {
    return document.write(`<p>${text}</p>`);
};
newP('Obey, foolish kid!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let newUl = (li) => {
    return document.write(`<ul><li>${li}</li><li>${li}</li><li>${li}</li></ul>`);
};
newUl('Part of new list');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let specificUl = (text, numeration) => {
    document.write(`<ul>`);
    for (let i = 0; i < numeration; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
};
specificUl('test', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let data = [42, "Hello", true, 3.14, "OpenAI", false, -7, "GPT-3.5", true, 0.5, "AI", false, 999, "Model", true,];
let listOfElements = (primitiveArray) => {
    document.write(`<ul>`);
    for (let i = 0; i < primitiveArray.length; i++) {
        const primitiveArrayElement = primitiveArray[i];
        document.write(`<li>${primitiveArrayElement}</li>`);
    }
    document.write(`</ul>`);
};
listOfElements(data);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let dataOfUser = (array) => {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<div>`);
        for (const key in arrayElement) {
            document.write(`<p>`);
            if (key === 'id') {
                document.write(`ID: ` + arrayElement[key])
            } else if (key === 'name') {
                document.write(`Name: ` + arrayElement[key])
            } else if (key === 'age') {
                document.write(`Age: ` + arrayElement[key])
            }
            document.write(`</p>`);
        }
        document.write(`</div>`);
    }
};
dataOfUser(users);

// - створити функцію яка повертає найменьше число з масиву
let arrayOfNumbers = [87, -42, 56, 19, -63, 74, 31, 5, -92, 12, -68, 37, -50, 24, 9, -3, 61, -78, 15, 29];
let minNumber = (arrayOfNumbers) => {
    let m = arrayOfNumbers[0];
    let i = 0;
    while (i < arrayOfNumbers.length) {
        if (arrayOfNumbers[i] < m) {
            m = arrayOfNumbers[i];
        }
        i++;
    }
    return m;
};
console.log(minNumber(arrayOfNumbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumOfArray = (arrayOfNumbers) => {
    let m = 0;
    let i = 0;
    while (i < arrayOfNumbers.length) {
        m += arrayOfNumbers[i];
        i++;
    }
    return m;
};
console.log(sumOfArray(arrayOfNumbers));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr, index1, index2) => {
    if ((index1 && index2) < arr.length) {
        let temporary = arr[index2];
        arr[index2] = arr[index1];
        arr[index1] = temporary;
        return console.log(arr);
    } else {
        return console.log('Indexes should be lower than ' + arr.length);
    }
};
swap(arrayOfNumbers, 3, 9);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        const currency = currencyValues[i];
        for (const key in currency) {
            if (currency[key] === exchangeCurrency) {
                let result = sumUAH / currency.value;
                return console.log(result);
            }
        }
    }
}
exchange(1000000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250