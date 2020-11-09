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
    const temp = peopleQueue.dequeue()
    return peopleQueue.enqueue(temp);
  }
}
