// let userObj = {name:"Andriy", age:28, email: "andr@gmail.com"};
//
// let {name, age, email} = userObj;
//
// console.log(name);
// console.log(age);
// console.log(email);

// Деструктуризація в аргументах функції
function printPersonDetails({ name, age, job }) {
    console.log(`${name} is ${age} years old and works as a ${job}.`);
}
let person = { name: 'John', age: 30, job:'developer' }
printPersonDetails(person);
// Вивід: John is 30 years old and works as a developer.


let someArr = [
    {name:"Andriy", age:28, email: "andr@gmail.com"},
    {name:"Kolia", age:30, email: "kolia@gmail.com"},
    {name:"Vasia", age:25, email: "vasia@gmail.com"}
];
function openArr() {
    for (let i = 0; i < someArr.length; i++) {
        let secondObj =  someArr[i];
        let {name, age, email} = secondObj;
        console.log(name);
        console.log(age);
        console.log(email);
    }
}

openArr();

