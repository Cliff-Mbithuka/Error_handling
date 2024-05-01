## ERROR HANDLING

## TYPES OF ERRORS

1. ReferenceError - Occurs when trying to access a variable that does not exist. Also when referencing an undeclared variable or calling a function that is not defined

2. Syntax Errors: These occur when the code violates the syntax rules of JavaScript. For example, missing semicolons, unmatched parentheses, or misspelled keywords can lead to syntax errors.
  (caught when we are writing our code)

3. Type Errors: These occur when an operation is performed on a value of the wrong type.


Errors are encountered due to ( Network errors, Promise Rejection, security errors )

The syntax construct try...catch allows us to catch errors for the script to do something more reasonable instead of dying.

1. try { } - encloses code that might potentially cause an error
2. catch { } - Catch and handle any thrown errors from try { }
- catch uses one parameter (err) 
4. finally { } - (optional) always executes used mostly for clean up Eg. close files, close connections, release resources.( Whether or not an error occurs)

* try...catch only works with runtime errors.
* try...catch works synchronously


Rethrowing an error refers to the act of catching an error in one part of the code and then throwing the same error again, typically with additional context or information.

## Custom Errors

This are errors that developers define themselves to handle specific situations or conditions in their application.

## Contribitions

contributions are welcome.