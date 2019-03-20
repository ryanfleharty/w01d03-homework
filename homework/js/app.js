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

