var Node = require("../lib/linkedNode");


module.exports =
{
	setUp: function(callback)
	{
		this.nullNode = new Node();
		this.n1 = new Node(5);
		this.n2 = new Node(3,new Node(0));
		this.n3 = new Node(3,new Node(0));
		
		callback();
	},

	basicTest: function(test)
	{
		test.ok(this.nullNode.value === null);
		test.ok(this.nullNode.next === null);
		
		test.ok(this.n1.value === 5);
		test.ok(this.n1.next === null);
		
		test.ok(this.n2.value === 3);
		test.ok(this.n2.next.value === 0);
		test.ok(this.n2.next.next === null);
		
		test.done();
	},

	equalTest: function(test)
	{
		test.ok(this.n2.equals(this.n3));
		test.ok(!(this.n2.equals(this.n1)));
		test.done();
	}


}
