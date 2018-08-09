// N*2 选择排序

//找到数组中最小的值 第一位
//第二小的，第二位

function selectionSort(arr){
    let len = arr.length;
    for(let i=0;i<len;i++){
        let min = i;
        for(let j=i;j<len;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!=i){
            [arr[min],arr[i]]=[arr[i],arr[min]]
        }
    }
    return arr;
}
const arr=[85,24,63,45,17,31,96,50];

console.log(selectionSort(arr))