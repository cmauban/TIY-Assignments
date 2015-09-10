#About JavaScript
###The Four Primitive Types:
1. `null`- 1 value. Intentionally empty value. Simplest type of expression.
  - ex: Number(null) // 0
2. `Boolean`- 2 values. comparing two things. (true and false)
   - ex: Boolean(0) // false
   - ex: Boolean(3) // true
   - ex: Boolean(null) // false
3. `Number`- made up of rationals.
  - ex: 3.1459
4. `String`- represents text. "words", textual data in quotes, numbers don't need quotes. Concatenate: putting two strings together.
  - ex: String("Hello World")

##Special Constants:
- `Inifinty`- numeric value representing infinity
  - ex: 4 / Infinity = 0
  - ex: 2 * Infinity = Infinity
- `NaN`- not a number. numeric data type that has an undefined value and cannot be represented.
  - ex: 0/0 // NaN
- `undefined`- a value that is undefined such as a variable that has not been assigned a value.
  - ex: Number(demo) // demo is not defined

##Basic Operators:
- Arithmetic, e.g. +, -, / : takes numerical values as their operands and returns a single numerical value.
  - ex: 3 + 2
  - ex: 4 / 2
  - ex: 3 - 1

- Comparison, e.g. >, <= :
 - Strict (===)- only true if the operands are the same type
   - ex: 3 === 3 // true
    - ex: 3 === "3" // false
 - Equality (==)- converts the operands to the same type before making the comparison
    - ex: 1 == "1" // true
    - ex: 1 == 1 // true
    - ex: 0 == false // true
    - ex: 0 == null // false
    - ex: null == undefined // true
 - relational abstract (<=)- operands are first converted to primitives, then to the same type, before comparison
    - ex: 3 <= 4 // true

- Assignment, e.g. var, =, += : assigns a value to its left operand based on the value of its right operand.
  - ex: x = y
  - ex: x += y (which means x = x + y)

- Unary operator- only one operand. ex: `typeof`, `return`
    - the `typeof` operator returns a string indicating the type of the unevaluated operand. ex: `typeof` name
  
- .(dot) operator- used to access a class, structure or union member. ex: `.length`

**Sequential Operation:** an order of expressions with the highest precedence first in a line. When this operation is put into a program, that is called control flow.

**Control Flow:** putting sequencial operations in a program. 

## Functions

Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs. They are a snippet of code, when told to do its job, executes all of its statements.

FUNCTION INVOCATION: is when a function is invoked by placing parenthesis after it's identifier. Arguments are in the inputs provided to a function inovation.

ex:
```
  addition();
  Number(Boolean(null));
```

#####Functions have 3 things:

1. Input- parameters/arguments
2. Output- ex: return. (return value is always undefined unless noted)
3. Side Effects- outside of function ex: console.log

### `function` keyword

The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `identifier`...
    function identifier ( /* arguments go here */ ) {
      // body of function goes here
    }

Once a function has been defined, it can be _invoked_ by a function name.

###Different types of functions:

- An **anonymous function** is a function without a function name: `function () {}`
 - `setTimeout` accepts a function as an argument. The correct way to pass a function as an argument is defining it as anonymous or giving the function a name. If you use parenthesis(brackets), you aren't actually passing a function, You are executing the function and passing the result of the function to setTimeout. So don't use parenthesis to pass.
 
      -ex: passing the return value of checkme();
```
             setTimeout(checkme(),4000)
```

             //but to pass it as a funtion...

```
              setTimeout(function(){checkme()},4000)
```
  
  - `setInterval` ex: Alert "Hello" every 3 seconds (3000 milliseconds)

```
              setInterval(function(){ alert("Hello"); }, 3000);
```

- A **named function** is a function with a function name: `function foo() {}`
- An **inner function** is a function inside another function (square in this case). An outer function is a function containing a function (addSquares in this case):
  - ex:
