//
// // - створити блок,
// // - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
//
// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.style.background = 'silver';
// block.style.color = 'purple';
// block.style.fontSize = '20px';
// block.innerText = 'Hello Okten';
// document.body.appendChild(block);
// let clonedBlock = block.cloneNode(true);
// document.body.appendChild(clonedBlock);
// clonedBlock.innerText = 'Hi Den';
//
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
// let arr = ['Main','Products','About us','Contacts'];
// let ul = document.createElement('ul');
//
// arr.forEach(function (arrText) {
//     let li = document.createElement('li');
//     li.innerText = arrText;
//     ul.appendChild(li);
// });
// document.body.appendChild(ul);
//
// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let eleArrBck = document.createElement('div');
//     let title = coursesAndDurationArray[i].title;
//     let monthDuration = coursesAndDurationArray[i].monthDuration;
//     eleArrBck.innerText = `Title - ${title},  Month duration - ${monthDuration}.`;
//     document.body.appendChild(eleArrBck);
// }
//
// // =========================
// //     - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// // з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// let coursesAndDurationArray2 = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let i = 0; i < coursesAndDurationArray2.length; i++) {
//    let elArrBck = document.createElement('div');
//    elArrBck.classList.add('item');
//    let h1 = document.createElement('h1');
//    h1.classList.add('heading');
//    let p = document.createElement('p');
//    p.classList.add('description');
//    let title = coursesAndDurationArray2[i].title;
//    let month = coursesAndDurationArray2[i].monthDuration;
//    h1.innerText = title;
//    p.innerText = `Month duration - ${month}`;
//    elArrBck.append(h1,p);
//    document.body.appendChild(elArrBck);
// }
//
// // ==========================
// // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// // Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (let i = 0; i < simpsons.length; i++) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//     let name = document.createElement('h1');
//     name.innerText = simpsons[i].name;
//     let surname = document.createElement('h2');
//     surname.innerText = simpsons[i].surname;
//     let age = document.createElement('p');
//     age.innerText = simpsons[i].age;
//     let info = document.createElement('p');
//     info.innerText = simpsons[i].info;
//     let photo = document.createElement('img');
//     photo.src = simpsons[i].photo;
//     div.append(name,surname,age,info,photo);
//     document.body.appendChild(div);
// }
//
// // =========================
// //     Цикл в циклі
// // - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// // окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (let i = 0; i < coursesArray.length; i++) {
    let bckTitle = document.createElement('div');
    bckTitle.classList.add('titleClass');

    let title = document.createElement('h1');
    title.innerText = coursesArray[i].title;
    bckTitle.appendChild(title);

    let bckDuration = document.createElement('div');
    bckDuration.classList.add('durationClass');

    let month = document.createElement('h2');
    month.classList.add('monthClass');
    month.innerText = coursesArray[i].monthDuration;

    let hour = document.createElement('h2');
    hour.classList.add('hourClass');
    hour.innerText = coursesArray[i].hourDuration;

    bckDuration.append(month,hour);
    document.body.append(bckTitle,bckDuration);

    let modulesMain = document.createElement('div');
    modulesMain.classList.add('modMainClass');

        for (let j = 0; j < coursesArray[i].modules.length; j++) {
            let bckModules = document.createElement('p');
            bckModules.classList.add('modulesClass');
            bckModules.innerText = coursesArray[i].modules[j];

            modulesMain.appendChild(bckModules);
            document.body.appendChild(modulesMain);
    }
}




//     for (let j = 0; j < coursesArray[i].modules.length; j++) {
//         let module = document.createElement('p');
//         module.innerText = coursesArray[i].modules[j];
//         bckModules.appendChild(module);
//     }
//
//     document.body.appendChild(bckModules);
// }