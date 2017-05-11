// here I implement hash table data structure.
// the hash table supports the following methods.
// put(key, value), remove(key), get(key)->value.
// this is how python dictionary is implemented.
// note that this uses more memory than an array but
// makes obtaining keys very quick.
// I am going to use modular hashing on strings.
// I am going to fix array size as 97.
// this can be improved by choosing smaller arrays for small inputs
// and then resizing as array size increases.

var Hash_table = function(size){
  this.items = [];
  this.size = size;
  this.hash = function(input_key){
    var order = 1;
    var num = 0;
    for(ind in input_key){
      num += (input_key[ind].charCodeAt(0)*order)%this.size;
      // console.log(num)
      order *= 10;
    }
    return num%size;
  }
  this.put = function(key,val){
    this.items[this.hash(key)] = val;
    return true
  }
  this.get = function(key){
    return this.items[this.hash(key)]
  }
  this.remove = function(key){
    this.items[this.hash(key)] = undefined;
    return true
  }
}
var hash_table = new Hash_table(97);
hash_table.put("srinivas","codes");
hash_table.put("sushmita","heals");
console.log(hash_table.get("srinivas"));
hash_table.remove("sushmita");
console.log(hash_table.get("sushmita"));
