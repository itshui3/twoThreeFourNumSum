// brute-force solution with time: O(n^2) | space: O(1)
export function bf_twoNumberSum(array: number[], targetSum: number) {
// Write your code here.
    let summations: number[][] = [];
    for (let i = 0; i < array.length-1; i++) {
        
        for (let l = i+1; l < array.length; l++) {
            if (array[i] + array[l] === targetSum) {
                summations.push( [array[i], array[l]] );
            }
        }
    }
    
    return summations;
}

// cache solution with time: O(n) | space: O(n)
export function cache_twoNumberSum(array: number[], targetSum: number) {
// Write your code here.
    let numCache: { [key: string]: boolean } = {};
    
    // track duplicates by hashing true at visited vals
    for (let i = 0; i < array.length; i++) {
        numCache[ array[i] ] = false;
    }

    let summations: number[][] = [];
    
    for (let i = 0; i < array.length; i++) {
    // if required constituents:
    // [0] have not yet been visited
        if (numCache[ array[i] ]) continue;
    // [1] is not a double of itself 
    // as integers are distinct, therefore there is only 1 even if it adds itself to targetSum
        if (array[i] === targetSum - array[i]) continue;
    // [2] are both available (array[i] assumed available)
        if ( (targetSum - array[i]) in numCache) {
    // assign visited flags to prevent collision
            [numCache[ array[i] ], numCache[ targetSum - array[i] ]] = [true, true];
            summations.push( [array[i], targetSum - array[i]] );
        }
    }
    
    return summations;
}

// optimal solution with time: O(n) | space: O(n)
export function optimal_twoNumberSum(array: number[], targetSum: number) {
// Write your code here.
    let numSet: Set<number> = new Set();
    let summations: number[][] = [];
    
    for (let i = 0; i < array.length; i++) {
        if (numSet.has(targetSum - array[i]) && targetSum - array[i] !== array[i] ) {
            summations.push([array[i], targetSum - array[i]]);
        }
        numSet.add(array[i]);
    }

    return summations;
}

export const twoNumSumCases = [
    // case 1
    {
    "array": [3, 5, -4, 8, 11, 1, -1, 6],
    "targetSum": 10,
    "expects": [[11, -1]]
    },
    // case 2
    {
    "array": [4, 6],
    "targetSum": 10,
    "expects": [[4, 6]]
    },
    // case 3
    {
    "array": [4, 6, 1],
    "targetSum": 5,
    "expects": [[4, 1]]
    },
    // case 4
    {
    "array": [4, 6, 1, -3],
    "targetSum": 3,
    "expects": [[6, -3]]
    },
    // case 5
    {
    "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "targetSum": 17,
    "expects": [[8, 9]]
    },
    // case 6
    {
    "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    "targetSum": 18,
    "expects": [[3, 15]]
    },
    // case 7
    {
    "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7],
    "targetSum": -5,
    "expects": [[-5, 0]]
    },
    // case 8
    {
    "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
    "targetSum": 163,
    "expects": [[210, -47]]
    },
    // case 9
    {
    "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
    "targetSum": 164,
    "expects": []
    },
    // case 10
    {
    "array": [3, 5, -4, 8, 11, 1, -1, 6],
    "targetSum": 15,
    "expects": []
    },
    // case 11
    {
    "array": [14],
    "targetSum": 15,
    "expects": []
    },
    // case 12
    {
    "array": [15],
    "targetSum": 15,
    "expects": []
    }
]