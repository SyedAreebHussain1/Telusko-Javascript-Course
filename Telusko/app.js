// console.log('Hello')

// class one
// command => (node app.js)  result('Hello World')
// console.log('Hello World')

// class two
// install code runner extension

// class three

// console.log(2 + 2)
// console.log(2 + 2 + 3)

// num = 2 + 2
// console.log(num + 3)

// let num = 4
// console.log(num + 3)
// num = 9
// console.log(num)

// let username = "Areeb's Account"
//     console.log(username)

// // snake casing rule
// let user_name = "Veriable declear snake casing rule"
// console.log(user_name)
// // Camel casing rule standard
// let userName = "Veriable declear Camel casing rule"
// console.log(userName)

// class four
// area of circle
// let radius = 5
// const pi = 3.14
// let area

// area = pi * radius * radius
// console.log(area)

// function areaOfCircle(r, p) {
//     return p * r * r
// }
// console.log(areaOfCircle(radius, pi))

// Percentage Calculate
// const totalNum = 550
// let studentNum = 424
// function percentageCalculate(tNum, sNum) {
//     return sNum / tNum * 100
// }
// console.log(percentageCalculate(totalNum, studentNum))

// class five

// let data = 8 //type Number
// let user = "Areeb" //type String
// let logic = true //type Boolean

// There are two types data type
// 1. Primitive
// 2. Object

// Primitive
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefine
// 6. Symbol

// const x = Symbol('hey');
// console.log(x.description); // hey

// let num1 = 250
// console.log(num1 * 5)

// let data = 8 //typeof Number
// let user = "Areeb" //typeof String
// let num1 = 7.8 //typeof number
// // let logic = true //typeof Boolean

// Hexadecimal number
// let hexadecimal = 0xff
// console.log(hexadecimal)

// exponential
// let num = 1.5e12 //1.5*10square(12)
// console.log(num)//1500000000000

// let num = 100_00_00
// console.log(typeof num , num)

// let num = 5/0
// console.log(num) //Infinity
// let num = -5/0
// console.log(num) //-Infinity

// let num = -5 / 0
// console.log(Number.MAX_VALUE * 10)

// let num = 1012312345034234234234234234234234n
// console.log(num)

// let num = 1012312345034234234234234234234234n
// // console.log(num + 2)//Cannot mix BigInt and other types
// console.log(num + 2n)

// class six

// let firstName = "Areeb"
// let lastName = "Hussain"
// const user = firstName + " " + lastName
// console.log(user)

// const user = 'Areeb Hussain "Telusko"'
// console.log(user)

// const user = "Areeb Hussain \"Telusko\""
// console.log(user)

// start new line in String
// const user = "Areeb \nHussain"
// console.log(user)

// const user = "Ar\teeb Hus\vsain"
// console.log(user)

// delete string alphabet //example back-space
// const user = "Areeb Huss\bain"
// console.log(user)

//Boolean
// let bool = 5 > 6 //false
// console.log(typeof bool) //boolean

// let foo = null
// console.log(typeof foo)// typeof object

// let foo
// console.log(typeof foo) //undefined

// let num = 5
// console.log(num / "Areeb")//NaN

// let num = 5
// console.log(num / "Areeb")//NaN

// let num = 5
// console.log( typeof (num / "Areeb"))//number

// class seven
// History of JavaScript

//Class 8 Type Conversion & Coerciion

// let num = 6;
// let foo;
// console.log(num, typeof num); //number
// console.log(num, typeof String(num)); //string
// console.log(num, typeof Boolean(num)); //boolean
// console.log(foo, typeof foo); //undefined
// foo = 8;
// console.log(foo, typeof foo); //number

// let foo;
// // console.log(foo, typeof foo); //undefined
// foo = 8;
// console.log(foo, typeof foo); //number
// foo = foo + "";
// console.log(foo, typeof foo); //string
// foo = foo + 7;
// console.log(foo, typeof foo); //string
// foo = foo - 2;
// console.log(foo, typeof foo); //number
// foo = !foo
// console.log(foo, typeof foo); //boolean

// console.log(Boolean(4)) //true
// console.log(Boolean(0)) //false
// console.log(Boolean(null)) //false
// console.log(Boolean(undefined)) //false
// console.log(Boolean("")) //false
// console.log(Boolean(" ")) //true resaon

