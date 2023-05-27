const findFizzBaazz = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push("FizzBazz");
    } else if (array[i] % 3 === 0) {
      result.push("Fizz");
    } else if (array[i] % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(array[i].toString());
    }
  }
  return result;
};

const getSumsIndex = (num, array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === num) {
        return [i, j];
      }
    }
  }
};
//? MADAM
function checkPalindrome(x) {
  const newN = x.toString();
  const len = newN.length;
  console.log(len / 2);

  for (let i = 0; i < len / 2; i++) {
    console.log(newN[len - 1 - i]);
    if (newN[i] !== newN[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const merge = (a, b, i = 0) => {
  return a.slice(0, i).concat(b, a.slice(i));
};

const newRes = merge([1, 3], [2, 4], 1);
console.log(newRes);

//! MADAM
const checkPalindrome2 = (a) => {
  const aStr = a.toString();
  const len = aStr.length;
  for (let i = 0; i < len / 2; i++) {
    if (aStr[i] !== aStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

const mergeArray = (arr1, arr2, i) => {
  return arr1.slice(0, i).concat(arr2, arr1.slice(i));
};
//flat array recursive
let newarray = [];
const getLen = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      getLen(arr[i]);
    } else {
      newarray.push(arr[i]);
    }
  }
  return newarray.length;
};

const checkPrime = (a) => {
  let divisor = 2;
  if (a <= 1) {
    return false;
  }
  while (a > divisor) {
    if (a % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
};
console.log("object", checkPrime(12));
