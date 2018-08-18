// 检查一个字符串匹配一个正则表达式内容，如果没有匹配返回null

var a = 'cccmmddre'
var b = 'm，nde'

var re = new RegExp(/^\w+$/)//\w 不包含标点符号
var is_alpha1 = a.match(re)
var is_alpha2 = b.match(re)
console.log(is_alpha1)
console.log(is_alpha2)
