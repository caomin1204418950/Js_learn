// sort() 按升序排列数组项--即最小的值位于最前面，最大的值排在最后面。

// 在排序时，sort 方法会调用每个数组项的toString() 转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值，sort方法比较的也是字符串

var arr = ['a','d','b','c','e']
arr.sort() 
console.log(arr) // ['a','b', 'c', 'd', 'e']

var arr1 = [1,23,32,3,45,4]
arr1.sort()
console.log(arr1)// [ 1, 23, 3, 32, 4, 45 ]

function compare(a,b) {
    return a-b
}
arr1.sort(compare)
console.log(arr1)