// shift() : 删除原数组第一项，并返回删除元素的值；如果数组为空，则返回undefined

// unshift 将参数添加到原数组的开头，并返回数组的长度

var arr = [1,2,3]
var a= arr.shift() //此时 原数组已删除了 1 并且 返回了1
console.log(a)
console.log(arr) //此时的arr是[2,3]

var length= arr.unshift(4,5) 
console.log(length) //4
console.log(arr) //[4,5,2,3]