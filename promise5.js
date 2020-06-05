class Promise5 {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    try {
      executor()
    } catch (error) {
      this.reject(error)
    }

  }
  resolve(value) {
    if (this.state === 'pending') {
      this.state = 'fulfilled'
      this.value = value
    }

  }
  reject(reason) {
    if (this.state === 'pending') {
      this.state = 'rejected'
      this.error = error
    }
  }
  then(onFulfilled, onRejected) {

  }
}



var promisesAplusTests = require("promises-aplus-tests");
console.log(`promisesAplusTests`, promisesAplusTests)

promisesAplusTests(Promise5, function (err) {
  // All done; output is in the console. Or check `err` for number of failures.
})
