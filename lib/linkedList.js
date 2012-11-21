var Node = require("./linkedNode");

function SinglyLinkedList(arg)
{
    
	this.insertAfter = function(node,newNode)
	{
		if(!(node instanceof Node) || !(newNode instanceof Node))
		{
			throw new Error("Non-node arguments found to the insertAfter method.");
		}

		newNode.next = node.next;
		node.next = newNode;
	}

	if(arg instanceof Node)
	{
		this.firstNode = arg;
	}
	else if(Array.isArray(arg))
	{
		if(arg.length == 0)
		{
			this.firstNode = new Node();
		}
		else
		{
			if(arg[0] instanceof Node)
			{
				this.firstNode = arg[0];
			}
			else
			{
				this.firstNode = new Node(arg[0]);
			}
			var latestNode = this.firstNode;
			
			for(var i=1;i<arg.length;i++)
			{
				this.insertAfter(latestNode,new Node(arg[i]));

				latestNode = latestNode.next;
			}
		}
	}
	else
	{
		throw new Error("The constructor argument must be either a Node or an array");
	}

	this.arrow = " --> ";

	this.toString = function()
	{
		var result = this.firstNode.value.toString();

		var latestNode = this.firstNode.next;

		while(latestNode !== null)
		{
			result += this.arrow + latestNode.value.toString();

			latestNode = latestNode.next;
		}

		return result;
	}

    this.toArray = function()
    {
        var result = [this.firstNode.value];

        var latestNode = this.firstNode.next;
        
        while(latestNode !== null)
        {
            result.push(latestNode.value);

            latestNode = latestNode.next;
        }
        
        return result;
    }
	
}

module.exports = SinglyLinkedList;