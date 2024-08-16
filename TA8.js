function findTheOldest (peopleArray) {
    const ages = peopleArray.map((x) => x['yearOfDeath'] - x['yearOfBirth']);
    let max = ages[0];
    let maxIndex = 0;

    for (let i = 1; i < ages.length; i++) {
        if (ages[i] > max) {
            maxIndex = i;
            max = ages[i];
        }
    }

    console.log(peopleArray[maxIndex]);
}

const people = [{name: "Carly",yearOfBirth: 1942,yearOfDeath: 1970,},{name: "Ray",yearOfBirth: 1962,yearOfDeath: 2011,},{name: "Jane",yearOfBirth: 1912,yearOfDeath: 1941,}];
findTheOldest(people);
  