//- Знайти та вивести довижину наступних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

const str1 = 'hello world';
const str2 = 'lorem ipsum';
const str3 = 'javascript is cool';

console.log(str1.length, str2.length, str3.length);
//PRACTISE
let arr = [str1,str2,str3];
let newArr = arr.map(value => value.length);
console.log(newArr);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());
//PRACTISE

let newArrtoUp = arr.map(value => value.toUpperCase());

console.log(newArrtoUp);

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());

//PRACTISE

let newArrLo = arr.map(value => value.toLowerCase());

console.log(newArrLo);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const str4 = ' dirty string   ';
const cleanStr = str4.trim();

console.log(cleanStr.length);

//Просто для себе пробуюю варіант
/*console.log(str4.startsWith('dir'));//false
console.log(str4.endsWith('ng'));//false
console.log(str4.indexOf('d'));//1
console.log(str4.indexOf('g'));//12
let cleanStr = str4.substring(1,12);

console.log(cleanStr.length);*/

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = (str) => str.split(' ');

let str5 ='Ревуть воли як ясла повні';

console.log(stringToArray(str5));



//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numArr = [10,8,-7,55,987,-1011,0,1050,0];
/*let newNumStringArr = numArr.map((num) => num.toString());

console.log(newNumStringArr);*/

let newNumArrStr = numArr.map(value => value.toString());
console.log(newNumArrStr);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]

/*let nums = [11,21,3];
let numsToBigger = [...nums];
let numsToSmaller = [...nums];
let sortNumsFromSmallerToBigger = numsToBigger.sort((num1,num2) => num1 - num2);
let sortNumsFromBiggerToSmaller = numsToSmaller.sort((num1,num2) => num2 - num1);

console.log(sortNumsFromSmallerToBigger);
console.log(sortNumsFromBiggerToSmaller);*/

//PRACTISE
let nums = [11,21,3];
let numsToBigger = [...nums];
let numsToSmaller = [...nums];
let sortToUp = numsToBigger.sort((num1,num2) => num1 - num2);
let sortToDown = numsToSmaller.sort((num1,num2) => num2 - num1);
let sortNums = (direction) => console.log(direction);
sortNums(sortToUp);
sortNums(sortToDown);
//==========================
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);
//-- відсортувати його за спаданням за monthDuration

/*let sortMonthDurationToSmall = coursesAndDurationArray
    .sort((course1, course2) => course2.monthDuration - course1.monthDuration);

console.log(sortMonthDurationToSmall);*/
//PRACTISE
let sortMonthDur = coursesAndDurationArray.sort((dur1,dur2) => dur2.monthDuration - dur1.monthDuration);

console.log(sortMonthDur);

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredMonthDuration = coursesAndDurationArray
    .filter((duration) => duration.monthDuration > 5);

console.log(filteredMonthDuration);
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCoursesAndDurationArray = coursesAndDurationArray.map((course,index) => {
    return {...course, id: index + 1 };
});

console.log(newCoursesAndDurationArray === coursesAndDurationArray);

console.log(coursesAndDurationArray);
//PRACTISE

let coursesNoId = newCoursesAndDurationArray.map(({id,...rest}) => rest);

console.log(coursesNoId);

//=========================
//    описати колоду карт (від 6 до туза без джокерів)

let cardSuits = ['spade', 'diamond','heart', 'clubs'];
let values = ['6','7','8','9','10','ace','jack','queen','king'];
/*let deck = [];*/

/*for (const suit of cardSuits) {
    for (const value of values) {
        const card = {
            suit: suit,
            value: value
        };
        deck.push(card);
    }
}*/
//PRACTISE
let deck = cardSuits.map(suit => {
    return values.map(value => {
        return {
            suit: suit,
            value: value
        };
    });
}).flat();

console.log(deck);

//- знайти піковий туз
/*let foundCard;

for (const card of deck) {
    if (card.suit === 'spade' && card.value === 'ace') {
        foundCard = card;
    }
}
if (foundCard) {
    console.log('found spade ace');
}else {
    console.log('card not found');
}*/
//PRACTISE
let spadeAce = deck.filter(card => card.suit === 'spade' && card.value === 'ace');

