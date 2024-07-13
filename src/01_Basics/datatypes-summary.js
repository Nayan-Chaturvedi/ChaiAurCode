//primitive
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);		// False Becouse har baar unique id store hoti hai

const bigNumber = 2323232323232323232323232n;

//Reference (Non-primitive datatype)
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "sarfaraz",
  age: 17
};

const myFunction = function () {
  console.log("Hello world");
};

// console.log(typeof bigNumber);		// bigInt
// console.log(typeof heros);			//Object
// console.log(typeof myFunction);		//Function




-------------------------------------------STACK AND HEAP MEMORY---------------------------------------

let myYoutubeName = "hiteshchoudharydotcom";
let anothername = "myYoutubeName";
anothername = "chaiaurcode";
console.log(myYoutubeName);  // Yaha stack area me memory allocate hogi. Yaha par copy banti hai to ish karan se output = hiteshchoudharydotcom
console.log(anothername);	// output = chaiaurcode

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
};

let userTwo = userOne;		//	Memory heap area me banegi userOne and userTwo stack area me store hoga. Yaha refrence ek hi area(heap area) ka hai.

userTwo.email = "hitesh";
console.log(userOne.email);	// hitesh
console.log(userTwo.email);	// hitesh
