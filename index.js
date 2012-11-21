var DoublyLinkedList = require("./lib/doublyLinkedList");
var SinglyLinkedList = require("./lib/linkedList");

exports.linkedList = function(argArray,doublyLinked)
{

	if(typeof(argArray)!=='undefined' && !Array.isArray(argArray))
	{
		throw new Error("The first constructor argument, if provided, must be an array");
	}

	if(doublyLinked)
	{
		return new DoublyLinkedList(argArray);
	}
	else
	{
		return new SinglyLinkedList(argArray);
	}
}




