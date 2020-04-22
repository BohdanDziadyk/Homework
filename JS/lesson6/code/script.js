// // ==================================================================
// let arr  = [1,33,67,45,43,89,43,543,630,6547,21235,6540,665,30,75,23,11,64,97,54];
// console.log(arr);
// arr.sort((a,b)=>{return a - b;});
// console.log(arr);
// arr.sort((a,b)=>{return b - a;});
// console.log(arr);
// // ==================================================================
// let filter = arr.filter((number) => {return number % 3 === 0;});
// console.log(filter);
// let filter1 = arr.filter((number) => {return number %10 === 0;});
// console.log(filter1);
// // ==================================================================
// arr.forEach((number)=>{console.log(number);});
// // ==================================================================
// let mappedArr = arr.map((number)=>{
//     number *= 3;
//     return number;
// });
// console.log(mappedArr);
// // ==================================================================
// let strings = ['car','house','dog','celebrity','necromancy','necromorph','alien','gunner','pussycat','stereosystem','keyboard','mouse','torch','democracy','laptop','smartphone'];
// console.log(strings);
// let sortedString = strings.sort();
// console.log(sortedString);
// let sortedStringReverse = strings.sort((a,b)=>{
//     if (a>b){
//         return -1;
//     }
//     else {
//         return 1;
//     }
// });
// console.log(sortedStringReverse);
// let filteredString = strings.filter((a)=>{ return a.length > 4; });
// console.log(filteredString);
// let mappedStrimg = strings.map((a)=>{
//     a += '!';
//     return a;
// });
// console.log(mappedStrimg);
// // ==================================================================
//let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let sortedUsers = users.sort((a,b)=>{
//    if(a.age > b.age)
//    {
//        return 1;
//    }
//    else{
//        return -1;
//    }
// });
// console.log(sortedUsers);
// let sortedUsersReverse = users.sort((a,b)=>{
//    if(a.age < b.age)
//    {
//        return 1;
//    }
//    else{
//        return -1;
//    }
// });
// console.log(sortedUsersReverse);
// let sortedUsers = users.sort((a,b)=>{
//     if(a.name.length>b.name.length)
//     {
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });
// console.log(sortedUsers);
// let sortedUsersReverse = users.sort((a,b)=>{
//     if(a.name.length<b.name.length)
//     {
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });
// console.log(sortedUsersReverse);
// // ==================================================================
// function calc(operation,addCallback,subCallback,mulCallback, divCallback) {
//     if(operation === '+'){
//         addCallback(8,2);
//     }
//     else if(operation === '-'){
//         subCallback(8,2);
//     }
//     else if(operation === '*') {
//         mulCallback(8,2);
//     }
//     else if (operation === '/') {
//         divCallback(8,2);
//     }
// }
// let calculated = calc('*',
//     function (operand1,operand2) {
//             return operand1 + operand2;
//     },
//     function (operand1,operand2) {
//             return operand1 - operand2;
//     },
//     function (operand1,operand2) {
//             return operand1 - operand2;
//     },
//     function (operand1,operand2) {
//             return operand1 / operand2;
//     }
// );
// console.log(calculated);
// // ==================================================================
let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year:2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// let filteredCars = cars.filter((value)=>{
//     return value.volume > 3;
// });
let filteredCars = cars.filter((value)=>{
    
})
console.log(filteredCars);