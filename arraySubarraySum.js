// arraySubarraySum.js

/**
 * Function to determine if there exists a contiguous subarray within the array that sums up to the target.
 * @param {number[]} arr - The array of integers.
 * @param {number} target - The target sum.
 * @returns {boolean} - True if such a subarray exists, otherwise false.
 */
function hasSubarrayWithSum(arr, target) {
    let currentSum = 0;
    const sumMap = new Map();
    sumMap.set(0, -1); // Handle case when subarray starts from index 0

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (sumMap.has(currentSum - target)) {
            return true;
        }

        sumMap.set(currentSum, i);
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // true
