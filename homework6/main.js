// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arrayShortString = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let i = 0; i < arrayShortString.length; i++) {
//     const element = arrayShortString[i];
//     console.log(element.length);
// }
// arrayShortString.forEach(value => console.log(value.length));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// for (let i = 0; i < arrayShortString.length; i++) {
//     const element = arrayShortString[i];
//     console.log(element.toUpperCase());
// }
// arrayShortString.forEach(value => console.log(value.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let arrayLongString = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (let i = 0; i < arrayLongString.length; i++) {
//     const element = arrayLongString[i];
//     console.log(element.toLowerCase());
// }
// arrayLongString.forEach(value => console.log(value.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.indexOf('d'));
// console.log(str.indexOf('y'));
// console.log(str.indexOf('s'));
// console.log(str.indexOf('g'));
// console.log(str.substring(1, 13));

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str1 = 'Ревуть воли як ясла повні';
// function stringToArray(str) {
//     return str.split(' ');
// }
//
// let arr = stringToArray(str1);
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arrayOfNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(arrayOfNumbers.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// function sortNums(array, direction) {
//     if (direction === 'ascending') {
//         return console.log(array.sort((a, b) => a - b));
//     } else if (direction === 'descending') {
//         return console.log(array.sort((a, b) => b - a));
//     }
// }
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((t1, t2) => {
//     return t2.monthDuration - t1.monthDuration;
// }));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// coursesAndDurationArray.map((value, index) => value.id = index);
// console.log(coursesAndDurationArray)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {name: 6, suit: "Hearts", color: "Red"},
    {name: 7, suit: "Hearts", color: "Red"},
    {name: 8, suit: "Hearts", color: "Red"},
    {name: 9, suit: "Hearts", color: "Red"},
    {name: 10, suit: "Hearts", color: "Red"},
    {name: "Jack", suit: "Hearts", color: "Red"},
    {name: "Queen", suit: "Hearts", color: "Red"},
    {name: "King", suit: "Hearts", color: "Red"},
    {name: "Ace", suit: "Hearts", color: "Red"},
    {name: 6, suit: "Diamonds", color: "Red"},
    {name: 7, suit: "Diamonds", color: "Red"},
    {name: 8, suit: "Diamonds", color: "Red"},
    {name: 9, suit: "Diamonds", color: "Red"},
    {name: 10, suit: "Diamonds", color: "Red"},
    {name: "Jack", suit: "Diamonds", color: "Red"},
    {name: "Queen", suit: "Diamonds", color: "Red"},
    {name: "King", suit: "Diamonds", color: "Red"},
    {name: "Ace", suit: "Diamonds", color: "Red"},
    {name: 6, suit: "Clubs", color: "Black"},
    {name: 7, suit: "Clubs", color: "Black"},
    {name: 8, suit: "Clubs", color: "Black"},
    {name: 9, suit: "Clubs", color: "Black"},
    {name: 10, suit: "Clubs", color: "Black"},
    {name: "Jack", suit: "Clubs", color: "Black"},
    {name: "Queen", suit: "Clubs", color: "Black"},
    {name: "King", suit: "Clubs", color: "Black"},
    {name: "Ace", suit: "Clubs", color: "Black"},
    {name: 6, suit: "Spades", color: "Black"},
    {name: 7, suit: "Spades", color: "Black"},
    {name: 8, suit: "Spades", color: "Black"},
    {name: 9, suit: "Spades", color: "Black"},
    {name: 10, suit: "Spades", color: "Black"},
    {name: "Jack", suit: "Spades", color: "Black"},
    {name: "Queen", suit: "Spades", color: "Black"},
    {name: "King", suit: "Spades", color: "Black"},
    {name: "Ace", suit: "Spades", color: "Black"}
]

// - знайти піковий туз
// console.log(cards.filter(value => value.name === 'Ace' && value.suit === 'Spades'));
// - всі шістки
// console.log(cards.filter(value => value.name === 6));
// - всі червоні карти
// console.log(cards.filter(value => value.color === 'Red'));
// - всі буби
// console.log(cards.filter(value => value.suit === 'Diamonds'));
// - всі трефи від 9 та більше
// console.log(cards.filter(value => (value.name > 8 || typeof value.name === 'string') && value.suit === 'Clubs'));

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let sortBySuit = cards.reduce((a, value) => {
    if (value.suit === 'Hearts') {
        a.hearts.push(value);
    }else if (value.suit === 'Diamonds') {
        a.diamonds.push(value);
    }else if (value.suit === 'Spades') {
        a.spades.push(value);
    }else if (value.suit === 'Clubs') {
        a.clubs.push(value);
    }
    return a;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(sortBySuit);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.find(value => value.modules.find(value1 => value1 === 'sass')));

// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.find(value => value.modules.find(value1 => value1 === 'docker')));
