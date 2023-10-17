/* Iteración 1 */

function sum(numberOne, numberTwo){
    if(numberOne > numberTwo){
        return numberOne;
    } else {
        return numberTwo;
    }
}

/* Iteración 2 */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 
'Spiderman', 'Captain M.'];

function findLongestWord(array) {
    let longestWord = array[0];
    for(let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }   
    }
    return console.log(longestWord);
}


findLongestWord(avengers);

/* Iteración 3 */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let sumNumbers = 0;
    for(i = 0; i < array.length; i++){
        sumNumbers += array[i];
    
    }
  return console.log(sumNumbers);
}

sumAll(numbers);

/* Iteración 4 */

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
    let averageNumbers = 0;
    for(i = 0; i < array.length; i++){
        averageNumbers += array[i] / array.length;
    }
    return console.log(averageNumbers);
}

average(numbers2)

/* Iteración 5 */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(array) {
    let sumMixed = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] === 'string'){
            sumMixed += array[i].length / array.length;
        }
    }
  return console.log(sumMixed)
}

console.log(mixedElements);

/* Iteración 6 */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
    let noRepeat = [];
    for (i = 0; i < array.length; i++) {
        if(!noRepeat.includes(array[i])) {
            noRepeat.push(array[i]);
        }
    }
    return console.log(noRepeat);
  }

removeDuplicates(duplicates);

/* Iteración 7 */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, value) {
    for(i = 0; i < array.length; i++) {
        if(array[i] === value){
            return console.log (true, i);
        } 
    }
    return console.log (false)
  }

  finderName(nameFinder, 'Jessica');


/* Iteración 8 */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(array) {
    for(i = 0; i < array.length; i++)
        if ()

    
  }