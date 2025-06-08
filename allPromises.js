// const promise1=new Promise((_,resolve)=>{
//     // console.log('hey')
//     resolve('done1');
// });
// const promise2=new Promise((resolve)=>{
//     // console.log('hey')    
//     resolve('done2')
//     });
// const promise3=new Promise((reject)=>{
//     // console.log('hey3')
//     reject('done3')
// });
// const promiseOuch= Promise.all([promise1,promise2,promise3]);
// // console.log(promiseOuch);
// promiseOuch.then(results=>
//     console.log(results)
// ).catch(err=>
//     console.error('wa mbwa we',err)
// )
// const dodumba= Promise.allSettled([promise1,promise2,promise3])
// // console.log(dodumba)
// dodumba.then(resul=>console.log(resul)).catch(failor=>console.log(failor))

// const fastasfuckboi= Promise.race([promise1,promise2,promise3]);
// console.log(fastasfuckboi);
// fastasfuckboi.then(resul=>console.log(resul)).catch(erroro=>console.error(`Je fail j ai l admit parce que:${erroro}`))

Promise.resolve()
    .then(() => console.log(1));

queueMicrotask(() => console.log(2));
setTimeout(() => console.log(3), 0);
console.log(4);
new Promise(() => console.log(5));
(async () => console.log(6))();
