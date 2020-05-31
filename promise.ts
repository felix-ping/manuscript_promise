class Promises{
  constructor(fn){
    if(typeof fn !== 'function'){
      throw new Error('我只接受一个函数')
    }
    fn(()=>{},()=>{})
  }
  then(){
  }
}

export default Promises