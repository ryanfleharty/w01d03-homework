//Arrays, Loops, and Conditionals

//Easy Going
//1. Write a for loop that will log the numbers 1 through 20.

for (i = 1; i <= 20; i++) {
//    console.log(i);
}

//Get Even
//1. Write a for loop that will log only the even numbers in 0 through 200.

for (i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
//        console.log(i);
    }
}

//Excited Kitten
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (i = 1; i <= 20; i++) {
//    console.log('Love me, pet me! HSSSSSS!');
}


//2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let catPhrase = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];

for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        let random = catPhrase[Math.floor(Math.random()*catPhrase.length)];
        console.log(random);
    }
}