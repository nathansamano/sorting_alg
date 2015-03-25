load('sort.js');
var nums = new CArray(10);
var ten = [6,10,1,9,4,8,2,7,3,5];
var nine = [6,10,1,9,4,8,2,7,3];
var eleven = [6,10,1,11,9,4,8,2,7,3,5];
nums.setData();
print(nums.toString());
//nums.bubbleSort();
//nums.selectionSort();
//nums.insertionSort();
//nums.shellsort();
//nums.shellsort2();
//mergeSort(nums);
//nums.qSort();
print();
print(nums.toString());
print();

print(ten.toString());
mergeSort(ten);
print();
print(ten.toString());
print();

print(nine.toString());
mergeSort(nine);
print();
print(nine.toString());
print();

print(eleven.toString());
mergeSort(eleven);
print();
print(eleven.toString());
print();
