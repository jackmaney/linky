var Node = require("../lib/doublyLinkedNode");


module.exports =
{
	setUp: function(callback)
	{
		this.nullNode = new Node();
		this.n1 = new Node(5);
		this.n21 = new Node(1,null,new Node(4));
		this.n22 = new Node(1,null,new Node(4));
		this.n31 = new Node(3,new Node(0),new Node(5));
		this.n32 = new Node(3,new Node(0),new Node(5));
		this.n41 = new Node(0,new Node(1));
		this.n42 = new Node(0,new Node(1));
		
		callback();
	},

	basicTest: function(test)
	{
		test.ok(this.nullNode.value === null);
		test.ok(this.nullNode.next === null);
		test.ok(this.nullNode.prev === null);

		test.ok(this.n1.value === 5);
		test.ok(this.n1.next === null);
		test.ok(this.n1.prev === null);
		
		test.ok(this.n21.value === 1);
		test.ok(this.n21.next.value === 4);
		test.ok(this.n21.prev === null);
		
		test.ok(this.n31.value === 3);
		test.ok(this.n31.prev.value === 0);
		test.ok(this.n31.next.value === 5);

		test.ok(this.n41.value === 0);
		test.ok(this.n41.prev.value === 1);
		test.ok(this.n42.next === null);
		
		test.done();
	},

	equalTest: function(test)
	{
		test.ok(this.n21.equals(this.n22));
		test.ok(this.n31.equals(this.n32));
		test.ok(this.n41.equals(this.n42));
		
		test.done();
	}

}
