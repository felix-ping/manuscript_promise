
// function getJSON(e) {
//   return new Promise((resolve, reject) => {
//       resolve('/post/' + e + ".json") 
//   })

// }

// const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
//   return getJSON(id)
// });

// Promise.all(promises).then(function (posts) {
//   console.log(posts)
// }).catch(function (reason) {
//   console.log(`reason`, reason)
//   // ...
// });


// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })

// const p2 = new Promise((resolve, reject) => {
//   resolve('world');
// })

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });


let x = Promise.resolve(3)
x.then((e)=>{
  console.log(e)
  return ++e
}).then((f)=>{
  console.log(f)
  return f*2
}).then((h)=>{
  console.log(h)
  throw new Error('can not do it')
}).catch((i)=>{
  console.log(i)
})