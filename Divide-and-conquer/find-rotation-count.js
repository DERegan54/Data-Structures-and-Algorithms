// The solution below assumes that the number of items to the left of the pivot index
// is the same as the rotation count.
// If the array is empty, return -1
// Define pivotIdx as what is returned when findPivotIdx() is called on arr
// Define count as pivotIdx
// return count 

// function findRotationCount(arr) {
//     if(arr.length === 0) return -1;
//     let pivotIdx = findPivotIdx(arr);
//     let count = pivotIdx;
//     return count;
//     }    

// The helper function findPivotIdx returns the only index in the sorted array where 
// it's value is greater than the value of the next index to the right.
// If the length of the array is 0, return -1 because the array is empty.
// Loop through array and find the index where the value at the index to the right
// is less than the value at arr[i].  
// Define pivotIdx as i+1
// Return pivotIdx
// If there is no index where arr[i+1] < arr[i], return -1.

// function findPivotIdx(arr) {
//     for(let i=0; i<=arr.length; i++) { 
//         if (arr[i] > arr[i+1]) {
//             let pivotIdx = i+1;
//             return pivotIdx;
//         } else return 0;
//     }
// }



// FROM SPRINGBOARD'S SOLUTION:
// line 53: The findRotationCount() function takes an array that has been rotated
//      and finds the number of times it has been rotated
// line 54: If the highest index (high) is less than the lowest index (low), return 0 (Not sure how 
//      this is possible)
// line 55: If the high is equal to the low index, return low, (meaning the array contains only one item).
// line 56: Define mid as the average between low and high
// line 57: If mid is less that high AND the value at the arr[mid+1] is less than the value at the arr[mid]
//      (meaning the value at the index to the right of mid is the pivot point)
// line 58: Return mid+1 (meaning the array is rotated once per value up to that point)
// line 60: If the mid is greater than low AND the value at mid is less than the value to the left of mid
//      (meaning mid is the pivot point)
// line 61: Return mid (meaning the array rotated once per value up to that point)
// line 63: If the value at high is greater than the value at mid (meaning the pivot point is in the first half of the array)
// line 64: Call findRotationCount() on the first half of the array
// line 66: Else call findRotationCount() on the second half of the array.


function findRotationCount(arr, low = 0, high = arr.length-1) {
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2);
    if(mid < high && arr[mid+1] < arr[mid]) {
        return mid+1;
    }
    if (mid > low && arr[mid] < arr[mid-1]) {
        return mid;
    }
    if (arr[high] > arr[mid]) {
        return findRotationCount(arr, low, mid-1)
    } else {
        return findRotationCount(arr, mid+1, high)
    }
}



module.exports = findRotationCount