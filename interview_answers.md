# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A stateful component holds and manipulates state, often rendering elements dynamically to the DOM using that state, while a functional component simply renders elements to the DOM without dealing with state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
Neither of these should be called, as they are old syntax.  They have been replaced by componentDidMount and componentDidUpdate, which I will use to address the question instead.
componentDidMount is a great tool to use when we want to do things like make an API call or change the initial state of the component.  This function will run after the app initially renders to the page.
componentDidUpdate should be used when we have a change of state, and the component needs to re-render some elements of the DOM.  This function is run immediately after some kind of update to our state occurs

3. Define stateful logic.
Stateful logic is any code that deals with state.  Initializing state, setting state, changing state, etc.

4. What are the three step of creating a successful test? What is done in each phase?
Arrange, Act, Assert.  
The Arrange step is where the developer grabs the elements on the screen that they need to test (screen.getByText...)
The Act step is when we have the test perform some kind of action on those elements (clicking a button, typing into an input field, etc)
The Assert step is when we set up tests for what we expect to happen after those actions.  Did the form successfully submit?  Did we properly navigate to the expected page? etc.