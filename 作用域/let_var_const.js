// JS中作用域有：全局作用域、函数作用域，是没有块级作用域的，es6增加了块级作用域，
// 块级作用域由{}包括，if语句和for语句里面的{}也属于块作用域

// let const 定义的量 在块级作用域外是访问不到的

// var A =function ()
// {
    
//     // console.log(this)
//     var a=1;
//     // console.log(a)
//     var b=function (){
//         console.log(a++);
//     }
//      return b

// }
// var r=A()
// r()
// console.log(a) //a is not defined

// {
//     var a =1
// }
// console.log(a)
// {
// function b(){
//     console.log(this)
// }
// function parent(){
//     parent.prototype.name='a'
//     b()
// }
// parent()
// }

var a ='外层'

function b(){
    var a ='内层'
    return 
}

console.log(a)