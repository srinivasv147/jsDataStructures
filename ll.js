//this file contains code for a linked list in js.
// the allowed functions for this are as follows
//length,append,insert_at,remove_at,remove,index_of,is_empty
//size,toString.

var Linked_list = function(){
  this.head = null;
  this.length = 0;
  this.element = function(a){
    this.value = a;
    this.next = null;
  }
  this.append = function(new_element){
    if(this.head)
    {
      var iter = this.head;
      while(iter.next)
      {
        iter = iter.next;
      }
      iter.next = new_element;
      // console.log("added hi",this.head.next);
      this.length++;
      return this;
    }
    else {
      this.head = new_element;
      // console.log("added",new_element.value);
      this.length++;
      return this;
    }
  }
  this.find_n = function(n){
    if (n>this.length || n<0)
    {
      console.log("index either exceeds the list length or is less than 0");
      return null;
    }
    else{
      if(n==0){this.head = new_element;return this;}
      var iter = 0;
      var iter_el = this.head;
      while(iter != n)
      {
        iter_el = iter_el.next;
        iter++;
      }
      // var temp = iter_el.next;
      // iter_el.next = new_element;
      // new_element.next = temp;
      return iter_el
    }
  }
  this.insert_at = function(n,new_element){
    var prev_el = this.find_n(n-1);
    if(prev_el)
    {
      var temp = prev_el.next;
      prev_el.next = new_element;
      new_element.next = temp;
      this.length++;
    }
  }
  this.remove_at = function(n){
    var prev_el = this.find_n(n-1);
    if(prev_el)
    {
      var temp = prev_el.next.next;
      prev_el.next = temp;
      this.length--;
    }
  }
  this.remove = function(val){
    var iter = this.head;
    var num = 0;
    while(iter)
    {
      if(iter.value == val)
      {
        this.remove_at(num);
        num--;
        this.length--;
      }
      iter = iter.next;
      num++;
    }
  }
  this.index_of = function(val){
    var iter = this.head;
    var num = 0;
    var num_list = [];
    while(iter)
    {
      // console.log("found",val);
      if(iter.value == val)
      {
        num_list.push(num);
      }
      num++;
      iter = iter.next;
    }
    return num_list;
  }
  this.is_empty = function(){
    return this.head == null;
  }
  this.toString = function(){
    // var elem = [];
    var iter = this.head;
    while(iter)
    {
      console.log(iter.value);
      iter = iter.next;
    }
    // console.log(iter.value);
  }
}
var linked_list = new Linked_list();
console.log(linked_list.is_empty());
linked_list.append(new linked_list.element(1));
linked_list.append(new linked_list.element(2));
console.log(linked_list.is_empty());
// console.log(linked_list.length);
linked_list.append(new linked_list.element(4));
linked_list.insert_at(2,new linked_list.element(3));
linked_list.toString();
linked_list.insert_at(2,new linked_list.element(3));
linked_list.toString();
// linked_list.remove(3);
// linked_list.toString();
console.log(linked_list.index_of(3))
// console.log(new linked_list.element(2));
