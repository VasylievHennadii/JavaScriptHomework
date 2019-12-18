// 1. Дан объект **car**.
// Написать условие если поле **lastService** больше 5 месяцев (*из строки нужно достать число*) то нужно вывести в консоль сообщение 'Need Repair' и свойство **needRepair** в объекте **car** изменить на **true**; иначе изменить на **false**.
console.log('task 1');
let car = { 
    name: 'Lexus', 
    age: 10, 
    lastService: '1 month',
    create: 2008, 
    needRepair: false 
}

if(parseFloat(car['lastService']) > 5){
    console.log('Need Repair');
    car['needRepair'] = true;
    // car.needRepair = true; //другая форма записи обращения к свойству объекта
} else{
    car['needRepair'] = false;
}
console.log(car.lastService);
console.log(car.needRepair);



// 2. Дан следующий код:
console.log('task 2');
let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

// Написать условие **если цена товара больше или равна минимальной цене и меньше или равна максимальной цене** то вывести в консоль название этого товара, иначе вывести в консоль что товар не найден.

if(parseFloat(product.price) >= min && parseFloat(product.price) <= max){
    console.log(product.name);
} else{
    console.log('товар не найден');
};



// 3. На основе строки
// *“JavaScript is a pretty good language”*
// Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать цикл **for.**
let str = 'JavaScript is a pretty good language';
let resStr = '';
for(let i = 0; i < str.length; i++){
    if(str[i] !== ' '){
        resStr += str[i];
    } else{
        resStr += str[i+1].toUpperCase();
        i++;
    }
}
console.log('task 3');
console.log(resStr);



// 4. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// *doubleArray([1,2,3]) // [1,2,3,1,2,3]*
console.log('task 4');
function doubleArray(arr){
    let res = [];    
    for(let i = 0 ; i < arr.length; i++){
        res[i] = arr[i];
        res[arr.length + i] = arr[i];    
    }      
    return res;
}
let arr1 = ['1',2,'a',3];
console.log(doubleArray(arr1));

// second way
function doubleArrayConcat(arr){    
    return arr.concat(arr);
}
let arr2 = ['1',2,'a',4];
console.log(doubleArrayConcat(arr2));



// 5. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// *changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ],* 
// *changeCollection([1,2,3]) → [ [2,3] ]* и т.д*.*
console.log('task 5');
function changeCollection(arr){
    let res = [];
    for (let value of arr) {  
        value.splice(0,1);       
        res.push(value);
    }
    return res;
}
let inArray = [[1,2,3], ['a', 'b', 'c'], [1,'d',3,'g'], ['hjh', 1, 5, 'gf']];
console.log(changeCollection(inArray));



// 6. Дан массив пользователей:

const users = [
    {
    "_id": "5d1c3860aa841704d3245513",
    "isActive": false,
    "balance": 2764.35,
    "age": 33,
    "name": "Allie Blair",
    "gender": "female",
    "company": "PHOTOBIN",
    "email": "allieblair@photobin.com",
    "phone": "+1 (951) 566-2987",
    "registered": "2018-11-30T02:29:00 -02:00"
    },
    {
    "_id": "5d1c386095ffb689687f2db9",
    "isActive": false,
    "balance": 3276.25,
    "age": 22,
    "name": "Yesenia Leblanc",
    "gender": "female",
    "company": "SKINSERVE",
    "email": "yesenialeblanc@skinserve.com",
    "phone": "+1 (947) 446-2840",
    "registered": "2015-10-31T01:10:31 -02:00"
    },
    {
    "_id": "5d1c3860e73ff2a338722e81",
    "isActive": true,
    "balance": 1868.65,
    "age": 38,
    "name": "Mamie Kramer",
    "gender": "female",
    "company": "EARBANG",
    "email": "mamiekramer@earbang.com",
    "phone": "+1 (885) 564-3305",
    "registered": "2014-06-03T09:36:40 -03:00"
    },
    {
    "_id": "5d1c386000e4f2fc62be1b1e",
    "isActive": true,
    "balance": 1003.15,
    "age": 32,
    "name": "Crawford Bryant",
    "gender": "male",
    "company": "DIGIRANG",
    "email": "crawfordbryant@digirang.com",
    "phone": "+1 (889) 408-2141",
    "registered": "2015-01-15T05:20:21 -02:00"
    },
    {
    "_id": "5d1c386008ff236a315d638b",
    "isActive": false,
    "balance": 3045.41,
    "age": 36,
    "name": "Helene Holland",
    "gender": "female",
    "company": "HYDROCOM",
    "email": "heleneholland@hydrocom.com",
    "phone": "+1 (937) 554-2040",
    "registered": "2014-09-15T08:22:59 -03:00"
    },
    {
    "_id": "5d1c3860b4c27c4d5fdb6c1f",
    "isActive": true,
    "balance": 1693.51,
    "age": 23,
    "name": "Hernandez Osborn",
    "gender": "male",
    "company": "TERRASYS",
    "email": "hernandezosborn@terrasys.com",
    "phone": "+1 (965) 595-3942",
    "registered": "2016-08-06T12:19:01 -03:00"
    }
];

// Создать функцию которая принимает массив пользователей, поле которое по которому хочу фильтровать, значение на которое хочу фильтровать. Возвращать новый массив с пользователями соответсвующие указанным параметрам. Пример результата:
// funcGetUsers(users, "gender", "male");     // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
function funcGetUsers(users, fieldFilter, valueFilter) {
    let res = [];
    let obj = {};
    for (let value of users) {  
        if (value[fieldFilter] === valueFilter) {
            obj ={name: value.name, age: value.age, gender: value.gender};            
            res.push(obj);            
        }
    } return res;
}
console.log('task 6');
console.log(funcGetUsers(users, 'gender', 'female'))




// 7. Проверить как изменится объект **obj** и найти объяснение
console.log('task 7');
    const obj = {}; // пустой объект

   //самовызывающаяся функция с параметром (obj), которая добавляет в obj поле b со значением 1
    (function(x) { 
      x.b = 1;     //   {b: 1}
      x = null;
    })(obj);

    console.log(obj);



// 8. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
console.log('task 8');
const price = {
    price: 10,
    discount: '15%'       
}   
price.getPrice = getPrice;
price.getPriceWithDiscount = getPriceWithDiscount;
console.log(`Цена объекта price: ${price.getPrice()}`);
console.log(`Цена с дисконтом объекта price: ${price.getPriceWithDiscount()}`);

function getPrice () {        
    return parseFloat(this.price);
}

function getPriceWithDiscount() {          
    return parseFloat(this.price) - parseFloat(this.price)*(parseFloat(this.discount)/100);
}
// проверка этих методов в работе с другим объектом
const dublePrice = {
    price: 20,
    discount: '25%',
    getPrice,
    getPriceWithDiscount
}
console.log(`Цена объекта dublePrice: ${dublePrice.getPrice()}`);
console.log(`Цена с дисконтом объекта dublePrice: ${dublePrice.getPriceWithDiscount()}`);



// 9. Даны объект и функция:
//     let sizes = { width: 5, height: 10 },
//     getSquare = function () { return this.width * this.height };
// Не изменяя функцию или объект, получить результат функции
// *getSquare* для объекта sizes
console.log('task 9');
let sizes = { width: 5, height: 10 };
getSquare = function () { return this.width * this.height };
console.log(getSquare.call(sizes));// 1-й способ
console.log(getSquare.apply(sizes));//2-й способ


