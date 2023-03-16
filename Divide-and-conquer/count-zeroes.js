// call the function findFirstZero() on arr
// if findFirstZero returns -1, then return 0;
// Otherwise return the difference between arr.length - firstZero
function countZeroes(arr) {
    let firstZero = findFirstZero(arr);
    if(firstZero === -1) {
        return 0;
    }
    return arr.length - firstZero
}

// The findFirstZero() function returns the index of the first 0 in arr
// If the last index (lastIdx) of arr is greater than the first index (firstIdx), meaning the array is not empty)
// Let the middle index (midIdx) equal the average of all indexes
// If midIdx is zero OR arr[midIdx - 1] === 1 (meaning the value at the index BEFORE midIdx is NOT 0) AND midIdx is zero
// Return midIdx, because it is the first zero in the array
// If the midIdx is 1, call the findFirstZero() function on the second half of the array
// Else if the midIdx of the second half of the array is 1, then repeat the findFirstZero() function on the first half of the array
// Repeat until midIdx = 0, and return the midIdx 
function findFirstZero(arr, firstIdx = 0, lastIdx = arr.length-1) {
    if (lastIdx >= firstIdx) {
        let midIdx = firstIdx + Math.floor((lastIdx - firstIdx) / 2)
        if ((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
            return midIdx;
        } else if (arr[midIdx] === 1) {
            return findFirstZero(arr, midIdx +1, lastIdx);
        }
        else return findFirstZero(arr, firstIdx, midIdx-1)
    }
    return -1
}
    
module.exports = countZeroes