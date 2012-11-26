var Node = require("../lib/linkedNode");
var LinkedList = require("../lib/linkedList");

module.exports =
{
	setUp: function(callback)
	{
		this.l1	= new LinkedList([1,2,3,4,5]);
		callback();
	},

	basicTest: function(test)
	{
		var n = this.l1.firstNode;
		var i = 1;
		
		while(n !== null)
		{
			test.equal(n.value,i);
			i++;
			n = n.next;
		}
		test.done();
	},

	insertTest: function(test)
	{
		var n = this.l1.firstNode.next.next;

		this.l1.insertAfter(n,new Node(-1));

		var expectedValues = [1,2,3,-1,4,5];

		var i = 0;
		n = this.l1.firstNode;

		while(n !== null)
		{
			test.equal(n.value,expectedValues[i]);
			i++;
			n = n.next;
		}

		test.done();
	},

	deleteTest: function(test)
	{
		var n = this.l1.firstNode.next;

		this.l1.deleteAfter(n);

		var expectedValues = [1,2,4,5];

		var i = 0;
		n = this.l1.firstNode;

		while(n !== null)
		{
			test.equal(n.value,expectedValues[i]);
			i++;
			n = n.next;
		}
		
		test.done();
	},

	lastNodeTest: function(test)
	{
		var last = this.l1.lastNode();
		test.ok(last.equals(new Node(5)));

		test.done();
	},

	pushTest: function(test)
	{
		this.l1.push(new Node(6));

		var expectedValues = [1,2,3,4,5,6];

		var i = 0;
		var n = this.l1.firstNode;

		while(n !== null)
		{
			test.ok(n.value === expectedValues[i]);
			i++;
			n = n.next;
		}

		test.done();
	},

	popTest: function(test)
	{
		var popped = this.l1.pop();

		test.ok(popped.value === 5);
		test.ok(this.l1.lastNode().equals(new Node(4)));

		test.done();
	},

	shiftTest: function(test)
	{
		var shifted = this.l1.shift();

		test.ok(shifted.value === 1);
		test.ok(this.l1.firstNode.equals(new Node(2,new Node(3))));

		test.done();
	},

	unshiftTest: function(test)
	{
		this.l1.unshift(new Node(0));
		test.ok(this.l1.firstNode.equals(new Node(0,new Node(1))));

		test.done();
	},

	
	stringTest: function(test)
	{
		var str = "1 --> 2 --> 3 --> 4 --> 5";
		test.ok(this.l1.toString() === str);

		test.done();
	},

	arrayTest: function(test)
	{
		var arr = this.l1.toArray();
		
		for(var i = 1;i<=5;i++)
		{
			test.ok(arr[i-1] === i);
		}

		test.done();
	}


}
