var Node = require("./doublyLinkedNode");
var SinglyLinkedList = require("./linkedList");

var DoublyLinkedList = function(arg)
{
	SinglyLinkedList.call(this,arg);

	this.insertBefore = function(node,newNode)
	{
		if(!(node instanceof Node) || !(newNode instanceof Node))
		{
			throw new Error("Non-node arguments found in the insertBefore method");
		}
		
		newNode.prev = node.prev;
		node.prev = newNode;
	}

	this.firstNode.prev = new Node();
	var first = this.firstNode;
	var	second = this.firstNode.next;

	second.prev = first;

	while(second !== null)
	{
		second.prev = first;
		second = second.next;
		first = first.next;
	}

	this.arrow = " <--> ";	
}

DoublyLinkedList.prototype = new SinglyLinkedList;

module.exports = DoublyLinkedList;
