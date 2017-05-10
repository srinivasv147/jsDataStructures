// here I have implemented a set in java script.
// the functions present in the set are given elow.
// add, delete, has, clear, size, values.
// the operations implemented here are.
// union, intersection, difference, subset.
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

  this.union = function(set2){
    var set3 = new Set();
    for(var1 in this.items){
      set3.add(var1);
    }
    for(var2 in set2.items){
      set3.add(var2);
    }
    return set3;
  }

  this.intersection = function(set2){
    var set3 = new Set();
    for(var1 in this.items){
      if(var1 in set2.items){
        set3.add(var1);
      }
    }
    return set3;
  }

  this.difference = function(set2){
    var set3 = new Set();
    for(var1 in this.items){
      if(!(var1 in set2.items)){
        set3.add(var1);
      }
    }
    return set3;
  }

  this.subset = function(set2){
    //this checks if this is a subset of set2
    var temp = true;
    for(var1 in this.items){
      if(!(var1 in set2.items)){
        temp = !temp;
      }
    }
    return temp;
  }
}

// var set = new Set();
// set.add(1);set.add(2);set.delete(2);console.log(set.has(1),set.has(2));
// console.log(set.values());
// console.log(set.size());
// set.clear();
// console.log(set.values());
var set1 = new Set();
var set2 = new Set();
set1.add(1);set1.add(2);set2.add(1);set2.add(3);set2.add(4);set1.delete(2);
console.log("union",set1.union(set2).values())
console.log("intersection",set1.intersection(set2).values());
console.log("difference",set1.difference(set2).values());
console.log("subset",set1.subset(set2));
// console.log(set3.values());
