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

