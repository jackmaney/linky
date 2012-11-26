var Node = require("./linkedNode.js");

var DoubleNode = function(arg,prevNode,nextNode)
{
	//Call the constructor of the Node prototype.
	Node.call(this,arg,nextNode);
	
	

	//Second verse, same as the first:
	if(this.value === null || typeof prevNode === "undefined")
	{
		this.prev = null;
	}
	else if(prevNode instanceof DoubleNode)
	{
		this.prev = prevNode;
	}
	else if(prevNode === null)
	{
		this.prev = null;
	}
	else
	{
		throw new Error("Non-Node argument given for 'prevNode'");
	}



	this.toSinglyLinkedNode = function()
	{
		if(this.next === null)
		{
			return new Node(this.value);
		}
		else if(this.next.next === null)
		{
			return new Node(this.value,new Node(this.next.value));
		}
		else
		{
			return new Node(this.value,new Node(this.next.value,new Node(this.next.next.value,this.next.next.next)));
		}
	}

	// This is merely an extension method the equals() method in linkedNode.js
	// The only other proviso that we add is that two equal (double) nodes must have
	// equal values of their respective previous nodes.
	this.equals = function(otherNode)
	{
		//If they aren't equal when considered as singly-linked nodes, then we don't have a prayer.
		
		var thisSinglyLinkedNode = this.toSinglyLinkedNode();
		var otherSinglyLinkedNode = otherNode.toSinglyLinkedNode();

		if(!(Node.prototype.equals.call(thisSinglyLinkedNode,otherSinglyLinkedNode)))
		{
			return false;
		}

		if(this.prev === null && otherNode.prev === null)
		{
			return true;
		}

		if(
			(this.prev !== null && otherNode.prev === null)
			|| (this.prev === null && otherNode.prev !== null)
		)
		{
			return false;
		}

		if(
			(this.prev.value instanceof DoubleNode)
			&& (otherNode.prev.value instanceof DoubleNode)
			&& !(this.equals.value(otherNode.value))
		)
		{
			return false;
		}

		if(this.prev.value !== otherNode.prev.value)
		{
			return false;
		}
	
		return true;
	}

}

function NodeWrapper(node)
{
	if(!(node instanceof Node))
	{
		throw new Error("Argument to NodeWrapper is not a Node");
	}

	this.node = node;
}

//Inheritance!

DoubleNode.prototype = new Node;




module.exports = DoubleNode;
