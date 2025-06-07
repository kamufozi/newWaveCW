function duplicateEncode(word){
    // ...
    word=word.toLowerCase().split('');
    let count={};
    let newArr=[];
    word.forEach(
    w =>{
        count[w]=(count[w]||0)+1;
    }
    )
    newArr=word.map(w=>{
        if(count[w]===1)w='('
        else w=')'
        return w
    })
    return newArr.join('');
}
console.log(duplicateEncode('Success'));
 