function points (score){
    const arr1 = []; 
    const arr2 = [];
    const arr3 = [];

    for(i = 0;  i < score.length; i++){
        arr1.push(Number(score[i][0]));
        arr2.push(Number(score[i][2]));
        const value = arr1[i] > arr2[i] ? 3 : arr1[i] === arr2[i] ? 1 : 0;
        arr3.push(value);
    }
    const add = (a, b) => a+b;
    const sum = arr3.reduce(add);
    return sum;
}