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
