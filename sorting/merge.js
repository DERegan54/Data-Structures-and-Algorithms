function merge(arr1, arr2) {
    const output = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        output.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        output.push(arr2[j]);
        j++;
    }
    return output;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};