// let foo;
// console.log(foo, typeof foo); //undefined
// foo = 8;
// console.log(foo, typeof foo); //number
// foo = foo + "";
// console.log(foo, typeof foo); //string
// foo = foo + 7;
// console.log(foo, typeof foo); //string
// foo = foo - 2;
// console.log(foo, typeof foo); //number

// let foo;
// foo = 8;
// console.log(foo, typeof foo); //number
// foo = foo + "";
// console.log(foo, typeof foo); //string
// foo = +foo + 2;
// console.log(foo, typeof foo); //number 10
// foo = NaN;
// console.log(foo, typeof foo); //number

// parseInt get number in start string number
// let foo = parseInt("945 Areeb 21")
// console.log(foo, typeof foo) //number

// class 9 Arithmetic Operators in JavaScript

// let num1 = 13;
// let num2 = 3;
// function foo(num1, num2) {
//   return num1 % num2
// //   return num1 / num2
// //   return num1 - num2
// //   return num1 + num2
// }
// console.log(foo(num1, num2));

// 0 - false
// 1 - true
// let num1 = true;
// let num2 = true;
// function foo(num1, num2) {
//     //   console.log(num1, num2);
//     return num1 + num2;
// }
// console.log(foo(num1, num2));

// let num = 4
// num = num + 2
// console.log(num)

// let num = 4
// // short hand operator
// num += 2
// console.log(num)

// let num = 4
// num++ // increment
// console.log(num)//5

// let num = 4
// num--  // decrement
// console.log(num) //3

// let num = 4
// ++num //pre increment
// num++ //post increment
// console.log(num)//6

// let num = 4
// num-- //post decrement
// --num  //pre decrement
// console.log(num)//2

// // post increment
// let num = 4;
// let x = num++; //post increment
// console.log(x,  num); //4 5

// // pre increment
// let num = 4;
// let x = ++num; //pre increment
// console.log(x,  num); //5 5

// // post decrement
// let num = 4;
// let x = --num;
// console.log(x,  num); //3 3

// // pre decrement
// let num = 4
// let x = num--
// console.log(x, num) //4 3

// //find qube of num
// let num = 4;
// let result = num * num * num;
// console.log(num, result); // 64

// Math.pow()
// let num = 4;
// let result = Math.pow(num, 3);
// console.log(num, result); // 64

// double asterisk symbol
// let num = 4;
// let result = num ** 3;
// console.log(num, result); // 64

// //4 ka square
// let num = 4;
// let result = num ** 2;
// console.log(result); // 16

// class 10
// Relation Operators

// console.log(5 > 6); //false
// console.log(7 > 6); //true

// let matchData = 7 > 6 //true
// let matchData = 7 <= 6; //false
// let matchData = 6 >= 6; //true
// let matchData = 6 <= 6; //true
// console.log(matchData);

// let x = 6;
// let y = 6;
// let res = x <= y;
// console.log(res)

// ASCII Value

// let x = "BALL"; //
// let y = "CEAU"; //
// let res = x > y
// console.log(res) //false

// let x = "Pen"; //P = 80
// let y = "Book"; //B = 66
// let res = x > y
// console.log(res)

// let x = "Pen"; //
// let y = "Pencil"; //
// let res = x > y
// console.log(res)

// let x = "5"
// let y = 3
// console.log(x > y) //true

// let x = "3"
// let y = 3
// console.log(x == y) //true
// console.log(x === y) //false

// let x = ""
// let y = false
// console.log(x == y) //true
// console.log(x === y) //false

// double == check data only not check type but thiple === check data and type both

// 11 class logical Operators
// let x = 7,
//   y = 8,
//   z = 9;

//   console.log(x,y,z)

// let x = 7,
//   y = 8,
//   z = 9;
// let res = x > y;
// console.log(res);

// And && Ampresand
// Or || Pipe
// Not ! Exclametion

// // And Operator
// let x = 7,
//   y = 8,
//   z = 9;
// let res = x > y && x < z;
// console.log(res);//false

// // Or Operator
// let x = 7,
//   y = 8,
//   z = 9;
// let res = x > y || x < z;
// console.log(res); //true

// // Not Operator
// let x = 7,
//   y = 8,
//   z = 5;
// let res = x < y || x < z;
// let val = !res;
// console.log(res, val); //true false

