function shift(array,left,right) {
    for (var i = right; i > left; i--) {
        array[i] = array[i - 1]
    }
    return array;

}
function mergeSort(array){
    var end =array.length-1
    if(array.length<=1){
        return array;
    }
    for(var n=1; n<array.length; n*=2){
        for(var m=0;m<array.length-1;m+=2*n){
            var left=m;
            var right=m+n;
            var mid= Math.ceil((left+right)/2)
            while(left < right && right< m+2*n){
                if (array[left] > array[right]) {
                    var temp=array[right];
                    shift(array,left,right);
                    array[left]=temp;
                        left++;
                        right++;
                        mid++;
                }
                else{
                    left+=1;
                }

            }
        }
    }
    return array;

}
