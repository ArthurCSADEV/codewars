function index(array, n){
    const number = array[n];
    if (n < array.length){
        return Math.pow(number, n);
    }else{
        return -1;
    }
  }