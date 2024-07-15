//Dates

// let myDate = new Date();
// console.log(myDate.toString());		//	Sun Jul 14 2024 23:08:19 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());		//	Sun Jul 14 2024
// console.log(myDate.toLocaleDateString());	//	7/14/2024
// console.log(myDate.toLocaleString());	//	7/14/2024, 11:08:19 PM
// console.log(myDate.toTimeString());		//	23:08:19 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString());		//	Sun, 14 Jul 2024 17:38:19 GMT

// console.log(typeof myDate);			// Object

// let myCreatedDate = new Date(2023, 0, 23);		// Months 0 se start hote hai
// console.log(myCreatedDate.toDateString());		//	Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString(2023, 0, 23, 5, 3));		// 1/23/2023, 5:03:00 AM

//yyyy-mm-dd
// let myCreatedDateOne = new Date("2023-01-14");
//mm-dd-yyyy, we prefered in india
// let myCreatedDateOne = new Date("01-14-2023");		

// console.log(myCreatedDateOne.toLocaleString());		//	1/14/2023, 12:00:00 AM

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDateOne.getTime());
// console.log(Math.floor(Date.now()/1000));		// Second me convert

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "short"
  })
);
