var Node = require("./doublyLinkedNode");
var SinglyLinkedList = require("./linkedList");
var async = require("async");
var util = require("util");

var DoublyLinkedList = function(arg)
{
	SinglyLinkedList.call(this,arg);


	this.firstNode.prev = new Node();
	var first = this.firstNode;
	var	second = this.firstNode.next;

	second.prev = first;
	
	async.whilst(function(){return second !== null;},
		function(callback)
		{
			second.prev = first;
			second = second.next;
			first = first.next;
			callback();
		},
		function(err){if(err){console.log(err);process.exit(1);}}
	);


	this.arrow = " <--> ";

}

DoublyLinkedList.prototype = new SinglyLinkedList;

DoublyLinkedList.prototype.pop = function()
{
	var result = this.lastNode();
	result.prev = null;
	return result;
}

DoublyLinkedList.prototype.insertBefore = function(node,newNode)
{
	if(node.prev !== null)
	{
		this.insertAfter(node.prev,newNode);
	}
	else
	{
		this.shift(newNode);
	}
}

DoublyLinkedList.prototype.deleteBefore = function(node)
{
	if(node.prev !== null && node.prev.value !== null)
	{
		if(node.prev.prev === null || node.prev.prev.value === null)
		{
			this.shift();
		}
		else
		{
			this.deleteAfter(node.prev.prev);
		}
	}
}

DoublyLinkedList.prototype.deleteAt = function(node)
{

	node.prev.next = node.next;
}

module.exports = DoublyLinkedList;
