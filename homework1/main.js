// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a='hello';
console.log(a)
let b='owu';
console.log(b)
let c='com';
console.log(c)
let d='ua';
console.log(d)
let e=1;
console.log(e)
let f=10;
console.log(f)
let g=-999;
console.log(g)
let h=123;
console.log(h)
let i=3.14;
console.log(i)
let j=2.7;
console.log(j)
let k=16;
console.log(k)
let l=true;
console.log(l)
let m=false;
console.log(m)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Володимир';
let lastName = 'Хмура';
let middleName = 'Юрійович';
let person = firstName+' '+middleName+' '+lastName;
console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a1 = 100;
    let b1 = '100';
    let c1 = true;
console.log(typeof a1);
console.log(typeof b1);
console.log(typeof c1);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let userName = prompt('Ваше Ім'+"'"+'я');
let userLastName = prompt('Ваше прізвище');
let userAge = parseInt(prompt('Ваш вік'));
let person1 = userName +' '+ userLastName +' ';
console.log(person1,userAge);