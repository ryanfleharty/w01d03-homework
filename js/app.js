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

// GETTING TO KNOW YOU
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
const people = [kenny,jimHaff,reuben,jimClark,ryan];

//1
kenny[0] = "Gameboy";
//2
jimClark[1] += 1;
//3
ryan[2] = "Gotham";
//4
reuben.splice(2,1,"Chicago")
//5
jimHaff.splice(2,1,"Hong-Kong","Dubai","Tokyo")
//6
jimHaff.splice(2,1)

console.log(people);

// YELL AT THE NINJA TURTLES

//1
var reptiles = ["Donatello","Leonardo","Raphael","Michaelangelo"]

//2
for (i = 0; i < reptiles.length; i++) {
  reptiles[i].toUpperCase;
  console.log(reptiles[i]);
}

//3
for (i = 0; i < reptiles.length; i++) {
  console.log(reptiles[i].toUpperCase());
  console.log(reptiles[i].toLowerCase());
}

// RETURN OF CLOSETS
