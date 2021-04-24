
// two num sum algos
import { 
    bf_twoNumberSum, 
    cache_twoNumberSum, 
    optimal_twoNumberSum,
    twoNumSumCases } from './twoNumSum';
// three num sum algos

// four num sum algos


// two num sum applications
for (let i = 0; i < twoNumSumCases.length; i++) {
    const bruteForceSolution = bf_twoNumberSum(
        twoNumSumCases[i].array, 
        twoNumSumCases[i].targetSum);
    const cacheSolution = cache_twoNumberSum(
        twoNumSumCases[i].array, 
        twoNumSumCases[i].targetSum);
    const optimalSolution = optimal_twoNumberSum(
        twoNumSumCases[i].array, 
        twoNumSumCases[i].targetSum);

    console.log(`
    brute force solution: [${bruteForceSolution}]
    cache solution: [${cacheSolution}]
    optimal solution: [${optimalSolution}]
    expected: [${twoNumSumCases[i].expects}]
    `);
}