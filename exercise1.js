/*for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
} */ 

/*for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}; */


/*function evenNum (n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    };
};

evenNum(10); */ 


/*function givenNumber (x, n) {
    for (let i = x; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    };
};

givenNumber(10, 20); */


/*function evenNumberFromArray (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

let numbers = [1,2,3,6,36,23,21,34];
evenNumberFromArray(numbers); */


/*function sumNum (arr) {
    const evenNum = arr.filter(number => number % 2 === 0);
    const sumEven = evenNum.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    return sumEven
}

let numbers = [1,2,3,6,36,23,21,34];
const result = sumNum(numbers);
console.log(result); */


/* function sumOddNum (arr) {
    const oddNum = arr.filter(number => number % 2 !== 0);
    const sumOdd = oddNum.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    return sumOdd
};

let numbers = [1,2,3,6,36,23,21,34];
const result = sumOddNum(numbers);
console.log(result); */ 



/*function absVal (arr) {
    const sumEven = arr.filter(num => num % 2 === 0).reduce((acc, val) => acc + val);
    const sumOdd = arr.filter(num => num % 2 !== 0).reduce((acc, val) => acc + val);
    return Math.abs(sumEven - sumOdd);
};

let numbers = [1,2,3,6,25,36,63,81,34];
const result = absVal(numbers);
console.log(result); */ 



/*let numbers = [1,2,3,6,36,23,21,34];

let maxIdx = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIdx]) {
        maxIdx = i;
        
    }
}
console.log(maxIdx); */


/*let numbers = [2,3,1,5,8,3];
let minIdx = 0
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[0]) {
        minIdx = i;
    }
} 

console.log(minIdx); */



/*let numbers = [1,2,3,6,36,23,21,34];

let sumOddNum = numbers.filter(num => num % 2 !== 0).reduce((acc, val) => acc + val);
let sumEvenNum = numbers.filter(num => num % 2 === 0).reduce((acc, val) => acc + val);

console.log(sumEvenNum);
console.log(sumOddNum); */ 


/*let numbers = [1,2,3,6,36,23,21,34];
let sumArr = numbers.reduce((acc, val) => acc + val);

console.log(sumArr); */

/*function numGenerator (m) {
    for (let i = 0; i < m; i++) {
        console.log(i);
    };
};


numGenerator(10); */

/*let numbers = [1,2,3,6,36,23,21,34];

let reversedArr = []

for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArr.push(numbers[i]);
    
};

console.log(reversedArr); */ 


/*let numbers = [1,1,1,1, 2,3,3,4,1,2,3,4];
let noDuplicateNum = [];

for (let i = 0; i < numbers.length; i++) {
    if (!noDuplicateNum.includes(numbers[i])) {
        noDuplicateNum.push(numbers[i]);
    };
};

console.log(noDuplicateNum); */




