function fakeBin(x){
    array = [];
    for (i = 0; i < x.length; i++){
        array.push(x[i]);
    }
    for (i = 0; i < array.length; i++){
        if (array[i] < 5){
            array[i] = 0;
        }else{
            array[i] = 1;
        }
    }
    return(array.join(''));
}