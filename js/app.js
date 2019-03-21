//Arrays, Loops, and Conditionals

//Easy Going
//1. Write a for loop that will log the numbers 1 through 20.

for (i = 1; i <= 20; i++) {
//    console.log(i);
}

//Get Even
//1. Write a for loop that will log only the even numbers in 0 through 200.

for (i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
//        console.log(i);
    }
}

//Excited Kitten
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (i = 1; i <= 20; i++) {
//    console.log('Love me, pet me! HSSSSSS!');
}


//2. For every even number in your loop, log "...human...why you taking pictures
// of me?...", "...the catnip made me do it...", or "...why does the red dot 
//always get away..." at random.

let catPhrase = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];

for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        let random = catPhrase[Math.floor(Math.random()*catPhrase.length)];
//        console.log(random);
    }
}


//Fizz Buzz
//1. Write a javascript application that logs all numbers from 1 - 100.

for (i = 1; i <= 100; i++) {
//    console.log(i);
}


//2. If a number is divisible by 3 log "Fizz" instead of the number.

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
 //   console.log('Fizz');
    }
    else {
  //      console.log(i);
    }
}


//3. If a number is divisible by 5 log "Buzz" instead of the number.

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
 //   console.log('Fizz');
    }
    if (i % 5 === 0) {
 //       console.log('Buzz');
    }
    else {
 //       console.log(i);
    }
}


//4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
//    console.log('Fizz');
    }
    if (i % 5 === 0) {
//        console.log('Buzz');
    }
    if (i % 3 === 0 && i % 5 === 0) {
//        console.log('FizzBuzz');
    }
    else {
//        console.log(i);
    }
}


//Getting to Know You
//Use the following arrays to answer the questions below (name, age, hometown):

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//1. Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" 
//from the shahzad array and replace it with "Gameboy".

shahzad[0] = 'Gameboy';
//console.log(shahzad);

//2. Daniel just had his birthday; change Daniel's array to reflect him being a 
//year older. Don't just hard code 187--pretend that you don't know that his age 
//is 186, and write your code to just make him a year older than whatever age he was.
//NOT WORKING...NEED TO FIX

let age = daniel.splice(1, 1);
//console.log(age);

let newAge = age + 1;
//console.log(newAge);


//3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

ryan[2] = 'Gotham City';
//console.log(ryan);

//4. Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from 
//Reuben's array and add "Chicago". (Note: remove and then add is different 
//from simply changing the value at that index.)

reuben.pop();
//console.log(reuben);

newTown = 'Chicago';
reuben.push(newTown);
//console.log(reuben);

//or a better way would be...

reuben.splice(2, 1, 'Chicago')
//console.log(reuben);


//5. Jim could be literally anywhere in the world. Remove "All cities" from his 
//array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code

jim.splice(2, 1, 'San Francisco', 'Santo Domingo', 'Santiago');
//console.log(jim);


//6. Bonus: Whoops! Jim is actually only allowed to be in one of two cities. 
//Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()
//DO THIS????



//Yell at the Ninja Turtles
//1. Create an array with the members of the ninja turtles (Donatello, Leonardo, 
//Raphael, Michaelangelo)

let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

//2. Use a for loop to call .toUpperCase() on each of them and print out the result.

for (i = 0; i < ninjaTurtles.length; i++) {
    let ninjaTurtlesUp = ninjaTurtles[i].toUpperCase();
//    console.log(ninjaTurtlesUp);
}

//3. Bonus: Modify the answer you just wrote. Instead of all letters being 
//uppercase, make the letters alternate back and forth between uppercase and 
//lowercase.
//DO THIS????



//Return of the Closets
//Below, we've given you examples of Kristyn and Thom's closets modeled as data 
//in JavaScript. Use this data to answer the following questions.

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
//Added descriptive array names to separate them...not sure if that breaks the rules.

  const thomsCloset = [
    {thomsShirts: [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ]}, {thomsPants: [
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ]}, {thomsAccessories: [
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]}
  ];
  
//Alien Attire
//1. Kristyn's left shoe has traveled through time and space and turned up in 
//Thom's accessories drawer! Remove Kristyn's shoe from the array and save it 
//to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe 
//to Thom's accessories array.
//NEED TO FIX!!!!!

let krystynsShoe = kristynsCloset.splice(0, 1);
console.log(krystynsShoe);

let thomsNewCloset = thomsCloset.thomsAccessories.unshift(krystynsShoe);
console.log(thomsNewCloset);

//Dress 'em Up
//1. Modify your code to put together 3 separate outfits for Kristyn and Thom. 
//Put the output in a sentence to tell us what we'll be wearing. Mix and match!



