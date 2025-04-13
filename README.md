# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

## Sources
#1-https://www.youtube.com/watch?v=W2rU3dquXAc

#2-https://www.youtube.com/watch?v=mxfS1UDSiiw

#3-https://www.baeldung.com/cs/merge-sort-in-place

#4- Chat GPT Querey-"Im trying to make an inplace merge function in javascript, how am I doing?function Merge(array,left,mid,right){ var end = array.length - 1 var iter=mid; // if(right==mid+1){ // 

iter=end; // } while (left <= mid&&right<=end) { if (array[left] > array[right]) { for (i = right; i > left; i--) { var temp = array[i]; array[i] = array[i - 1] array[i - 1] = temp; } right += 1; } left += 1; } return array; }Don't give me code just help me understand what to do

#5- Worked alongside Ivan Matrin.

#6-https://www.baeldung.com/cs/height-balanced-tree
## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.
