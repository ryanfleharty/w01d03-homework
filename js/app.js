console.log('loaded');

// EASY GOING
for(i=0; i<=20; i++){
	console.log('number: ' + i);
}

// GET EVEN
for(i=0; i<=200; i+=2){
	console.log('even number is: ' + i);
}

// EXCITED KITTEN 
 for(let i = 1; i<=20; i++){
 	console.log("Love me, pet me! HSSSSS: " +i);
 for(let i = 1; i<=20; i+=2);
 	console.log("..the catnip made me do it..: " +i)
 }

 // FIZZ BUZZ
for(let i =1; i<=100; i++){
	if(i % 3 == 0)
			console.log("fizz");
	else if (i % 5 == 0)
			console.log("Buzz");
	else if (i % 15 == 0)
			console.log("FizzBuzz");
		else
		console.log(i);	
	}
	
// GETTING TO KNOW YOU

// 1.) 
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];


	shahzad.splice(0, "Gameboy");
	daniel.splice(0, 1, 187);




// YELL AT THE NINJA TURTLES

var ninjaTurtles = ["Donatello", "leonardo", "Rapheal", "Michealangelo"];

for(let i=0; i < ninjaTurtles.length; i++){

	console.log(ninjaTurtles[i].toUpperCase());
	console.log(i);
}
	
// RETURN OF CLOSETS

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
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

var move = kristynsCloset[0];

var endOf = thomsCloset.length 
// borken will come back to fix



// MULTIPLES OF 3 & 5
	for(let i=0; i<=1000; i++){
		if (i % 3 == 0)
			console.log('show number : ' +i);
		else if (i % 5 == 0)
			console.log('show number : ' +i);
		else  
			console.log(i);
	}


//
















