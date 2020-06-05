class Promises{
  constructor(fn){
    if(typeof fn !== 'function'){
      throw new Error('我只接受一个函数')
    }
    fn(()=>{},()=>{})
    function resolve(){} 
  }
  resolve(){}
  then(){
  }
}

import isPromise from 'is-promise';
console.log(`isPromise`, isPromise)

isPromise(Promises.resolve())