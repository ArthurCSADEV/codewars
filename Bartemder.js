function  getDrinkByProfession(param){
    const word = param.toLowerCase();
    const upWord = word.charAt(0).toUpperCase()+word.slice(1);
            if (upWord == 'Jabroni'){
            return "Patron Tequila";
          }else if( upWord == 'School counselor'){
            return "Anything with Alcohol";
          }else if( upWord ==  'Programmer'){
            return  "Hipster Craft Beer";
          }else if( upWord ==  'Bike gang member'){
            return  "Moonshine";
          }else if( upWord == 'Politician'){
            return  "Your tax dollars";
          }else if( upWord ==  'Rapper'){
            return  "Cristal" ;
          }else{
              return "Beer";
          }
    }