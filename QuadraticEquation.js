function quadratic(x1, x2){
    array2 = [];
    var a = x1;
    var b = x2;
    let x = 1;
    array2.push(x);
    array2.push(-((a+b)*x));
    array2.push((a*b));
    return array2;
 }