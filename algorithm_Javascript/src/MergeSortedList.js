/**


Given two sorted integer arrays nums1 and nums2
merge nums2 into nums1 as one sorted array.
Note:
You may assume that nums1 has enough space 
(size that is greater or equal to m + n) to hold additional 
elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.


 */




export function mergeSortedList(nums1, m, nums2, n){
    let currentidxNums1 = 0;
    let currentidxNums2 = 0;
    let counter = 0;
    let length = m + n;
    while(length > counter){
        if(nums2[0] < nums1[counter]){
            console.log(nums2);
            console.log(nums1);
            nums1.splice(counter, 0, nums2.shift());
            counter++;
            
        }
        else{
            counter++;
        }
        console.log('counter: ', counter);
        
    }    
    return nums1;
}