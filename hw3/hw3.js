// 1. На основе массива **map** и массива **users** собрать новый массив объектов где в каждом объекте будут только те свойства которые перечислены в массиве **map**

const map = ["_id", "name", "isActive", "balance"];
const users = [
    {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00"
    },
    {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00"
    },
    {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00"
    }
]

// На выходе мы должны получить массив вида: 
    // [ { _id: ..., name: ..., isActive: ..., balance: ... }, ... ];
console.log('task 1');
console.log(map);
const newArr = users.map(user => ({_id: user._id, name: user.name, isActive: user.isActive, balance: user.balance}));
console.log(newArr);

// more correct solution
function foo(users, map) {
    let res = [];        
    for (let user of users) { 
        let obj = {}; 
        for (let field of map) {  
            obj[field] = user[field];                                  
        }                    
        res.push(obj); 
    } return res;    
}
console.log(foo(users, map));
    

// 2. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
const arrIndexChar =
    [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например:
    // [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → "Hi!"
console.log('task 2');
function strIndexChar(arr){
    let str = '';    
    arr.sort((a, b) => a.index > b.index ? 1 : -1);
    arr.forEach((user) => {
        str += user.char;
    });
    return str;
}
console.log(strIndexChar(arrIndexChar));


// 3. Организовать функцию getInfo, которая принимает объект вида**{ name: ..., info: { employees: [...], partners: [ … ] } }**и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
// *getInfo*(organisation); → Name: Google Partners: Microsoft Facebook
console.log('task 3');
const organisation = { 
    name: 'Google', 
    info: { 
    employees: ['Vlad', 'Olga'], 
    partners: ['Microsoft', 'Facebook', 'Xing'] 
} };

function getInfo(arr){
    return `Name: ${(arr.name || 'Unknown')} Partners: ${arr.info.partners[0]} ${arr.info.partners[1]}`;
}
console.log(getInfo(organisation));


// 4. Дан объект:
console.log('task 4');
const person = {
    name: 'Denis',
    age: 30,
    lastGet: '11/22/2019',
    lastUpdate: '11/22/2019',
    get newName() {
        return `name: ${this.name}; date lastGet: ${this.lastGet}; date lastUpdate: ${this.lastUpdate}`;
    },
    set newName(value) {          
        if(this.name !== value){ 
            let data1 = new Date();                                              
            this.lastGet = data1.toLocaleDateString() +' '+ data1.toLocaleTimeString();
            this.name = value;            
        } else { 
            let data2 = new Date();
            this.lastUpdate = data2.toLocaleDateString() +' '+ data2.toLocaleTimeString();                      
        }                
    }
};
console.log(person);
console.log(person.name);
console.log(person.newName);
person.newName = 'Denis';
console.log(person.name);
console.log(person.newName);
person.newName = 'Max';
console.log(person.name);
console.log(person.newName);

// Сделать так что-бы при получении или изменении свойства **name** в свойствах **lastGet** и **lastUpdate** сохранялась дата последнего получения или последнего обновления соответственно. 




// Время и Дата - вывод на экран
let today = new Date();   
now=new Date();
document.write("<h2> Время: " +now.toLocaleTimeString()+ "</h2>");
document.write("<h2> Дата : " +now.toLocaleDateString()+ "</h2>");




// 5. Дан объект:
// сделать геттер который будет возвращать **brand** и **model** в виде строки "Apple iPhone 7" ****а также сделать сеттер в который будет передаваться строка например "Samsung S8 Gold" и в объекте в поле **brand** будет записано "Samsung" а в поле **model** будет записано "S8 Gold"
console.log('task 5');
const product = {
    brand: 'Apple',
    model: 'iPhone 7',
    price: '$300',
                                 // альтернативная запись геттера и сеттера
    // get age() {                   
    //     return `${this.brand} ${this.model}`;
    // },
    // set age (value) {
    //     this.brand = value.trim() 
    //         .split(' ') 
    //         .shift(0); 
    //     this.model = value.trim() 
    //         .split(' ') 
    //         .slice(1) 
    //         .join(' ');       
    // }
};

Object.defineProperty(product, 'age',{
    get: function() {
        return `${this.brand} ${this.model}`; // 'Apple iPhone 7'
    },
    set: function(value){        
        this.brand = value.trim() //обрезаем пробелы по краям строки -> 'Samsung S8 Gold'
                        .split(' ') // разбиваем строку на массив по разделителю ' ' -> ["Samsung", "S8", "Gold"]
                        .shift(0); //извлекаем первый элемент из начала массива ->'Samsung'

        this.model = value.trim() //обрезаем пробелы по краям строки -> 'Samsung S8 Gold'
                        .split(' ') // разбиваем строку на массив по разделителю ' ' -> ["Samsung", "S8", "Gold"]
                        .slice(1) // возвращаем новый массив, начиная с элемента с индексом 1 до end->["S8", "Gold"]
                        .join(' '); // объединяем все элементы оставшегося массива в строку через разделитель ' '.
    }
});

console.log(product); // -> {brand: "Apple", model: "iPhone 7", price: "$300"}
console.log(product.age);  //->Apple iPhone 7
product.age = '     Samsung S8 Gold     '; // передаем value в сеттер
console.log(product);// -> {brand: "Samsung", model: "S8 Gold", price: "$300"}
console.log(product.age); //->Samsung S8 Gold












