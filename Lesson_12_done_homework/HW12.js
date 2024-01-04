// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersContainer  = document.getElementById('usersContainer');
        const usersList = document.createElement('ul');
        usersContainer.appendChild(usersList);
        users.forEach(user => {
            let userId = user.id;
            let userName = user.name;
            const evenUserList = document.createElement('li');
            usersList.appendChild(evenUserList);
            evenUserList.innerText = `User id: ${userId}; User name: ${userName}; User details: `;
            const userLink = document.createElement('a');
            userLink.href = `user-details.html?id=${userId}`;
            userLink.innerText = 'more details';
            evenUserList.appendChild(userLink);
        })
    })

// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const url = new URL(location.href);
const userId = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(userDetails => {
        let userDetailsContainer = document.getElementById('user-details');

        if(!userDetailsContainer) {
            let userDetailsContainer = document.createElement('div');
            userDetailsContainer.id = 'user-details';
            document.body.appendChild(userDetailsContainer);
        }

        let detailsList = document.createElement('ul');

        for (const [key, value] of Object.entries(userDetails)) {
            let detailItem = document.createElement('li');
            let valueJSON  = JSON.stringify(value);
            detailItem.innerText = `${key}: ${valueJSON}`;
            detailsList.appendChild(detailItem);
        }

        userDetailsContainer.appendChild(detailsList);
    })














