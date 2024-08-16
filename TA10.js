function getSum (arrayNums) {
    let sum = arrayNums.reduce((x,y) => x+y);
    console.log(sum);
}

getSum([1,2,3,4,5,6,7,8,9,10]);