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

// let num1 = true;
// let num2 = true;
// function foo(num1, num2) {
// //   console.log(num1, num2);
//   return num1 +  num2;
// }
// console.log(foo(num1, num2));

// let num = 4
// num = num + 2
// console.log(num)

// let num = 4
// num += 2
// num++ //5 //post increment
// ++num //5 //pre increment
// num-- // 3
// console.log(num)

// let num = 4
// num-- //3 //post increment
// // --num //3 //pre decrement
// console.log(num)

// // post increment
// let num = 4;
// let x = num++; //post increment
// console.log(x,  num); //4 5

// // pre increment
// let num = 4;
// let x = ++num; //pre increment
// console.log(x,  num); //5 5

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