```
        function addSquares(a,b) {
        function square(x) {
         return x * x;
         }
          return square(a) + square(b);
       }
```
  - A **recursive function** is a function that calls itself. Used to solve problems that contain smaller sub-problems. can receive two inputs: a base case (ends recursion) or a recursive case (continues recursion).
    - ex:
```
       function loop(x) {
           if (x >= 10)
            return;
          loop(x + 1);
       }
```

##Control Flow Constructs

- Block Statements: The most basic statement. used to group statements. The block is delimited by a pair of curly brackets:
```
{
  statement_1;
  statement_2;
  .
  .
  .
  statement_n;
}
```
   - block statement with control flow statement: { x++; } is the block statement
```
while (x < 10) {
  x++;
}
```
- Conditional Statements: a set of commands that executes if a specified condition is true. There are 2 conditional statements:
      - 1. `if... else`: to execute a statement if a logical *condition* is true. if, `return true;`else, `return false;`
```
              function checkData() {
                  if (document.form1.threeChar.value.length == 3) {
                     return true;
                   } else {
                     alert("Enter exactly three characters. " +
                     document.form1.threeChar.value + " is not valid.");
                     return false;
                   }
              }
```
  - 2. `switch`: allows a program to evaluate an *expression* and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement.
    - ex:
```
      switch (expression) {
        case label_1:
          statements_1
          [break;]
        case label_2:
          statements_2
          [break;]
          ...
        default:
          statements_def
          [break;]
      }
```
  ex: When break is encountered, the program breaks out of switch and executes the statement following switch. If break were omitted, the statement for case "Cherries" would also be executed.
    
```
    switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");
```
    
###Loops

- **While Statement**: creates a loop that executes a specified statement as long as the test condition evaluates to `true`.
```
      while (condition) {
        statement
      }
```

ex: Write a while loop that logs "I'm looping!" to the console three times. You can do this however you like, but NOT with three console.log calls.

```
var count = 0
var loop = function(){
	while(count < 3){
		count++;
		console.log("I'm looping!");
	}
	
};

```


ex: `while loop` iterates as long as `n` is less than 3. Each iteration, the loop increments `n` and add its to `x`. after 3rd pass, condition `n < 3` is no longer `true` so loop ends.
```
  var n = 0;
  var x = 0;

  while (n < 3) {
     n++;
     x += n;
  }
```
ex: Inside the soloLoop function, write a while loop that takes an initial condition that's true. Your loop should log "Looped once!" to the console, then change that initial condition to false.

```
//Remember to make your condition true outside the loop!
i = true

var soloLoop = function(){
  while(i) {
  console.log("Looped once!");
  i = false;
  }
};

soloLoop();
```

- **Do..While Statements**: creates a loop that executes a specified statement until the test condition evaluates to `false`.
```
do
   statement
while (condition);
```
ex: `do...while` loop iterates at least once and reiterates until `i` is no longer less than 5.
```
    var i = 0;
    do {
      i += 1;
      console.log(i);
    } while (i < 5);
```
- **For Statements**: creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop.
```
    for ([initialization]; [condition]; [final-expression])
      statement
```
ex: `for` statement starts by declaring the variable `i` and initializing it to 0. It checks that `i` is less than nine, performs the two succeeding statements, and increments i by 1 after each pass through the loop.
```
    for (var i = 0; i < 9; i++) {
       console.log(i);
       // more statements
}
```
## `Array`

2 container types
- array: list
- object: dictionary (gives you keys and values)
	- {kelly: "associate instructor",
		david: "instructor"}

### [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)

