function Node(data) {
    this.next = null;
    this.data = data;
}

function linked_list(){
  this.head = null;
  this.current = null;
  this.count = 0;

  this.add_list_item = function(data_payload){
      //create new object - set new_obj val to data_payload - set new object next to null
      var node = new Node(data_payload);
      if (!this.head) {
          // HEAD = new_obj - set current to new object
          this.head = node;
          this.current = node;
      } else {
          //set current to new object - set current next to new object
          this.current.next = node;
          this.current = node;
      }
      //increment count returns count
      return ++this.count;
  };
  this.get_current_value = function(){
  	//return the value of the current link list node
      return this.current.data;
  };
  this.get_next_value = function(){
  	//walk to the next item in the list
      this.current = this.current.next;
      //returns the value of the item walked to
      //if there are no other items, it returns false
      return this.current ? this.current.data : false;
  };
  this.rewind = function(){
  	//moves the list pointer back to the beginning of the list
      this.current = this.head;
  	//returns true if accomplished, or false if the list is empty
      return !!this.current;
  };
}
var list = new linked_list();
console.log(list.rewind()); //returns false
console.log(list.add_list_item(1)); //returns 1
console.log(list.add_list_item(3)); //returns 2
console.log(list.add_list_item(8)); //returns 3
console.log(list);
console.log(list.get_current_value()); //returns 8
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 3
console.log(list.get_current_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.get_next_value()); //returns false