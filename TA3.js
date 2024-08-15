function removeFromArray (array,item) {
    let result = Array.from(array).filter((element) => element !== item);
    console.log(result);
}

removeFromArray("holololo", 'o');
removeFromArray([1,2,3,4,5,6,7,8,9], 5)