- to add onto the end of an array or push into an array: `<arrayname>.push();`
- to remove from the end of an array: `<arrayname>.pop();`
- to remove from the front of an array: `<arrayname>.shift();`
- to add to the front of an array: `<arrayname>.unshift();`
- to find the index of an item in the array (ex- finding "orange" in [berry,orange,mango] //1): `.indexOf(orange);`
- to remove an item by index position: `.splice();`
	- ex:
```
		fruits.push("Mango");
		// **["Strawberry", "Banana", "Mango"]**

		var pos = fruits.indexOf("Banana");
		// 1

		var removedItem = fruits.splice(pos, 1); // this is how to remove an item
		// ["Strawberry", "Mango"]

```
- `.length` example:
```
		var numbers = [1, 2, 3, 4, 5];

		for (var i = 0; i < numbers.length; i++) {
  		numbers[i] *= 2;
		}
		// numbers is now [2, 4, 6, 8, 10]
```
- to join all elements of an array into a string: `str = <arrayname>.join([separator = ','])`
	- ex:
```
		var a = ['Wind', 'Rain', 'Fire'];
		var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
		var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
		var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
		var myVar4 = a.join('');    // assigns 'WindRainFire' to myVar4
```
- `Array.isArray(obj)`: returns true if an object is an array, false if its not.

#### [`Array.prototype.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* _params:_ none
* _returns:_ the last element
* _side-effects_: removes the element returned

##### Examples

ex: The for loop runs until i < 7 (because cities.length equals 7. The array cities has 7 elements in it. We will increment i by 1 each time we loop over. We print out cities[0], which is "Melbourne". We then start the loop again. Except now i = 1. It will print out cities[1], which is "Amman". This continues until i is no longer less than cities.length.

```
var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Raleigh", "Charlotte", "Greenville"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
```
###Document Object Model (DOM)
is a programming interface for HTML, XML and SVG documents.

####Window Object
represents a window containing a DOM document.  a window for a given document can be obtained using the document.defaultView property. a brief reference for all of the methods, properties, and events available through the DOM window object. The window object implements the Window interface, which in turn inherits from the AbstractView interface.

#####Properties:
- LOCATION: read-only property returns a Location object with information about the current location of the document.
```		
		var oldLocation = location;
		location = newLocation;

	ex: alert(location); // alerts "https://developer.mozilla.org/en-US/docs/Web/API/Window.location"
	ex: location.assign("http://www.mozilla.org"); // or
	    location = "http://www.mozilla.org";
	ex: location.reload(true); //forcing reloading the current page from the server
```

- DOCUMENT: Returns a reference to the document contained in the window.
	
```
		doc = window.document
		
	ex: <!DOCTYPE html>
	<html>
	<head>
	 <title>Hello, World!</title>
	</head>
	<body>

	<script type="text/javascript">
	 var doc = window.document;
	 alert( doc.title);    // alerts: Hello, World!
	</script>

	</body>
	</html>
```
- HISTORY: returns a reference to the History object, which provides an interface for manipulating the browser session history (pages visited in the tab or frame that the current page is loaded in).
```
		var historyObj = window.history;

	ex: history.back();     // equivalent to clicking back button
	    history.go(-1);     // equivalent to history.back();		
```
#####Methods:
- alert: `window.alert("Hello world!");`
- confirm: displays a modal dialog with an optional message and two buttons, OK and Cancel.
	- syntax: result = window.confirm(message);
	- ex:
```
		if (window.confirm("Do you really want to leave?")) { 
  		window.open("exit.html", "Thanks for Visiting!");
		}
```
- open: Loads a resource into either a new browsing context (such as a window) or one that already exists, depending on the specified parameters.
	- syntax: var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]);
	- ex:
```
		var windowObjectReference;
		var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

		function openRequestedPopup() {
  		windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);
		}
		
		var windowObjectReference;

		function openRequestedPopup() {
		 windowObjectReference = window.open(
		 "http://www.domainname.ext/path/ImageFile.png",
		 "DescriptiveWindowName",
		 "resizable,scrollbars,status"
		 );
		}
```
- close: `window.close();`
	- ex: closing a window opened with window.open();
