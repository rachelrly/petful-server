const Queue = require('../queue/Queue')
const { people } = require('../../store')

const peopleQueue = new Queue()

if (!peopleQueue.show()) {
  people.forEach(person => peopleQueue.enqueue(person))
}

module.exports = {
  get() {
    return peopleQueue.all()
  },

  enqueue(person) {
    return peopleQueue.enqueue(person)
  },

  dequeue() {
    return peopleQueue.dequeue();
  }
}
