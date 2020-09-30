function checkExam (array1, array2){
    var right = 0;
     var wrong = 0;
     var empty = 0;
     for (var i = 0; i < array1.length; i++){
        if (array1[i] == array2[i]){
            right ++;
        }else if(array2[i].charAt(0) == ''){
         empty ++;
        }else{
             wrong ++;
        }
        
     }
     var total = right*4 + wrong*-1 + empty * 0; 
 
     if (total < 0){
         total = 0;
     }
     return total;
         
 }