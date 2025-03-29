function shift(array,left,right) {
    for (var i = right; i > left; i--) {
        array[i] = array[i - 1]
    }
    return array;

}

function mergeSort(array) {
    var end = array.length - 1
    if(array.length<=1){
        return array;
    }
    for (var n = 1; n < array.length; n *= 2) {
        for (m = 0; m < array.length; m++) {
            var left = m;
            var right = n + m;
            var mid = Math.ceil((left + right) / 2)
            while (left <= mid && right <= end) {
                if (array[left] > array[right]) {
                    var temp = array[right];
                    shift(array, left, right);
                    array[left] = temp;
                    if (m == 0) {
                        left += 1;
                        right += 1;
                        mid += 1;
                    }
                    left += m;
                    right += m;
                    mid += 1;
                }
                else if (array[left] == array[right]) {
                    right += 1
                }
                else {
                    left += 1;
                }
            }

        }
    }
        for (j = 0; j < array.length; j++) {
            var left = 0;
            var right = j+1;
            var mid = Math.ceil((left + right) / 2)
            while (left <= mid && right <= end) {
                if (array[left] > array[right]) {
                    var temp = array[right];
                    shift(array, left, right);
                    array[left] = temp;
                    if (j == 0) {
                        left += 1;
                        right += 1;
                        mid += 1;
                    }
                    left += j;
                    right += j;
                    mid += 1;
                }
            else{
                left+=1;
            }
            }
        }   
        return array;
}
