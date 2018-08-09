//join 将数组组成一个字符串，默认用逗号为分隔符，该方法只接收一个参数,即分隔符，

var arr = [1,2,3];
arr.join(4);
console.log(arr.join('-'));// 1-2-3  原本连接符为逗号，现在替换成了-
console.log(arr); // [1,2,3]   还是原数组， join方法并不改变原数组

//通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串
function repeatString(str,n) {
    return new Array(n+1).join(str);
}
console.log(repeatString('abc',3)); //abcabcabc