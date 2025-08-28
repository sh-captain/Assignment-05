1. The difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll:

getElementById grabs a single element based on its unique id
getElementsByClassName gives you a collection of elements that have the same class name.
querySelector finds the first element that matches a CSS selector .
querySelectorAll retrieves all elements matching a CSS selector as a NodeList .


2. Creating and adding a new element to the DOM :
You can make a new element using createElement(). After that, you can add text or attributes to it and place it in the document using methods like appendChild, prepend, or insertBefore.


3. Event Bubbling:
When an event occurs on an element, it first triggers on that element, then travels up to its parent, moving further up the DOM tree until it reaches the document. This whole thing is known as event bubbling.



4. Event Delegation:

Event delegation involves putting a single event listener on a parent element to handle events from its child elements. This is handy because it cuts down on the number of event listeners, works with elements added dynamically, and generally makes the code run smoother.



5. The difference between preventDefault() and stopPropagation() :

preventDefault() stops the browser's default behavior, like preventing a link from opening or stopping a form from being submitted.

stopPropagation() stops the event from climbing up to the parent elements during the bubbling phase.
