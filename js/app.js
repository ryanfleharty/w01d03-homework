//EASY GOING
//Write a for loop that will log the numbers 1 through 20.
/*for (let i = 1;i<=20;i++){
    console.log(i)
}
//GET EVEN
//Write a for loop that will log only the even numbers in 0-200.
for (let i=0;i<=200;i+=2){
    console.log(i);
}

//EXCITED KITTEN
//Write a code that logs "Love me, pet me! HSSSSSS!" 20 times,
For every even number in your loop, log 
"...human...why you taking pictures of me?...", 
"...the catnip made me do it...", or 
"...why does the red dot always get away..." at random.

    for (let i=1;i<=20;i++){
        let speakMeow = Math.floor(Math.random(i)*(4-1)+1)
        if (i%2===0 && speakMeow ===1){
            console.log("..human...why you taking pictures of me?...")
        }
        else if (i%2===0 && speakMeow ===2){
            console.log("the catnip made me do it...")
        }
        else if (i%2===0 && speakMeow ===3){
            console.log("...why does the red dot always get away...")
        }
     else {console.log("Love me, pet me! HSSSSSS!")}}
*/
//FIZZBUZZ
//Write a javascript application that logs all numbers from 1 - 100.
//for(let i = 1;i<=100;i++)
//If a number is divisible by 3 log "Fizz" instead of the number.
//{if (i % 5 === 0 && i % 3 === 0){console.log("FizzBuzz")}
//If a number is divisible by 5 log "Buzz" instead of the number.
//else if (i % 5 === 0){console.log("Buzz")}
//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
//else if (i % 3 === 0){console.log("Fizz")}
//else {console.log(i)}}

//GETTING TO KNOW YOU
//const shahzad = ["Shahzad", 1000, "Austin"];
//const jim = ["Jim", 16, "All cities"];
//const reuben = ["Reuben", 22, "Durham"];
//const daniel = ["Daniel", 186, "Dallas"];
//const ryan = ["Ryan", 65, "Denver"];
//Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".
//shahzad.shift();shahzad.pop("Gameboy");
//shahzad[0]="Gameboy"
//Daniel just had his birthday; change Daniel's array to reflect him being a year older. Don't just hard code 187--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.
//daniel[1]=187
//Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
//ryan[2]="Gotham City"
//Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
//reuben.pop([2]);reuben.push("Chicago");
//Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
//jim.pop([2]);jim.push("Columbus", "Cleveland","Akron");
//Bonus: Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()
//jim.splice([2],[1]);
/*

Yell at the Ninja Turtles
Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
Use a for loop to call .toUpperCase() on each of them and print out the result.
Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (let i = 0;i<turtles.length;i++){
 console.log(turtles[i].toUpperCase())}
*/
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
  /*Alien Attire
Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! 
Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
Use that variable to add Kristyn's lost shoe to Thom's accessories array.
*/
const kristynsShoe = kristynsCloset.shift()
thomsCloset[2][3]=kristynsShoe;
/*
Dress 'em Up
Modify your code to put together 3 separate outfits for Kristyn and Thom. 
Put the output in a sentence to tell us what we'll be wearing. Mix and match!
*/
//console.log("Kristyn will be wearing "+kristynsCloset[4]+" and "+kristynsCloset[1]+" and "+kristynsCloset[3]);
//console.log("Thom will wear a "+thomsCloset[0][1]+" and "+thomsCloset[1][0]+" with a "+thomsCloset[2][1]);

/*
Dirty Laundry
Continue looking at the closet arrays:

Time to do laundry - loop through Kristyn's closet and 
log the sentence "WHIRR: Now washing (item)" for each item in the array.
*/
//for(let i = 0;i<kristynsCloset.length;i++)
//console.log("WHIRR: Now washing "+ kristynsCloset[i])
/*
Inventory
Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
*/
//for(let i = 0;i<thomsCloset.length;i++){
//for(let x = 0; x<thomsCloset.length;x++)
//console.log(thomsCloset[i][x])}

//Multiples of 3 and 5
const sum = []
for(let i = 1;i<=1000;i++){
if (i % 5 === 0 || i % 3 === 0){
    sum.push([i])}}
for(let x = 0;x<sum.length;x++){
   console.log([x]+sum[x])}