
// function processData(v) {

//     var max = -Infinity;
//     var min = Infinity;
//     for (var i = 0; i < v.length; i++) {
//         var sum = 0;
//         for (var j = 0; j < v.length; j++) {
//             if ( i != j ) {
//                 sum += v[j];
//             }
//         }
//         if (sum < min) min = sum;
//         if (sum > max) max = sum;
//     }
//     console.log(min, max)
// }
// processData([1,5,5,5,5])
function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            max_num = num
        }
    }
    return max_num;
}
// console.log(find_max([9,9,0,12,5]));

//! 442

var findDuplicates = function (nums) {
    const duplicate = []
    const unique = []
    for (let i = 0; i < nums.length; i++) {
        if (!unique.includes(nums[i])) {
            unique.push(nums[i])

        } else {
            duplicate.push(nums[i])
        }

    }
    return duplicate;
};
// console.log("jjj", findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

//? 344
var reverseString = function (s) {
    const array = []
    for (let i = s.length - 1; i >= 0; i--) {
        array.push(s[i])
    }
    return array
};
// console.log(reverseString(["h", "e", "l", "l", "o"]));

//! 796
function rotateString(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    const doubledS = s + s;
    return doubledS.includes(goal);
}
console.log(rotateString( "abcde", "abced"));