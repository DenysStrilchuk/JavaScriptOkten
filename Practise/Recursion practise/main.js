//const arr = [12, 43, 82, [787,54, 93, [76, 98, {name: "Den", age: 45}]]];
//
// function iter(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             iter(array[i]);  // Рекурсивний виклик для вкладеного масиву
//         } else {
//             console.log(array[i]);  // Виведення значення елементу
//         }
//     }
// }
//
// iter(arr);



// let div= document.createElement('div');
// document.body.appendChild(div);
// function recursion(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             recursion(array[i]);
//         } else {
//             let someArray = array[i];
//             //console.log(array[i]);
//             div.innerText += `${someArray}`;
//         }
//     }
// }
//
// recursion(arr);



// const arr = [12, 43, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];
//
// let div = document.createElement('div');
// document.body.appendChild(div);
//
// function recursion(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             recursion(array[i]);
//         } else {
//             let someArray = array[i];
//             // console.log(array[i]);
//             div.innerText += `${someArray} `;
//         }
//     }
// }
//
// recursion(arr);



// const arr = [12, 43, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];
//
// let div = document.createElement('div');
// document.body.appendChild(div);
//
// function recursion(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             recursion(array[i]);
//         } else if (typeof array[i] === 'object' && array[i] !== null) {
//             // Обробка об'єктів
//             let objectValues = Object.values(array[i]);
//             div.innerText += `${objectValues.join(' ')} `;
//         } else {
//             // Обробка інших типів значень
//             div.innerText += `${array[i]} `;
//         }
//     }
// }
//
// recursion(arr);


// const arr = [12, 43, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];
//
// let div = document.createElement('div');
// document.body.appendChild(div);
//
// function recursion(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             recursion(array[i]);
//         } else if (typeof array[i] === 'object' && array[i] !== null) {
//             // Обробка об'єктів
//             let objectValues = Object.values(array[i]);
//             div.innerText += `${objectValues.join(' ')} `;
//         } else {
//             // Обробка інших типів значень
//             div.innerText += `${array[i]} `;
//         }
//     }
// }
//
// recursion(arr);
//
// const arr = [12, 43, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];
//
// let div = document.createElement('div');
// document.body.appendChild(div);
//
// function recursion(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             recursion(array[i]);
//         } else if (typeof array[i] === 'object' && array[i] !== null) {
//             // Обробка об'єктів
//             let objectValues = Object.values(array[i]);
//             div.textContent += `${objectValues.join(' ')} `;
//         } else {
//             // Обробка інших типів значень
//             div.textContent += `${array[i]} `;
//         }
//     }
// }
//
// recursion(arr);

// const arr = [12, 43, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];
//
// let div = document.createElement('div');
// document.body.appendChild(div);
//
// function recursion(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             recursion(array[i]);
//         } else if (typeof array[i] === 'object' && array[i] !== null) {
//             // Обробка об'єктів
//             let objectValues = Object.values(array[i]);
//             if (objectValues.length > 0) {
//                 div.textContent += `${objectValues.join(' ')} `;
//             } else {
//                 // Якщо об'єкт має властивості, виведемо їх окремо
//                 for (let key in array[i]) {
//                     div.textContent += `${key}: ${array[i][key]} `;
//                 }
//             }
//         } else {
//             // Обробка інших типів значень
//             div.textContent += `${array[i]} `;
//         }
//     }
// }
//
// recursion(arr);


// const arr = [12, 43, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];
//
// let div = document.createElement('div');
// document.body.appendChild(div);
//
// function recursion(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             recursion(array[i]);
//         } else if (typeof array[i] === 'object' && array[i] !== null) {
//             // Обробка об'єктів
//             if ('name' in array[i] && 'age' in array[i]) {
//                 div.textContent += `${array[i].name} ${array[i].age} `;
//             } else {
//                 // Якщо об'єкт має інші властивості, виведемо їх окремо
//                 for (let key in array[i]) {
//                     div.textContent += `${key}: ${array[i][key]} `;
//                 }
//             }
//         } else {
//             // Обробка інших типів значень
//             div.textContent += `${array[i]} `;
//         }
//     }
// }
//
// recursion(arr);


// const arr = [12, 43, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];

// let div = document.createElement('div');
// document.body.appendChild(div);
//
// function recursion(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             recursion(array[i]);
//         } else if (typeof array[i] === 'object' && array[i] !== null) {
//             // Обробка об'єктів
//             for (let key in array[i]) {
//                 if (array[i].hasOwnProperty(key)) {
//                     div.textContent += `${key}: ${array[i][key]} `;
//                 }
//             }
//         } else {
//             // Обробка інших типів значень
//             div.textContent += `${array[i]} `;
//         }
//     }
// }
//
// recursion(arr);

// const arr = [12, 43, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];
//
// let div = document.createElement('div');
// document.body.appendChild(div);
//
// function rec(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             rec(array[i]);
//         } else if (typeof array[i] === 'object' && array[i] !== null) {
//             for (const arrayKey in array[i]) {
//                 if (array[i].hasOwnProperty(arrayKey)) {
//                     div.innerText += `${arrayKey}: ${array[i][arrayKey]} `;
//                 }
//             }
//         } else {
//             div.textContent += `${array[i]} `;
//
//         }
//     }
// }
//
// rec(arr);


// Цей код представляє собою рекурсивну функцію rec, яка призначена для обходу вкладених масивів та об'єктів та ' +
// 'виведення їхніх елементів в додану на сторінку HTML-сторінку div-елемент.
//
// Давайте розглянемо кожен елемент коду детально:
//
//     Спочатку задано масив arr, який містить числа, а також вкладені масиви та об'єкти.
//
// Створюється елемент div за допомогою document.createElement('div').
//
//     Елемент div додається до тіла документа за допомогою document.body.appendChild(div).
//
//     Функція rec отримує масив або об'єкт у якості параметра.
//
// У циклі for проходиться по кожному елементу масиву чи об'єкта:
//
// Якщо елемент є масивом, викликається рекурсивно rec(array[i]) для обробки вкладених елементів масиву.
//
//     Якщо елемент є об'єктом, виконується ще один цикл for...in для перебору ключів об'єкта. Кожний ключ та
// відповідне значення виводяться в div за допомогою div.innerText += ${arrayKey}: ${array[i][arrayKey]} ;. Тут
// також використовується перевірка hasOwnProperty, щоб переконатися, що ключ дійсно належить самому об'єкту, а' +
// ' не його прототипу.
//
// Якщо елемент не є масивом чи об'єктом, його значення виводиться в div за допомогою div.textContent += ${array[i]} ;.
//
// Функція rec викликається для вхідного масиву arr, який містить вкладені масиви та об'єкти.
//
// Після завершення виклику функції rec, вміст div буде містити рядок з усіма значеннями та властивостями з масиву arr.
//
//     Важливо зазначити, що цей код використовує innerText для виведення текстового вмісту в div, але це може бути
// змінено на textContent, в залежності від ваших потреб. Також відзначте, що це лише демонстраційний код, і в реальних
// сценаріях може бути важливо враховувати потреби безпеки та оптимізації коду.
