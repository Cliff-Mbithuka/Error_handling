## ERROR HANDLING

Errors are encountered due to ( Network errors, Promise Rejection, security errors )
1. try { } - encloses code that might potentially cause an error
2. catch { } - Catch and handle any thrown errors from try { }
- catch uses one parameter (err) and inside the catch use console.error(err)
4. finally { } - (optional) always executes used mostly for clean up Eg. close files, close connections, release resources.( Whether or not an error occurs)