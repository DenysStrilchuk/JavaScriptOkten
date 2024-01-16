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

const btnNext = document.createElement('button');
btnNext.innerText = 'next';

const btnPrev = document.createElement('button');
btnPrev.innerText = 'prev';

 localStorage.setItem('newArr', JSON.stringify(arr));

  let getStorage = JSON.parse(localStorage.getItem('newArr'));
console.log(getStorage);

let partObj = getStorage.slice(0,10);

let toString  = JSON.stringify(partObj);

let p = document.createElement('p');
p.innerText = `${toString}`;


console.log(partObj);

arrBlock.append(p, btnNext, btnPrev);

btnNext.addEventListener('click', () => {

})




// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
// якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається