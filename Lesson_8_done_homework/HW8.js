//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
/*function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

let userArray = [];
for (let i = 1; i < 11; i++) {
    let newUser = new User(i, 'Name' + i, 'Surname' + i, 'name' + i + '@gmail.com' , 80676655472 + i);
    userArray.push(newUser);
}

console.log(userArray);*/

//PRACTISE

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let newUser = [
                        new User(12, 'Vasya', 'Nilo', 'vasya@gmail.com',80677445124),
                        new User(21, 'Kolia','Bats','Kolia@gmail.com',80677885124),
                        new User(25, 'Olia','Vlas','Olia@gmail.com',80677955124),
                        new User(47, 'Vika','Gats','Vika@gmail.com',80677235124),
                        new User(41, 'Nadya','Ivaniva','Nadia@gmail.com',80689885124),
                        new User(38, 'Max','Bevz','Max@gmail.com',80677415124),
                        new User(65, 'Mike','Tyson','Mike@gmail.com',80977885124),
                        new User(19, 'Michael','Jordan','Michael@gmail.com',80677825124),
                        new User(97, 'Mark','Twen','Mark@gmail.com',80677885744),
                        new User(91, 'Bob','Bober','Bob@gmail.com',80677885174),
];

console.log(newUser);
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
/*let filteredArr = userArray.filter((value) => value.id % 2 === 0);

console.log(filteredArr);*/
//PRACTISE

let filteredUser = newUser.filter((value) => !(value.id % 2));
console.log(filteredUser);
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
/*let sortArr = userArray.sort((value1,value2) => value1.id - value2.id);

console.log(sortArr);*/

//PRACTISE

let sortUser = newUser.sort((user1,user2) => user1.id - user2.id);
console.log(sortUser);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

/*class Client {

    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}*/

//PRACTISE

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//створити пустий масив, наповнити його 10 об'єктами Client

/*let clientArr = [];
for (let i = 11; i < 21; i++) {
    let newClient = new Client(i,
        'Name' + i,
        'Surname' + i,
        'name' + i + '@gmail.com',
        80677441123 + i,
        ['potatoes' + i,'tomatoes' + i,'bananas' + i,'berries' + i]);
    clientArr.push(newClient);
}

console.log(clientArr);*/

//PRACTISE

let newClient = [
    new Client(12, 'Vasya', 'Nilo', 'vasya@gmail.com',80677445124,['bananas','apples']),
    new Client(21, 'Kolia','Bats','Kolia@gmail.com',80677885124,['pineapples','kivies','potatoes']),
    new Client(25, 'Olia','Vlas','Olia@gmail.com',80677955124,['apples','bananas']),
    new Client(47, 'Vika','Gats','Vika@gmail.com',80677235124,['berries','tomatoes']),
    new Client(41, 'Nadya','Ivaniva','Nadia@gmail.com',80689885124,['pineapples','kivies','potatoes']),
    new Client(38, 'Max','Bevz','Max@gmail.com',80677415124,['berries','tomatoes']),
    new Client(65, 'Mike','Tyson','Mike@gmail.com',80977885124,['bananas','apples']),
    new Client(19, 'Michael','Jordan','Michael@gmail.com',80677825124,['pineapples','kivies','potatoes']),
    new Client(91, 'Bob','Bober','Bob@gmail.com',80677885174,['bananas','apples']),
];
console.log(newClient);
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order
// по зростанню. (sort)

/*let sortClient = clientArr.sort((goods1,goods2) => goods1.order.length - goods2.order.length);

console.log(sortClient);*/

//PRACTISE

let sortClient = newClient.sort((goods1,goods2) => goods1.order.length - goods2.order.length);
console.log(sortClient);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

/*function Car(model,producer,yearOfManufacture,maxSpeed,engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = null;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
    }
    this.info = function () {
        console.log(`model - ${model};`);
        console.log(`producer - ${producer};`);
        console.log(`yearOfManufacture - ${yearOfManufacture};`);
        console.log(`maxSpeed - ${maxSpeed};`);
        console.log(`engineCapacity - ${engineCapacity};`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        maxSpeed += newSpeed;
        console.log(`Максимальна швидкість піднята на ${newSpeed}, нова максимальна швидкість складає ${maxSpeed}`);
    }
    this.changeYear = function (newValue) {
        yearOfManufacture = newValue;
        console.log(`Рік випуску ${newValue}`);
    }
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(car1);
    }
}

car1 = new Car("maseratti", 'italy',2021, 380, 215);
console.log(car1);
car1.drive();*/


//PRACTISE

function Car(model,producer,yearOfManufacture,maxSpeed,engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        console.log('model -',this.model);
        console.log('producer -',this.producer);
        console.log('yearOfManufacture -',this.yearOfManufacture);
        console.log('maxSpeed -',this.maxSpeed)
        console.log('engineCapacity -',this.engineCapacity);
        console.log('driver -',this.driver);
    }
    this.increaseMaxSpeed  = function (newSpeed) {
        maxSpeed += newSpeed;
        console.log(`Максимальна швидкість піднята на ${newSpeed}, нова максимальна швидкість складає ${maxSpeed}`);
    }
    this.changeYear = function (newValue) {
        yearOfManufacture = newValue;
        console.log(`Рік випуску ${newValue}`);
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}
car1 = new Car("maseratti", 'italy',2021, 380, 215);
car1.drive();

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`


//car1.info();

//PRACTISE

car1.info();
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

//car1.increaseMaxSpeed(30);


//PRACTISE

car1.increaseMaxSpeed(50);

//-- changeYear (newValue) - змінює рік випуску на значення newValue

//car1.changeYear(2023);

//PRACTISE


car1.changeYear(2012);
car1.info();
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

/*const driver1 = {
    name: 'Nick',
    secondName: 'Jackson',
    age: 30,
    licenseNumber: 'ABC123DEF'
};
car1.addDriver(driver1);*/

//PRACTISE

car1.addDriver({name: 'Nick', secondName: 'Jackson', age: 30, licenseNumber: 'ABC123DEF'});
car1.info();


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

/*class CarClass {


    constructor(model,producer,yearOfManufacture,maxSpeed,engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = null;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
        }
        this.info = function () {
            console.log(`model - ${model}`);
            console.log(`produser - ${producer}`);
            console.log(`yearOfManufacture - ${yearOfManufacture};`);
            console.log(`maxSpeed - ${maxSpeed};`);
            console.log(`engineCapacity - ${engineCapacity};`);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            maxSpeed += newSpeed;
            console.log(`Швидкість збільшено на ${newSpeed}, нова швидкість складає ${maxSpeed}`);
        }
        this.changeYear = function (newValue) {
            yearOfManufacture = newValue;
            console.log(`Новий рік випуску становить ${newValue}`)
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}

let car2 = new CarClass('Honda', 'Japan',2022, 280, 2.1);
console.log(car2);
car2.drive();*/

//PRACTISE



//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

//car2.info();


//PRACTISE




//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

//car2.increaseMaxSpeed(15);




//-- changeYear (newValue) - змінює рік випуску на значення newValue

//car2.changeYear(2023);




//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

/*
const driver2 = {
    name: 'David',
    secondName: 'Blain',
    age: 33,
    licenseNumber: 'ACD564ASW'
}
car2.addDriver(driver2);
console.log(car2);
*/

//PRACTISE




//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

/*class CinderellaClass {


    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellasArr = [];
for (let i = 1; i < 11; i++) {
    let newCinderella = new CinderellaClass('Cinderella_' + i,18 + i, 22 + i);
    cinderellasArr.push(newCinderella);
}
console.log(cinderellasArr);*/

//PRACTISE



//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

/*class Prince {

    constructor(name,age,findShoe) {
        this.name = name;
        this.age = age;
        this.findShoe = findShoe;
    }
}

let prince = new Prince('Habib', 25, 28);
console.log(prince);*/

//PRACTISE



//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.

/*
for (const cinderella of cinderellasArr) {
    if (cinderella.footSize === prince.findShoe) {
        console.log(`${cinderella.name}, повинна бути із принцом`);
    }
}

//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = cinderellasArr.find((value) => value.footSize === prince.findShoe);
console.log(findCinderella);*/

//PRACTISE


