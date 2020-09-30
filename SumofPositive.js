function positiveSum(arr) {
    const array = [];
    for(i = 0; i < arr.length; i++ ){
    if(arr[i] >= 0 && arr[i] !== null){
        array.push(arr[i]);
    }
  }
  if (array.length > 0 && typeof array !== 'undefined' ){
      return array.reduce((a,b) => a+b);
  }else{
      return 0;
  }
}

