// findFloor() takes in an array of number sorted from least to greatest (arr), and a number x.  
//      It returns the largest element in the array that is smaller than or equal to x.
// line 30: If the number at the lowest index (low) is greater than the number at the highest index (high)  
//      (not sure how this is possible)
// line 31: ...return -1 because there is no floor.
// line 33: If x is greater than the number at the highest index (high)...
// line 34: ...return arr[high] because the number x is higher than all of the
//      numbers in the array, so the floor would be the number at the highest index.
// line 36: Define middle index (mid) as the average between low and high.
// line 37: If the number at arr[mid] is equal to the number x...
// line 38: ...return arr[mid], because it is the floor.
// At this point we know that: 
        // - The array is not empty
        // - The floor is not arr[high]
        // - x is not less that arr[low]  
        // - x is not equal to arr[mid]
// line 39: If mid > 0 (meaning the array has more than one element),
//      AND x is greater than or equal to the number to the left of arr[mid],
//      AND x is less than arr[mid]...
// line 40: ...return arr[mid-1], because x is between arr[mid-1] and arr[mid], so arr[mid - 1] is the floor.
// At this point we know that floor is either:
        // -  less than arr[mid -1] 
        //          OR
        // - between arr[mid] and arr[high]
// line 41: If x is less than arr[mid]...    
// line 42: ... run findFloor(arr, x, low=1 and high = mid-1)
// line 44: else run findFloor(arr, x, low = mid +1, high = arr.length-1).

function findFloor(arr, num, low=0, high=arr.length-1) {
    if (low > high) {
        return -1;
    }
    if(num >= arr[high]){
        return arr[high];
    } 
    let mid = Math.floor((low + high) / 2);
    if(arr[mid] === num){
        return arr[mid];
    } else if(mid > 0 && arr[mid-1] <= num && num < arr[mid]) {
        return arr[mid - 1];
    } else if(num < arr[mid]) {
        return findFloor(arr, num, low, mid-1);
    } else {
        return findFloor(arr, num, mid + 1, high);
    }
}

// QUESTION : Why does starting with the line below cause tests case 1 to fail?
//      if(arr.length === 0 || num < arr[low]) return -1 

module.exports = findFloor