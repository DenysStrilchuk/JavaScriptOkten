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
                let storedUsers = JSON.parse(localStorage.getItem('users'));
                let selectedUser = storedUsers.find(u => u.id === selectedUserId);
                console.log(selectedUser);
            }
        }
    })