// console.log('Hello')

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





let x = "Book";
let y = "Book";
let res =   x < y;
console.log(res)