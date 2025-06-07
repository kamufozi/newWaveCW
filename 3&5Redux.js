//this time complexity is O(n): meaning the computation size will vary depending on the input 
function solution(number){
  // ...
    let arr=[]
    for (let i=3;i<number;i++){
        if (i%3===0 || i%5===0)arr.push(i)
    }
   return(arr.reduce((a, b)=>a+b,0));
}

//Time complexity with O(1) : meaning whatever input size the computation size will remain the same 

function solution(number) {
    if (number <= 3) return 0;
    
    const sumMultiples = (multiple, limit) => {
        const lastMultiple = Math.floor((limit - 1) / multiple) * multiple;
        const count = lastMultiple / multiple;
        return count * (multiple + lastMultiple) / 2;
    };
    
    const sum3 = sumMultiples(3, number);
    const sum5 = sumMultiples(5, number);
    const sum15 = sumMultiples(15, number);
    
    return sum3 + sum5 - sum15;
}