// // class 12 Conditional Statements If Else in JavaScript

// let num1 = 3,
//   num2 = 4;

// let res = num1 > num2;

// if (res) {console.log("num1 is greater")}
// else {console.log("num2 is greter")}
// console.log("Bye...")

// let num1 = 6,
//   num2 = 4,
//   num3 = 7;
// if (num1 > num2) {
//   console.log("num1 is greater");
// } else {
//   console.log("num2 is greter");
//   console.log("Yeee");
// }
// console.log("Bye...");

// let num1 = 10,
//   num2 = 9,
//   num3 = 7;
// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greatest");
// } else if (num2 > num3) {
//   console.log("num2 is gretest");
// } else {
//   console.log("num3 is greatest");
// }
// console.log("Bye...");

// // assiginment
// let num1 = 10,
//   num2 = 4,
//   num3 = 7;

// function isCheck(ele) {
//   return ele % 2 === 0;
// }

// isCheck(num1) ? console.log("Even") : console.log("Odd");//Even
// isCheck(num2) ? console.log("Even") : console.log("Odd");//Even
// isCheck(num3) ? console.log("Even") : console.log("Odd");//Odd

// class 13 Ternary Operator in JavaScript

// let num = 5;
// let res;
// if (num % 2 === 0) {
//   res = "Even";
// } else res = "Odd";

// console.log(res);

// ternary Operator ?:
// let num = 8;
// let res;
// num % 2 === 0 ? (res = "Even") : (res = "Odd");
// console.log(res); //Even

// let num = 8;
// let res;
// res = num % 2 === 0 ? "Even" : "Odd";
// console.log(res); //Even

// class 14 Switch Statement in JavaScript

// Mon - 7am
// Tue - Thurs - 4am
// Fri - 9am
// Sat - sun - 8am

// if else statement
// let day = "Monday"
// if (day === "Saturday" || day === "Sunday") {
//     console.log("8am")
// } else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
//     console.log("4am")
// } else if (day === "Friday") {
//     console.log("9am")
// } else if(day === "Monday") {
//     console.log("7am")
// }else{
// console.log("Holiday")
// }

//switch case
// let day = "Friday"
// switch (day) {
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//         console.log("4am")
//         break;
//     case "Friday":
//         console.log('9am')
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("8am")
//         break;
//     default:
//         console.log('7am')
// }

// switch statment
// let day = new Date().getDay()
// let alarmDay
// switch (day) {
//     case 1:
//         alarmDay = "7am"
//         break;
//     case 0:
//     case 5:
//         alarmDay = '8am';
//         break;
//     case 6:
//         alarmDay = '9am';
//         break;
//     case 2:
//     case 3:
//     case 4:
//         alarmDay = '4am'
//         break;
//     default:
//         alarmDay = "Holiday";
// }
// console.log(alarmDay)

// week days get
// const locale = "en-US"; // Change this based on client settings
// const date = new Date();
// const weekdays = [];
// while(!weekdays[date.getDay()]) {
//   weekdays[date.getDay()] = date.toLocaleString(locale, { weekday: 'long'})
//   date.setDate(date.getDate() + 1)
// }
// console.log(weekdays);

// currency name
// let curr = 2500.0;
// const options = {
//   style: "currency",
//   currency: "PKR",
// };
// let res = curr.toLocaleString("en-PK",options)
// console.log(res)

// class 15 Template Literal in JavaScript

// let num1 = 9
// let num2 = 4
// let res = num1 + num2

// console.log("The addition of " + num1 + " and " + num2 + " is " + res)
// console.log(`The addition of ${num1} and ${num2} is ${res}`)

// break line in template literal
// console.log("My Name is \nAreeb") //\n
// console.log(`My Name is
// Areeb`)

// #16 While loop in JavaScript

//There are three types of loops
//1.while loop
//2.do while loop
//3.for loop

// console.log("Hi")
// console.log("Hi")
// console.log("Hi")
// console.log("Hi")
// console.log("Hi")

// loop steps
// 1.Initialization
// 2.Condition
// 3.Increment and Decrement

// // while loop
// check for the conditions
// Execute the block

// let i = 1 //Initialization value
// while (i <= 5) //Condition
//  {
//     // This block is Increment and Decrement
//     console.log(`${i} Hi`)
//     i++ //post increment
// }

