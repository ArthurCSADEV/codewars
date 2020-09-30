function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin){
      sharkSpeed = (sharkSpeed/2);
    }else{
      sharkSpeed;
    }
    const timeToSafety = pontoonDistance/youSpeed;
    const timeToDeath = sharkDistance/sharkSpeed;
    let result;
    if ((Math.max(timeToSafety, timeToDeath)) == timeToSafety){
      result = "Shark Bait!";
    }else{
      result = "Alive!";
    }
    return result;
  }