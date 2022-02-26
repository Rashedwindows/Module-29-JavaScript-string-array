// -------split--------//

const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';

// console.log(anthem)

const word = anthem.split(' ');

// console.log(word)


const withOutA = anthem.split('a');

// console.log(withOutA)


// -------slice----------//

const wordSlice = anthem.slice(5, 28 );


// console.log(wordSlice);

// --------substr------//

const anotherPart = anthem.substr(11,16);

// console.log(anotherPart)


// -----substring---------//

const anotherAnotherPart = anthem.substring(5,28);

// console.log(anotherAnotherPart)





// ---------------------concat------------------//


const first = 'Dhaka';

const second = 'City';

// const fullstring = first.concat(second);

const fullstring = first.concat(second).concat('Mafia');

// console.log(fullstring)


// ---------join----------//

const word2 = ['alim', 'badhon', 'cameron', 'david'];

// const wordJoin = word2.join('');

// const wordJoin = word2.join(' ');

// const wordJoin = word2.join(',');

const wordJoin = word2.join(' , ');

console.log(wordJoin)