```
	<script type="text/javascript">
	//Global var to store a reference to the opened window
	var openedWindow;

	function openWindow()
	{
	  openedWindow = window.open('moreinfo.htm');
	}

	function closeOpenedWindow()
	{
	 openedWindow.close();
	}
	</script>
```
	//ex: closing the current window
```
	<script type="text/javascript">
	function closeCurrentWindow()
	{
	  window.close();
	}
	</script>
```
####Location Object

#####Properties: *see location property in window*

####Document Object
Each web page loaded in the browser has its own document object. The Document interface serves as an entry point into the web page's content (the DOM tree, including elements such as body and table) and provides functionality which is global to the document (such as obtaining the page's URL and creating new elements in the document).

#####Properties:
- HEAD: Returns the <head> element of the current document. `var objRef = document.head;`
	ex:
```
		// in HTML: <head id="my-document-head">
		var aHead = document.head;

		alert(aHead.id); // "my-document-head";

		alert( document.head === document.querySelector("head") ); // true
```


- BODY: Returns the <body> or <frameset> node of the current document, or null if no such element exists.
	-syntax: `var objRef = document.body; `
		 `document.body = objRef;`

```
		// in HTML: <body id="oldBodyElement"></body>
		alert(document.body.id); // "oldBodyElement"

		var aNewBodyElement = document.createElement("body");

		aNewBodyElement.id = "newBodyElement";
		document.body = aNewBodyElement;
		alert(document.body.id); // "newBodyElement"
```
#####Methods:
- `getElementById`: takes a string and returns the DOM element with that ID. if there is no element with the given id, it returns null.
	- `element = document.getElementById("id");`
	
- `getElementsByClassName`: Get all elements that have a class of 'test', inside of an element that has the ID of 'main'
	- `document.getElementById('main').getElementsByClassName('test');`
	
- `querySelector`: Returns the first element within the document that matches the specified group of selectors. ex-the first element in the document with the class "myclass" is returned:
	- `var el = document.querySelector(".myclass");`
	
- `querySelectorAll`: The object returned is a NodeList. ex-returns a list of all div elements within the document with a class of either "note" or "alert":
	- `var matches = document.querySelectorAll("div.note, div.alert");` 
	
- `appendChild`: 
- `create*` family
- `write`
- `writeln`

####`HTMLElement` Type

#####Properties:
- id: `<h1 id="myHeader">Hello World!</h1>`
- className: returns class name of an element `document.getElementById("myDIV").className = "mystyle";`
- innerHTML: sets or returns the HTML content (inner HTML) of an element.
- outterHTML: `var content = element.outerHTML;`
- children: returns a collection of an element's child elements, as an HTMLCollection object. `var c = document.body.children;`
- parentNode: returns the node that encloses the current node.
- .nextSibling: returns the node immediately following the specified node, in the same tree level. slides sideways on the DOM tree.
- .firstChild: short cut to find `childNodes`

*parentNode, firstChild, lastChild, previousSibling, nextSibling - returns null if there is no such child, parent, or sibling node. BUT `childNodes` array is length of zero if no childNodes.

#####Methods:
- addEventListener: is the way to register an event listener as specified in W3C DOM. It allows adding more than a single handler for an event.
- dispatchEvent: Dispatches an Event at the specified EventTarget, invoking the affected EventListeners in the appropriate order. `cancelled = !target.dispatchEvent(event)`
	- The return value is false if at least one of the event handlers which handled this event called Event.preventDefault(). Otherwise it returns true.
- *Attribute family:

####`HTMLCollection` and `NodeList` Types

The **HTMLCollection** interface represents a generic collection (array-like object) of elements (in document order) and offers methods and properties for selecting from the list.

- the `item` method: `HTMLCollection.item( )` gets an element by position. It returns a numbered element from an HTMLCollection. In JavaScript, it is easier to treat the HTMLCollection as an array and to index it using array notation.
	- ex:
