function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye

const obj = {
  fun1 (){
    console.log('fun1')
  },
  name:"nordon"
}

module.exports.obj = obj;