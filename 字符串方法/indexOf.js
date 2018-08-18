// indexOf 方法返回字符串中一个子串第一处出现的索引（从左往右搜索）如果没有匹配，返回-1

var a = 'nishgysddcj'

var index1 = a.indexOf('d')
console.log(index1)//7

// 数组也有一个indexOf

var arr = [1,2,3,4,4]

var index = arr.indexOf(4)
console.log(index)//3