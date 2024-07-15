const name = "sarfaraz";
const repoCount = 50;
// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sarfaraz");
// console.log(gameName[0]);
// console.log(gameName.__proto__);		// Access prototype

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 4);
console.log(newString);				//	Sarf

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);				//	-8 means Sarfaraz ki length 8 hai to hum -8 de diya hai which means 0.
							//	 Hum yaha 0 bhi de sakte the  output : Sarf

const newStringOne = "  Sarfaraz.     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chodhary";
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));

const newStringTwo = "sarfaraz-hussain-chaudhary";
console.log(newStringTwo.split("-"));
