function leapYears (año) {
    if (año % 4 === 0 || año % 100 === 0 && año % 400 === 0) {
        console.log("YES");
    } else {console.log("no");}
}

leapYears(2020);
leapYears(2021);
leapYears(2022);
leapYears(2023);
leapYears(2024);