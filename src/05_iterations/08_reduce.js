const myNum = [1, 2, 3];

//reduce using normal function
/* const myTotal = myNum.reduce(function (accumulator, currentValue){
    console.log(`accumulator:  ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0); */

//reduce using arrow function
const myTotal = myNum.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(myTotal);
		// hamne difine kiya hai ki 0 se chalu hai to firstly accumulatir ki value 0 aayi hai

		//	output =>	accumulator : 0, currentValue : 1	
		//			accumulator : 1, currentValue : 2	//accumulator value = previous accumulator value + 											//privious current value :accumulator value= (0+1)=1
		//			accumulator : 3, currentValue : 3	//	accumulator value= (1+2)=3
		//		myTotal = 3+3=6


//other example
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  }
];

//scenario: add the price in the shopping card
const priceToPay = shoppingCart.reduce((acc, item) => acc + item["price"], 0);
console.log(priceToPay);

//		output =>
//		 0 + 2999 =2999
//		 2999 + 999 = 3998
//		3998 + 5999=9997
//		9997 + 12999 = 22996

// 		priceToPay = 22996

