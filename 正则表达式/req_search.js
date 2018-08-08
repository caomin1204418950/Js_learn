var str = 'a b'
//字符串空格也算一个字符
// search()方法返回的是搜索内容的位置
// var n = str.search(/a/);//0
var n = str.search(/ /);//1
// var n = str.search(/b/);//2
// var n = str.search(/c/);//-1
console.log(n)

// search()方法 就算没用正则，也可使用
var s = 'ab c'
var a = s.search("c");
console.log(a)//3

