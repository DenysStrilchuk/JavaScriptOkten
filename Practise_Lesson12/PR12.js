// fetch('http://jsonplaceholder.typicode.com/users ')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//         let arr = JSON.stringify(value);
//         localStorage.setItem('users', arr);
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
//             link.onclick = function (e) {
//                 e.preventDefault();
//                 let selectedUserId = parseInt(this.href.split('=')[1]);
//                 let storedUsers = JSON.parse(localStorage.getItem('users'));
//                 let selectedUser = storedUsers.find(u => u.id === selectedUserId);
//                 console.log(selectedUser);
//             }
//         }
//     })



// // зробити файл users.html
// // з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// // вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         // Створюємо список користувачів
//         let usersListContainer = document.getElementById('users-list');
//         let userList = document.createElement('ul');
//
//         users.forEach(user => {
//             let userId = user.id;
//             let userName = user.name;
//
//             //Створюємо елемент списку та посилання на докладну інформацію про користувача
//             let listItem = document.createElement('li');
//             listItem.innerText = `User id: ${userId}; User name: ${userName}; User details: `;
//             let detailsLink = document.createElement('a');
//             detailsLink.href = `user-details.html?id=${userId}`;
//             detailsLink.innerText = 'Push here';
//             listItem.appendChild(detailsLink);
//
//             // Додаємо елемент в список
//             userList.appendChild(listItem);
//         });
//
//         // Додаємо список користувачів на сторінку
//         usersListContainer.appendChild(userList);
//     })
//     .catch(error => console.error('Error fetching users:', error));
//
//
// // при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// // отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
//
//
//
// // Отримуємо id користувача з параметрів URL
// const urlParams = new URLSearchParams(window.location.search);
// const userId = urlParams.get('id');
//
// // Виконуємо запит за деталями конкретного користувача
// fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(response => response.json())
//     .then(userDetails => {
//         // Створюємо контейнер для виведення деталей користувача
//         let userDetailsContainer = document.getElementById('user-details');
//
//         // Перевіряємо чи елемент існує перед використанням
//         if (!userDetailsContainer) {
//             userDetailsContainer = document.createElement('div');
//             userDetailsContainer.id = 'user-details';
//             document.body.appendChild(userDetailsContainer);
//         }
//
//         let detailsList = document.createElement('ul');
//
//         // Додаємо кожен параметр користувача в список
//         for (const [key, value] of Object.entries(userDetails)) {
//             let detailItem = document.createElement('li');
//             let valueJSON  = JSON.stringify(value);
//             detailItem.innerText = `${key}: ${valueJSON}`;
//             detailsList.appendChild(detailItem);
//         }
//
//         // Додаємо список деталей на сторінку
//         userDetailsContainer.appendChild(detailsList);
//     })
//     .catch(error => console.error('Error fetching user details:', error));














