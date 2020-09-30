function dutyFree(normPrice, discount, hol){
    const nominalDiscount = normPrice - (normPrice - (normPrice * discount/100));
    const totalDiscount = (hol/nominalDiscount); 
    return Math.floor(totalDiscount);
  }