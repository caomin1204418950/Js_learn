// Function.prototype.bind2 = function (context) {
//     return function (context) {
//         console.log(context);        
//     }
// }

// var foo = {
//     value:1
// }

// function bar() {
//     console.log(this.value)
// }

// // bar.apply(foo);

// const bar2 = bar.bind2(foo);
// bar2

var a=1;
var module = {
    a : 2,
    getA:function() {
        console.log(a)
    }
};
// module.getA(); //
// console.log(module.getA())


var getA1 = module.getA;

getA1() 

console.log(module.getA())
// console.log(getA1) //

// var getA2 = getA1.bind(module);
// getA2();



