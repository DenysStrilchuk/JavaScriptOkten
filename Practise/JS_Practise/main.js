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

let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url).then(response => response.json()).then(values => {
    console.log(values);

    values.forEach((value) => {
        const userId = value.id;
        const userName = value.name;

        const p = document.createElement('p');
        p.innerText = `${userId} - ${userName}`;

        const div = document.createElement('div');
        document.body.appendChild(div);

        const btn = document.createElement('button');
        btn.innerText = 'user-details';

        btn.addEventListener('click',function() {
            document.location.href = 'user-details.html?userId=' + JSON.stringify(value);
        })

        div.append(p, btn);

    })
})