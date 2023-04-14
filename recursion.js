// line 6: product: calculate the product of an array of numbers. It takes in an array of 
//         nums and defines the index of the array as 0 because that is where the function begines multiplying
// line 7: If the index we are multiplying is equal to the length of the array, return 1 
// line 8: Otherwise beginning at index 0, multiply the value at that index by the value you get when you 
//        call product recursively on nums and i+1
function product(nums, i=0) {
  if(i === nums.length) return 1; 
  return nums[i] * product(nums, i + 1);
}

// line 18: longest: return the length of the longest word in an array of words. It takes in in an array of words, 
//        a variable index i=0, and a variable lengthOfLongest=0
// line 19: If index is equal to the length of the words array, then lengthOfLongest = 0 because there are no words
//        in the array
// line 20: If the length of the word at index is greater than the current lengthOfLongest...
// line 22: ...then redefine lengthOfLongest to be the length of the word at index i
// line 23: Return: call longest() recursively on words, i+1 and the current lengthOfLongest
function longest(words, i = 0, lengthOfLongest = 0) {
  if(i === words.length) return lengthOfLongest;
  if(words[i].length >= lengthOfLongest){
    lengthOfLongest = words[i].length;
  } 
  return longest(words, i+1, lengthOfLongest);
}

// line 31: everyOther: return a string with every other letter.  Takes in a string called  str, an index i=0, and a variable newStr=''
// line 32: If the index of the character you are at in the input string is greater than or equal to the length of the input string, 
//        return newStr;
// line 33: Otherwise add the character of the input string that you are at, then add that character to newStr
// line 34: returning call everyOther recursively on str, i+2, and newStr.
function everyOther(str, i = 0, newStr='') {
  if(i >= str.length) return newStr; 
  newStr += str[i];
  return everyOther(str, i+2, newStr);
  } 
  

// line 45: isPalindrome: checks whether a string is a palindrome or not. Takes in a string called str, and index called idx=0
// line 46: Define leftIdx as the leftIdx = idx
// line 47: Define rightIdx as rightIdx = str.length-idx-i
// line 48: If leftIdx is greater than or equal to rightIdx (meaning the two indices have met in them middle, so therefore 
//        both the leftIdx and rightIdx are equal all the way through, so return true
// line 49: If the value at leftIdx of str is not equal to the value at rightIdx of str, then return false
// line 50: returning: call isPalindrome recursively on str and adding one to idx to compare the next left and right indices
function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

// line 58: findIndex: return the index of val in arr (or -1 if val is not present). Takes in an array called arr,
//        a value called val, and an index called i=0
// line 59: If i (the index you are looking at) is equal to the length of the array, return -1 because the val was not found
// line 60: If the value at the index i of the input array is equal to the value, you have found it, so return i
// line 61: returning call findIndex() recursively on the input arr, val and i+1 to compare the next value in the array to the target val.
function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return findIndex(arr, val, i+1);
}

// line 70: revString: return a copy of a string, but in reverse. Takes in a string called str, an index called i=0 and 
//        a new string called newStr = ""
// line 71: If newStr.length is equal to str.length, return newStr because you have finished reversing the input string
// line 72: Define newItem as the character at the index str.length-i-1 (the last character of the string)
// line 73: add newItem to newStr
// line 74: returning call revString() recursively on str, i+1 and newStr
function revString(str, i = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  let newItem = str[str.length - i - 1];
  newStr += newItem;
  return revString(str, i + 1, newStr);
}


// line 87: gatherStrings: given an object, return an array of all of the string values. 
// line 88: Define arrOfStrings as an empty array where you will store the strings that you gather from the input object
// line 89: Loop over the keys in the input object
// line 90: For each key, if the key's data type is "string"...
// line 91: Push the key's value into the arrOfStrings
// line 92: Else if the key's data type is "object"...
// line 93: call gatherString on the object at that key, and then push the result into arrOfStrings
// line 96: return arrOf Strings

function gatherStrings(obj) {
  let arrOfStrings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arrOfStrings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arrOfStrings.push(...gatherStrings(obj[key]));
    }
  }
  return arrOfStrings;
}


// line 109: binarySearch: given a sorted array of numbers, and a value, return the index of that value (or -1 if val is not present). */
// line 109: Add leftIdx=0 (the first value in the array) and rightIdx=arr.length (the last value in the array) to the arguments passed into the function
// line 110: If leftIdx is greater than rightIdx, return -1 because that's not really possible
// line 111: Define midIdx (the index at the midpoint of the array) as the average of the rightIdx and leftIdx, floored
// line 112: If the value at the midIdx of the arr is equal to the target value, return midIdx, because we found the target value
// line 113: If the value at the midIdx of the array is greater than the target value...
// line 114: Returning: call binarySearch() recursively on the lower half of the array by passing in midIdx-1 where rightIdx was the previous time the function was called
// line 115: Else...
// line 116: ... Returning: call binarySearch() recursively on the upper half of the array by passing in midIdx+1 where the left index was the previous time the function was called 
function binarySearch(arr, val, leftIdx=0, rightIdx=arr.length) {
  if(leftIdx > rightIdx) return -1;
  let midIdx = Math.floor((rightIdx + leftIdx) / 2);
  if(arr[midIdx] === val) return midIdx;
  if(arr[midIdx] > val) {
    return binarySearch(arr, val, leftIdx, midIdx - 1) 
  } else {
    return binarySearch(arr, val, midIdx + 1, rightIdx)
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