console.log(spadeAce);
//- всі шістки
/*let foundCards = [];

for (const cards of deck) {
    if (cards.value === '6') {
        foundCards.push(cards);
    }
}
if (foundCards.length > 0) {
    console.log('found all 6');
}else {
    console.log('card not found');
}
console.log(foundCards);*/
//PRACTISE

let allSixCards = deck.filter(card => card.value === '6');

console.log(allSixCards);
//- всі червоні карти
let foundRedCards = [];
for (const redCards of deck) {
    if (redCards.suit === 'diamond' || redCards.suit === 'heart') {
        foundRedCards.push(redCards);
    }
}
if (foundRedCards) {
    console.log('you got all red cards');
}else {
    console.log('cards not found');
}

console.log(foundRedCards);
//- всі буби

let foundDiamondCards = [];
for (const diamondCards of deck) {
    if (diamondCards.suit === 'diamond') {
        foundDiamondCards.push(diamondCards);
    }
}
if (foundDiamondCards) {
    console.log('all diamond cards');
}else {
    console.log('cards not found');
}

console.log(foundDiamondCards);
//- всі трефи від 9 та більше
let foundClubsCards = [];
for (const clubsCards of deck) {
    if ((Number(clubsCards.value) > 8 || clubsCards.value === 'ace' || clubsCards.value === 'jack' || clubsCards.value === 'queen' || clubsCards.value === 'king') && clubsCards.suit === 'clubs'){
        foundClubsCards.push(clubsCards);
    }
}
console.log(foundClubsCards);

//{
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//   value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
//}

//=========================

//    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//    diamonds:[],
//    hearts:[],
//    clubs:[]
//}
const groupedCards = deck.reduce((accumulator, card) => {
    accumulator[card.suit].push(card);
    return accumulator;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log(groupedCards);


//=========================
//    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass

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

const sassCourses = coursesArray.filter(course => course.modules.includes('sass'));

console.log(sassCourses);


//--написати пошук всіх об'єктів, в який в modules є docker

const dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));

console.log(dockerCourses);

//PRACTISE
//Знайдіть суму всіх елементів масиву.
//const array = [1, 2, 3, 4, 5];
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Виведе 15

const array = [1, 2, 3, 4, 5];
const summ = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(summ);


//Знайдіть максимальне значення в масиві.

//const array = [3, 7, 1, 9, 2];
// const max = array.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
// console.log(max); // Виведе 9

const array1 = [3, 7, 1, 9, 2];
const maxNumber = array1.reduce((result,number) => Math.max(result,number), -Infinity);
console.log(maxNumber);




//Об'єднайте всі рядки масиву в один рядок.
//const array = ['Привіт', ' ', 'світ', '!'];
// const combinedString = array.reduce((accumulator, currentValue) => accumulator + currentValue, '');
// console.log(combinedString); // Виведе "Привіт світ!"

const array2 = ['Привіт', ' ', 'світ', '!'];
const concatString = array2.reduce ((result,string) => result.concat(string), '');
console.log(concatString);

//Підрахуйте кількість парних чисел у масиві.
//const array = [1, 2, 3, 4, 5, 6];
// const countEven = array.reduce((accumulator, currentValue) => (currentValue % 2 === 0 ? accumulator + 1 : accumulator), 0);
// console.log(countEven); // Виведе 3

const array3 = [1, 2, 3, 4, 5, 6];
//const pairArr = array3.reduce((accumulator, currentValue) => (currentValue %2 === 0 ? accumulator + 1 : accumulator), 0);
//console.log(pairArr);

const pairArr = array3.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
        return accumulator + 1;
    } else {
        return accumulator;
    }
}, 0);
console.log(pairArr);

//Сам вигадую задачу

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

const sortMonthDurations = coursesAndDurationArray1.reduce((accumulator,currentValue) => {
    if (currentValue.monthDuration > 5) {
        accumulator[0].push(currentValue);
    }else {
        accumulator[1].push(currentValue);
    }return accumulator;
},[[],[]]);
console.log(sortMonthDurations);


//Знайдіть середнє значення усіх елементів масиву
//const array = [10, 20, 30, 40, 50];
// const average = array.reduce((accumulator, currentValue, index, array) => {
//   accumulator += currentValue;
//   if (index === array.length - 1) {
//     return accumulator / array.length;
//   } else {
//     return accumulator;
//   }
// }, 0);
// console.log(average); // Виведе 30


