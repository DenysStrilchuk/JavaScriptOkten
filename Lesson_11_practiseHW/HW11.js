// setTimeout(() => {
//     console.log('1');
//
// },1000);
//
// setTimeout(() => {
//     console.log('2');
//
// },2000);


//Callback Hell!!!!!

// setTimeout(() => {
//     console.log('1');
//         setTimeout(() => {
//             console.log('2');
//             setTimeout(() => {
//                 console.log('3');
//                 setTimeout(() => {
//                     console.log('4');
//                     setTimeout(() => {
//                         console.log('5');
//                         setTimeout(() => {
//                             console.log('6')
//                         },1000);
//                     },1000);
//                 },1000)
//             },1000);
//         },1000);
// },1000);


//How work PROMISE!!!
// let promise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('1');
//         resolve();
//     },1000);
// });
//
// let promise2 = promise
//     .then(() => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     console.log('2');
//                     resolve();
//             },3000);
//         });
//     });
//
// promise2.then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('3');
//             resolve();
//         },2000);
//     });
// });

//Sergiy example
// let promise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('1');
//         resolve();
//     },1000);
// });
//
// let promise2 = promise
//     .then(() => {
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('2');
//                 resolve();
//             },3000);
//         });
// });
//
// let promise3 = promise2
//     .then(() => {
//         new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('3');
//                 resolve();
//             },2000);
//         });
//     });

// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('1');
//         resolve();
//     },1000);
// })
//     .then(() => {
//             new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('2');
//                 resolve();
//             },1000);
//         });
//     })
//     .then(() => {
//             new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('3');
//                 resolve();
//             },1000);
//         });
//     })



// new Promise((resolve) => {
//     let counter = 1;
//     setTimeout(() => {
//         console.log(counter);
//         counter++;
//         resolve(counter);
//     },1000);
// })
//     .then((counter) => {
//             return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             },1000);
//         });
//     })
//     .then((counter) => {
//             return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             },1000);
//         });
//     })
//     .then((counter) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             },1000);
//         });
//     })
//     .then((counter) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             },1000);
//         });
//     })
//     .then((counter) => {
//         return new Promise((resolve) => {
//            setTimeout(() => {
//                console.log(counter);
//                counter++;
//                resolve(counter);
//            },1000);
//         });
//     })
//     .then((counter) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             },1000);
//         });
//     })


//reject!!!

// new Promise((resolve, reject) => {
//     let counter = -2;
//     setTimeout(() => {
//         if (counter < -1) {
//             reject('xxx')
//         }
//         console.log(counter);
//         counter++;
//         resolve(counter);
//     },1000);
// })
//     .then((counter) => {
//             return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             },1000);
//         });
//     })
//     .then((counter) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             },1000);
//         });
//     })
// .catch(reason => {
//     console.log(reason);
// })

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(value => {
//         return value.json();
//     })
//     .then(value => console.log(value));

//LIVE TEMPLATE!!!

// fetch('')
//     .then(value => value.json())
//     .then(value => {});


//PRACTISE!!!

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(value => value.json())
//     .then(todos => {
//         for (const todo of todos) {
//             let div = document.createElement('div');
//             div.innerText = todo.id + ' ' +todo.title;
//             if(todo.completed) {
//                 div.classList.add('complete');
//             }
//             document.body.appendChild(div);
//         }
//         console.log(todos);
//     });


// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(value => value.json())
//     .then(todos => {
//         for (const todo of todos) {
//             let div = document.createElement('div');
//             div.innerText = todo.id + ' ' +todo.title;
//             if(todo.completed) {
//                 div.classList.add('complete');
//             }
//             document.body.appendChild(div);
//         }
//
//         return fetch('https://jsonplaceholder.typicode.com/posts');
//     })
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//
//         return fetch('https://jsonplaceholder.typicode.com/users');
//     })
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//     })

// let resultAll = Promise
//     .all([
//         fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json()),
//         fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json())
//     ]);
// resultAll.then(result => console.log(result));

//async function!!!


async function foobar() {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json());
        console.log(todos);
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
        console.log(posts);
}

foobar();


