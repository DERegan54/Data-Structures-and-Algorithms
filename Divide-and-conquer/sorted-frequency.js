// sortedFrequency([1,1,2,2,2,2,3], 2) // 4
// sortedFrequency([1,1,2,2,2,2,3], 3) // 1
// sortedFrequency([1,1,2,2,2,2,3], 1) // 2
// sortedFrequency([1,1,2,2,2,2,3], 4) // -1



// We will define two helper functions that will be used to solve this problem
// The firstOccurence() function returns the index of the first occurence of num
// The lastOccurence() function returns the index of the first occurence of num
// We define firstIdx as the index of the first occurence of num in arr
// We define lastIdx as the index of the last occurence of num in arr
// If firstIdx == -1, then we return firstIdx because num is not present in arr
// Else, we subtract firstIdx+1 from lastIdx to get the frequency of num.

function sortedFrequency(arr, num) {
    let firstIdx = firstOccurence(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = lastOccurence(arr, num);
    return lastIdx-firstIdx + 1;
}

// The firstOccurence() function returns the index of the first occurence of num
// If the last index (lastIdx) of arr is greater than or equal to the first index (firstIdx), meaning the array is not empty)
// Let the middle index (midIdx) equal the average of all indexes
// If midIdx is 0 (meaning there is only one value in arr) OR num is greater than the value at the index to the left of midIdx 
// AND the value at midIdx is num (meaning num is not present before midIdx)
// Return midIdx, because it is the first occurence of num in the array
// Else if num is greater than the value at midIdx, call the firstOccurence() function on the second half of the array
// Else if the value at midIdx is less than num, then call the firstOccurence() function on the first half of the array
// Repeat until the value at midIdx = num and return the midIdx 
// If num is not in arr, return -1.

function firstOccurence(arr, num, firstIdx = 0, lastIdx = arr.length-1) {
    if (lastIdx >= firstIdx) {
        let midIdx = Math.floor((firstIdx + lastIdx) / 2)
        if ((midIdx === 0 || num > arr[midIdx - 1]) && arr[midIdx] === num) {
        return midIdx;
        } else if (num > arr[midIdx]) {
            return firstOccurence(arr, num, midIdx +1, lastIdx);
        } else return firstOccurence(arr, num, firstIdx, midIdx-1)
    }
    return -1
}


// The lastOccurence() function returns the index of the first occurence of num
// If the last index (lastIdx) of arr is greater than or equal to the first index (firstIdx)
// Let the middle index (midIdx) is equal to the average of firstIdx and lastIdx
// If midIdx ias equal to arr.length-1 OR num is less than one more than the value at the 
// value to the right of midIdx AND the value at midIdx is equal to num
// Then midIdx is the last occurence, so return midIdx
// Else if num is lest than the value at midIdx, 
// repeat lastOccurence() with the first half of the array
// Else repeat lastOccurence() with the second half of the array
// If num is not in the arr, return -1


function lastOccurence(arr, num, firstIdx = 0, lastIdx = arr.length-1) {
    if (lastIdx >= firstIdx) {
        let midIdx = Math.floor((firstIdx + lastIdx) / 2)
        if ((midIdx === arr.length-1 || num < arr[midIdx+1]) && arr[midIdx] === num)  {
            return midIdx;
        } else if (num < arr[midIdx]) {
            return lastOccurence(arr, num, firstIdx, midIdx-1)
        } else {
            return lastOccurence(arr, num, midIdx+1, lastIdx)
        }  
    }
    return -1
}

module.exports = sortedFrequency