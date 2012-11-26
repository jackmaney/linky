var Node = require("../lib/doublyLinkedNode");
var DoublyLinkedList = require("../lib/doublyLinkedList");

module.exports =
{
	setUp: function(callback)
	{
		this.l1	= new DoublyLinkedList([1,2,3,4,5]);
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

	prevTest: function(test)
	{
		var n = this.l1.lastNode();
		test.ok(n.value === 5);
		test.ok(n.equals(new Node(5,new Node(4))));
		var values = [5,4,3,2,1];
		var i = 1;

		while(i <= 5)
		{
			test.ok(n.value === values[i - 1],"Differing values: " + n.value + " vs " + values[i - 1]);
			i++;
			n = n.prev;
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

	insertTest2: function(test)
	{
		var n = this.l1.firstNode.next.next;

		this.l1.insertBefore(n,new Node("blah"));

		var expectedValues = [1,2,"blah",3,4,5];
		var i = 0;
		var n = this.l1.firstNode;

		while(n !== null)
		{
			test.ok(n.value === expectedValues[i], "Differing values: " + n.value + " vs " + expectedValues[i]);
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

	deleteTest2: function(test)
	{
		var n = this.l1.firstNode.next;
		this.l1.deleteBefore(n);
		var expectedValues = [2,3,4,5];
		var i = 0;
		n = this.l1.firstNode;

		while(n !== null)
		{
			test.ok(n.value === expectedValues[i]);
			i++;
			n = n.next;
		}

		test.done();
	},

	deleteTest3: function(test)
	{
		var n = this.l1.firstNode.next;
		this.l1.deleteAt(n);

		var expectedValues = [1,3,4,5];
		var i = 0;
		n = this.l1.firstNode;

		while(n !== null)
		{
			test.ok(n.value === expectedValues[i]);
			i++;
			n = n.next;
		}

		test.done();
	},


	stringTest: function(test)
	{
		var str = "1 <--> 2 <--> 3 <--> 4 <--> 5";
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