```
		var c = document.images;  // This is an HTMLCollection
		var img0 = c.item(0);     // You can use the item( ) method this way
		var img1 = c[1];          // But this notation is easier and more common
```
**NodeList** objects are collections of nodes such as those returned by `Node.childNodes` and the `document.querySelectorAll` method. CANT USE ARRAY METHODS.

- the `item` method: `item ( idx )` Returns an item in the list by its index, or null if the index is out-of-bounds; can be used as an alternative to simply accessing `nodeList[idx]` (which instead returns  undefined when `idx` is out-of-bounds).

-  Each node has a `childNodes` property that contains an ordered array of all its children. One can index into this array. Use when you want to manipulate a Node that doesn't have an ID.

###[Events] (http://www.w3schools.com/js/js_htmldom_events.asp)
HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document. It is any input a user can provide triggers an event in JavaScript: clicks, scrolls, pressing a key on the keyboard.

#####Properties:
- `event.bubbles`: After an event triggers on the deepest possible element, it then triggers on parents in nesting order. First captured and handled by the innermost element and then propagated to outer elements. it returns a Boolean value, which is true if the event bubbles up through the DOM. only certain events can bubble, and they will bubble if the property is set to true.
	- The order is called a *bubbling order*, because an event bubbles from the innermost element up through parents, like a bubble of air in the water. ex: 3 bubbles first, then 2, then 1.
```
		<div class="d1">1  <!-- the topmost -->
		 <div class="d2">2
		  <div class="d3">3 <!-- the innermost -->

```
The bubbling goes right to the top. When an event occurs on an element - it will bubble up to HTML, triggering handlers on it’s way.

But a handler may decide that event is fully processed and stop the bubbling.

- `event.stopPropagation();` makes event bubbling stop.
- `event.target`: The target is the deepest element which triggered the event. when the event handler is called during the bubbling or capturing phase of the event. When handlers trigger on parents the event.target remains the same element. (this, the current element, the one event has bubbled too, runs the handler, number goes down)

**Event types triggered with a mouse:**
- `click`: fired when a pointing device button is pressed and released on a single element.
- `mousedown`: fired when a pointing device button is pressed on an element.
- `mouseup`: fired when a pointing device button is released over an element.
- `mousemove`: pointer is moving while it is over an element.
- `dblclick`: user clicks twice on a single element.
- `mouseover`: fired when a pointing device is moved onto the element that has the listener attached or onto one of its children.
- `mouseout`: fired when a pointing device is moved off the element that has the listener attached or off one of its children.
- `mouseenter`: pointer is moved onto an element that has the listener attached.
- `mouseleave`: fired when a pointing device is moved off the element that has the listener attached.
- `contextmenu`: fired when the user right clicks to open the context menu, or when the context menu key is pressed.

**`HTML <form> element`** represents a document section that contains interactive controls to submit information to a web server.

**Event types triggered on a `<form>` element:**
- `focus`: when a form element gets the focus
- `focusin`: when a form element gets the focus and supports bubbling up to the parents, unlike focus.
- `blur`: when a form element loses focus
- `focusout`: when a form element loses the focus and it supports bubbling up to the parents, unlike blur.

**Common Event Types**
- `click`: fired when a pointing device button is pressed and released on a single element.
- `scroll`: fired when the document view or an element has been scrolled. Throttle the event by using requestAnimationFrame, setTimeout or customEvent.
- `change`: fired for input, select, and textarea elements when a change to the element's value is committed by the user.
- `submit`: fired when a form is submitted. fired only on the form element, not the button or submit input. (Forms are submitted, not buttons.)
- `load`: fired when a resource and its dependent resources have finished loading.
- `unload`: fired when the document or a child resource is being unloaded. parent frame unload will happen before child frame unload
	- It is fired after: 1. beforeunload (cancellable event) 2. pagehide
	- The document is in a particular state:
		- all the resources still exist (img, iframe etc.)
		- nothing is visible anymore to the end user
		- UI interactions are ineffective (window.open, alert, confirm etc.)
		- an error won't stop the unloading workflow

