function alternateCase(s) {
    array = [];
    for (var i = 0; i < s.length; i++) {
        if(s.charAt(i) == s.toUpperCase().charAt(i)){
        array.push(s.charAt(i).toLowerCase());
    }   else if (s.charAt(i) == s.toLowerCase().charAt(i)){
        array.push(s.charAt(i).toUpperCase());
    }   
    
    } 
    
    return array.join('');
}