// var arr = [1,2,3]
// var arr2 =[]
// arr.map((item)=>{
//     console.log(typeof(item))
    
//     arr2.push(item)
// })
// console.log(arr2)

var arr = [1,23,3]
// var arr2 = []
// arr.forEach((item)=>{
//     console.log(typeof(item))
//     arr2.push(item)
// })
// console.log(arr2)

// console.log(['1','2','3'].map(parseInt))

var arr =[1,2,3]

console.log(arr.map(item=>{
   return item*2
})) //可以返回新数组[2,3,6]

console.log(arr.forEach(item=>{
    return item*2
 })) //返回的是undefined