# Big-O Notation Practice


### Step One: Simplifying Expressions

1. O(n+1) --> **O(n)** (correct on first try)
2. O(100 * n) --> **O(n)** (correct on first try)
3. O(25) --> **O(1)** (correct on first try)
4. O(n^2 + n^3) --> **O(n^3)** (needs review - my first answer was O(n!)) 
5. O(n+n+n+n) --> **O(n)** (correct on first try)
6. O(1000 * log(n)+n) --> **O(n)** (needs review - my first answer was O(nlog(n)))
7. O(1000 * n * log(n) + n) --> **O(nlog(n))** (correct on first try)
8. O(2^n + n^2) --> **O(2^n)** (needs review - my first answer was O(n^2))
9. O(5+3+1) --> **O(1)**  (correct on first try)
10. O(n + n^(1/2) + n^2 + n * log(n^10)) --> **O(n^2)** (needs review - this one baffles me!)



### Step Two: Calculating Time Complexity

function logUpTo(n) {
    for(let i=1; i<=n; i++) {
        console.log(i);
    }
}

Time Complexity: **O(n)** (correct on first try)


function logAtLeast10(n) {
    for(let i=1; i<=Math.max(n, 10); i++) {
        console.log(i);
    }
}

Time Complexity: **O(n)** (correct on first try)


function logAtMost10(n) {
    for(let i=1; i<=Math.min(n,10); i++) {
        console.log(i);
    }
}

Time Complexity: **O(1)** (needs review) 
* Question: My first answer was O(n).  Is it O(1) because the function only requires
at most 10 operations, which is not a significant number?


function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for(let i=0; i<array.length; i++) {
        if(i % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

Time Complexity: **O(n)** (correct on first try)


function subtotals(array) {
    let subtotalArray = [];
    for(let i=0; i<array.length; i++) {
        let subtotal = 0;
        for(let j=0; j<=i; j++) {
            subtotal += array[j];
        }
        subtotalArray.push(subtotal);
    }
    return subtotalArray;
}

Time Complexity: **O(n^2)** (correct on first try)


function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
    for(let char of str) {
        if(vowels.includes(char)) {
            if(char in vowelCount) {
                vowelCount[char] += 1;
            } else {
                vowelCount[char] = 1;
            }
        }
    }
    return vowelCount;
}

Time Complexity: **O(n)** (needs review)
Question: My first answer was O(n^2)



### Short Answer: Answer the Following Questions

1. True or false: n^2 + n is O(n^2). --> **True** (correct on first try)
2. True or false: n^2 * n is O(n^3). --> **True** (correct on first try)
3. True or false: n^2 + n is O(n). --> **False** (correct on first try)
4. What’s the time complexity of the .indexOf array method? --> **O(n)** (needs review - my first answer was 0(1))
5. What’s the time complexity of the .includes array method? --> **O(n)** (correct on first try)
6. What’s the time complexity of the .forEach array method? --> **O(n)** (correct on first try)
7. What’s the time complexity of the .sort array method? --> **O(n log n)** (needs review - my first answer was O(nlog^2n))
8. What’s the time complexity of the .unshift array method? --> **O(n)** (correct on first try)
9. What’s the time complexity of the .push array method? --> **O(1)** (correct on first try)
10. What’s the time complexity of the .splice array method? --> ****O(n) (correct on first try)
11. What’s the time complexity of the .pop array method? --> **O(1)** (correct on first try)
12. What’s the time complexity of the Object.keys() function? --> **O(n)** (correct on first try)
13. What's the space complexity of the Object.keys() function? --> **O(n)** (correct on first try)