// let i = 5//Initialization value
// while (i > 0) //Condition
// {
//     // This block is Increment and Decrement
//     console.log(`Hi ${i}`)
//     i-- //decrement
// }

// do while loop
// Execute the block
// check for the condiations
// let i = 10//Initialization value
// do
// {
//     // This block is Increment and Decrement
//     console.log(`Hi ${i}`) // Hi 10 only one time initial value of i
//     i++ //decrement
// } while (i <= 5) //Condition

// 17 For Loop in JavaScript

// for (let i = 5; i >= 1; i--) {
//     console.log(`${i} Hi`) //5 - 1
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`${i} Hi`) //1 - 5
// }

// let i = 1
// for (; i <= 5; ) {
//     console.log(`${i} Hi`) //1 - 5
//     i++
// }

// remove condition in for loop perametr and infinate loop
// let i = 1
// for (;; )  {
//     console.log(`${i} Hi`) //infinite loop
//     i++
// }

// nested loop
// for (let i = 1; i <= 5; i++) {
//     console.log(`${i} Hi`)
//     for (let j = 1; j <= 5; j++)
//         console.log(j, 'Hello')
// }

// #18 While vs For Loop | Which to use and When?
// which loop is best for loop or while loop

// for (let i = 1; i < 100; i++) {
//     if(i%2==0){
//         console.log(i,'even number')
//     }else {

//         console.log(i , 'Odd number')
//     }
// }

// for (let i = 1; i < 100; i++) {
//     if (i % 3 == 0) {
//         console.log(i)
//     }
// }

// This code is copy in youtube comments
// for(let i = 3; i < 100; i += 3){
//     console.log(i)
// }

// // agr ma num % 5 karunga tou result 1 ayga
// let num = 123456
// console.log(num % 5) //1

// let num = 123456
// console.log(num % 10) //6
// num = parseInt(num / 10)
// console.log(num)

// let num = 564344
// while (num > 0) {
//     console.log(num % 10)
//     num = parseInt(num / 10)
//     // console.log(num)
// }

// #19 Objects in JavaScript

//Datatype
// there are two types of datatype
// 1. Primitive
// 2. Object

// Primitive:
// number,string,boolean,null,undefined,symbol

//Object

// this is an object
// let alien = {};
// console.log(alien, typeof alien); //{} object

// let alien = {
//   name: "Areeb",
//   tech: "JS",
// };
// console.log(alien); //{ name: 'Areeb', tech: 'JS' }

// let input = "name";
// let alien = {
//   name: "Areeb",
//   tech: "JS",
//   "work exp": 4,
// };
// console.log(alien.name); //Areeb
// console.log(alien["tech"]); //JS
// console.log(alien["work exp"]); //4
// console.log(alien[input]); //Areeb

// #20 Complex Object, Delete Property in JavaScript

// let alien = {
//   name: "Areeb",
//   tech: "JS",
//   laptop: {
//     cpu: "i7",
//     ram: 4,
//     brand: "Asus",
//   },
// };
// console.log(alien); //{name: 'Areeb',tech: 'JS',laptop: { cpu: 'i7', ram: 4, brand: 'Asus' }}
// console.log(alien.laptop.brand); //Asus
// console.log(alien.laptop.brand.length); //Asus length is 4
// console.log(alien.laptop1?.brand.length); //undefined Question ? mark power error control

// delete property in object
// let alien = {
//   name: "Areeb",
//   tech: "JS",
//   laptop: {
//     cpu: "i7",
//     ram: 4,
//     brand: "Asus",
//   },
// };
// delete alien.laptop;
// console.log(alien, alien.laptop); //{ name: 'Areeb', tech: 'JS' } , undefined

// class 21 For in loop in JavaScript

// let alien = {
//   name: "Areeb",
//   tech: "JS",
//   laptop: {
//     cpu: "i7",
//     ram: 4,
//     brand: "Asus",
//   },
// };
// // this is my practice
// // let data = Object.entries(alien);
// // console.log(alien.hasOwnProperty('name'));
// for (let key in alien.laptop) {
//     console.log(key, ":", alien.laptop[key]);
// }

// #22 Functions in JavaScript

// function greet() {
//   console.log('Hello world');
// }
//   greet();
//   console.log('1');
//   greet();
//   greet();

// #23 Function return and passing

