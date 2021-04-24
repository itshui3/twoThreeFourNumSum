
// two num sum algos
import { 
    bf_twoNumberSum, 
    opt_twoNumberSum, 
    twoNumSumCases } from './twoNumSum';
// three num sum algos

// four num sum algos


// two num sum applications
for (let i = 0; i < twoNumSumCases.length; i++) {
    const bruteForceSolution = bf_twoNumberSum(
        twoNumSumCases[i].array, 
        twoNumSumCases[i].targetSum);
    const optimalSolution = opt_twoNumberSum(
        twoNumSumCases[i].array, 
        twoNumSumCases[i].targetSum);

    console.log(`
    brute force solution: [${bruteForceSolution}]
    optimal solution: [${optimalSolution+''}]
    expected: [${twoNumSumCases[i].expects+''}]
    `);
}