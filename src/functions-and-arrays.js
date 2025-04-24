// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(maxOfTwoNumbers(-1, 9));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length === 0) {
        return null;
    }
    let longest = words[0];
    for(let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;

    for ( let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function sumNumbers(numbers2) {
    let sum = 0;

    for ( let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    }
    return sum;
}
console.log(sumNumbers(numbers2));

function averageNumbers(numbers2) {
    if (!numbers2.length) {
        return 0;
    }
    return sumNumbers(numbers2)/ numbers2.length;
}
console.log(averageNumbers(numbers2));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

let emptyArray = [];

function doesWordExist(words, findWord) {
    if (words.length === 0) {
        return null;
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i] === findWord) {
            return true;
        }
    }
    return false;
}
console.log(doesWordExist(words2, "machine"));