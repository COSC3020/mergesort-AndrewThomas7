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

#7- https://github.com/COSC3020/mergesort-DJReflexive-Looked here for help with getting my time complexity correct
## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer

My code starts off with the idea that we have already "divided" in our divide and conquer step of merge sort. This means instead of starting off with the entire array we treat the array as if every element was it's own subarray at the beggining and then we build back up to the whole array, sorting and "merging" as we go. Note the term Merge is used lightly here because the implementation is Iterative and inplace and we aren't ever making new arrays, just moving pointers arround to define what is being sorted.

That being said we now have some context for what the first two for loops are doing. The first one controls the size of the 'subarrays' or in this case the jump we make at each step when comparing and sorting. For example at the first step when we treat everything as seperate arrays we have a jump of 2. This makes it so we are only comapring individual elements as we go throught the array. The second for loop runs through and merges with said jump size, as in this is what actually compares elements and sorts them. Before looking at the complexity of the merge function we can recognize that we are basically starting at the bottom of a Balanced Binary tree and working up to the root node. This yields a height of $O(log(n))$ Thus the first two loops not including the merge step have a complexity of $O(log(n))$

Now looking at the merge step, which is nested inside the inner loop: The merge function runs a while loop until the right subarray's pointer is less than the next step, which in this case is only one step. This yields a time comlexity of at most $n-2=n=O(n)$ It then runs a shift function, to help sort the elements. The shift function in this case also loops through the array and thus also has a complexity of $O(n)$. This whole process would be $n\cdot n=n^2$= $O(n^2)$

Then overall we have $$log(n)\cdot (n^2)=n^2log(n)=\Theta(n^2log(n))$$
