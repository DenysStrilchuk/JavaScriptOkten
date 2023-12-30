//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b) {
    return a * b;
}

console.log(area(10, 12));
console.log(area(13, 42));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCyrc(radius) {
    return Math.PI * Math.pow(radius, 2);
}

console.log(areaCyrc(65));
console.log(areaCyrc(12));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCyl(h, r) {
    return (2 * Math.PI * r) * (h + r);
}

console.log(areaCyl(12, 8));
console.log(areaCyl(8, 3));

//- створити функцію яка приймає масив та виводить кожен його елемент

function iterArr(array) {
    for (const item of array) {
        console.log(item);
    }
}

let someArray = [10, 12, 25, 87, 41, 44, 12, 65, 14];
iterArr(someArray);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function makeParagraph(text) {
    document.write(`<p>${text}</p>`);
}

makeParagraph('Paragraph#1');
makeParagraph('Paragraph#2');
makeParagraph('Paragraph#3');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listMaker(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>`);
    document.write(`</ul>`);
}

listMaker('My some text))');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function listAutoMaker(text, num) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listAutoMaker('Hello my friend!', 10);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrPrimitElem(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

let someArr = [true, 676, 'hello', 'who is..', false, 25];
arrPrimitElem(someArr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function showUserInfo(array) {
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

/*function smallNumber(arrayNum) {
    let smallestNumber = arrayNum[0];
    for (const num of arrayNum) {
        if(smallestNumber > num){
            smallestNumber = num;
        }
    }
    return smallestNumber;
}*/
function smallNumber(arr) {
    let smallestNum = arr[0];
    for (const num of arr) {
        if (smallestNum > num) {
            smallestNum = num;
        }
    }
    return smallestNum;
}
let numbersArray = [32,25,1,15,114,4556,56,85,5,4,1,33,65];
console.log(smallNumber(numbersArray));
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sumResult = 0;
    for (const num of arr) {
        sumResult += num;
    }
    return sumResult;
}

console.log(sum([1,2,10]));
/*
function sum(arr) {
let result = 0;
    for (const arrElement of arr) {
        result += arrElement;
    }
    return result;
}
*/
/*function sum(arr) {
    let result = 0;
    for (const number of arr) {
     result += number;
    }
    return result;
}*/
//console.log(sum([1,2,10]));
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2) {
    let num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr;
}

console.log(swap([11,22,33,44],0,1));

/*
function swap(arr,index1,index2) {
    const num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr;
}
*/
/*function swap(arr,index1,index2) {
    const num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr;
}*/


//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let result;
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            result = sumUAH/currencyValue.value;
        }
    }
    return result;
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));

/*function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH/ currency.value
        }
    }
}*/

/*function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH/currencyValue.value
        }
    }
}*/



//Базові два завдання для початку: написати функцію з ім‘ям getMaxArrayItem що знаходить найбільший елемент поданого у неї массива як аргумент
function getMaxArrayItem(array) {
    let maxElem = array[0];
    for (const num of array) {
        if (maxElem < num) {
            maxElem = num;
        }
    }
    return maxElem;
}
let baseArray = [25,52,45,54,755,0,75,57,6,978];
console.log(getMaxArrayItem(baseArray));

//2. функція яка знайде та виведе у консоль усі четні чи нечетні числа з поданого на вхід массива чисел

function evenNumbers(array) {
    let evenNum = [];
    for (const num of array) {
        if (num % 2 === 0) {
            evenNum.push(num);
        }
    }
    return evenNum;
}
function notEvenNumbers(array) {
    let notEvenNum = [];
    for (const num of array) {
        if (num % 2 !== 0) {
            notEvenNum.push(num);
        }
    }
    return notEvenNum;
}

console.log(evenNumbers(baseArray));
console.log(notEvenNumbers(baseArray));

//3. Функція яка порахує арифметичне середнє значення усіх елементів массива

function arithmeticMean(array) {
    let sum = 0;
    let arithMean;
    for (const num of array) {
        sum += num;
        arithMean = sum/array.length;
        }
    return arithMean;
}

console.log('Arithmetic Mean ' + 'is ' + arithmeticMean(baseArray));
//4.функція яка приймає массив кандидатів(кожен має ім’я та вік) на
// вакансію та відбирає тільки тих хто старше 22 років та молодше за 65 років і виводить середній вік к
// андидатів поданих(тобто на виході тільки число округлене до цілого)
let candidates = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 67, status: true},
    {name: 'kolya', age: 73, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 15, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 18, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 48, status: true}
];
function candidatesFilter(array) {
    let sumAge = 0;
    let selectedCandidates = [];
    let arithmeticMeanAge;
    for (const candidate of array) {
        if (candidate.age > 22 && candidate.age < 65) {
            selectedCandidates.push(candidate);
        }
    }
    for (const age of selectedCandidates) {
        sumAge += age.age;
        arithmeticMeanAge = Math.round(sumAge/selectedCandidates.length);
    }
    return arithmeticMeanAge;
}


console.log(candidatesFilter(candidates));