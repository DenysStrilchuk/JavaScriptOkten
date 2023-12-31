// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)



// fetch('http://jsonplaceholder.typicode.com/users ')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//         for (const valueElement of value) {
//             let userId = valueElement.id;
//             let userName = valueElement.name;
//             let ul = document.createElement('ul');
//             let li = document.createElement('li');
//             let div = document.createElement('div');
//             let link = document.createElement('a');
//             link.href = `user-details.html?id=${userId}`;
//             link.innerText = `user-details.html?id=${userId}`;
//             li.innerText = `User id: ${userId}; User name: ${userName}; User link: `;
//             li.appendChild(link);
//             ul.appendChild(li);
//             div.appendChild(ul);
//             document.body.appendChild(div);
//         }
//     })

// fetch('http://jsonplaceholder.typicode.com/users ')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//         for (const valueElement of value) {
//             let userInfo = document.getElementById('userInfo');
//             userInfo.innerText = `${valueElement}`;
//             document.body.appendChild(userInfo);
//         }
//     })

// fetch('http://jsonplaceholder.typicode.com/users ')
//     .then(response => response.json())
//     .then(users => {
//         console.log(users);
//
//         let userInfo = document.getElementById('userInfo');
//         for (const user of users) {
//             for (const key in user) {
//                 let p = document.createElement('p');
//                 p.innerText = `${key}: ${user[key]}`;
//                 userInfo.appendChild(p);
//             }
//             userInfo.appendChild(document.createElement('hr')); // Додаємо лінію між користувачами
//         }
//
//         document.body.appendChild(userInfo);
//     })
//     .catch(error => console.error('Помилка отримання даних:', error));








// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
