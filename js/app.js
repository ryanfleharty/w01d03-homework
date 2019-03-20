console.log('Up and running');

// Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
// for (let i = 1; i <= 20; i += 1) {
//   console.log(i);
// }

// Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

// // Excited Kitten
// // 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// for (let i = 0; i < 20; i++) {
//   console.log('Love me, pet me! HSSSSSS!');
// }

// // 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// //Fisher-Yates Shuffle algorithm recreated from StackExchange
// function shuffle(arr) {
//   let ctr = arr.length;
//   let temp, i;

//   while (ctr > 0) {
//     //randomize
//     i = Math.floor(Math.random() * ctr);

//     //decrement counter because arrays begin at element[0].
//     ctr--;

//     //perform the swap
//     temp = arr[ctr];
//     arr[ctr] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);

//     let catStrings = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
//     console.log(shuffle(catStrings)[0]);
//   }
// }

// // Fizz Buzz
// // NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA
// // 1. Write a javascript application that logs all numbers from 1 - 100.
// // 2. If a number is divisible by 3 log "Fizz" instead of the number.
// // 3. If a number is divisible by 5 log "Buzz" instead of the number.
// // 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// const max = 100;
// for (let i = 0; i < max; i += 1) {
//   if ((i % 3 === 0) && (i % 5 === 0)) {
//     result = 'fizzbuzz';
//   } else if (i % 3 === 0) {
//     result = 'fizz';
//   } else if (i % 5 === 0) {
//     result = 'buzz';
//   } else {
//     result = i;
//   }
//   console.log(result);
// }

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


