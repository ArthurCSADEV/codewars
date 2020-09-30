function abbrevName(name){
    const space = name.indexOf(' ');
    const letter1 = name[0].toUpperCase();
    const letter2 = name[space+1].toUpperCase();
    const abbrev = `${letter1}.${letter2}`;
    return abbrev;
}