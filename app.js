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

//Excited Kitten 1.
const kitten = ["...human...why you taking pictures of me?...", 
"...the catnip made me do it...", 
"...why does the red dot always get away..." ];

// for (i = 0; i < 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!")

// }

for (i = 0; i < 20; i++) {
    function kittenMix (i) {
        return Math.floor(Math.random() * Math.floor(kitten[i]));
      }
      console.log(kittenMix(i))

}
