console.log('Up and running');

// Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
// for (let i = 1; i <= 20; i += 1) {
//   console.log(i);
// }

// Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

// Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i = 0; i < 20; i++) {
  console.log('Love me, pet me! HSSSSSS!');
}

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//Fisher-Yates Shuffle algorithm recreated from StackExchange
function shuffle(arr) {
  let ctr = arr.length;
  let temp, i;

  while (ctr > 0) {
    //randomize
    i = Math.floor(Math.random() * ctr);

    //decrement counter because arrays begin at element[0].
    ctr--;

    //perform the swap
    temp = arr[ctr];
    arr[ctr] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i);

    let catStrings = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
    console.log(shuffle(catStrings)[0]);
  }
}
