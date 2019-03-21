//Easy Going
//1.
for (let i = 1; i <= 20; i++) {
	console.log(i);
}

//Get Even
//1.
for (let i = 0; i <= 200; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}
//Excited Kitten

const petThoughts1 = "Love me, pet me, HSSSSSSSS!";
const petThoughts2 = ["...human, why are you taking pictures of me?", "...the catnip made me do it.", "...why does the red dot always get away?"];

for (let i = 0; i < 20; i++) {
	if (i % 2 === 0) {
		const rand = petThoughts2[Math.floor(Math.random() * petThoughts2.length)];
	console.log(rand);
	} 
console.log(petThoughts1);
	}

//Fizz Buzz
for (let i = 1; i <= 100; i++) {
	if ((i % 3 === 0) && (i % 5 === 0)) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
	console.log(i);
}
}

//Getting To Know You
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];
//1. 
shahzad.shift();
console.log(shahzad);
//2.
daniel.splice(1, 1, 187);
console.log(daniel);
//3.
ryan.splice(2, 1, "Gotham City");
console.log(ryan);
//4.
reuben.pop();
reuben.push("Chicago");
console.log(reuben);
//5.
jim.pop();
jim.push("King's Landing", "Winterfell", "Braavos");
console.log(jim);
//6. Bonus
jim.splice(2, 1);
console.log(jim);

//Yell at the Ninja Turtles
//1.
const tmnt = ["Donatello", "Michaelangelo", "Leonardo", "Raphael"];
//2.
for (let i = 0; i < tmnt.length; i++) {
	tmnt[i] = tmnt[i].toUpperCase();
}
console.log(tmnt);

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
//1.
//const kristynsShoe = kristynsCloset[0];
thomsCloset[2].push(kristynsCloset.splice(0, 1)[0]);
console.log(kristynsCloset);
//console.log(kristynsShoe);
console.log(thomsCloset[2]);

//2. 
const kristynsOutfit = [
[
  "cowboy boots",
  "right sock",
  ],[
  "GA hoodie",
  "green pants",
  ],[
  "yellow knit hat",
  "marshmallow peeps"
  ]
];
const thomsOutfit = [
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
    "raybans",
    "left shoe"
  ]
];
thomsOutfit[2].push(kristynsOutfit.pop(2, 1)[0]);
thomsOutfit[2].splice(3, 1);
//kristynsOutfit[2].push(thomsOutfit[1].splice(1, 1)[0]);
kristynsOutfit[1].push(thomsOutfit[0].splice(3, 1)[0]);
kristynsOutfit[0].push(thomsOutfit[0].splice(1, 1)[0]);
kristynsOutfit[0].push(thomsOutfit[1].splice(0, 1)[0]);
kristynsOutfit[0].splice(1, 1)[0];
console.log("One of the outfits includes " + thomsOutfit[2] +".");
console.log("One of the outfits includes " + kristynsOutfit[1]);
console.log("One of the outfits includes " + kristynsOutfit[0]);

//Dirty Laundry
//1.
for (let i = 0; i < kristynsCloset.length; i++) {
console.log("WHIRR: Now washing " + kristynsCloset[i]);
};
//2.
for (let i = 0; i < thomsCloset.length; i++) {
console.log(thomsCloset);
};

























