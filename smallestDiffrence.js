/* Smallest Difference
Difficulty
Harder

Concepts
Algorithms, Runtime


Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition.Gayle Laakmann McDowell, Career Cup(Palo Alto, CA). 2015.

This is a short - length challenge, but requires some clever thinking.

Given two lists, find the smallest difference(subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference. */


// const smallestDif = (arr1, arr2) => {
//     let answer = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (j === i) {
//                 let difference = arr2[j] - arr1[i]
//                 answer.push(difference)
//             }
//         }
//     }
//     return Math.min(...answer)
// }


let arr1 = [10, 20, 14, 16, 18]
let arr2 = [30, 23, 54, 33, 96]

const smallestDif = (arr1, arr2) => {
    let i = 0, j = 0;
    arr1.sort()
    arr2.sort()
    let minDiff = Math.abs(arr1[0] - arr2[0])
    while (i < arr1.length && j < arr2.length) {
        minDiff = Math.min(minDiff, Math.abs(arr1[i] - arr2[j]));
        if (arr1[i] < arr2[j]) ++i;
        else ++j;
    }
    return minDiff


}


console.log(smallestDif(arr1, arr2))