// function greet() {
//   return "Hello world";
// }
// let str = greet();
// console.log(str); //Hello world

// function greet(str) {
//   return `Hello ${str}!!`;
// }
// let arr = ["Areeb", "Ali", "Muneeb", "Shan"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(greet(arr[i]));
// }

// class 24 Function Expression in JavaScript

// Expreesion--->Evaluate--->Assigned

// Function Expression
// Anonymous function:  It is a function that does not have any name associated with it. Normally we use the
//  function keyword before the function name to define a function in JavaScript, however, in anonymous functions
// in JavaScript, we use only the function keyword without the function name.

// This function is Function Expression
// let add = function (num1, num2) {
//   return num1 + num2;
// };
// let sum = add;
// console.log(add(5, 10)); //15
// console.log(sum(5, 6)); //11

// // Anonymous function
// (function (str) {
//   return str;
// });
// let data = ("Hello");
// console.log(data)

// 25 Local-Global Variable | Default Value in JavaScript

// function greet(val) {
//   console.log(user); //Areeb
//   return `Hello ${val}!`;
// }
// let user = "Areeb"; //Global Variable
// let str = greet(user);
// console.log(str);

// let user = "Areeb"; //Global Variable
// function greet(val) {
//   let num = 5;
//   console.log(num); //5
//   return `Hello ${val}!`;
// }
// console.log(num); //Error => num is not defined
// let str = greet(user);
// console.log(str);

// function add(num1, num2, num3) {
//   console.log(num1, num2, num3); //5 6 undefined
//   return num1 + num2 + num3;
// }

// let res = add(5, 6);
// console.log(res); //NaN

// function add(num1, num2, num3 = 3) {
// //   console.log(num1, num2, num3); //5 6 3
//   return num1 + num2 + num3;
// }

// let res = add(5, 6,4);
// console.log(res); //14

// function add(num1, num2, num3 = 3) {
//   console.log(num1, num2, num3); //5 6 5
//   return num1 + num2 + num3;
// }

// let res = add(5, 6, 5);
// console.log(res); //16

// class 26 Arrow function in JavaScript
// function means behaviour

// function expression
// let greet = function (user) {
//   console.log("Hello " + user);
//   return 1;
// };
// console.log(greet("Areeb"));

// arrow function
// let greet = (user) => {
//   console.log("Hello " + user);
//   return 1;
// };
// console.log(greet("Areeb"));

// let sum = (num1, num2) => num1 + num2;
// let res = sum;
// console.log(res(5, 6));

// task
// let sum = (num1, num2) => {
//   if (num1 > 0 && num2 > 0) {
//     return num1 + num1;
//   } else {
//     return "Negiative number not accepted";
//   }
// };
// console.log(sum(5, -6));

// code Math.abs() convert negitive number to positive number in javascript
//  const data =  Math.abs(-9);
//  console.log(data) //9

// 27 What are Methods in JavaScript

// let laptop = {
//     greet: (user) => {
//       console.log(`Hello ${user} ${laptop.cpu}`);
//     },
//   cpu: "i9",
//   ram: 16,
//   brand: "HP",
// };
// laptop.greet("Areeb");

// class 28 What is this? | JavaScript

// let laptop = {
//   cpu: "i9",
//   ram: 16,
//   brand: "HP",
//   getConfig: function () {
//     console.log(cpu); //cpu is not defined
//   },
// };
// laptop.getConfig();

// let laptop = {
//   cpu: "i9",
//   ram: 16,
//   brand: "HP",
//   getConfig: function () {
//     console.log(this.cpu); //i9
//     console.log(laptop.cpu); //i9
//   },
// };
// laptop.getConfig();

// 29 Why it is called THIS?

// function getFastLaptop(laptop1, laptop2) {
//   if (laptop1.cpu > laptop2.cpu) {
//     console.log(laptop1);
//   } else {
//     console.log(laptop2);
//   }
// }
// let laptop1 = {
//   cpu: "i6",
//   ram: 16,
//   brand: "HP",
//   getConfig: function () {
//     console.log(this.cpu); //
//   },
// };
// let laptop2 = {
//   cpu: "i7",
//   ram: 16,
//   brand: "Apple",
//   getConfig: function () {
//     console.log(this.cpu); //
//   },
// };
// getFastLaptop(laptop1, laptop2);

