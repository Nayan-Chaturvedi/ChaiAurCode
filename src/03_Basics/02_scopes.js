// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300;


let a = 300;			//Here, a is global scope

if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  // console.log("Inner: ", a);		// 10 beause a = 10 inside if block
}

// console.log(a)		// 300
// console.log(b)		// error
// console.log(c)		// 30

//-------------- Scope level and mini hoisting ----------------

//Scope using functions
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    // console.log("Inner ",username);		//	Inner hitesh
  }
  // console.log(website);		//	error
  two();
}

one();

// Scope using if statements
if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "   Youtube";
    // console.log(username + website);		// hiteshYoutube
  }
  // console.log(website);	//	error
}
// console.log(username);	// error
//---------------- Intresting ------------------

//1 way: Basic function
console.log(addone(5));		// 6

function addone(num) {
  return num + 1;
}

// console.log(addone(5));	// 6

//2 way: Function expression
// console.log(addTwo(5));		//Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));		// 7
