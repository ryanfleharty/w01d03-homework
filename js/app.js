//EASY GOING
//Write a for loop that will log the numbers 1 through 20.
/*for (let i = 1;i<=20;i++){
    console.log(i)
}
//GET EVEN
//Write a for loop that will log only the even numbers in 0-200.
for (let i=0;i<=200;i+=2){
    console.log(i);
}

//EXCITED KITTEN
//Write a code that logs "Love me, pet me! HSSSSSS!" 20 times,
For every even number in your loop, log 
"...human...why you taking pictures of me?...", 
"...the catnip made me do it...", or 
"...why does the red dot always get away..." at random.
*/
    for (let i=1;i<=20;i++){
        let speakMeow = Math.floor(Math.random(i)*(4-1)+1)
        if (i%2===0 && speakMeow ===1){
            console.log("..human...why you taking pictures of me?...")
        }
        else if (i%2===0 && speakMeow ===2){
            console.log("the catnip made me do it...")
        }
        else if (i%2===0 && speakMeow ===3){
            console.log("...why does the red dot always get away...")
        }
     else {console.log("Love me, pet me! HSSSSSS!")}}