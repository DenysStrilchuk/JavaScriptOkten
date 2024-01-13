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


const arr = [12, 43,{ name: "Den", age: 45 }, 82, [787, 54, 93, [76, 98, { name: "Den", age: 45 }]]];

let div = document.createElement('div');
document.body.appendChild(div);

function recursion(array) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            recursion(array[i]);
        } else if (typeof array[i] === 'object' && array[i] !== null) {
            // Обробка об'єктів
            for (let key in array[i]) {
                if (array[i].hasOwnProperty(key)) {
                    div.textContent += `${key}: ${array[i][key]} `;
                }
            }
        } else {
            // Обробка інших типів значень
            div.textContent += `${array[i]} `;
        }
    }
}

recursion(arr);



