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
// //     console.log("Love me, pet me! HSSSSSS!")

// // }

// for (i = 0; i < 20; i++) {
//     function kittenMix (i) {
//         return Math.floor(Math.random() * Math.floor(kitten[i]));
//       }
//       console.log(kittenMix(i))

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

//Getting to Know You
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//1.
shahzad.shift();
shahzad.unshift("Gameboy");
console.log(shahzad);

//2.
daniel[1]++
console.log(daniel);

//3.
ryan.pop();
ryan.push("Gotham City");
console.log(ryan);

//4.
reuben.pop();
reuben.push("Chicago");
console.log(reuben);

//5.
jim.splice(2, 1, "Los Angeles", "Omaha", "Mexico City");


//6.
jim.splice(2, 1)
console.log(jim);