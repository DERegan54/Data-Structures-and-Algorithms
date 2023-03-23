/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if(i === nums.length) return 1; 
  return nums[i] * product(nums, i + 1);
}
product([2,3,4]) // 24


/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, lengthOfLongest = 0) {
  if(i === words.length) return lengthOfLongest;
  if(words[i].length >= lengthOfLongest){
    lengthOfLongest = words[i].length;
  } 
  return longest(words, i+1, lengthOfLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr='') {
  if(i >= str.length) return newStr; 
  newStr += str[i];
  return everyOther(str, i+2, newStr);
  } 
  

/** isPalindrome: checks whether a string is a palindrome or not. */

// Solution:
function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return findIndex(arr, val, i+1);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  let newItem = str[str.length - i - 1];
  newStr += newItem;
  return revString(str, i + 1, newStr);
}


/** gatherStrings: given an object, return an array of all of the string values. */

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


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

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
