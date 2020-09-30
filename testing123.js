function number(array){
    const arr = [];
    for (i = 0; i < array.length; i++){
      arr.push(`${i+1}: ${array[i]}`)
    }
    return arr;
}