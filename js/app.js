// Easy Going
// 1.  Write a for loop that will log the numbers 1 through 20.


for(let i = 1; i <= 20; i++)
	console.log(i);
// Get Even
//1. Write a for loop that will log only the even numbers in 0 through 200.

for(let i = 0; i <= 200; i++){
  if(i % 2 === 0){
  	console.log(i)
  }
}

// Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
  for(let i = 0; i < 20; i++){
  	console.log("Love me, pet me! HSSSSSS!");
  }

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
const response = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for(let i = 0; i < 20; i++) {
	if(i % 2 === 0) {
		var responses = response[Math.floor(Math.random()*response.length)];

		console.log(responses)

}
}
// Fizz Buzz

// 1.  Write a javascript application that logs all numbers from 1 - 100.

for(var i = 1; i < 101; i++) {


// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.



if (i % 15 == 0) {
console.log("Fizzbuzz")
}
else if(i % 3 === 0) {
    console.log("Fizz");
}

else if (i % 5 == 0) {
	console.log("Buzz");
}

else {
	console.log(i)
}
}

// Getting to Know You

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

// 1.  Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".

shahzad.shift();
shahzad.push("Gameboy");
console.log(shahzad);

// 2.  Daniel just had his birthday; change Daniel's array to reflect him being a year older. Don't just hard code 187--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.

age = daniel[1]++
	console.log(daniel)

// 3.  Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan.pop();
ryan.push("Gotham City");
console.log(ryan)

// 4.  Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

reuben.pop();
reuben.push("Chicago");
console.log(reuben);

// 5. Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code

jim.pop();
jim.push("NYC", "Las Vegas", "Miami");
console.log(jim);

// 6. Bonus: Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()

jim.splice(2, 1);
console.log(jim);

// Yell at the Ninja Turtles

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

var Ninjas = ["Leonardo", "Donatello", "Michaelangelo", "Raphael"]
console.log(Ninjas);

// 2. Use a for loop to call .toUpperCase() on each of them and print out the result.
for( var i = 0; i < Ninjas.length; i++) {
	Ninjas[i] = Ninjas[i].toUpperCase();
console.log(Ninjas);
}

// 3.  Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

var alternateCase = function (s) {
  var chars = s.toLowerCase().split("");
  for (var i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  return chars.join("");
};

Ninjas.forEach( (ninja) => {
	console.log(alternateCase(ninja));	
})


// Return of the Closets

// **** We noticed a mistake in the array after class today.  the first problem requires
// kristyn's left shoe in Thom's closet at the beginning so we amended the original 
// array to reflect that.

const kristynsCloset = [
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up"
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
    "left shoe"

  ]
];

// 1.  Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

var kristynsShoe = ((thomsCloset[2])[3]);
console.log(kristynsShoe);
thomsCloset[2].pop();
console.log(thomsCloset[2]);
kristynsCloset.push(kristynsShoe);
console.log(kristynsCloset);

// Dress 'em up

// 1.  Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match! 
console.log("Kristyn will wear a " + kristynsCloset[2] + " and " + kristynsCloset[3]);
console.log("Kristyn will wear a pair of " + kristynsCloset[0] + " and a " + kristynsCloset[4]);
console.log("Kristyn will wear " + kristynsCloset[3] + " and " + kristynsCloset[0]);
var ThomsClothes1 = ((thomsCloset[2])[2])
var ThomsClothes2 = ((thomsCloset[2])[1])
var ThomsClothes3 = ((thomsCloset[0])[3])
var ThomsClothes4 = ((thomsCloset[0])[0])
var ThomsClothes5 = ((thomsCloset[1])[1])
var ThomsClothes6 = ((thomsCloset[1])[0])

console.log("Thom will wear " + ThomsClothes1 + " with " + ThomsClothes3);
console.log("Thom will wear " + ThomsClothes4 + " with " + ThomsClothes5);
console.log("Thom will wear " + ThomsClothes2 + " with " + ThomsClothes6);

// Not sure this was the intended method to solve this problem...
// but it works! 

// Dirty Laundry

// 1.  Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.


for (let i = 0; i <kristynsCloset.length; i++){

  console.log("WHIRR: Now washing " + kristynsCloset[i])
}

// Inventory

// 2.  Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

let shirts = thomsCloset[0];
console.log(shirts);

let pants = thomsCloset[1];
console.log(pants);

let accessories = thomsCloset[2];
console.log(accessories);

// Multiples of 3 and 5

//Yes, you might have tackled this earlier, but try it again (don't look back at your other code 👀) 
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var total = 0;

for(var i = 0; i < 1000; i++) {
  if(i % 3 == 0 || i % 5 == 0) {
    total += i;
  }
}

console.log(total);




