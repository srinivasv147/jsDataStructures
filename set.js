// here I have implemented a set in java script.
// the functions present in the set are given elow.
// add, delete, has, clear, size, values.
// I have used an object to represent the set as in ds algo book.

var Set = function(){
  this.items = {};
  this.length = 0;

  this.add = function(new_element){
    if(!(new_element in this.items))
    {
      this.items[new_element] = new_element;
      this.length++;
      return true;
    }
    return false;
  }

  this.delete = function(exist_element){
    if(exist_element in this.items)
    {
      delete this.items[exist_element];
      this.length--;
      return true;
    }
    return false;
  }

  this.has = function(element){
    return(element in this.items);
  }

  this.clear = function(){
    this.items = {};
    this.lenght = 0;
    return true;
  }

  this.size = function(){
    return this.length;
  }

  this.values = function(){
    var temp = []
    for(item in this.items)
    {
      temp.push(item);
    }
    return temp;
  }
}

var set = new Set();
set.add(1);set.add(2);set.delete(2);console.log(set.has(1),set.has(2));
console.log(set.values());
console.log(set.size());
set.clear();
console.log(set.values());
