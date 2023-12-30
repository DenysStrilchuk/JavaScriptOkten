//Arrays and ojects
//1.1
let arr;
arr = [1, 10, 15, 'hello', 'hi', false, true, 80, 'John', 5];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//1.2
let obj1 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 352,
    genre: 'fantasy novel'
};
let obj2 = {
    title: 'Looking for Alaska',
    pageCount: 272,
    genre: 'modern prose'
};
let obj3 = {
    title: 'The Secret History',
    pageCount: 640,
    genre: 'modern thriller'
};
console.log(obj1);
console.log(obj2);
console.log(obj3);

//1.3
let obj4 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 352,
    genre: 'fantasy novel',
    authors: ['J.K.Rowling', 57]
};
let obj5 = {
    title: 'Looking for Alaska',
    pageCount: 272,
    genre: 'modern prose',
    authors: ['John Green', 46]
};
let obj6 = {
    title: 'The Secret History',
    pageCount: 640,
    genre: 'modern thriller',
    authors: ['Donna Tartt', 60]
};
console.log(obj4);
console.log(obj5);
console.log(obj6);

//1.4
let arrUsers = [
    {name: 'Olya', username: 'Olya12', password: 6566788776},
    {name: 'Kolia', username: 'Kolia345', password: 8383838399},
    {name: 'George', username: 'George567', password: 8747743621},
    {name: 'John', username: 'John23', password: 622273338},
    {name: 'Mike', username: 'Tyson', password: 'qwweerty'},
    {name: 'Michael', username: 'Jordan', password: 88373388},
    {name: 'Trevis', username: 'Scott', password: 887333388},
    {name: 'Darja', username: 'Darja34', password: 8738383833},
    {name: 'Denys', username: 'Denys937', password: 59900093},
    {name: 'Richard', username: 'Richi', password: 77777777}
];

console.log(arrUsers[0]['password']);
console.log(arrUsers[1]['password']);
console.log(arrUsers[2]['password']);
console.log(arrUsers[3]['password']);
console.log(arrUsers[4]['password']);
console.log(arrUsers[5]['password']);
console.log(arrUsers[6]['password']);
console.log(arrUsers[7]['password']);
console.log(arrUsers[8]['password']);
console.log(arrUsers[9]['password']);

//Logical ramifications
//2.1
let x = +prompt('Please enter a number');

if (x !== 0) {
    alert('it\'s true!');
} else {
        alert('it\'s false!!!')
}

//2.2
let time = +prompt('Please enter a minute');

if (time >=0 && time <= 15) {
    alert ('this is the first part of the hour');
} else if (time > 15 && time <= 30) {
    alert ('this is the second part of the hour');
} else if (time > 30 && time <= 45) {
    alert ('this is the third part of the hour');
} else if (time > 45 && time <= 59) {
    alert ('this is the fourth part of the hour');
} else {
    alert ('It is wrong value');
}

//2.3
let day = +prompt('Please enter the date');

if (day >=1 && day <= 10) {
    alert ('this is the first decade');
} else if (day > 10 && day <= 20) {
    alert ('this is the second decade');
} else if (day > 20 && day <= 31) {
    alert ('this is the third decade');
} else {
    alert ('It is wrong value');
}

//2.4
switch (+prompt('Please enter the day of the week number')) {
    case 1:
        alert('We make a cat, a bear and a hippo out of paper.');
        break;
    case 2:
        alert('Go play with the ball, get used to the sport with love.');
        break;
    case 3:
        alert('Let\'s read a magical fairy tale so that we don\'t forget such goodness.');
        break;
    case 4:
        alert('Let\'s paint together with a brush the family and the landscape, peace in Ukraine, the best mountains and the beach.');
        break;
    case 5:
        alert('Let\'s dance and sing, discover new talents!');
        break;
    case 6:
        alert('We clean the house together, we always remember cleanliness.');
        break;
    case 7:
        alert('We study a poem for our grandmother and read it clearly.');
        break;
    default:
        alert('It is wrong value');
}

//2.5
let y = +prompt('enter any number');
let z = +prompt('enter any number');

if (y > z) {
    alert(y);
} else if(z > y) {
    alert(z);
} else {
    alert('the numbers are the same');
}

//2.6
let someMeaning = NaN;

someMeaning = someMeaning || 'default';

console.log(someMeaning);

//2.7
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}










