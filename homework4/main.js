// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    let plot = a * b;
    return console.log(plot);
}

square(78, 89);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(r) {
    let radius = Math.PI * Math.pow(r, 2);
    return console.log(radius);
}

radius(10);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
    let area = 2 * Math.PI * (r + h);
    console.log(area);
}

cylinder(10, 100);

// - створити функцію яка приймає масив та виводить кожен його елемент
function log(array) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        console.log(arrayElement);
    }
}

let array = [1, 'atray', true, NaN, 13, 'death'];
log(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(array) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<p>${arrayElement}</p>`);
    }
}

paragraph(array);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(bara_manga) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${bara_manga}</li>`);
    }
    document.write(`</ul>`);
}

list('rough pron');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function restrictedList(liText, liCount) {
    document.write(`<ul>`);
    for (let i = 0; i < liCount; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}

restrictedList('Kaizoku, Amanogawa, FanVoxUA', 100);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function anyArray(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<li>`);
        document.write(arrayElement);
        document.write(`</li>`);
    }
    document.write(`</ul>`);
}

anyArray(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        age: 10,
    },
    {
        id: 2,
        name: 'Ervin Howell',
        age: 1,
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        age: 231,
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        age: 23424,
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        age: 1,
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        age: 3436363,
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        age: 3,
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        age:323,
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        age: 34636,
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        age: 1716,}
];

function info(array) {
    document.write(`<div>`);
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
            for (const key in arrayElement) {
                if (key === 'id') {
                    document.write(`<div>`);
                    document.write(`ID - `+arrayElement[key]);
                    document.write(`</div>`);
                }
            }
            for (const key in arrayElement) {
                if (key === 'name') {
                    document.write(`<div>`);
                    document.write(`Name - `+arrayElement[key]);
                    document.write(`</div>`);
                }

            }
            for (const key in arrayElement) {
                if (key === 'age') {
                    document.write(`<div>`);
                    document.write(`Age - `+arrayElement[key]);
                    document.write(`</div>`);
                }
                }
        }

    document.write(`</div>`);
    }

info(usersList);
// - створити функцію яка повертає найменьше число з масиву
let numArray = [1, 35, 3412, -34322, 0, -90000, 1000000];

function minimalNum(arrayOfNumbers) {
    let m = 0;
    let i = 0;
    while (i < arrayOfNumbers.length) {
        if (m > arrayOfNumbers[i]) {
            m = arrayOfNumbers[i];
        }
        i++;
    }
    return console.log(m);
}

minimalNum(numArray);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumNum(arrayOfNumbers) {
    let m = 0;
    let i = 0;
    while (i < arrayOfNumbers.length) {
            m += arrayOfNumbers[i];
        i++;
    }
    return console.log(m);
}

sumNum(numArray);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr,index1,index2) {
    if (index1 < arr.length && index2 < arr.length) {
        let temporary = arr[index2];
        arr[index2] = arr[index1];
        arr[index1] = temporary;
        return console.log(arr);
    } else {
        return console.log('Indexes should be lower than '+arr.length);
    }
}

swap(numArray, 3, 6);
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH,currencyValues,exchangeCurrency) {
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
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250