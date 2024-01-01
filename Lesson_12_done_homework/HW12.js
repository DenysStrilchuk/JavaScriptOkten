// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)



fetch('http://jsonplaceholder.typicode.com/users ')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        let arr = JSON.stringify(value);
        localStorage.setItem('users', arr);
        for (const valueElement of value) {
            let userId = valueElement.id;
            let userName = valueElement.name;
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            let div = document.createElement('div');
            let link = document.createElement('a');
            link.href = `user-details.html?id=${userId}`;
            link.innerText = `user-details.html?id=${userId}`;
            li.innerText = `User id: ${userId}; User name: ${userName}; User link: `;
            li.appendChild(link);
            ul.appendChild(li);
            div.appendChild(ul);
            document.body.appendChild(div);
            link.onclick = function (e) {
                e.preventDefault();
                let selectedUserId = parseInt(this.href.split('=')[1]);

// Давайте розберемо кожен елемент цього рядка:
//
// this.href: this вказує на об'єкт, до якого відноситься поточний обробник подій (у вашому випадку, це посилання link). href - це властивість, яка містить URL-адресу посилання.
//
// this.href.split('='): Метод split('=') розділить рядок за знаком рівності (=) і поверне масив рядків. В нашому випадку, це буде масив, в якому перший елемент містить частину URL-адреси перед знаком рівності, а другий - після нього.
//
// [1]: Це індексація масиву. Після розділення за =, нам потрібен другий елемент масиву (індекс 1), який містить частину URL-адреси після =.
//
// parseInt(): Ця функція використовується для перетворення рядка на ціле число. Ваші параметри для parseInt() є рядком, який містить індекс URL-адреси після розділення. В результаті отримується число, яке є ідентифікатором користувача (userId).
//
// Отже, весь цей рядок призначений для того, щоб взяти id користувача з URL-адреси посилання, яке містить user-details.html?id=3 (наприклад). Значення 3 (або будь-яке інше число після =) перетворюється у ціле число і зберігається у змінній selectedUserId.

                let storedUsers = JSON.parse(localStorage.getItem('users'));
                let selectedUser = storedUsers.find(u => u.id === selectedUserId);

// Цей рядок коду використовує метод Array.prototype.find() для знаходження об'єкта користувача у масиві storedUsers за умовою, що значення властивості id об'єкта дорівнює selectedUserId.
//
// Давайте розглянемо кожен елемент цього виразу:
//
// storedUsers: Це масив користувачів, який ви отримали з Local Storage і раніше зберегли у змінній storedUsers.
//
// .find(u => u.id === selectedUserId): Це вираз використовує метод find() для пошуку першого об'єкта користувача, для якого умова u.id === selectedUserId є істинною. У цьому випадку, властивість id об'єкта u повинна дорівнювати значенню selectedUserId.
//
// let selectedUser = ...: Знайдений об'єкт користувача зберігається у змінній selectedUser. Таким чином, після виконання цього рядка коду в selectedUser буде міститися об'єкт користувача, який має id, що дорівнює selectedUserId.
//
// Отже, весь цей рядок призначений для того, щоб знайти об'єкт користувача у масиві storedUsers, який має конкретний id (визначений значенням selectedUserId).

                console.log(selectedUser);
                  let userInfo = document.getElementById('userInfo');
                  document.body.appendChild(userInfo);
                  userInfo.innerText = `${selectedUser}`;
            }
        }
    })












// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
