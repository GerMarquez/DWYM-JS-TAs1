function duplicates (elemArray) {
    let counts = {};
    elemArray.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
    });

    console.log(counts);
}

duplicates(['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a']);
duplicates([0,2,3,1,0,1,1,1,3,2,4,5,5,6]);