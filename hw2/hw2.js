



// task-9
// Даны объект и функция:
//     let sizes = { width: 5, height: 10 },
//     getSquare = function () { return this.width * this.height };
// Не изменяя функцию или объект, получить результат функции
// *getSquare* для объекта sizes

let sizes = { width: 5, height: 10 };
getSquare = function () { return this.width * this.height };
(getSquare)(sizes);
console.log(sizes);


