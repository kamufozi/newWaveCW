// async function mystery1() {
//   return 'hello';
// }

// async function mystery2() {
//   return Promise.resolve('world');
// }

//  function mystery3() {
//   return Promise.resolve('!');
// }

// // What do these log?
// console.log(mystery1());           // ?
// console.log(await mystery1());     // ?
// console.log(mystery2());           // ?
// console.log(await mystery2());     // ?
// console.log(mystery3());           // ?
// console.log(await mystery3());     // ?

// // Fix this function to properly log "hello world!"
// async function fixMe() {
//   const a = await mystery1();
//   const b = await mystery2();
//   const c = await mystery3();
//   console.log(a + ' ' + b + c);
// }
// fixMe()

const fetchData=async (num)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(num*10),1000);
  })
}
(async()=>{
  const arr= [1,2,3]
  const results= arr.map(async (num)=>{
    const result= await fetchData(num)
    return  result
  })
  console.log(results);
})()

async function getUserData(url) {
  const res=await fetch(url)
  const data = await res.json()
  return data
}
getUserData().then(data=>{
  console.log("user",data)
})