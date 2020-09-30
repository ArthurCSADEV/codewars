function solution(a, b){
    var sizeA = a.length;
    var sizeB = b.length;
     var aInt = parseInt(a);
     var bInt = parseInt(b);
     if (sizeA > sizeB){
         return b+a+b;
     }if (sizeB > sizeA){
         return a+b+a;
     }if (aInt > bInt){
         a.toString();
         b.toString();
         return b+a+b;
     }if (aInt < bInt){
        a.toString();
        b.toString();
        return a+b+a;
     }
}