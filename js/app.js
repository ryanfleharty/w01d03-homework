//|=========================================|
//|											|
//|			  Collin Brockway				|
//|			SEI w01d03-homework				|
//|			      3-20-2019					|
//|											|
//|=========================================|

//Indicate successful loading:
console.log("app.js loaded");

//=======EASY GOING=======

//for loop which logs the numbers 1 through 20
for (let i = 1; i <= 20; i++)
{
	console.log(i);
}

//=======GET EVEN=======

//for loop which logs only even numbers between 0 and 200
for (let i = 0; i <= 200; i = i + 2)
{
	console.log(i);
}

//=======EXCITED KITTEN=======

//for loop which logs kitten message 20 times
for (let i = 0; i < 20; i++)
{
	console.log("Love me, pet me! HSSSSSS!");
	if (i % 2 == 0) //for every even index
	{
		switch (Math.floor(Math.random() * 3))
		{
			case 0:
				console.log("...human...why you taking pictures of me?...");
			break;
			case 1:
				console.log("...the catnip made me do it...");
			break;
			case 2:
				console.log("...why does the red dot always get away...");
			break;
		}
	}
}


//=======FIZZ BUZZ=======

//the fizz buzz exercise


for (let i = 1; i <= 100; i++)
{
	console.log( ((!(!(i % 3) || !(i % 5)) && i) || "") + ((!(i % 3) && "Fizz") || "") + ((!(i % 5) && "Buzz") || "") );
}


//=======GETTING TO KNOW YOU=======

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad[0] = "Gameboy";
daniel[1]++;
ryan[2] = "Gotham City";
reuben.pop(); reuben.push("Chicago");
jim.pop(); jim.push("Boise", "Boston", "London");
jim.splice(2, 1);



//=======YELL AT THE NINJA TURTLES=======

const turtles=["Donatello", "Leonardo", "Raphael", "Michelangelo"];

for (let i = 0; i <= 3; i++)
{
	console.log(turtles[i].toUpperCase());
}


//=======RETURN OF THE CLOSETS=======

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

let kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0,1);
thomsCloset[2].push(kristynsShoe);

console.log("Kristen's outfit is: " + kristynsCloset[2] + " and " + kristynsCloset[3]);
console.log("Thom's first outfit is: " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and " + thomsCloset[2][1]);
console.log("Thom's second outfit is: " + thomsCloset[0][1] + ", " + thomsCloset[1][2] + ", and " + thomsCloset[2][2]);
console.log("Let it be noted that Thom has very bad fashion sense.");

for (let i = 0; i <= 5; i++)
{
	console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

for (let i = 0; i <= 2; i++)
{
	console.log(thomsCloset[i]);
}