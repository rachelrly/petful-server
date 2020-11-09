const Queue = require('../queue/Queue')
const { cats, dogs } = require('../../store')

const catQueue = new Queue;
const dogQueue = new Queue;

if (!catQueue.show()) {
  cats.forEach(cat => catQueue.enqueue(cat))
}

if (!dogQueue.show()) {
  dogs.forEach(dog => dogQueue.enqueue(dog))
}

const Pets = {
  get: () => {
    return {
      cats: catQueue.all(),
      dogs: dogQueue.all()
    }
  },
  dequeue: (type) => {
    if (type === 'cat') {
      let temp = catQueue.dequeue()
      catQueue.enqueue(temp)
    }
    else if (type === 'dog') {
      let temp = dogQueue.dequeue()
      return dogQueue.enqueue(temp)

    } else {
      console.error('Invalid type')
      return 'Invalid type'
    }
  },
  cats: () => catQueue.show(),
  dogs: () => dogQueue.show()
}

module.exports = Pets
