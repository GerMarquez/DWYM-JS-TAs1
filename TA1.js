function repeatString (text, repeats) {
    let result = "";
    let counter = repeats;
    while(counter > 0) {
        result += `${text}
`;
        counter -=1;
    }
    console.log(result);
}

repeatString("hola", 5);