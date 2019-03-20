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
	if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else if ((i % 3 === 0) && (i % 5 === 0)) {
		console.log('FizzBuzz');
	}
	console.log(i);
}






























