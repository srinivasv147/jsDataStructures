//this is an object implementation of a queue object in js.
//it contains the following functions.
//ennqueue(add to q),dequeue(add to q),front(1st element),isEmpty,size.
//in the init array first item is the last in the queue.
var Queue = function(init_queue)
{
  this.items = init_queue;

  this.enqueue = function(new_item){
    this.items.unshift(new_item);
    return this;//enables method chaining.
  }

  this.dequeue = function(){
    this.items.pop();
    return this;
    //the last item is not returned as we can front() before removal.
  }

  this.front = function(){//not chained.
    return this.items[this.items.length - 1];
  }

  this.isEmpty = function(){
    return this.items.length == 0;
  }

  this.size = this.items.length;
}
var queue = new Queue([1,2,3]);
console.log(queue.front());
console.log(queue.enqueue(4).dequeue().front());
