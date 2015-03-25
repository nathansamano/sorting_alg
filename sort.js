function CArray(numElements) {
 this.dataStore = [];
 this.pos = 0;
 this.numElements = numElements;
 this.insert = insert;
 this.toString = toString;
 this.clear = clear;
 this.setData = setData;
 this.swap = swap;
 for (var i = 0; i < numElements; ++i) {
   this.dataStore[i] = i;
 }
 this.bubbleSort = bubbleSort;
 this.selectionSort = selectionSort;
 this.insertionSort = insertionSort;
 this.shellsort = shellsort;
 this.gaps = [5,3,1];
 this.setGaps = setGaps;
 this.shellsort2 = shellsort2;
 this.clear = clear;
 this.mergeSort = mergeSort;
 this.mergeArrays = mergeArrays;
 this.qSort = qSort;
}
function setData() {
 for (var i = 0; i < this.numElements; ++i) {
   this.dataStore[i] = Math.floor(Math.random() *
   (this.numElements+1));
 }
}
function clear() {
 for (var i = 0; i < this.dataStore.length; ++i) {
   this.dataStore[i] = 0;
 }
}
function insert(element) {
 this.dataStore[this.pos++] = element;
}
function toString() {
 var retstr = "";
 for (var i = 0; i < this.dataStore.length; ++i) {
   retstr += this.dataStore[i] + " ";
   if (i > 0 && i % 10 == 0) {
     retstr += "\n";
   }
 }
 return retstr;
}
function swap(arr, index1, index2) {
 var temp = arr[index1];
 arr[index1] = arr[index2];
 arr[index2] = temp;
}

/* Bubble Sort */
function bubbleSort() {
 var numElements = this.dataStore.length;
 var temp;
 for (var outer = numElements; outer >= 2; --outer) {
   for (var inner = 0; inner <= outer-1; ++inner) {
     if (this.dataStore[inner] > this.dataStore[inner+1]) {
       swap(this.dataStore, inner, inner+1);
     }
   }
   print(this.toString());
 }
}

/* Selection Sort */
function selectionSort() {
 var min, temp;
 for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
   min = outer;
   for (var inner = outer + 1;
     inner <= this.dataStore.length-1; ++inner) {
     if (this.dataStore[inner] < this.dataStore[min]) {
       min = inner;
     }
   }
   swap(this.dataStore, outer, min);
   print(this.toString());
 }
}

/* Insertion Sort */
function insertionSort() {
 var temp, inner;
 for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
   temp = this.dataStore[outer];
   inner = outer;
   while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
     this.dataStore[inner] = this.dataStore[inner-1];
     --inner;
   }
   this.dataStore[inner] = temp;
   print(this.toString());
 }
}

/* Timing a for loop */
function startTime() {
  var start = new Date().getTime();
}/*
for (var i = 1; i < 100; ++i) {
 print(i);
}*/
function stopTime() {
  var stop = new Date().getTime();
  var elapsed = stop - start;
  print("The elapsed time was: " + elapsed + " milliseconds.");
}

/* Shell Sort */
function shellsort() {
 for (var g = 0; g < this.gaps.length; ++g) {
   for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
     var temp = this.dataStore[i];
     for (var j = i; j >= this.gaps[g] &&
       this.dataStore[j-this.gaps[g]] > temp;
       j -= this.gaps[g]) {
       this.dataStore[j] = this.dataStore[j - this.gaps[g]];
       print(this.toString());
     }
     this.dataStore[j] = temp;
    }
    print(this.toString());
  }
}

/* Gap Sequence */
function setGaps(arr) {
  this.gaps = arr;
}

/* Shell Sort2 */
function shellsort2() {
  var N = this.dataStore.length;
  var h = 1;
  while (h < N/3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (var i = h; i < N; i++) {
      for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];
        j -= h) {
        swap(this.dataStore, j, j-h);
      }
    }
    h = (h-1)/3;
  }
}

/* Merge Sort */
function mergeSort(arr) {
 if (arr.length < 2) {
   return;
 }
 var step = 1;
 var left, right;
 while (step < arr.length) {
   left = 0;
   right = step;
   while (right + step <= arr.length) {
     mergeArrays(arr, left, left+step, right, right+step);
     left = right + step;
     right = left + step;
    }
    if (right < arr.length) {
    mergeArrays(arr, left, left+step, right, arr.length);
  }
  step *= 2;
 }
}

/* Merge Arrays */
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
 var rightArr = new Array(stopRight - startRight + 1);
 var leftArr = new Array(stopLeft - startLeft + 1);
 k = startRight;
 for (var i = 0; i < (rightArr.length-1); ++i) {
   rightArr[i] = arr[k];
   ++k;
 }
 k = startLeft;
 for (var i = 0; i < (leftArr.length-1); ++i) {
   leftArr[i] = arr[k];
   ++k;
 }
 rightArr[rightArr.length-1] = Infinity; // a sentinel value
 leftArr[leftArr.length-1] = Infinity; // a sentinel value
 var m = 0;
 var n = 0;
 for (var k = startLeft; k < stopRight; ++k) {
   if (leftArr[m] <= rightArr[n]) {
     arr[k] = leftArr[m];
     m++;
   }
   else {
     arr[k] = rightArr[n];
     n++;
   }
 }
 print("left array - ", leftArr);
 print("right array - ", rightArr);
}

/* Quick Sort */
function qSort() {
 if (this.length == 0) {
   return [];
 }
 var lesser = [];
 var greater = [];
 var pivot = this[0];
 for (var i = 1; i < this.length; i++) {
   if (this[i] < pivot) {
     lesser.push(this[i]);
   } 
   else {
     greater.push(this[i]);
   }
 }
 return qSort(lesser).concat(pivot, qSort(greater));
}
