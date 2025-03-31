
function shift(array,left,right){
    for(i=right;i>left;i--){
        array[i]=array[i-1]
    }
    return array;
}
// console.log([2,5,3,4],0,2)
function merge(array,left,right,n){
    while(left<right&&right<n){
        if(array[left]>array[right]){
            var temp =array[right];
            shift(array,left,right)
            array[left]=temp;
            left+=1;
            right+=1;
        }
        else{
            left+=1;
        }
    }
}
// console.log(merge(testarr,0,1))

function mergesort(array){
    for(var i=1;i<array.length;i*=2){
        for(var j=0;j<array.length;j+=i*2){
            var left=j;
            var right=left+i;
            var n=2*i+j
                merge(array,left,right,n)
        }
    }
    return array;
}
//testarr=[8,2,5,3,9,4,1,7]
//console.log(mergeSort(testarr))
