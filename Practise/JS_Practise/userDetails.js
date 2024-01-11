// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const userDetails = JSON.parse(url.searchParams.get('userId'));

const div = document.createElement('div')
document.body.appendChild(div);

for (const userKey in userDetails) {
    const p = document.createElement('p');
    const userValue = userDetails[userKey];

    if(typeof userValue === 'object' && userValue !== null) {
       p.innerText = `${userKey} - ${JSON.stringify(userValue)}`;
    } else {
        p.innerText = `${userKey} - ${userValue}`;
    }

    div.appendChild(p);
}

const btn = document.createElement('button');
btn.innerText = 'post of current user';
div.appendChild(btn);
btn.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userDetails.id}/posts`)
        .then(response => response.json())
        .then(values => {
            values.forEach((value) => {
                console.log(value);
                const titlePosts = document.createElement('div');
                titlePosts.innerText = `Title: ${value.title} - `;
                div.appendChild(titlePosts);

                const postLink = document.createElement('a');
                postLink.href = 'post-details.html?posts=' + JSON.stringify(value);
                postLink.innerText = 'click for details';
                titlePosts.appendChild(postLink);
            })
        })
})



