

let a = new Promise((res,rej)=>{
  console.log(1)
  setTimeout(() => {
    console.log(2)
  },2000)
  console.log(3)
  res(4)
})

a.then((e)=>{
  console.log(e)
  return 7
}).then((f)=>{
  console.log(f)
})