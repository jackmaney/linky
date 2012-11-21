var Node = require("./linkedNode.js");

var DoubleNode = function(arg,prevNode,nextNode)
{
	//Call the constructor of the Node prototype.
	Node.call(this,arg,nextNode);
	
	var nodeWrapper;

	//Second verse, same as the first:
	if(this.value === null || typeof(prevNode === "undefined"))
	{
		this.prev = null;
	}
	else if(prevNode instanceof Node)
	{
		nodeWrapper = new NodeWrapper(prevNode);
		this.prev = nodeWrapper.node;
	}
	else
	{
		throw new Error("Non-Node argument given for 'prevNode'");
	}

	this.previous = null;

	if(this.prev !== null)
	{
		this.previous = nodeWrapper.node;
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
