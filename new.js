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
        return [i, j]
      }
    }
  }

}
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

const newRes = merge([1, 3, 6], [2, 4], 2);
console.log(newRes);

