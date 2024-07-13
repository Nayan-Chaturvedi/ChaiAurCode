//----------------- Number conversion ------------------
let score = "Sarfaraz";			//	NAN
//let score = true			//	1
// let score = undefined;		//	NAN ,  typeOf=Number
// let score = null;			// 	0,  typeOf= Object
// let score = "33abc"
// let score = "33"			//	33

// console.log(typeof score); 
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//------------------- Boolean conversion ----------------

// let isLoggedIn = 1;			//	true
// let isLoggedIn = "";			//	false
// let isLoggedIn = "Sarfaraz";		//	true
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//------------------- String conversion ----------------
// let someNumber = 33;
// let stringInNumber = String(someNumber);		
// console.log(stringInNumber);			//	33
// console.log(typeof stringInNumber);		// String

//------------------- Operations ----------------
let value = 3;
let negValue = -value;
console.log(negValue);

//Basic math
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //it means 2 power of 3
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = "sarfaraz";

let str3 = str1 + str2;
console.log(str3);

//---- Tricky conversion
console.log("1" + 2);       		// 12
console.log(1 + "2");       		// 12
console.log("1" + 2 + 2);  		 // 122
console.log(1 + 2 + "2"); 	        //32
console.log(((3 + 4) * 5) % 3); 	// 2