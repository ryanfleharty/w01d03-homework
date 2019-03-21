console.log('Day 3 HW');

//Easy Going
for(let i = 0; i <= 20; i++){
	console.log(i);
}

//Get Even
for(let i = 0; i <= 200; i+=2){
	console.log(i);
}

//Excited Kitten
//1. 
for(let i = 0; i < 20; i++){
	console.log("Love me, pet me! HSSSSSS");
}
//2.
let catWords = ["...human...why you taking pictures of me?...", 
"...the catnip made me do it...", 
"...why does the red dot always get away..."];
let arrayLength = catWords.length;

for(let i = 0; i < 20; i++){
	if(i % 2 === 0){
		let random = Math.floor(Math.random() * arrayLength);
		console.log(catWords[random]);
	}
}

//Fizz Buzz
for(let i = 1; i <=100; i++){
	if ((i % 3 === 0) && (i % 5 === 0)) {
		console.log("Fizz Buzz");
	} else if(i % 3 === 0){
		console.log("Fizz");
	} else if(i % 5 === 0){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

//Getting to Know You
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//1.
shahzad.shift();
console.log(shahzad);
shahzad.unshift("Gameboy");
console.log(shahzad);

//2.
daniel[1] = daniel[1] + 1;
console.log(daniel);

//3.
ryan.pop();
console.log(ryan);

ryan.push("Gotham City");
console.log(ryan);

//4.
reuben.pop();
console.log(reuben);

reuben.push("Chicago");
console.log(reuben);

//5.
jim.splice(2, 1, "Sydney", "London", "Brisbane");
console.log(jim);

//6.
jim.splice(2,1);
console.log(jim);

