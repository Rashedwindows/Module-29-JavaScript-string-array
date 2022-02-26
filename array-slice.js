const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];

// --------------slice-------------
const numberSliced = numbers.slice(4, 8);

// console.log(numberSliced);

// console.log(numbers)


//--------------------------------------------------//


// ----------------------splice-----------------------

// splice to remove an element from an array


const numberSpliced =numbers.splice(4,3);

// console.log(numberSpliced);

// console.log(numbers);





// splice numebr to remove and inject number to removes empty field


const numbersNew = [2, 3, 5, 11, 23, 12, 28, 32, 45, 58];

const numbersNewSplicedInject = numbersNew.splice(3,4,99,78,42,43);

// console.log(numbersNewSplicedInject);
// console.log(numbersNew)
