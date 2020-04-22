// // ==========================================================================
// function Tag(titleOfTag,action,attrs)
// {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
// let a = new Tag("a","предназначен для создания ссылок",
//     [{titleOfAttr:"accesskey",actionOfAttr:"Активация ссылки с помощью комбинации клавиш."},
//         {titleOfAttr:"coords",actionOfAttr:"Устанавливает координаты активной области."}]);
// let div = new Tag("div","предназначен для выделения фрагмента документа с целью изменения вида содержимого",
//     [{titleOfAttr:"align",actionOfAttr:"задает выравнивание содержимого тега"},
//         {titleOfAttr:"title",actionOfAttr:"Добавляет всплывающую подсказку к содержимому."}]);
// let h1 = new Tag("h1","представляет собой наиболее важный заголовок первого уровня",
//     [{titleOfAttr:"align",actionOfAttr:"Определяет выравнивание заголовка."}]);
// let span = new Tag("span","предназначен для определения строчных элементов документа.",
//     [{titleOfAttr:"universal",actionOfAttr:"использует общие атрибуты"}]);
// let input = new Tag("input","позволяет создавать разные элементы интерфейса ",
//     [{titleOfAttr:"accept",actionOfAttr:"Устанавливает фильтр на типы файлов"},
//         {titleOfAttr:"alt",actionOfAttr:"Альтернативный текст для кнопки с изображением."}]);
// let form = new Tag("form","устанавливает форму на веб-странице",
//     [{titleOfAttr:"action",actionOfAttr:"Адрес программы или документа, который обрабатывает данные формы."},
//     {titleOfAttr:"enctype",actionOfAttr:"Способ кодирования данных формы."}]);
// let option = new Tag("option","определяет отдельные пункты списка",
//     [{titleOfAttr:"disabled",actionOfAttr:"Заблокировать для доступа элемент списка."},
//     {titleOfAttr:"selected",actionOfAttr:"Заранее устанавливает определенный пункт списка выделенным"}]);
// let select = new Tag("select","позволяет создать элемент интерфейса в виде раскрывающегося списка",
//     [{titleOfAttr:"multiple",actionOfAttr:"Позволяет одновременно выбирать сразу несколько элементов списка."},
//     {titleOfAttr:"size",actionOfAttr:"Количество отображаемых строк списка."}]);
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);
// // ==========================================================================
//  class Tag {
//      constructor(titleOfTag, action, attrs) {
//          this.titleOfTag = titleOfTag;
//          this.action = action;
//          this.attrs = attrs;
//      }
//  }
// let a = new Tag("a","предназначен для создания ссылок",
//     [{titleOfAttr:"accesskey",actionOfAttr:"Активация ссылки с помощью комбинации клавиш."},
//         {titleOfAttr:"coords",actionOfAttr:"Устанавливает координаты активной области."}]);
// let div = new Tag("div","предназначен для выделения фрагмента документа с целью изменения вида содержимого",
//     [{titleOfAttr:"align",actionOfAttr:"задает выравнивание содержимого тега"},
//         {titleOfAttr:"title",actionOfAttr:"Добавляет всплывающую подсказку к содержимому."}]);
// let h1 = new Tag("h1","представляет собой наиболее важный заголовок первого уровня",
//     [{titleOfAttr:"align",actionOfAttr:"Определяет выравнивание заголовка."}]);
// let span = new Tag("span","предназначен для определения строчных элементов документа.",
//     [{titleOfAttr:"universal",actionOfAttr:"использует общие атрибуты"}]);
// let input = new Tag("input","позволяет создавать разные элементы интерфейса ",
//     [{titleOfAttr:"accept",actionOfAttr:"Устанавливает фильтр на типы файлов"},
//         {titleOfAttr:"alt",actionOfAttr:"Альтернативный текст для кнопки с изображением."}]);
// let form = new Tag("form","устанавливает форму на веб-странице",
//     [{titleOfAttr:"action",actionOfAttr:"Адрес программы или документа, который обрабатывает данные формы."},
//     {titleOfAttr:"enctype",actionOfAttr:"Способ кодирования данных формы."}]);
// let option = new Tag("option","определяет отдельные пункты списка",
//     [{titleOfAttr:"disabled",actionOfAttr:"Заблокировать для доступа элемент списка."},
//     {titleOfAttr:"selected",actionOfAttr:"Заранее устанавливает определенный пункт списка выделенным"}]);
// let select = new Tag("select","позволяет создать элемент интерфейса в виде раскрывающегося списка",
//     [{titleOfAttr:"multiple",actionOfAttr:"Позволяет одновременно выбирать сразу несколько элементов списка."},
//     {titleOfAttr:"size",actionOfAttr:"Количество отображаемых строк списка."}]);
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);
// // ==========================================================================
// let Car = {
//     model:'A8',
//     manufacturer: 'Audi',
//     yearOfM: 1998,
//     maxSpeed: 198,
//     engVol: 3.8,
//     drive: function () {
//         console.log(`Driving with speed ${this.maxSpeed} km/h`)
//     },
//     info : function () {
//         console.log(this.model);
//         console.log(this.manufacturer);
//         console.log(this.yearOfM);
//         console.log(this.maxSpeed);
//         console.log(this.engVol);
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     changeYear: function (newValue) {
//         this.yearOfM = newValue;
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//     }
// };
// Car.drive();
// Car.info();
// console.log(Car.maxSpeed);
// Car.increaseMaxSpeed(30);
// console.log(Car.maxSpeed);
// console.log(Car.yearOfM);
// Car.changeYear(2004);
// console.log(Car.yearOfM);
// let Driver = {
//   name: 'Driver',
//   age: 22,
//   skill : 'B'
// };
// Car.addDriver(Driver);
// console.log(Car.driver);
// // ==========================================================================
// function Car (model,manufacturer,yearOfM,maxSpeed,engVol) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfM = yearOfM;
//     this.maxSpeed = maxSpeed;
//     this.engVol = engVol;
//     this.drive = function () {
//         console.log(`Driving with speed ${this.maxSpeed} km/h`)
//     };
//     this.info = function () {
//         console.log(this.model);
//         console.log(this.manufacturer);
//         console.log(this.yearOfM);
//         console.log(this.maxSpeed);
//         console.log(this.engVol);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear =  function (newValue) {
//         this.yearOfM = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let Audi = new Car("Q8","Audi",2002,204,3.8)
// Audi.drive();
// Audi.info();
// console.log(Audi.maxSpeed);
// Audi.increaseMaxSpeed(30);
// console.log(Audi.maxSpeed);
// console.log(Audi.yearOfM);
// Audi.changeYear(2004);
// console.log(Audi.yearOfM);
// let Driver = {
//   name: 'Driver',
//   age: 22,
//   skill : 'B'
// };
// Audi.addDriver(Driver);
// console.log(Audi.driver);
// // ============================================================================
// class Car {
//     constructor(model,manufacturer,yearOfM,maxSpeed,engVol) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfM = yearOfM;
//         this.maxSpeed = maxSpeed;
//         this.engVol = engVol;
//     }
//     drive() {
//         console.log(`Driving with speed ${this.maxSpeed} km/h`)
//     }
//     info() {
//         console.log(this.model);
//         console.log(this.manufacturer);
//         console.log(this.yearOfM);
//         console.log(this.maxSpeed);
//         console.log(this.engVol);
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear(newValue) {
//         this.yearOfM = newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
// let Audi = new Car("Q8","Audi",2002,204,3.8)
// Audi.drive();
// Audi.info();
// console.log(Audi.maxSpeed);
// Audi.increaseMaxSpeed(30);
// console.log(Audi.maxSpeed);
// console.log(Audi.yearOfM);
// Audi.changeYear(2004);
// console.log(Audi.yearOfM);
// let Driver = {
//   name: 'Driver',
//   age: 22,
//   skill : 'B'
// };
// Audi.addDriver(Driver);
// console.log(Audi.driver);
// =========================================================================
// class Cinderella{
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// class Prince{
//     constructor(name,age,shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
// let Sister0 = new Cinderella("Sasha",26,30);
// let Sister1 = new Cinderella("Masha",19,33);
// let Sister2 = new Cinderella("Sonya",22,37);
// let Sister3 = new Cinderella("Natalia",27,39);
// let Sister4 = new Cinderella("Oksana",21,40);
// let Sister5 = new Cinderella("Maria",19,35);
// let Sister6 = new Cinderella("Anna",22,34);
// let Sister7 = new Cinderella("Christina",23,38);
// let Sister8 = new Cinderella("Tasha",18,31);
// let Sister9 = new Cinderella("Elizabeth",29,30);
// let sisters = [Sister0,Sister1,Sister2,Sister3,Sister4,Sister5,Sister6,Sister7,Sister8,Sister9];
// let prince = new Prince("Albert",25,31);
// for (let sister of sisters){
//     if(sister.footSize === prince.shoeSize)
//     {
//         console.log(`${prince.name}'s fiance is ${sister.name}`);
//     }
// }
// // =====================================================================
//  function Cinderella(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
// }
// function Prince(name,age,shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
// }
// let Sister0 = new Cinderella("Sasha",26,30);
// let Sister1 = new Cinderella("Masha",19,33);
// let Sister2 = new Cinderella("Sonya",22,37);
// let Sister3 = new Cinderella("Natalia",27,39);
// let Sister4 = new Cinderella("Oksana",21,40);
// let Sister5 = new Cinderella("Maria",19,35);
// let Sister6 = new Cinderella("Anna",22,31);
// let Sister7 = new Cinderella("Christina",23,38);
// let Sister8 = new Cinderella("Tasha",18,34);
// let Sister9 = new Cinderella("Elizabeth",29,30);
// let sisters = [Sister0,Sister1,Sister2,Sister3,Sister4,Sister5,Sister6,Sister7,Sister8,Sister9];
// let prince = new Prince("Albert",25,31);
// for (let sister of sisters){
//     if(sister.footSize === prince.shoeSize)
//     {
//         console.log(`${prince.name}'s fiance is ${sister.name}`);
//     }
// }
