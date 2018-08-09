// push() 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度

var arr = [1,2,3]

arr.push(4,3,'s')

console.log(arr) // [1,2,3,4,3,'s']



// pop() 数组末尾移除最后一项，减少数组的 length值，然后返回移除的项

var arr2 = [1,2,3,4,5,6];

// arr2.pop();  在pop方法被用的同时 就被return了数组的最后一项 此时原数组少了最后的一项

console.log(arr2.pop());//6
console.log(arr2) //[1,2,3,4,5]
