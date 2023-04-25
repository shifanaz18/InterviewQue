/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let pointer = 0;
    let ptrVal = nums[pointer];
    for (let i = 1; i < nums.length; i++) {
        if (ptrVal != nums[i]) {
            ptrVal = nums[i];
            pointer++;
            nums[pointer] = nums[i]
        }

    }
    return [pointer + 1, nums];

};


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))