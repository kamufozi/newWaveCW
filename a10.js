function abbreviate(string) {
  // ...
  if(/^[^A-Za-z]+$/.test(string))return string;
  string=string.split( /([^\w])/);
  for(let i=0;i<string.length;i++){
    if (string[i].length>3){
        let n=string[i].length;
        let count=n-2;
        string[i]=string[i].split('');
        string[i]=[string[i][0],count,string[i][n-1]].join('');     
    } 
  }
    return string.join('');
}