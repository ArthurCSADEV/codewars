function findMultiples(integer, limit) {
    var multiples = [];
    var divided = Math.floor(limit/integer);
    for(i = 1; i < divided+1; i++){
        multiples.push(integer*i);
    }
    return multiples;
  }
  