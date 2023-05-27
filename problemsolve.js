//5115 checkPalindrome
const checkPalindrome = (a) => {
  const str = a.toString();
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
// nested array length
let newarray = [];
const arrayLength = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "object") {
      arrayLength(a[i]);
    } else newarray.push(a[i]);
  }
  return newarray.length;
};

//merge two array after specific index
const mergeArray = (a, b, i) => {
  return a.slice(0, i).concat(b, a.slice(i));
};

//check prime number
const checkPrime = (a) => {
  let divisor = 2;
  if (a <= 1) {
    return false;
  }
  while (a > divisor) {
    if (a % divisor === 0) {
      return false;
    } else divisor++;
  }
  return true;
};

//fizzbazz
const fizzBazz = (a) => {
  let result = [];
  for (let i = 1; i <= a; i++) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      result.push("FizzBazz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else result.push(i);
  }
  return result;
};

//remove element from array
const removeElement = (a, v) => {
  const data = a.filter((element) => element !== v);
  return data;
};

//remove duplicate
const removeDuplicates = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.find((ele) => ele === array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// leet code 1; sum of two num's index
const getSum = (a, v) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] + a[j] === v) {
        return [i, j];
      }
    }
  }
};

//reverse string
const reverseStr = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

// reverse word
var reverseWords = function(s) {
    s = s.split(' ').filter((ele) => ele !== "");
    s= s.reverse();
    return s.join(" ");
};

const caseShufel =(str)=>{
  let newStr = "";
  let newStr2 = "";
  for (var i = 0; i < str.length; i++) {
     if(str[i] === str[i].toUpperCase()){
   newStr += str[i]
  }
     if(str[i] === str[i].toLowerCase()){
   newStr2 += str[i]
  }
  }
 return newStr + newStr2
  
}

const longestPrefix = (strs)=>{
 let minimumLength = strs[0].length;
 console.log(minimumLength);
}
console.log(longestPrefix(["flower","flow","flight"]))


// console.log(reverseWords("a good   example"));
// console.log(reverseStr("habibur rahman"));
// console.log(getSum([2, 4, 6, 3], 7));
// console.log(removeDuplicates([1, 3, 2, 3, 4, 5, 1, 1]));
// console.log(removeElement([2, 2, 3, 4, 2], 2));
// console.log("fizzbazz", fizzBazz(15));
// console.log("is palindrome", checkPalindrome(5115));
// console.log("is prime", checkPrime(17));
// console.log("merge array", mergeArray([1, 2, 5], [3, 4], 2));
// console.log("nested array len", arrayLength([1, [3, 4, [6, [7]]]]));
