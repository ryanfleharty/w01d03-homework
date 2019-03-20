console.log("Up and running!");


//Easy Going 1.
// for (let i = 1; i < 20; i++) {
//     console.log(i)
// }

// //Get Even 1.
// for (let i = 1; i < 200; i++) {
//     if(i % 2 == 0)
//     console.log(i)
// }

// //Excited Kitten 1.
// const kitten = ["...human...why you taking pictures of me?...", 
// "...the catnip made me do it...", 
// "...why does the red dot always get away..." ];

// // for (i = 0; i < 20; i++) {
// //      console.log("Love me, pet me! HSSSSSS!")

// // }
// let rand = 0;
// for (i = 0; i < 20; i++) {
//     function kittenMix(kitten) {
//         rand = Math.floor(Math.random() * kitten.length);
//         return kitten[rand];

//       }
//       console.log(kittenMix(kitten))

// }

//Fizz Buzz 1.
// for (i = 1; i < 101; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     }

//    else if (i % 5 == 0) {
//         console.log("Buzz")
//     }
    
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuz")
//     }

//     else if (i % 3 != 0 && i % 5 != 0) {
//         console.log(i)
//     }
//    } 

// //Getting to Know You
// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];

// //1.
// shahzad.shift();
// shahzad.unshift("Gameboy");
// console.log(shahzad);

// //2.
// daniel[1]++
// console.log(daniel);

// //3.
// ryan.pop();
// ryan.push("Gotham City");
// console.log(ryan);

// //4.
// reuben.pop();
// reuben.push("Chicago");
// console.log(reuben);

// //5.
// jim.splice(2, 1, "Los Angeles", "Omaha", "Mexico City");


// //6.
// jim.splice(2, 1)
// console.log(jim);

// Yell at the Ninja Turtles
// const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// for (let i = 0; i < turtles.length; i++) {
//     console.log(turtles[i].toUpperCase())
// }

//Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
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
  let kristynsShoe = kristynsCloset[0];
  kristynsCloset.shift();
  console.log(kristynsShoe);

thomsCloset[2].push(kristynsShoe);
console.table(thomsCloset);

//Dress 'em Up
console.table(kristynsCloset);
console.log("Kristyn is wearing " + kristynsCloset[0] + ", " + kristynsCloset[2] + ", and " + kristynsCloset[3] + ".")

console.log("Thom is wearing " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][0] + ".")
