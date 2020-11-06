const Queue = require('../queue/Queue')
const { cats, dogs } = require('../../store')

const catQueue = new Queue;
const dogQueue = new Queue;

if (!catQueue.show()) {
  cats.forEach(cat => catQueue.enqueue(cat))
  //console.log(catQueue.show())
}

if (!dogQueue.show()) {
  dogs.forEach(dog => dogQueue.enqueue(dog))
  //console.log(dogQueue.show())
}

const Pets = {
  get: () => {
    return {
      cat: catQueue.show(),
      dog: dogQueue.show()
    }
  },
  dequeue: (type) => {
    if (type === 'cat') {
      catQueue.dequeue()
    }
    else if (type === 'dog') {
      dogQueue.dequeue()

    } else {
      console.error('Invalid type')
      return 'Invalid type'
    }
  }
}

module.exports = Pets
