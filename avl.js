var Tree = require('./tree.js');

var Avl = function (){
  var findHeight = function(node){
    if(!node){
      return 0;
    }
    else{
      return (1+Math.max(findHeight(node.left),findHeight(node.right)));
    }
  }

  var balance = function(node){
    if(!node){return 0;}
    if(!node.right || !node.left)
    {return (node.left) ? findHeight(node.left) : findHeight(node.right);}
    return (findHeight(node.left) - findHeight(node.right));
  }

  var rotate = function(node,direction){
    noDir = (direction == "left") ? "right" : "left";
    var temp = node;
    var tempRoot = node[direction];
    temp[direction] = tempRoot[noDir];
    tempRoot[noDir] = temp;
    return tempRoot;
  }

  var doubleRotate = function(node,dir1){
    dir2 = (dir1 == "left") ? "right" : "left";
    node[dir1] = rotate(node[dir1],dir2);
    node = rotate(node,dir1);
    return node;
  }

  this.insertNode = function(key){
    this.insert(key);
    var comp = balance(this.root);
    if(Math.abs(comp)>1){
      if(comp > 0){
        if(balance(this.root.left) > 0){
          this.root = rotate(this.root,"left");
          return true;
        }
        else{
          this.root = doubleRotate(this.root,"left");
          return true;
        }
      }
      else{
        if(balance(this.root.right) < 0){
          this.root = rotate(this.root,"right");
          return true;
        }
        else{
          this.root = doubleRotate(this.root,"right");
          return true;
        }
      }
    }
  }
  // this.test = 0;
  // console.log("avl tree created");

}

// The constructor property in js can not b set manually.
// It is set automatically and can not be changed.
// Avl.prototype.constructor = Tree;
// console.log(Avl instanceof Tree);


//this is the right way of inheritence.
//this creates a new tree object and assigns its props to avl.
Avl.prototype = new Tree();
var avl = new Avl;
avl.insertNode(70);avl.insertNode(50);avl.insertNode(80);avl.insertNode(72);
avl.insertNode(90);avl.insertNode(75);
console.log(avl.root);
