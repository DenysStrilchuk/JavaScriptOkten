// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом

// let users = [];
// let form = document.forms[0];
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let name = this.name.value;
//     let surname = this.surname.value;
//     let age = this.age.value;
//     console.log({name, surname, age});
//     users.push({name, surname, age});
// }
//
// let showBlock = document.getElementById('btn-show');
// showBlock.onclick = function () {
//     for (const user of users) {
//         let block = document.createElement('div');
//         block.innerText = `User name: ${user.name}, user surname ${user.surname}, age : ${user.age}`;
//         document.body.append(block);
//     }
// }

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

// let count = localStorage.getItem('count') || 0;
// let blockNumber = document.createElement('div');
// blockNumber.innerText = count;
// document.body.appendChild(blockNumber);
// count++;
// localStorage.setItem('count', count);


// let count = localStorage.getItem('count') || 0;
// let blockNumber = document.createElement('div');
// blockNumber.innerText = count;
// document.body.appendChild(blockNumber);
// count++;
// localStorage.setItem('count', count);

// Отримуємо останнє значення збережене в localStorage або встановлюємо 0, якщо значення відсутнє
//let count = localStorage.getItem('count') || 0;
//
// Створюємо елемент div
//let blockNumber = document.createElement('div');
//
// // Задаємо текстовий контент елементу з поточним значенням count
//blockNumber.innerText = count;
//
// // Додаємо елемент до тіла документа
//document.body.appendChild(blockNumber);
//
// // Збільшуємо значення count на 1
//count++;
//
// // Зберігаємо оновлене значення в localStorage
//localStorage.setItem('count', count);
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а
// побудувати дом структуру під кожну сессію


// function getCurrentDataTime() {
//     return new Date().toDateString();
// }
//
// function saveSessionInfo() {
//     let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//     sessions.push(getCurrentDataTime());
//     localStorage.setItem('sessions', JSON.stringify(sessions));
// }
//
// saveSessionInfo();
//
// function getSessions() {
//     return JSON.parse(localStorage.getItem('sessions')) || [];
// }
//
// function buildSessionsList() {
//     let sessionList = document.getElementById('sessionsList');
//     let sessions = getSessions();
//
//     sessions.forEach(function (session, index){
//         let sessionDiv = document.createElement('div');
//         sessionDiv.innerText = `Session ${index + 1} ${session}`;
//         sessionList.append(sessionDiv);
//     });
// }
//
// buildSessionsList();
// Отримання поточної дати та часу
// function getCurrentDateTime() {
//     return new Date().toLocaleString();
// }
//
// // Зберігання інформації у локальному сховищі
// function saveSessionInfo() {
//     let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//     sessions.push(getCurrentDateTime());
//     localStorage.setItem('sessions', JSON.stringify(sessions));
// }
//
// // Виклик функції для зберігання інформації при завантаженні сторінки
// saveSessionInfo();
//
// // Отримання збереженої інформації з локального сховища
// function getSessions() {
//     return JSON.parse(localStorage.getItem('sessions')) || [];
// }
//
// // Побудова DOM-структури для кожної сесії
// function buildSessionList() {
//     let sessionsList = document.getElementById('sessionsList');
//     let sessions = getSessions();
//
//     sessions.forEach(function (session, index) {
//         let sessionDiv = document.createElement('div');
//         sessionDiv.innerHTML = '<strong>Session ' + (index + 1) + ':</strong> ' + session;
//         sessionsList.appendChild(sessionDiv);
//     });
// }
//
// // Виклик функції для побудови DOM-структури при завантаженні сторінки
// buildSessionList();






//let now = new Date();
//let seeSite = document.createElement('div');
//seeSite.innerText = `You being on site at: ${now}.`;
//document.body.appendChild(seeSite);
//let beingOnsiteArr = [];

// Отримуємо попередні дати з localStorage, якщо вони там зберігаються
//let storedDates = JSON.parse(localStorage.getItem('beingOnsiteArr'));

// Якщо є збережені дати, додаємо їх до масиву
// if (storedDates) {
//     beingOnsiteArr = storedDates;
// }

// Додаємо поточну дату до масиву
//beingOnsiteArr.push({ date: now });

// Зберігаємо оновлений масив у localStorage
//localStorage.setItem('beingOnsiteArr', JSON.stringify(beingOnsiteArr));

// Виводимо масив в консоль для перевірки
//console.log((beingOnsiteArr));


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів




// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".




//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача




// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)




// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
// якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

//TRAINING localStorage

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// localStorage.setItem('courses', JSON.stringify(coursesAndDurationArray));
// let getCourses = localStorage.getItem('courses');
// let objCourses = JSON.parse(getCourses);
// //console.log(objCourses);
// objCourses.push({});
// localStorage.setItem('courses2', JSON.stringify(objCourses));
// let getNewObjectCourses = localStorage.getItem('courses2');
// let newObjCourses = JSON.parse(getNewObjectCourses);
// console.log(newObjCourses);


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

// let count = localStorage.getItem('count') || 0;
// let block = document.createElement('div');
// block.innerText = count;
// document.body.append(block);
// count++;
// localStorage.setItem('count', count);


let target = document.getElementById('target');
target.onclick = function (e) {
    console.log('click');
    console.log(e);
}
// target.onmousemove = function (e) {
//     console.log(e.clientX,e.clientY);
//     let r = e.clientX;
//     let g = e.clientX;
//     let b = e.clientY;
//     this.style.background = `rgb(${r},${g},${b})`;
// }

// target.addEventListener('click', function (e){
//     console.log('jsjsjsj');
// });

target.onmouseover = function (){
    console.log('over');
}
target.onmouseleave = function () {
    console.log('leave');
}