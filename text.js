//! fizzbuzz
const result = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbazz");
    } else if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("bazz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};
// console.log(result(15))

//! merge two array, 2nd array after 1st element of 1st array
const merge = (a, b, i = 0) => {
  return a.slice(0, i).concat(b, a.slice(i));
};

const newRes = merge([1, 3], [2, 4], 1);
// console.log(newRes);
//! nested array length
const getArrayLength = (arr) => {
  let length;
  const flatArray = arr.flat(Infinity);
  if (arr.length === 0) {
    length = 0;
  } else length = flatArray.length;
  return length;
};
// console.log(getArrayLength([1, [2, [3, [4,[5,[67,[43]]]]]]]));

//!recursion nested array length
let newArray = [];
const getLength = (arr) => {
  arr.forEach(element => {
    if (typeof element === "object") {
      getLength(element);
    } else {
      newArray.push(element);
    }
  });
  return newArray.length;
};
console.log("result array", getLength([1,[2,4,5,[66,78,[54]]]]))

//leetcode 1
const sum = (nums, target) => {
  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[j] + nums[i] === target) {
        return [j, i ];
      }
    }
  }
};

console.log("result", sum([2,6,4,11], 10));

//letcode 9

function checkPalindrome(x) {
  const newN = x.toString();
  const len = newN.length;

  for (let i = 0; i < len / 2; i++) {
    if (newN[i] !== newN[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const value = checkPalindrome(10);

// log it's value in the console
// console.log(value);
var removeElement = function (nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
    console.log(count);
  }
  return nums;
};
console.log("remove",removeElement([3.2,2,3], 3));
var removeDuplicates = function (nums) {
  let notMatch = [];
  let underscore = [];
  for (let i = 0; i < nums.length; i++) {
  
    if (notMatch?.find(ele => ele === nums[i])) {
      underscore.push("_");
    }
    else{
      notMatch.push(nums[i]);
    }
  
  }

  return{
    underscore, 
    notMatch

  }
};
const res = removeDuplicates([1,1,1,2])
console.log("hh",res.underscore.length);

let a=10,b=11;
b=a+(a=b)-b
// console.log(a,b);