// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

fetch('http://jsonplaceholder.typicode.com/users ')
    .then(value => value.json())
    .then(value => {
        console.log(value);
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
        }
    })




// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)



// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
