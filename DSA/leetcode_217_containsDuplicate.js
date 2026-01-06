// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Brute force O(n^2)

    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                return true
            }
        }
    }
    return false

    // Sorting and then comparing with the next element of array n(log n)

    const sortedNums = nums.sort();
    for(i=0;i<nums.length-1;i++){
        if(nums[i]===nums[i+1]){
            return true
        }
    }
    return false;

    // Using hash set and completing in O(n)

    checkDuplicates = new Set();
    for(i=0;i<nums.length;i++){
        if(checkDuplicates.has(nums[i])){
            return true
        }
        checkDuplicates.add(nums[i]);
    }
    return false
};