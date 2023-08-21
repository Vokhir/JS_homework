// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let massive = [1, 'sdfsdf', 3, 'asda', true, false, 1234, 'god is dead', 'good boy', 'bad boy'];
console.log(massive[0]);
console.log(massive[1]);
console.log(massive[2]);
console.log(massive[3]);
console.log(massive[4]);
console.log(massive[5]);
console.log(massive[6]);
console.log(massive[7]);
console.log(massive[8]);
console.log(massive[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
        title: 'Harry Potter',
        pageCount: 453,
        genre: 'fantasy',
    };
let book2 = {
    title: 'The Runesmith',
    pageCount: 'still in progress',
    genre: 'fantasy, LitRPG, light novel',
};
let book3 = {
    title: 'Black Clover',
    pageCount: 'unknown',
    genre: 'manga, fantasy',
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Harry Potter',
    pageCount: 453,
    genre: 'fantasy',
    authors:[
        {
            name: 'Kate',
            age: 45,
        },
        {
            name:'Sam',
            age:54,
        }
    ]
};
let book5 = {
    title: 'Phil',
    pageCount: 34,
    genre: 'drama',
    authors:[
        {
            name: 'Dan',
            age: 12,
        },
        {
            name:'Odette',
            age: 35,
        }
        ]
};
let book6 = {
    title: 'Book 25',
    pageCount: 25,
    genre: 'sci-fi',
    authors:[
        {
            name: 'Glass',
            age: 6,
        },
        {
            name:'Mary',
            age:298,
        }
        ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name:'Sam',
        username:'Sam',
        password:'skdufbsidf8sudfis',
    },
    {
        name:'Dean',
        username:'Sweet',
        password:'sd6fs75d7fs8',
    },
    {
        name:'Garry',
        username:'LoveFool',
        password:'love123',
    },
    {
        name:'Shar',
        username:'SlaveMaster',
        password:'sdf87sf&F*(D&SF',
    },
    {
        name:'Vince',
        username:'Slave',
        password:'qwerty123',
    },
    {
        name:'Iryna',
        username:'FlowerBeauty',
        password:'flowersUsinG16things',
    },
    {
        name:'Pranav',
        username:'God_Eater',
        password:'sdfbsbdfjshbf73fu38fb',
    },
    {
        name:'Yoko',
        username:'YokoTheGreat',
        password:'asd68as9da98da7sd',
    },
    {
        name:'3485945',
        username:'Robot1',
        password:'9273492834918241',
    },
    {
        name:'010110011100',
        username:'TurboRobot1',
        password:'1011001011000011010',
    },
]
console.log(users[0]["password"]);
console.log(users[1]["password"]);
console.log(users[2]["password"]);
console.log(users[3]["password"]);
console.log(users[4]["password"]);
console.log(users[5]["password"]);
console.log(users[6]["password"]);
console.log(users[7]["password"]);
console.log(users[8]["password"]);
console.log(users[9]["password"]);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = 1;
// let a = 0;
let a = -3;
let x = a;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = parseInt(prompt('Введіть число від 0 до 59'));
if (0 <= time && time <= 14) {
    console.log('Перша чверть')
} else if (15 <= time && time <= 29) {
    console.log('Друга чверть')
} else if (30 <= time && time <= 44) {
    console.log('Третя чверть')
} else if (45 <= time && time <= 59) {
    console.log('Четверта чверть')
} else {
    console.log('Incorrect number')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day= parseInt(prompt('Введіть день місяця'));
if (1 <= day && day <= 10) {
    console.log('Перша третина')
} else if (11 <= day && day <= 20) {
    console.log('Друга третина')
} else if (21 <= day && day <= 31) {
    console.log('Третя третина')
} else {
    console.log('Incorrect date')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfTheWeek= parseInt(prompt('Введіть номер дня тижня'));
switch (dayOfTheWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Incorrect day number')
}

// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let firstNumber = parseInt(prompt('Введіть перше число'));
let secondNumber = parseInt(prompt('Введіть друге число'));
if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber) {
    console.log(secondNumber);
} else if (firstNumber === secondNumber) {
    console.log('Numbers are equal')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let thing = 'true' ||"default";
console.log(thing);
// Не зміг знайти єдиний спосіб для введення даних але можна підставити замість 'true' потрібну змінну


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}