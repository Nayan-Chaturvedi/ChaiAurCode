// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

//---------------- Maths ------------------------
// console.log(Math)			// All property/ method print
// console.log(Math.abs(-4))
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());

//	Math.Random se value 0-1 tak print hoti hai aur hum chahte hai ki 1-10 tak print ho to ish karan se (*10) kiya hai
//	0.023412 value aayi to ishko avoid karne ke liye (+1) add kiya

console.log(Math.random() * 10 + 1);

//Exact value print hogi
console.log(Math.floor(Math.random() * 10 + 1));


// Ab me chahata hu ki value 10-20 ke bich ki rahe tab me ye formula use karuga. Jishme min value 10 to ho tab hamne last me (+min) kiya
const min = 10;
const max = 20;


//		(max - min + 1) 0 value ko avoid karne ke liye hamne 1 add kiya hai
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
