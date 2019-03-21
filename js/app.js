console.log('Up and running');

// Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i += 1) {
  console.log(i);
}

// Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

// Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i = 0; i < 20; i++) {
  console.log('Love me, pet me! HSSSSSS!');
}

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//Fisher-Yates Shuffle algorithm recreated from StackExchange
function shuffle(arr) {
  let ctr = arr.length;
  let temp, i;

  while (ctr > 0) {
    //randomize
    i = Math.floor(Math.random() * ctr);

    //decrement counter because arrays begin at element[0].
    ctr--;

    //perform the swap
    temp = arr[ctr];
    arr[ctr] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    //console.log(i);
    let catStrings = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
    console.log(shuffle(catStrings)[0]);
  }
}

// Fizz Buzz
// NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA
// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
let max = 100;
for (let i = 0; i < max; i += 1) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    result = 'fizzbuzz';
  } else if (i % 3 === 0) {
    result = 'fizz';
  } else if (i % 5 === 0) {
    result = 'buzz';
  } else {
    result = i;
  }
  console.log(result);
}

// Getting to Know You
// Use the following arrays to answer the questions below (name, age, hometown):
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".
shahzad[0] = "Gameboy";
console.table(shahzad);

// 2. Daniel just had his birthday; change Daniel's array to reflect him being a year older. Don't just hard code 187--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.
daniel[1]++;
console.table(daniel);

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan[2] = "Gotham City";
console.table(ryan);

// 4. Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.pop();
reuben.push("Chicago");
console.table(reuben);

// 5. Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jim.splice(2,1,"Hong Kong", "London", "Athens");
console.table(jim);

// 6. Bonus: Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()
jim.splice(2,1);
console.table(jim);

// Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const turtlesArr = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// 2. Use a for loop to call .toUpperCase() on each of them and print out the result.
for (let i = 0; i < turtlesArr.length; i++) {
  console.log(turtlesArr[i].toUpperCase());
}

// 3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.
for (let i = 0; i < turtlesArr.length; i++) {
  const turtleNameArr = turtlesArr[i].split('');
  turtlesArr[i] = '';
  for (let x = 0; x < turtleNameArr.length; x++) {
    if (x % 2 === 0) {
      turtlesArr[i]+=turtleNameArr[x].toUpperCase(); 
    } else {
      turtlesArr[i]+=turtleNameArr[x].toLowerCase(); 
    }
  }
  console.log(turtlesArr[i]);
}

// Return of the Closets
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.
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

// Alien Attire
// 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
const kristynsShoe = kristynsCloset[0];
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset[2][3]);

// Dress 'em Up
//2. Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
const kristynsOutfit1 = [kristynsCloset[0], kristynsCloset[1], kristynsCloset[2]];
const kristynsOutfit2 = [kristynsCloset[3], kristynsCloset[7], kristynsCloset[1]];
const kristynsOutfit3 = [kristynsCloset[2], kristynsCloset[4], kristynsCloset[6]];
console.table(kristynsOutfit1);
console.table(kristynsOutfit2);
console.table(kristynsOutfit3);

const thomsOutfit1 = [thomsCloset[0][3], thomsCloset[1][1], thomsCloset[2][0]];
const thomsOutfit2 = [thomsCloset[2][2], thomsCloset[2][1], thomsCloset[1][2]];
const thomsOutfit3 = [thomsCloset[2][0], thomsCloset[0][2], thomsCloset[0][1]];
console.table(thomsOutfit1);
console.table(thomsOutfit2);
console.table(thomsOutfit3);


// Dirty Laundry
// Continue looking at the closet arrays:

// 1.Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

// Inventory
//2. Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
const thomsClosetShirts = thomsCloset[0];
const thomsClosetPants = thomsCloset[1];
const thomsClosetAccessories = thomsCloset[2];
console.table(thomsClosetShirts);
console.table(thomsClosetPants);
console.table(thomsClosetAccessories);

// Multiples of 3 and 5
// Yes, you might have tackled this earlier, but try it again (don't look back at your other code 👀)
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
max = 1000;
let sum = 0;
for (let i = 0; i < max; i += 1) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    sum += i;
  } else if (i % 3 === 0) {
    sum += i;
  } else if (i % 5 === 0) {
    sum += i;
  }   
}
console.log(sum);







