function Node(data) {
    this.next = null;
    this.data = data;
}

//link list insertion diagram: https://docs.google.com/drawings/d/1XXDS_rn81hxdRvm-Ao-Si2q-ht3qRuOOIjpzPKkj49A/pub?w=960&h=720
//link list deletion diagram: https://docs.google.com/drawings/d/1iHibqKaeuySxS6O_38rmay2swkmUwCsw8zwWCNZtYwQ/pub?w=960&h=720


function linked_list() {
    this.head = null;
    this.current = null;
    this.count = 0;

    this.add_list_item = function (data_payload) {
        //create new object - set new_obj val to data_payload - set new object next to null
        var node = new Node(data_payload);
        /*if (!this.is_list_empty()) {
         this.current.next = node;
         } else {
         this.head = node;
         }
         this.current = node;

         return ++this.count;*/

        if (!this.head) {
            // HEAD = new_obj - set current to new object
            this.head = node;
            this.current = node;
        } else {
            //set current to new object - set current next to new object
            node.next = this.current.next;
            this.current.next = node;
            this.current = node;
        }
        //increment count returns count
        return ++this.count;
    };
    //deletes the current list item
    this.delete_list_item = function () {
        //check if list is empty or not and take appropriate action
        if (this.is_list_empty()) {
            return false;
        }
        //search through list for the item prior to the current (would need to find the item with a next = current)

        //deleting first item reassign head
        if (this.head === this.current) {
            this.head = this.head.next;
            this.current.next = null;
            this.current = this.head;
        } else {
            for (var i = 0, test = this.head; i < this.count; i++) {
                if (test.next === this.current) {
                    //found previous
                    test.next = this.current.next;
                    this.current.next = null;
                    this.current = test;
                    break;
                }
            }
        }

        return --this.count;
        //set prev node's next value to the current node's next value
        //set the current to either prev or prev's next
        //decrement count
        //return count
    };

    this.get_current_value = function () {
        if (this.is_list_empty()) {
            return false;
        }
        //return the value of the current link list node
        return this.current.data;
    };
    this.get_next_value = function () {
        if (this.is_list_empty()) {
            return false;
        }
        else if (this.current.next === null) {
            console.log('at end of list');
            return false;
        }
        //walk to the next item in the list
        this.current = this.current.next;
        return this.get_current_value();

        //walk to the next item in the list
        //this.current = this.current.next;
        //returns the value of the item walked to
        //if there are no other items, it returns false
        //return this.current ? this.current.data : false;
    };

    this.rewind = function () {
        if (this.is_list_empty()) {
            return false;
        }
        this.current = this.head;
        return true;

        //moves the list pointer back to the beginning of the list
        //this.current = this.head;
        //returns true if accomplished, or false if the list is empty
        //return !!this.current;
    };

    this.is_list_empty = function () {
        if (this.current === null) {
            console.log('list is empty');
            return true;
        }
    }
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
debugger;
//PROBLEM SET 2
console.log(list.rewind()); //returns true
console.log(list.add_list_item(12)); //returns 4
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 12
console.log(list.get_current_value()); //returns 12
console.log(list.get_next_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 12
console.log(list.get_next_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.get_next_value()); //returns false 
console.log(list.rewind()); //returns true
console.log(list.get_next_value()); //returns 12
console.log(list.delete_list_item()); //returns return 3
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.get_next_value()); //returns false