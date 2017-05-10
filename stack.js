// stack is an array with
// push,pop,peek,isEmpty,clear,size.
// we must implement this as a stack object

function Stack(init_list)
{
  this.items = init_list;
  this.push = function(new_item){
    this.items.push(new_item);
    return this;
  }
  this.pop = function(){
    this.items.pop();
    return this;
  }
  this.peep = function(){//peep is a non chained function.
    // console.log(this.items[this.items.length-1]);
    return this.items[this.items.length-1];
  }
  this.is_empty = function(){//not chained
    // console.log(this.items.length == 0);
    return this.items.length == 0;
  }
  this.clear = function(){
    this.items = [];
    return this;
  }
  this.size = this.items.length;
}
var stack1 = new Stack([1,2,2]);
// console.log(stack1.push(3).pop().peep().clear().items);
