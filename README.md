# Unhandled Error in Express.js Asynchronous Route Handler

This repository demonstrates a common error in Express.js applications: unhandled exceptions within asynchronous route handlers.  The `bug.js` file contains code that simulates an asynchronous operation (using `setTimeout`) which randomly throws an error. This error is not properly handled, causing the server to crash.

The `bugSolution.js` file provides a corrected version with proper error handling using `try...catch` blocks and a centralized error handler middleware.