// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const userDetails = JSON.parse(url.searchParams.get('userId'));

const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'User details';
document.body.appendChild(title);

const div = document.createElement('div');
div.classList.add('userInfoBlock');
document.body.appendChild(div);


function iterateObject(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const userDetails = obj[key];
            const userPar = document.createElement('p');
            userPar.classList.add('userPar');

            if (typeof userDetails === 'object' && userDetails !== null) {
                iterateObject(userDetails);
            } else {
                userPar.innerText = `${key}: ${userDetails}`;
            }
            div.appendChild(userPar);
        }
    }
}

iterateObject(userDetails);

const buttonBlock = document.createElement('div');
buttonBlock.classList.add('buttonBlock');
document.body.appendChild(buttonBlock);

const titleBlock = document.createElement('div');
titleBlock.classList.add('titleBlock');
document.body.appendChild(titleBlock);

const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'post of current user';
buttonBlock.appendChild(btn);
btn.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userDetails.id}/posts`)
        .then(response => response.json())
        .then(values => {
            values.forEach((value) => {
                const titlePosts = document.createElement('p');
                titlePosts.classList.add('titlePosts');
                titlePosts.innerText = `Title: ${value.title} - `;
                titleBlock.appendChild(titlePosts);

                const postLink = document.createElement('a');
                postLink.href = 'post-details.html?posts=' + JSON.stringify(value);
                postLink.innerText = 'click for details';
                titlePosts.appendChild(postLink);
                btn.style.display = 'none';
            })
        })
})



