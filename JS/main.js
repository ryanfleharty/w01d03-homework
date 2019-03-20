//1. Easy Going
for ( var i = 1; i < 20; i++) {
  console.log(i)
}

//1. Get Even
for (var i = 0; i < 200; i+=2)
console.log(i)

//1. Excited Kitten 
for (var i = 0; i < 20; i++)
console.log('Love me, pet me! HSSSSSS')

//2. 
const cat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (var i = 0; i < 20; i+=2) {
var x = Math.floor(Math.random() * 3);
console.log(cat[x]) 
}
 //1. Fizzbuzz
 for (var i = 1; i <= 100; i++) {
console.log(i) 
}
//2. 
for (var i = 1; i <= 100; i++) {
    if ( i % 3 === 0 );
    console.log("Fizz") 
}
//3.
for (var i = 1; i <= 100; i++) {
    if ( i % 5 === 0 );
    console.log("Buzz") 
} 
//4. 
for (var i = 1; i <= 100; i++) {
    if ( i % 15 === 0 );
    console.log("FizzBuzz") 
}

//1. Getting to Know you 
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//1. 
shahzad[0] = 'Gameboy';
console.log(shahzad[0])
 
//2.
daniel[1] += 1; 
console.log(daniel[1]);

//3. 
ryan[2] = "Batman";
console.log(ryan[2])

//4. 
reuben[2] = "Chicago";
console.log(reuben[2])

//5. 
console.log(jim[2])


//1. Yell at the Ninja Turtles 
var ninjaTurtle = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

//2. 
console.log(ninjaTurtle.map(a => a.toUpperCase()));


//1. Return of Closets 

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
  //.1 Alien Attire
  var kristynsShoe = kristynsCloset[0];
  thomsCloset[2].push(kristynsShoe);
  thomsCloset.shift();
  console.log(thomsCloset) 

  //.1 Dress'em Up

kristynsCloset.forEach(function(element) {
    var x = Math.floor(Math.random() * 9);
    console.log(kristynsCloset[x])
})

thomsCloset.forEach(function(element) {
    var x = Math.floor(Math.random() * 9);
    console.log(thomsCloset[x])
})
//1. Dirty Laundry 
for (var i = 0; i < kristynsCloset.length; i++) {
    if (kristynsCloset[i] === true)
    console.log("WHIRR Now washing ([i])")
}
//1. Inventory
for (var i = 0; i < thomsCloset; i++) {
let thomsCloset = arr[0, 1, 2];
console.log(arr[i]);
}