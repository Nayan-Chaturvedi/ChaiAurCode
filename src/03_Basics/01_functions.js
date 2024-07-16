function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();		// Calling function

// function addTwoNumbers(number1, number2){
//     console.log( number1 + number2 );
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result;

  return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log("Result ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("hitesh"))	// hitesh just logged in
// console.log(loginUserMessage())		// sam just logged in (Yaha hamane argument me koi value nahi daali hai, jab koi value 								argument me nahi hogi tab by default sam consider kar lega)

//------------ function with objects ------------------


function calculateCartPrice(...num1)
{
	return num1;
}

console.log(calculatetCartPrice(200, 400, 500, 2000));		 //	[200, 400, 500, 2000]

function calculatetCartPrice(var1, var2, ...num1) {
  return num1;
}

// console.log(calculatetCartPrice(200, 400, 500, 2000));	// [400, 500] becuase va1 contain 200 and var2 contain 400. we here return
								//	num1 . num1 contain 500 and 2000

const user = {
  username: "hitesh",
  price: 199
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject["username"]} and price is ${anyObject["price"]}`
  );
}

// handleObject(user);

// we can pass the object directly

handleObject({
  username: "sam",
  price: 399
});

//--------- function with array -------------

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(gerArray) {
  return gerArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300]));
