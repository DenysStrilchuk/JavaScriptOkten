// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом

let users = [];
 let form = document.forms[0];
form.onsubmit = function (ev) {
    console.log(ev);
    ev.preventDefault();
    let name = this.name.value;
    let surname = this.surname.value;
    let age = this.age.value;
    console.log({name, surname, age});
    users.push({name, surname, age});
}
let btnShow = document.getElementById('btn-show-all');
btnShow.onclick = function () {
    for (const user of users) {
        let div = document.createElement('div');
        div.innerText = `Name - ${user.name}, Surname - ${user.surname}, Age - ${user.age}`;
        document.body.appendChild(div);
    }
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

let divFigure = document.createElement('div');
let currentCount = localStorage.getItem('count' || 0);
currentCount ++;
divFigure.innerText = 0 + currentCount;
document.body.appendChild(divFigure);
localStorage.setItem('count', currentCount);

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

let currentDate = new Date();
let timestamp = currentDate.toLocaleString();
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push({timestamp: timestamp});
localStorage.setItem('sessions', JSON.stringify(sessions));
let sessionsListDiv = document.getElementById('sessionsList');
sessions.forEach(function (session, index){
    let sessionDiv = document.createElement('div');
    sessionDiv.innerText = 'Session' + (index + 1) + ': ' + session.timestamp;
    sessionsListDiv.appendChild(sessionDiv);
});


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
function User(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}

let usersArr = [];
for (let i = 1; i < 101; i++) {
    let newUser = new User(i, 'Name' + [i], 'Age' + i);
    usersArr.push(newUser);
}
console.log(usersArr);

let itemsPerPage = 10;
let currentPage = 1;

function displayData(startIndex, endIndex) {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHtml = '';

    for (let i = startIndex; i < endIndex; i++) {
        let itemDiv = document.createElement('div');
        itemDiv.innerText = 'Object ' + (i + 1) + ': ' + usersArr[i].name;
        outputDiv.appendChild(itemDiv);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        let startIndex = (currentPage - 1) * itemsPerPage;
        let endIndex = currentPage * itemsPerPage;
        displayData(startIndex, endIndex);
    }
}

function nextPage() {
    let totalPage = Math.ceil(usersArr.length / itemsPerPage);
    if (currentPage < totalPage) {
        currentPage++;
        let startIndex = (currentPage - 1) * itemsPerPage;
        let endIndex = currentPage * itemsPerPage;
        displayData(startIndex, endIndex);
    }
}

displayData(0, itemsPerPage);

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".

function hideElement() {
    let textElement = document.getElementById('text');
    if (textElement) {
        textElement.style.display = 'none';
    }
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function checkAge() {
    let ageInput = document.getElementById('ageInput');
    let age = parseInt(ageInput.value);
    if(isNaN(age) || age < 18) {
        alert('Вибачте, вам немає 18');
    } else {
        alert('Вік підтверджено!');
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого
// є значення "100грн"



// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається