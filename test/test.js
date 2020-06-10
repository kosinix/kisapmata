const flash = require('../index')

let custom = {}
flash.set(custom, 'success', 'O kay bilis namang maglaho ng mensahe mo sinta.')
console.log('Now you see it:', flash.get(custom, 'success'))
console.log('Now you dont:', flash.get(custom, 'success'))

flash.ok(custom, 'flashName', 'O kay bilis namang maglaho ng mensahe mo sinta.')
console.log('Now you see it:', flash.get(custom, 'flashName'))
console.log('Now you dont:', flash.get(custom, 'flashName'))

flash.error(custom, 'flashName', 'O kay bilis namang maglaho ng mensahe mo sinta.')
console.log('Now you see it:', flash.get(custom, 'flashName'))
console.log('Now you dont:', flash.get(custom, 'flashName'))