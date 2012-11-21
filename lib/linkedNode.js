//No, I didn't call this file node.js, because that would be too freaking weird...

var Node = function(value,nextNode)
{
	//Data validation: setting null if arguments aren't passed
	//and throwing an error if nextNode is defined but not a node.
	if(typeof value === "undefined")
	{
		this.value = null;
	}
	else 
	{
		this.value = value;
	}

	if(typeof nextNode === "undefined")
	{
		this.next = null;
	}
	else if(nextNode instanceof Node)
	{
		this.next = nextNode;
	}
	else
	{
		throw new Error("Non-Node nodeument given for 'nextNode'");
	}

	// A Java-esque equals method. Two nodes are equal if and only if:
	// 1. Their values are equal (either via equals() if they are Nodes or === otherwise), and
	// 2. The corresponding values of their next nodes are equal.
	this.equals = function(otherNode)
	{
		if(otherNode instanceof Node)
		{
			if(this.value === null && otherNode.value === null)
			{
				return true;
			}

			if(
					this.value instanceof Node 
					&& otherNode.value instanceof Node
					&& !(this.value.equals(otherNode.value))
			)
			{
				return false;
			}
			else if(this.value !== otherNode.value)
			{
				return false;
			}

			if(
					this.next.value instanceof Node
					&& otherNode.next.value instanceof Node
					&& !(this.next.value.equals(otherNode.next.value))
			)
			{
				return false;
			}
			else if(this.next.value!==otherNode.value)
			{
				return false;
			}

			return true;
		}

		return false;
	}
}

module.exports = Node;
