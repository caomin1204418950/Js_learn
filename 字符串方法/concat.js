// concat 方法 将两个或多个字符的文本组合起来，返回一个新的字符串

var a = 'hello'
var b = ',world'

var c = a.concat(b)

console.log(c)//hello,world

// 数组里面也有concat 方法

var arr = [1,2,3]
var arr1 = [4,5,6]

var arr2= arr.concat(arr1);
console.log(arr2);//[1,2,3,4,5,6]