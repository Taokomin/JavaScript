function getVowels(str){
    let m = str.match(/[aeiou]/gi);
    if(m === null){
        return null;
    }
    return console.log(m.length);
}


getVowels("ppppe");