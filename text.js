const result = (num) => {
  let arr = []
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbazz")
    }
    else if (i % 3 === 0) {
      arr.push("fizz")

    }
    else if (i % 5 === 0) {
      arr.push("bazz")

    }
    else {
      arr.push(i.toString())
    }
  }
  return arr;
}
// console.log(result(15))


const merge = (a, b, i = 0) => {
  return a.slice(0, i).concat(b, a.slice(i));
}

const newRes = merge([1, 3], [2, 4], 1);
// console.log(newRes);


const getArrayLength = (arr) => {
  let length;
  const flatArray = arr.flat(Infinity);
  if (arr.length === 0) {
    length = 0;
  } else length = flatArray.length;
  return length;
};
// console.log(getArrayLength([1, [2, [3, [4,[5,[67,[43]]]]]]]));

//recursion nested array length
let newArray = []
const getLength = (arr) => {
  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'object') {
      getLength(arr[i])
    }
    else {
      newArray.push(arr[i])
    }
  }
  return newArray.length
}
console.log("result", getLength([]))
