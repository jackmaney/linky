var Node = require("./linkedNode");
var async = require("async");

var SinglyLinkedList = function(arg)
{
    
	this.insertAfter = function(node,newNode)
	{
		if(!(node instanceof Node) || !(newNode instanceof Node))
		{
			throw new Error("Non-node arguments found in the insertAfter method.");
		}

		newNode.next = node.next;
		node.next = newNode;
	}

	this.deleteAfter = function(node)
	{
		if(!(node instanceof Node))
		{
			throw new Error("Non-node arguments found in the deleteAfter method.");
		}
		
		if(node !== null) node.next = node.next.next;
	}

	this.lastNode = function()
	{
		var first = this.firstNode;
		var second = first.next;

		if(second === null)
		{
			return first;
		}
		else
		{
			async.whilst(function(){return second !== null},
				function(callback)
				{
					first = first.next;
					second = second.next;
					callback();
				},
				function(err){if(err){console.log(err);process.exit(1);}}
			);

			return first;
		}
	}


	this.unshift = function(node)
	{
		node.next = this.firstNode;
		this.firstNode = node;
	}

	this.pop = function()
	{
		var first = this.firstNode;
		var second = first.next;
		var third = second.next;

		if(second === null)
		{
			this = new Node();
			return second;
		}
		else if (third === null)
		{
			second.next = null;
			return third;
		}
		else
		{
			async.whilst(function(){return third !== null},
				function(callback)
				{
					first = first.next;
					second = second.next;
					third = third.next;
					callback();
				},
				function(err){if(err){console.log(err);process.exit(1);}}
			);

			var result = second;
			first.next = null;
			return result;
		}
	}

	this.push = function(node)
	{
		this.lastNode().next = node;
	}

	this.shift = function()
	{
		var result = this.firstNode;
		this.firstNode = this.firstNode.next;
		return result;
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
			
			var indexArray=[];
			for(var i=1;i<arg.length;i++)
			{
				indexArray.push(i);
			}
			if(indexArray.length > 0)
			{
				var attachNode = function(i,callback)
				{
					latestNode.next = new Node(arg[i]);
					latestNode = latestNode.next;
					callback();
				}
				
				async.forEachSeries(indexArray,attachNode,function(err){if(err){console.log(err);process.exit(1);}});
			}
		}
	}
	else if(typeof arg === "undefined")
	{
		this.firstNode = new Node();
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
