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

  get(index){
    if(index < 0 || index>= this.length) return undefined
    let temp = this.head;
    for (let i = 0; i < index; i++) {
        temp = temp.next
    }
    return temp;
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

myLinkedList.push(5);
myLinkedList.push(5);
console.log("after push");
console.log(myLinkedList);

console.log(myLinkedList.pop());
console.log("after pop");
console.log(myLinkedList);

console.log(myLinkedList.unshift(4));
console.log("after unshift");
console.log(myLinkedList);

console.log(myLinkedList.shift());
console.log("after shift");
console.log(myLinkedList);

console.log("get second element");
console.log(myLinkedList.get(1));


