linky - A Simple Linked List Implementation in Node.js
=====

A former coworker, on a lark, said that if I could implement a linked list in Node.js, then I could get an interview at the company in which he currently works. (At least, that's what I think he meant by "Node-based link list". :P)

Be careful what you wish for...


Synopsis
-----

	var LinkedList = require("linky").SinglyLinkedList;
	var DoublyLinkedList = require("linky").DoublyLinkedList;

	//The easiest way to populate is via an array

	var ll = new LinkedList([1,2,3,4,5]);
	var dll = new DoublyLinkedList(["synergy","communitization","outside-the-box thinking"]);
	
	console.log(dll.toString()); // 'synergy <--> communitization <--> outside-the-box thinking'

	//printing each of the successive values individually
	var node = ll.firstNode;

	while(node !== null)
	{
		console.log(node.value);
		node = node.next;
	}

	//marching through the doubly-linked list in reverse order
	node = dll.lastNode();
	while(node !== null)
	{
		console.log(node.value);
		node = node.prev;
	}

	var s = ll.shift(); //s is the node that used to be the first node of ll
	console.log(ll.toString()) // '2 --> 3 --> 4 --> 5'

	ll.push(new Node(3.1415926));
	console.log(ll.toArray()); // 2,3,4,5,3.1415926

Installation
-------

1. If you don't already, make sure that you have both [Node.js](http://nodejs.org) and [npm](https://npmjs.org/) installed. **Note**: If you have a recent version of Node installed, then you automatically have npm. (Also, make sure that you have [git](http://git-scm.com/) installed...but if you're on GitHub, then you probably have git installed...right?)

2. Clone linky:

	mkdir ~/linky && cd ~/linky && git clone https://github.com/jackmaney/linky.git

(Of course, if you want to install to a directory other than `~/linky`, feel free.)

3. Install the dependencies (perform this while still in `~/linky`, or wherever you cloned linky in step 2):

	npm install

4. Enjoy!

	npm
