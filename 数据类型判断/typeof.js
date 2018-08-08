// var a =null //object Null
// var b =  function(){}

// console.log(Object.prototype.toString.call(b) === '[object Function]')

var arr = [1,2,3]
var arr2=[]
for(let key in arr){
    // console.log(key)
    arr2.push(key)
    console.log(typeof(key))
    console.log(Object.prototype.toString.call(key))
}
console.log(arr2)