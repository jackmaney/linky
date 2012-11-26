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
