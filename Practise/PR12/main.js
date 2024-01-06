// fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(characters => {
//         console.log(characters);
//         characters.forEach(character => {
//             console.log(character);
//         })
//     })

// let url = new URL('https://rickandmortyapi.com/api/character');
// //let url = new URL('https://jsonplaceholder.typicode.com/users');
// //let url = new URL('https://dummyjson.com/products');
// console.log(url);
// fetch(url).then(response => response.json()).then(({results:items}) => {
//     console.log(items);
//     for (const item of items) {
//         let div = document.createElement('div');
//         let img = document.createElement('img');
//         img.src = item.image;
//         div.appendChild(img);
//         document.body.appendChild(div);
//     }
// })

//let url = new URL('https://rickandmortyapi.com/api/character');
//let url = new URL('https://jsonplaceholder.typicode.com/users');
let url = new URL('https://dummyjson.com/products');

let div = document.createElement('div');
div.classList.add('design');
document.body.appendChild(div);

//fetch(url).then(response => response.json()).then(({results:items})
//fetch(url).then(response => response.json()).then((items)=> {
fetch(url).then(response => response.json()).then(({products:items})=> {
    console.log(items);
    items.forEach(item => {
        console.log(item);

        let p = document.createElement('p');
        p.classList.add('pStyle');
        p.innerText = `${item.id} - ${item.title}`;

        let btn = document.createElement('button');
        btn.classList.add('btnStyle');
        btn.innerText = 'DETAILS';
        //p.innerText = `${item.id} - ${item.name}`;



        let btnDel = document.createElement('button');
        btnDel.classList.add('btnDel');
        btnDel.innerText = 'DELETE';

        div.append(p,btn,btnDel);

        btn.addEventListener('click',() => {
            document.location.href = 'details.html?userID=' + JSON.stringify(item);
        })

        btnDel.addEventListener('click',() => {
            deleted(item.id);
            p.style.display = 'none';
            btn.style.display = 'none';
            btnDel.style.display = 'none';
        })
    })
    function deleted(id) {
        fetch(url+'/'+id).then(response => response.json()).then(value => {
            console.log('DELETED: ', value);
        })
    }
})


