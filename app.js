// //Easy Going
// for(let i = 0; i <= 20; i++)
//   console.log(i);

// //Get Even
// for(let i = 0; i <= 200; i++)
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}

// //Excited Kitten
// 1//
// for(let i = 0; i = 20; i++)
// 	console.log(Love me, pet me! HSSSSSS!);

2//
petThoughts1["Love me, pet me! HSSSSSS!"];
petThoughts2["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."];

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        const rand = petThoughts2[Math.floor(Math.random() * petThoughts2.length)];
    console.log(rand);
    } 
console.log(petThoughts1);
    }
