//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let area = (a, b) => (a * b);

console.log(area(10, 12));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

let areaCyrc = (radius) => Math.round(Math.PI * Math.pow(radius, 2));

console.log(areaCyrc(65));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCyl = (h, r) => Math.round((2 * Math.PI * r) * (h + r));

console.log(areaCyl(12, 8));

//- створити функцію яка приймає масив та виводить кожен його елемент

let iterArr = (array) => {
    for (const item of array) {
        console.log(item);
    }
}

let someArray = [10, 12, 25, 87, 41, 44, 12, 65, 14];
iterArr(someArray);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let makeParagraph = (text) => document.write(`<p>${text}</p>`);

makeParagraph('Paragraph#1');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let listMaker = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>`);
    document.write(`</ul>`);
}

listMaker('My some text))');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listAutoMaker = (text, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listAutoMaker('Hello my friend!', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrPrimitElem = (array) => {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

let someArr = [true, 676, 'hello', 'who is..', false, 25];
arrPrimitElem(someArr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let showUserInfo = (array) => {
    for (const user of array) {
        document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`);
    }
}

let myObjects = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
];

showUserInfo(myObjects);

//- створити функцію яка повертає найменьше число з масиву

let smallNumber = arr => Math.min(...arr);

let numbersArray = [32,25,1,15,114,4556,56,85,5,4,1,33,65];

console.log(smallNumber(numbersArray));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let sumResult = 0;
    for (const num of arr) {
        sumResult += num;
    }
    return sumResult;//не знаю як тут не використати return :(
}

console.log(sum([1,2,10]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2) => {
    let num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr; //  тут також
}

console.log(swap([11,22,33,44],0,1));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let result;
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            result = sumUAH/currencyValue.value;
        }
    }
    return result;// і тут:(
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));