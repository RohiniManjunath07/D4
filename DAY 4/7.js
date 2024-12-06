/*1. Write a program that removes duplicate values from an array of numbers. For example, [1, 2, 2, 3, 4, 4, 5] should become [1, 2, 3, 4, 5] •
Question 1: Write a JavaScript program that takes an array of numbers, removes duplicates, and returns a new array with unique values only without using inbuilt function.
2. Finding the Longest Word in a Sentence
Write a program that finds the longest word in a given sentence. If there are multiple words of the same length, return the first one.
Question 1: Write a JavaScript program that takes a sentence as input and returns the longest word using a loop. write it without using a function*/
array = [1, 2, 2, 3, 4, 4, 5];
uniqueArray = [];
for (i = 0; i < array.length; i++) {
    isDuplicate = false;
    for (j = 0; j < uniqueArray.length; j++) {
        if (array[i] === uniqueArray[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueArray.push(array[i]);
    }
}
console.log(uniqueArray);