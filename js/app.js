// Easy Going: for loop that loops through numbers 1 through 20

for (let i=1; i<=20; i++){
    console.log(i)
};

// Get Even: for loop that will log only even numbers 0 through 200

for( let i=1; i<=200; i++){
    if (i % 2 === 0){
        console.log(i)
    }
};

// Excited Kitten: code that logs "Love me, pet me! HSSSSSS" 20 times

for (let i=1; i<=20; i++){
    if (i % 2 === 0){
        let x = Math.floor(Math.random() * 3);
        if (x === 0){
            console.log("...human...why you taking pictures of me?...")
        } else if (x === 1){
            console.log("...the catnip made me do it")
        } else {
            console.log("...why does the red dot always get away...")
        }
    } else {
        console.log("Love me, pet me! HSSSSSS")
    }
};

//Fizz Buzz: write a JS application that logs numbers 1-100, div by 3 fizz, div by 5 buzz, div by 3 & 5 fizzbuzz

for (let i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else if (i % 3 === 0){
        console.log("Fizz")
    } else {
        console.log(i)
    }
};

//Getting to Know You: Use the following arrays to answer the questions below (name, age, hometown)

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const rueben = ["Rueben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];



//1. Remove Kenny from kenny array and replace with Gameboy
  kenny.shift(); 
  kenny.unshift("Gameboy");
  //kenny.toString();
  //console.log(kenny);

//2. Increase jimClark birthday by 2 but do not hard code it
  jimClark[1] = jimClark[1] + 2;
  //jimClark.toString();
  //console.log(jimClark);

//3. Change ryan hometown to Gotham City
  ryan[2] = "Gotham City";
  //ryan.toString();
  //console.log(ryan);

//4. Remove Durham from rueben array and add Chicago
  rueben.pop();
  rueben.push("Chicago")
  //rueben.toString();
  //console.log(rueben);

//5. Remove All cities from jimHaff, replace with any 3 cities
  jimHaff.pop();
  jimHaff.push("Denver", "Chicago", "LA");
  //jimHaff.toString();
  //console.log(jimHaff);
//6. (bonus) remove the first of the 3 cities from jimHaff array
  jimHaff.splice(2, 1);
  //console.log(jimHaff);



//Yell at the Ninja Turtles: 


const turtleMembers = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let i=0; i < turtleMembers.length; i++){
    let bigTurtle = turtleMembers[i].toUpperCase();
    console.log(bigTurtle);
};


// Bonus: Modify the answer to have the letters alternate back and forth between upper and lowercase

//enter code here



