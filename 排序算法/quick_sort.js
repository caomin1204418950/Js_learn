// 分治 
//     1. 随机选择数组中的一个数A，基准 中点
//     2. 其他数字跟他比较，小于他的放左边，大于他的放右边
//     3. 利用递归的思想， 将左边的数和右边的数重复做两步
//     a b c 
//     a.concat(b).concat(c)
// 复杂排序 
//     归并排序
//     快排 快速排序
//     堆排序
//     N*logN 复杂排序

// 简单算法 冒泡 选择插入 N2

const arr = [56,85,24,63,31,17,88,43]

function quickSort(arr) {
    if(arr.length<=1){
        return arr
    }
    let pivotIndex =Math.floor(arr.length / 2);
    let pivot =arr.splice(pivotIndex,1)[0];
    let left = [];
    let right = [];

    for(let i=0; i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    console.log(left)
    // return quickSort(left).concat([pivot],quickSort(right));
}

quickSort(arr)

