//Inside the directory created after you fork and clone, put your answers in app.js.
//Keep your answers organized! Included a commented header for each section in your answers file.
//If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later.
//After each section (even if you're not fully done with it), add and commit your work. Use the commit messages that you see at the end of each section. If you go back and fix a section, commit again with an updated message.
//When you are done with your homework, push to your fork and then and make a pull request.
/**
//Easy Going (Task 1)
for(i = 1; i <= 20; i++) {
  console.log(i);
}

//Get Even (Task 2)
for(i = 0; i <= 200; i+=2) {
  console.log(i);
}
**/
//Excited Kitten (Task 3)

//Math.round(Math.random() * 21) will get me 1 randomly generated number between 0 and 20 rounded to the nearest whole number.

let excitedCat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; {
for(i = 0; i <= 20; i++) {
  if(excitedCat[i] % 2 === 0) {
    i = Math.floor(Math.random() * 22);
    console.log("...why does the red dot always get away...");
} else {
  console.log("Love me, pet me! HSSSSSS!");
}
}
}

//Pseudocode: I want to know when an even number is generated, I want to generate a random number at that point, I want the random number to become the index number, and the console to log the phrase
//For every even number in your loop, log "...why does the red dot always get away..." at random.
