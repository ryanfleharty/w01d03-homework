// EASY GOING -- 1

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// GET EVEN -- 1

for (let i = 0; i <= 200; i+=2) {
  console.log(i);
}

// EXCITED KITTEN -- 1

for (let i = 1; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

// EXCITED KITTEN -- 2

const meows = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."]

for (let i = 1; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
  if (i % 2 === 0) {
    var x = Math.floor(Math.random() * 3);
    console.log(meows[x]);
  }
}

// Fizz Buzz -- 1-4
for (let i = 1; i <= 100; i++) {
  i%3===0 ? console.log("Fizz") : i%5===0 ? console.log("Buzz") : i%3===0 && i%5===0 ? console.log("FizzBuzz") : console.log(i);
}

// GETTING TO KNOW YOU 1
