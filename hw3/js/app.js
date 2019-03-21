//easy going
for(let i = 1; i < 20; i++){
console.log(+i);
}
//get even
for(let i = 0; i <= 200; i += 2){
  console.log(i);
}
//excited kitten
for(let i = 1; i <=20; i++){
  console.log('love me, pet me! HSSSSSS!');
  if (i % 2 == 0){
    let t1 = "...human...why you taking pictures of me?..."
    let t2 = "...the catnip made me do it..."
    let t3 = "...why does the red dot always get away..."
      let rand = Math.random()
        if (rand < .33){
          console.log(t1)
        } else if (rand > .33 && rand < .66) {
            console.log(t2);
        } else {
            console.log(t3);
        }
  }
}
//fizz buzz
for(let i = 1; i <= 100; i++){
  console.log(i);
    if(i % 3 == 0){
      let f = "Fizz"
      console.log(f);
    }
    if(i % 5 == 0){
      let b = "Buzz"
      console.log(b);
    }
    if(i % 3 && i % 5 == 0){
      let fb = "FizzBuzz"
      console.log(fb);
    }
}
//getting to know you
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];
// Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".
 shahzad.shift()
 shahzad.unshift('Gameboy')
 console.log(shahzad);
// Daniel just had his birthday; change Daniel's array to reflect him being a year older. Don't just hard code 187--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.
let age = daniel.splice(1,1)[0];
  age += 1
console.log(age);
// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan.pop()
ryan.push('Gotham City')
console.log(ryan);
// Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.pop()
reuben.push('Chicago')
console.log(reuben);
// Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jim.pop()
jim.push('Denver','LA', 'Miami')
console.log(jim);
// Bonus: Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()
jim.splice(2,2)
console.log(jim);

//yell at the ninja turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
  let ninjas = ['Donatello','Leonardo','Raphael','Michaelangelo']
// Use a for loop to call .toUpperCase() on each of them and print out the result.
  for(let i = 0; i < ninjas.length; i++){
      let name = ninjas[i].toUpperCase()
      console.log(name);
  }
// Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

//return of the closets
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
//alien attire
  let kristynsShoe = kristynsCloset.shift()
  thomsCloset[2].push(kristynsShoe)
  console.log(thomsCloset);
//dress 'em up

//dirty laundry
for(let i = 0; i < kristynsCloset.length; i++){
  console.log(`WHIPP: Now Washing ${kristynsCloset[i]} `);
}
//inventory
console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);
