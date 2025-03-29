function shift(array,left,right) {
    for (var i = right; i > left; i--) {
        array[i] = array[i - 1]
    }
    return array;

}

function mergesort(array){
    var end =array.length-1
    for(var n=1; n<array.length; n*=2){
        for(m=0;m<array.length;m++){
            var left=m;
            var right=n+m;
            var mid= Math.ceil((left+right)/2)
            while(left <= mid && right <= end){
                if (array[left] > array[right]) {
                    var temp=array[right];
                    shift(array,left,right);
                    array[left]=temp;
                    if(m==0){
                        left+=1;
                        right+=1;
                        mid+=1;
                    }
                        left+=m;
                        right+=m;
                        mid+=1;
                }
                else if(array[left]==array[right]){
                        right+=1
                }
                else{
                    left+=1;
                }
        }
        }
    }
    return array;
}
