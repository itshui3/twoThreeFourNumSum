
type ThreeNum = [number, number, number];
export function notes_threeNumSum(
    array: number[], 
    targetSum: number
): ThreeNum[] {

    const availables: Set<number> = new Set();
    let numSums: ThreeNum[] = [];

    for (let i = 0; i < array.length; i++) {
        availables.add(array[i]);
    }

    for (let i = 0; i < array.length-1; i++) {

        for (let l = i+1; l < array.length; l++) {
            let missingNo = targetSum - (array[i] + array[l]);

            if (array[i] === missingNo || array[l] === missingNo) continue;

            if (availables.has(missingNo)) {
                let numSum: ThreeNum = [missingNo, array[i], array[l]];
                numSum = numSum.sort((a, b) => a-b);
                numSums.push(numSum);
            }
        }
    }

    return numSums.sort((a, b) => {
        if (a[0] !== b[0]) return a[0]-b[0];
        if (a[1] !== b[1]) return a[1]-b[1];
        return a[2] - b[2];
    });
}