// let laptop1 = {
//   cpu: "i7",
//   ram: 16,
//   brand: "HP",
//   compare: function (other) {
//     if (this.cpu > other.cpu) {
//       console.log(this);
//     } else {
//       console.log(other);
//     }
//   },
//   getConfig: function () {},
// };
// let laptop2 = {
//   cpu: "i9",
//   ram: 16,
//   brand: "Apple",
//   getConfig: function () {},
// };

// laptop1.compare(laptop2);

// class 30 Constructor function in JavaScript

// Constructor function
// function Alien(name, tech) {
//   this.name = name;
//   this.tech = tech;

//   this.work = function () {
//     console.log("Solving bugs from 12 hrs");
//   };
//   return this;
// }
// let alien1 = new Alien("Areeb", "JS");
// let alien2 = new Alien("Ali", "Java");

// alien1.tech = "Blockchain";

// console.log(alien1);
// console.log(alien2);
// alien1.work()

// 31 Creating Array and Fetching Elements in JavaScript

// let values = [];
// values.push(5, 7);
// values.push(9);
// console.log(values);

// let values = [5, 7, 8];
// console.log(values[1]); //7
// console.log(values[5]); //undefined

// Different types of data in Array

// let names = ["Areeb", "Kamran", "Ali"];
// names[3] = "Avin";
// console.log(names); //[ 'Areeb', 'Kamran', 'Ali', 'Avin' ]

// let data = [
//   "Areeb",
//   5,
//   { tect: "JS" },
//   function compare() {
//     console.log("Hello World compare");
//   },
//   function compare2() {
//     console.log("Hello World compare2");
//   },
// ];

// for (let i = 0; i < data.length; i++) {
//     console.log('name',data[i].name);
//   if (typeof data[i] === "function" && data[i].name === "compare") {
//     data[i]();
//   }
// }

// 32 Array methods in JavaScripts

// let data = [5, 7, 8, 9];

// data.push(3, 2); //always add end value in array
// data.pop(); //always remove end value in array
// data.shift(); //always remove start value in array
// data.unshift(23); //always add start value in array

// console.log(data);

// let data = [5, 7, 8, 9, 2.2];
// // splice first perameter index valu and second perameter No.of values you to remove and third is add value
// data.splice(2, 1, "Areeb",23);
// console.log(data); //[ 5, 7, 'Areeb', 23, 9, 2.2 ]

// For of Loop with an Array in JavaScript

// let nums = [];
// nums[0] = 5;
// nums[99] = 9;
// console.log(nums.length); //100

// let nums = [];
// nums[0] = 5;
// nums[99] = 9;

// for (let n of nums) {
//   console.log(nums[n]);
// }

// for (let key in nums) {
//   console.log(`${key}:`, nums[key]);
// }

//33 Array Destructuring in JavaScript

// let [a, b, c, d] = [2, 34, 53, 6];
// console.log(c); //53

// let a = 5;
// let b = 6;
// [a, b] = [b, a];
// console.log(a,b)

// let words = "My name is Areeb Hussain".split(" ");
// let [a, b, c, d, e] = words;
// console.log(a, b, c, d,);

// let words = "My name is Areeb Hussain Ali Javascript".split(" ");
// let [a, b, , ...d] = words;
// console.log(a, b, d); ///My name [ 'Areeb', 'Hussain', 'Ali', 'Javascript' ]

//34 Array forEach Method in JavaScript

// let nums = [43, 51];
// nums.forEach((ele, i, nums) => {
//   console.log(i, ele * 2, nums); //0 86 [ 43, 51 ]  //1 102 [ 43, 51 ]
// });

// 34 Array Method filter map reduce

// let nums = [42, 51, 24, 98, 65, 12];
// let data = nums.filter((val) => val % 2 == 0);
// console.log(data);

// let nums = [42, 51, 24, 98, 65, 12];
// nums
//   .filter((val) => val % 2 == 0)
//   .map((ele) => ele * 2)
//   .forEach((val) => {
//     console.log(val);
//   });

// reduce
let nums = [42, 51, 24, 98, 65, 12];
nums
  .filter((val) => val % 2 == 0)
  .map((ele) => {
    console.log('ele',ele)
  return  ele * 2
})
  .reduce((tot,n) => {
    console.log(tot,n)
  })
