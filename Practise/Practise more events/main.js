// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок
// з вашим об'єктом
let btn = document.getElementById('btn');
let textBlock = document.createElement('div');
document.body.appendChild(textBlock);

btn.addEventListener('click', function (ev) {
    ev.preventDefault();

    let name = document.getElementsByName('name')[0].value;
    let surname = document.getElementsByName('surname')[0].value;
    let age = document.getElementsByName('age')[0].value;

    let p = document.createElement('p');
    p.innerText = `${name} - ${surname} - ${age}`;
    textBlock.appendChild(p);
})
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

let block = document.createElement('div');
document.body.appendChild(block);

let number = localStorage.getItem('number') || 0;
number = parseInt(number) + 1;
localStorage.setItem('number', number);

block.innerText = `${number}`;
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

let date = new Date();
let dateToJSON = date.toJSON();

localStorage.setItem('date',dateToJSON);

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const arr = [];

for (let i = 0; i < 100; i++) {
    let obj = {name: `name${i}`, age: 10 + i, email: `name@${i}.com`};
    arr.push(obj);
}

const arrBlock = document.createElement('div');
document.body.appendChild(arrBlock);
const btnBlock = document.createElement('div');
document.body.appendChild(btnBlock);

const btnNext = document.createElement('button');
btnNext.innerText = 'next';

const btnPrev = document.createElement('button');
btnPrev.innerText = 'prev';

function getTenObj(startIndex) {
    arrBlock.innerText = '';
    for (let i = startIndex; i < startIndex + 10; i++) {
        let obj = arr[i];
        let objDiv = document.createElement('div');
        objDiv.innerText = JSON.stringify(obj);
        arrBlock.appendChild(objDiv);
    }
}

getTenObj(0);

btnBlock.append(btnPrev, btnNext);

let currentIndex = 0;

btnNext.addEventListener('click', () => {
    if (currentIndex + 10 < arr.length) {
        currentIndex += 10;
        getTenObj(currentIndex);
    }
});

btnPrev.addEventListener('click', () => {
    if (currentIndex - 10 >= 0) {
        currentIndex -= 10;
        getTenObj(currentIndex);
    }
});



// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".

const textDiv = document.createElement('div');
document.body.appendChild(textDiv);

let  h1 = document.createElement('h1');
h1.id = 'text';
h1.innerText = 'I put here some TEXT';
textDiv.appendChild(h1);

const btnForText =  document.createElement('button');
btnForText.innerText = 'hide text';

const btnForTextDiv  = document.createElement('div');
document.body.appendChild(btnForTextDiv);

btnForTextDiv.appendChild(btnForText);

let idElement = document.getElementById('text');
btnForText.addEventListener('click', () => {
    idElement.style.display = 'none';
})

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let btnAge = document.getElementById('confirmAge');
let pAge = document.getElementById('ageText');

btnAge.addEventListener('click', (ev) => {
    ev.preventDefault();
    let age = document.getElementsByName('age')[1].value;
        if (age < 18) {
            pAge.innerText = 'Your  age is smaller then 18';
        } else {
            pAge.innerText = 'Your age is acceptable';
        }
})


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const numberOfLines = document.getElementById('form3').elements.numberOfLines;
const numberOfColumns = document.getElementById('form3').elements.numberOfColumns;
const linesContent = document.getElementById('form3').elements.linesContent;
const btnCreate = document.getElementById('btnCreateTable');
function generateTable() {
    let table = "<table style='border: 1px solid black;'>";
    for (let i = 0; i < numberOfLines.value; i++) {
        table += "<tr style='border: 1px solid black;'>";
        for (let j = 0; j < numberOfColumns.value; j++) {
            table += "<td style='border: 1px solid black;'>" + linesContent.value + '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('tableContainer').innerHTML = table;
}

btnCreate.addEventListener('click', (ev) => {
    ev.preventDefault();
    generateTable();
})




// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
// якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається