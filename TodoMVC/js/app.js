// (function (window) { //represents a window containing a DOM document and implements the Window interface.
// 	'use strict';
//
// 	// Your starting point. Enjoy the ride!
//
// })(window); //calls the window.


// User Stories
	//I can add a task to my todo list so that I can remember to do it later.
//
//	- how do i (a user) add a task to the list?
//		-select the form field for a new task (<input type="text" id="new_task">)
//		- type in the name of your task? what you want to remember..
// 		- press the "enter"	key.. what does this do in JS?
// 		- then the task "appears"	in the list of tasks.
//	- what happens once i complete these steps?
			//make variables for the elements to manipulate


				//*create NodeList for all of the data-id attributes in the li element
	// var inputIds = document.querySelectorAll('.todo-list');
	// console.log(inputIds);
	//
	// var enter = document.querySelector('.new-todo');


	var todoInput = document.querySelector('.new-todo'); //

	todoInput.addEventListener('keypress', function (event) { //captures input when typed in field
	  var addedItem = todoInput.value; //returns the text input in field
	  console.log(addedItem);
	});


				//*create variable to submit the users input
			//create function
				//*log the users input by adding .value
			//add event listeners

// I can edit a task on my todo list so that I can correct typos.
// 	- how do i edit the tasks?
			//target the input element with the <h1> parent
			//add event listener 'dblclick'

// I can mark a task as complete so that I remember that I have done it.
			//target li element with the <ul> parent and class "todo-list"
			//create a function targeting the class attribute to equal "completed" (boolean? checked or unchecked)
			//add event listener 'click'
			//when you hover over the button, something happens?????

// I can mark a completed task as incomplete so that I actually complete it this time.
			//target li element with the <ul> parent and class "todo-list"
			//make the class attribute equal to null or empty string.

// I can delete a task from my todo list so that I don't have to see it any more.
			//target the button element with the class attribute "destroy"
			//add an event listener to the button element.

// I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
			//target the button element with teh class "clear-completed"
			//add the event listener, 'click'

// I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
		//the <ul> class is the parent.
		//the <li> elements change
		//something happens with the span class...
		//the <strong> element changes based on the number of items left.
			//ALL BUTTON- target the href attribute "#/" in the anchor tag.
				//*class attribute equals "selected"
			//ACTIVE BUTTON- target the href attribute "#/active" in the anchor tag.
				//*class attribute equals "selected"
			//COMPLETED BUTTON- target the href attribute "#/completed" in the anchor tag.
				//*class attribute equals "selected"
			//add event listener, "click"
