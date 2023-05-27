var mergeTwoLists = function(list1, list2) {
    const res = list1.concat(list2).sort()
    return res
 };
 console.log(mergeTwoLists([1,2,4],[1,3,4]));