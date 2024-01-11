//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href);
const postDetails = JSON.parse(url.searchParams.get('posts'));
const divDetails = document.createElement('div');
document.body.appendChild(divDetails);

for (const postDetailsKey in postDetails) {
    const p = document.createElement('p');
    const postValue = postDetails[postDetailsKey];
    p.innerText = `${postDetailsKey} - ${postValue}`;
    divDetails.appendChild(p);
}

const divComments = document.createElement('div');
document.body.appendChild(divComments);
fetch(`https://jsonplaceholder.typicode.com/posts/${postDetails.id}/comments`)
    .then(response => response.json())
    .then(values => {
        values.forEach((value) => {
            const comInfo = document.createElement('p');
            comInfo.innerText = `Comment: ${value.body}`;
            divComments.appendChild(comInfo);
        })
    })
