// Iteración 1 


function sum(numberOne, numberTwo) {
    if(numberOne > numberTwo){
        return numberOne;
    } else {
        return numberTwo;
    }
}


// Iteración 2 

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 
'Spiderman', 'Captain M.'];

function findLongestWord(wordList) {
    let longestWord = '';
    for(let word of wordList) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }      
    }
    return (longestWord)
}

console.log(findLongestWord(avengers));


/* Iteración 3 */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numberList) {
    let total = 0;
    for(num of numberList) {
        total += num;
    }
    return total;
}

console.log(sumAll(numbers))



// Iteración 4 

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let total = sumAll(numberList);

    return total / numberList.length;
}

console.log (average(numbers2));


// Iteración 5 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(mixedList) {
    let total = 0;
    for (item of mixedList) {
            if(typeof item === 'string') {
                total += item.length;
        } else if (typeof item === 'number') {
            total += item;
        }
    }
    return total;
}

console.log(averageWord(mixedElements))
    

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
  function removeDuplicates(wordList) {
    let noRepeat = [];
    for(word of wordList) {
        if(!noRepeat.includes(word)){
             noRepeat.push(word)
        }
    }
    return noRepeat;
  }

  console.log(removeDuplicates(duplicates));


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

function finderName(wordList, value) {
    const nameIndex = wordList.indexOf(value) 
    if (nameIndex === -1){
        return false;
    } else {
        return {
            ToV:true,
            index: nameIndex,
        }
    }
}
    
    
  

   
  console.log(finderName(nameFinder, 'Clint'));
   

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

  
function repeatCounter(wordList) {
    let elementCounter = {};
    for(element of wordList){
       if(!elementCounter.hasOwnProperty(element)) {
            elementCounter[element] = 0;
        }

        elementCounter[element] +=1;
    }

    return elementCounter;
        
}
   
  
  console.log(repeatCounter(counterWords));

    
  