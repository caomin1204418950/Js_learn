var arr = [1,2,3,3,4,5,6,7,8,9]
var arr1 = arr.filter(
    function(value,index,self) {
        // return index % 3 ===0 || value >=8 ; // [1,4,7,8,9]
        // return value % 3  ===0 && index>=8 ; // [9]
    }
)

// 数组去重

var arr2 = arr.filter(
    function (value,index,self) {
        return self.indexOf(value) == index
    }
)
console.log(arr1);
console.log(arr2) //[1,2,3,4,5,6,7,8,9]
console.log(arr) //[1,2,3,3,4,5,6,7,8,9]