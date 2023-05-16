const newFunc = (arr) => {
  console.log(arr);
  let newArr = [];
  arr.map((ele) => {
    if (ele % 5 === 0 && ele % 3 === 0) {
      newArr.push("FizzBuzz");
    } else if (ele % 3 === 0) {
      newArr.push("Fizz");
    } else if (ele % 5 === 0) {
      newArr.push("Buzz");
    } else newArr.push(ele);
  });
  return newArr;
};

console.log(newFunc([1, 2, 3, 4, 5, 15]));
const newArrlen = [];
const nestedArray = (arr) => {
 return arr.flat(Infinity).length
//   arr?.map((ele) => {
//     console.log(typeof ele);
//     if (typeof ele === "object") {
//       nestedArray(ele);
//     } else newArrlen.push(ele);
//   });
//   return newArrlen;
};

console.log(nestedArray([1, [2, 23,[9,[8,[09]]]], 4, [4, 6,[67,[90]]]]));

//merge two array after secific index

const merge =(a,b,i)=>{
   return a.slice(0,i).concat(b,a.slice(i))
}
console.log(merge([1,2],[3,4],1));