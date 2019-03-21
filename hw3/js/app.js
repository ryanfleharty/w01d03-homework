//easy going
for(let i = 1; i < 20; i++){
console.log(+i);
}
//get even
for(let i = 0; i <= 200; i += 2){
  console.log(i);
}
//excited kitten
for(let i = 1; i <=20; i++){
  console.log('love me, pet me! HSSSSSS!');
  if (i % 2 == 0){
    let t1 = "...human...why you taking pictures of me?..."
    let t2 = "...the catnip made me do it..."
    let t3 = "...why does the red dot always get away..."
      let rand = Math.random()
        if (rand < .33){
          console.log(t1)
        } else if (rand > .33 && rand < .66) {
            console.log(t2);
        } else {
            console.log(t3);
        }
  }
}
