// Your code here
const Employee = require('./employee')


const John = new Employee('John Wick', 'Dog Lover')

let name = John.sayName.bind(John)
let occ = John.sayOccupation.bind(John)

setTimeout(name, 2000)
setTimeout(occ, 2000)
