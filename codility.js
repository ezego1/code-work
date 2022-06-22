// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

const A = [ 1, 2, 3 ]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let result = 0;
    console.log(A.sort().slice(A.length - 1)[0])
    let smallest = null
    let index = 1

    // for(const [index, key ] of A.entries()) {
    //     console.log(index, key)

    // }

            while(smallest === null) {
                console.log(index)

                if(!A.includes(index)) {
                    smallest = index
                }
                index++
            }
     


    // for(let i = 0; i < A.length; i++) {
    //     console.log(i)
    //     if(i > 0 && !A.includes(i)) {
    //     for(const key of A) {
    //         console.log(key)
    //         if(!A.includes(i)){}
    //     }

    //     }
    // }
}

solution(A) 