// this 是JavaScript语言的一个关键字。
// 它是函数运行时，在函数内部自动生成的一个对象，只能在函数体内部使用

// function test() {
//     this.x=1
//     console.log(this.x)
// }
// test()

// 情况一： 纯粹的函数调用
// 这是函数最通常用法，属于全局性调用，因此 this就代表全局对象。如：

// var x = 1

// function test() {
//     console.log(this.x)
// }
// test()//1

//情况二： 作为对象方法的调用
//函数还可以作为某个对象的方法调用，这时this就指这个上级对象

// function test() {
//     console.log(this.x)
// }

// var obj = {}

// obj.x = 1
// obj.m = test
// obj.m()

//情况三 作为构造函数调用
// 所谓构造函数，就是通过这个函数，可以生成一个新对象，这时，this就是指这个新对象
// var x=2
// function test() {
//     this.x=1
// }
// var obj = new test()
// console.log(obj.x)

//情况四：apply 调用
// apply() 是函数的一个方法，作用是改变函数的调用对象。他的第一个参数表示调用哪个对象。
// 因此，这时this指的就是第一个参数。

// var x = 0
// function test(){
//     console.log(this)
// }

// var obj ={}
// obj.x=1
// obj.m=test
// obj.m.apply(obj)