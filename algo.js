// 3194. Minimum Average of Smallest and Largest Elements



// You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

// You repeat the following procedure n / 2 times:

// Remove the smallest element, minElement, and the largest element maxElement, from nums.
// Add (minElement + maxElement) / 2 to averages.
// Return the minimum element in averages.



/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    
    nums.sort((a,b) => a-b)
    let array = []


    for(let i = 0; i < nums.length; i++){
        let sum = nums[i] + nums[nums.length - i - 1]
        let average = sum / 2
        array.push(average)
    }

    array.sort((a,b) => a-b)
    return array[0]
};