import * as chai from 'chai'
import Promise from '../promise'

const assert = chai.assert

describe('Promise',()=>{
  it('promise 是一个类',()=>{
    console.log(`Promises`, Promise)
    assert.isFunction(Promise)
    assert.exists(Promise.prototype)
  }),
  it('promise 必须接收一个函数',()=>{
    assert.throw(()=>{
      //@ts-ignore
      new Promise(1)
    })
  }), 
  it('promise 必须有一个then方法',()=>{
    const promise = new Promise(()=>{})
    assert.isFunction(promise.then)
  }),
  it('promise 中传入的fn立即执行',()=>{
    let boolean = false
    new Promise(()=>{
      boolean= true
    })
    //@ts-ignore
    assert(boolean === true)
  }),
  it('promise 传入两个方法',()=>{
    const promise = new Promise((resolve,reject)=>{
      assert.isFunction(resolve)
      assert.isFunction(reject)
    })
  }),
  it('promise 传入两个方法',()=>{
    const promise = new Promise((resolve,reject)=>{
      assert.isFunction(resolve)
      assert.isFunction(reject)
    })
  })
})  
