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
*/
//FIZZBUZZ
//Write a javascript application that logs all numbers from 1 - 100.
for(let i = 1;i<=100;i++)
//If a number is divisible by 3 log "Fizz" instead of the number.
{if (i % 5 === 0 && i % 3 === 0){console.log("FizzBuzz")}
//If a number is divisible by 5 log "Buzz" instead of the number.
else if (i % 5 === 0){console.log("Buzz")}
//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
else if (i % 3 === 0){console.log("Fizz")}
else {console.log(i)}}