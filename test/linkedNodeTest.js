var Node = require("../lib/linkedNode");

module.exports ={
testValue: function()
{
	var val = Math.random();

	var n = new Node(val);

	equal(n instanceof Node,true);
	equal(n.value,val);
	test.done();
},

testEquals : function()
{
	var val = Math.random();

	var n1 = new Node(val);
	var n2 = new Node(val);

	equal(n1.equals(n2),true);
	equal(n1 === n2,false);
	test.done();
},

testNext : function()
{
	var n = new Node(5,new Node(2));
	
	equal(n.next instanceof Node,true);
	equal(n.next.value,2);
	equal(n.next.next,null);
	test.done();
}

}
