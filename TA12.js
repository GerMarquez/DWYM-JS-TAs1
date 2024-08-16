function generatePassword (length) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&/()=";
    let finalPass = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        finalPass += charset.charAt(Math.floor(Math.random() * n));
    }
    return finalPass;
}

console.log(generatePassword(10));
console.log(generatePassword(15));
console.log(generatePassword(15));