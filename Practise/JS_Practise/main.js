// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
//

// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (
//     дати фон. марджини і тд)

const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Users';
document.body.appendChild(h1);

let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url).then(response => response.json()).then(values => {
    const usersContainer = document.createElement('div');
    usersContainer.classList.add('usersContainer');
    document.body.appendChild(usersContainer);

    values.forEach((value) => {
        const userId = value.id;
        const userName = value.name;

        const userBlock = document.createElement('div');
        userBlock.classList.add('userBlock');

        const userInfo = document.createElement('p');
        userInfo.classList.add('userInfo')
        userInfo.innerText = `${userId} - ${userName}`;

        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'user-details';

        btn.addEventListener('click',function() {
            document.location.href = 'user-details.html?userId=' + JSON.stringify(value);
        })


        userBlock.append(userInfo, btn);
        usersContainer.appendChild(userBlock);

    })
})