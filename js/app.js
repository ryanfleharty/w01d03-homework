//Inside the directory created after you fork and clone, put your answers in app.js.
//Keep your answers organized! Included a commented header for each section in your answers file.
//If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later.
//After each section (even if you're not fully done with it), add and commit your work. Use the commit messages that you see at the end of each section. If you go back and fix a section, commit again with an updated message.
//When you are done with your homework, push to your fork and then and make a pull request.
/**
//Easy Going (Task 1)
for(i = 1; i <= 20; i++) {
  console.log(i);
}

//Get Even (Task 2)
for(i = 0; i <= 200; i+=2) {
  console.log(i);
}
**/
//Excited Kitten (Task 3)

//Math.round(Math.random() * 21) will get me 1 randomly generated number between 0 and 20 rounded to the nearest whole number.

/**
let excitedCat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; {
for(i = 0; i <= 20; i++) {
  if(excitedCat[i] % 2 === 0) {
    i = Math.floor(Math.random() * 22);
    console.log("...why does the red dot always get away...");
} else {
  console.log("Love me, pet me! HSSSSSS!");
}
}
}
**/

//Pseudocode: I want to know when an even number is generated, I want to generate a random number at that point, I want the random number to become the index number, and the console to log the phrase
//For every even number in your loop, log "...why does the red dot always get away..." at random.

//Fizz Buzz (Task 4)
/**
for(i = 1; i <= 100; i++) {
  if(i % 15 === 0) {
      console.log("FizzBuzz");
    } else if(i % 3 === 0) {
    console.log("Fizz");
  } else if(i % 5 === 0) {
      console.log("Buzz");
    } else {
        console.log(i);
      }
    }
**/

/**
//Getting to Know You
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".
shahzad.shift();
console.log(shahzad);
shahzad.unshift("Gameboy");
console.log(shahzad);

//Daniel just had his birthday; change Daniel's array to reflect him being a year older. Don't just hard code 187--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.

daniel.splice(1, 1, daniel[1] +1);
console.log(daniel[1]);

//Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

ryan.splice(2, 1, "Gotham City");
console.log(ryan[2]);

//Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

reuben.pop();
console.log(reuben);
reuben.push("Chicago");
console.log(reuben);

//Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code

jim.splice(2,1, "Barcelona", "Bogota", "Brooklyn");
console.log(jim);

//Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()
jim.splice(2,1);
console.log(jim);
**/

//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
/**
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (var i = 0; i < ninjaTurtles.length; i++) {
  console.log(ninjaTurtles[i].toUpperCase());
}
**/

//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.
const kristynsCloset = [
  "left shoe",
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
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

let kristynsShoe = kristynsCloset.slice(0,1);
console.log(kristynsCloset);
thomsCloset[2].push("left shoe");
console.log(thomsCloset[2]);

//Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

let newOutfit1 = kristynsCloset.slice(0,3);
console.log(newOutfit1);
let newOutif2 = kristynsCloset.slice(2,5);
console.log(newOutif2);
let newOutfit3 = kristynsCloset.slice(4,6 + 1);
console.log(newOutfit3);

let thomsMessyCloset = [].concat.apply([], thomsCloset);
console.log(thomsMessyCloset);

let newOutfit4 = thomsMessyCloset.slice(0,3);
console.log(newOutfit4);
let newOutif5 = thomsMessyCloset.slice(2,5);
console.log(newOutif5);
let newOutfit6 = thomsMessyCloset.slice(4,6 + 1);
console.log(newOutfit6);
