//Linked List constructor

class LinkedList {
  constructor(value) {
    //This constructor is called from Node class and is in charge of creating the newNode
    const newNode = new Node(value);
    //head is pointing to the new
    this.head = newNode;
    //tail points to the same head
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    //In push things changes because if list is empty the head and tail should point to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    //else if is not null tail sho
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    //Return ths return this LinkedList, because the push method is part of the LinkedList class
    return this;
  }

  pop() {
    let temp = this.head;
    let pre = temp;
    if (!this.head) {
      return undefined;
    } else {
      while (temp.next !== null) {
        pre = temp;
        console.log(temp.value);
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    const temp = this.head;
    if (!this.head) return undefined;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    } else return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) {
      return this.unshift(value);
    }

    if (index == this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    //This inserted  value is pointing to the next node (reason of the -1)
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true
  }

}

class Node {
  constructor(value) {
    this.value = value;
    //next value will be null awaiting to receive next value
    this.next = null;
  }
}

let myLinkedList = new LinkedList(7);

//Push a new value  in the last position of the list
myLinkedList.push(5);
myLinkedList.push(5);
console.log("after push");
console.log(myLinkedList);

//Remove a value from the last position of the list
console.log(myLinkedList.pop());
console.log("after pop");
console.log(myLinkedList);

//Add element at the begining
console.log(myLinkedList.unshift(4));
console.log("after unshift");
console.log(myLinkedList);

//Remove element at the begining
console.log(myLinkedList.shift());
console.log("after shift");
console.log(myLinkedList);

//Get a value from a given position
console.log("get second element");
console.log(myLinkedList.get(1));

//Set a value in a given position
console.log("set second to  0");
console.log(myLinkedList.set(1, 1));
console.log(myLinkedList);

//Insert a new value in a given position (index,value)
myLinkedList.insert(0,6);
myLinkedList.insert(2,2);
myLinkedList.insert(2,2);
console.log("after Insertion");
console.log(myLinkedList);
