//here I have implemented a binary search tree data structures.
// the functions provided are given as.
// insert(key), search(key),
// min, max, remove(key).
//in_order_traversal is implemented to find all elements.

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
  var find_sides = function(object){
    var temp = [];
    if(object.left){temp.push("left");}
    if(object.right){temp.push("right");}
    return temp;
  }
  this.remove = function(key){
    //three different cases
    var temp = this.search(key,1);
    if(!temp){console.log("key not in tree");return false;}
    // console.log(temp[1]);
    var is_root = temp[1] === "root";
    if(is_root){
      var before = this.root;
    }
    else {
      var before = temp[0][temp[1]];
    }
    var side_array = find_sides(before);
    var len = side_array.length;
    if(len === 0){
      if(is_root){this.root = null;}
      else{temp[0][temp[1]] = null;}
      return true;
    }
    if(len === 1){
      if(is_root){this.root = this.root[side_array[0]];}
      else{temp[0][temp[1]] = temp[0][temp[1]][side_array[0]];}
      return true;
    }
    if(len === 2){
      tree1 = new Tree(before.left);
      var key1 = tree1.max();
      var temp_insert = new this.Node(key1);
      this.remove(key1);
      // console.log(temp_insert)
      temp_insert.left = before.left;
      temp_insert.right = before.right;
      // console.log(temp_insert);
      if(is_root){this.root = temp_insert;}
      else{temp[0][temp[1]] = temp_insert;}
      return true;
    }
  }
  this.in_order_traversal = function(){
    if(!this.root){return [];}
    var tree1 = new Tree(this.root.left);
    var tree2 = new Tree(this.root.right);
    return tree1.in_order_traversal()
    .concat([this.root.val].concat(tree2.in_order_traversal()));
  }
}

// var tree = new Tree(null);
// tree.insert(2);tree.insert(1);tree.insert(3);tree.insert(-1);tree.insert(1.5);
// console.log(tree.root.right);
// console.log(tree.search(3));
// console.log(tree.search(-2));
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.remove(3));
// console.log(tree.root);
// console.log(tree.in_order_traversal());

module.exports = Tree;
