const user = {
  username: "Hitesh",		//	Properties in object
  loginCount: 8,		//	Properties in object
  signedIn: true,		//	Properties in object
  getUserDetails: function () {
    // console.log("Got user details from DB");
    // console.log(`Username ${this.username}`);
    console.log(this);		// Jab hum this keyword lagate hai which means hum current context ki baat kar rahe hai
  }
};
/* 
console.log(user["username"]);
console.log(user.getUserDetails()); */

//contructor function<
//here with the help of new keyword, we can create multiple instances
/* const promiseOne = new Promise()
const date = new Date(); */

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {		// we provide method inside constructor function
    console.log(`Welcome ${this.username}`);
  };
  return this;		// explicit this keyword lagaye ya na lagaye . this keyword implicit inject ho jata hai
}

const userOne = new User("Hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

console.log(userOne.constructor); // if we use .construtor then ye return karta hai khud ka object
console.log(userTwo);
