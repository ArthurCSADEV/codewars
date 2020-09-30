function add(num1, num2) {
    const digits1 = (""+num1).split("").map(Number);  
    const digits2 = (""+num2).split("").map(Number);  
    const arr = [];
    for (i = 0; i < Math.max(digits1.length, digits2.length); i++){
        if (digits1.length > digits2.length){
        arr.push((digits1[i] || 0) + (digits2[i+(Math.min(digits1.length, digits2.length)-(Math.max(digits1.length, digits2.length)))] || 0));
        }else if (digits1.length < digits2.length){
            arr.push((digits1[i+(Math.min(digits1.length, digits2.length)-(Math.max(digits1.length, digits2.length)))] || 0) + (digits2[i] || 0));    
        }else if (digits1.length == digits2.length){
            arr.push((digits1[i] || 0) + (digits2[i] || 0));
        }
    }   
    const result = arr.join("");
    return Number(result);
}