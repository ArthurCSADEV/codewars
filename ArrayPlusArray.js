function arrayPlusArray(arr1, arr2) {
    const arr3 = [];
    for (i=0; i<arr1.length; i++){
        arr3.push(arr1[i]+arr2[i]);
    }
    return arr3.reduce((a,b) => a+b);;
  }