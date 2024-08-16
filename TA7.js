function findTheOldest (booksA) {
    for (let current of booksA) {
        let {title,author} = current;
        console.log(title);
    }
}

const people = [{title: 'Book',author: 'Name'},{title: 'Book2',author: 'Name2'},{title: 'Book3',author: 'Name3'}];
findTheOldest(people);
  