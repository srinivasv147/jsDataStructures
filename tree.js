//here I have implemented a binary search tree data structures.
// the functions provided are given as.
// insert(key), search(key), in_order_traverse, pre_order_traverse
// post_order_traverse, min, max, remove(key).

var Tree = function(root){
  this.root = root;
  this.Node = function(key){
    this.left = null;
    this.right = null;
    this.val = key;
  }
  this.insert = function(key){
    if(this.root){
      var temp = this.root;
      // console.log(key);
      while((key<=temp.val && temp.left) || (key>temp.val && temp.right)){
        if(key<=temp.val){
          temp = temp.left;
        }
        else{
          temp = temp.right;
        }
      }
      if(key<=temp.val){temp.left = new this.Node(key);}
      else{temp.right = new this.Node(key);}
    }
    else {
      this.root = new this.Node(key);
    }
  }
  this.search = function(key,dev){
    var temp = this.root;
    var temp1 = [this.root,"root"];//extra functionality to get object pointer for remove.
    while(temp){
      if(key<temp.val){temp1 = [temp,"left"];temp = temp.left;}
      else if(key>temp.val){temp1 = [temp,"right"];temp = temp.right;}
      else{if(!dev){return true;}else{return temp1;}}
    }
    return false;
  }
  this.min = function(key){
    var temp = this.root;
    while(temp.left){
      temp = temp.left;
    }
    return temp.val;
  }
  this.max = function(key){
    var temp = this.root;
    while(temp.right)
    {
      temp = temp.right;
    }
    return temp.val;
  }
  this.remove = function(key){
    //three different cases
    var temp = this.search(key,1);
    if(temp[1] === "root"){
      return 
    }
    temp[0][temp[1]]
  }
  this.in_order_traverse = function(){}
  this.pre_order_traverse = function(){}
  this.post_order_traverse = function(){}
}

var tree = new Tree(null);
tree.insert(2);tree.insert(1);tree.insert(3);tree.insert(-1);tree.insert(1.5);
console.log(tree.root.right);
console.log(tree.search(3));
console.log(tree.search(-2));
console.log(tree.min());
console.log(tree.max());
