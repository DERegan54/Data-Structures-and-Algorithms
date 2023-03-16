// First we make sure that the array is not empty
// Then we find the pivot index (pivotIdx)
// If pivotIdx > 0 AND num >= arr[0] AND num <= arr[pivotIdx]
// Call binarySearch(arr, num, 0, pivotIdx), meaning call binarySearch() on the first half
// Else call binarySearch( arr, num, pivotIdx+1, arr.length-1), meaning call binarySearch() on second half

function findRotatedIndex(arr, num, lowIdx=0, highIdx=arr.length-1) {
    if(arr.length === 0) return 0;
    let pivotIdx = findPivotIdx(arr);
    if(pivotIdx > 0 && num >= arr[0] && num <= arr[pivotIdx]) {
        return binarySearch(arr, num, 0, pivotIdx);
    } else {
        return binarySearch(arr, num, pivotIdx + 1, arr.length-1);
    }  
}

// The binarySearch() function searches array (or sub-array) for num 
// If the array is empty, return -1 (meaning num is not in the array)
// If num is less than the value at lowIdx OR if num is greater than the 
// value at highIdx, return -1 (meaning num is not in the array)
// Loop through the array while lowIdx is less than or equal to highIdx
// Let the middle index (midIdx) equal the average of all indexes in the array
// If the value at midIdx is equal to num, return midIdx
// If the value at midIdx is less than the value at midIdx, make midIdx the new 
// highIdx and repeat loop
// Else make midIdx + 1 the new lowIdx and repeat.

function binarySearch(arr, num, lowIdx, highIdx) {
    if (num < arr[lowIdx] || num > arr[highIdx]) return -1;
    while(lowIdx <= highIdx){
        let midIdx = Math.floor((lowIdx + highIdx) / 2);
        if(arr[midIdx] === num) {
            return midIdx;
        } else if(num < arr[midIdx]){
            highIdx = midIdx -1;
        } else {
            lowIdx = midIdx +1;
        }
    }
    return -1;
}

// FindPivotIdx() finds the only value in the rotated array where the value to the right of it is smaller.
// While i is less than or equal to arr.length-1
// If arr[i] > arr[i+1] 
// let pivotIdx = i
// return pivotIdx
function findPivotIdx(arr) {
    for(let i=0; i<=arr.length; i++) { 
        if (arr[i] > arr[i+1]) {
            let pivotIdx = i;
            return pivotIdx;
        }
    } 
}

module.exports = findRotatedIndex