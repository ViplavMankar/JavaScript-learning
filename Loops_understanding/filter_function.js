// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const valuesAfterFilter = myNums.filter((num) => {
    return num>4
})
// console.log(valuesAfterFilter);

const valuesAfterFilter2 = myNums.filter((num) => num>4)
// console.log(valuesAfterFilter2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const filteredBooks = books.filter((bk) => bk.publish < 1990  && bk.edition > 2000) 
  // In filter method, you can give a condition and if that condition is true for a num value while iterating the list,
  // then that particular value is returned, as in 'filtered'

//   console.log(filteredBooks);

  const bookList = books.filter((bk) => bk + 10)
  console.log(bookList);
  
  
