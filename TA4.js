function sumAll (a,b) {
    let result = 0;
    for (i = a; i<(b+1); i++){
        result += i;
    }
    console.log(result);
}

sumAll(2,5);