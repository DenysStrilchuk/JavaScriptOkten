//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRect(a,b) {
    let area = a * b;
    return area;
}
let rectangleArea = areaRect(15,10);
console.log(rectangleArea);

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCirc(radius) {
    let area = Math.PI * Math.pow(radius,2);
    return area;
}
let circleArea= areaCirc(12);
console.log(circleArea);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCyl(h,r) {
    let area = (2*Math.PI*r)*(h + r);
    return area;
}
let cylinderArea = areaCyl(24,12);
console.log(cylinderArea);
//- створити функцію яка приймає масив та виводить кожен його елемент

function takeArr(array) {
    for (const arrayElement of array) {

    }
        return array;
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let takesArray = takeArr(users);
console.log(takesArray);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
    function createParagraph(text) {
        document.write(`<p>${text}</p>`);
    }
    createParagraph('Hello world');
    createParagraph('I\'m write something');
    createParagraph('See result');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    function someList(text) {
        document.write(`<ul>`);
            document.write(`<li>${text}</li>`);
            document.write(`<li>${text}</li>`);
            document.write(`<li>${text}</li>`);
        document.write(`</ul>`);
    }
    someList('Some text for LI')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function someList2(text,number) {
    document.write(`<ul>`);
    for (i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
someList2('Some text for LI again',3);
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
    function takeArray(array) {
        document.write(`<ul>`);
        for (let i = 0; i < array.length; i++) {
            document.write(`<li> ${array[i]} </li>`);
    }
        document.write(`</ul>`);
}
let myArray = [1, 'Hello', true, 42, 'World', false];
takeArray(myArray);
let myArray2 = [42, 'Hello', true, 3.14,];
takeArray(myArray2);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
    function someArray(objectArr) {
        document.write(`<div>`);
        for (let i = 0; i < objectArr.length; i++) {
            let obj = objectArr[i];
            document.write(`<div><p>id: ${obj.id}</p><p>name: ${obj.name}</p><p>age: ${obj.age}</p><p>_____________</p></div>`);
        }
        document.write(`</div>`)
    }
let myObjects = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
];
someArray(myObjects);
//- створити функцію яка повертає найменьше число з масиву
    function smallestNum(arrNum) {
        let smallNum = arrNum[0];
        for (i = 0; i < arrNum.length; i++) {
            if(arrNum[i] < smallNum) {
                arrNum[i] = smallNum;
            }
        }
        console.log(smallNum);
    }
   let arrayNum = [12,15,18,16,13];
    smallestNum(arrayNum);
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
    function sum(arr) {
        let summa = 0;
        for (let i = 0; i < arr.length; i++) {
            summa += arr[i];
        }
        console.log(summa);
    }
let arrNum = [12,15,18,16,13];
    sum(arrNum);

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
    function swap(arr, index1, index2) {
        // Обмін значень між двома індексами
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;

    return arr;
}

let arr = [11, 22, 33, 44];
swap(arr, 0, 1);
console.log(arr);
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


