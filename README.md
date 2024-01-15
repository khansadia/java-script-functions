# java-script-functions
# JavaScript Functions

<details>
<summary>Table of contents</summary>

- [Functions](#functions)
  - [Hoisting](#hoisting)
  - [This-scope](#this-scope)
- [Anonymous functions](#anonymous-functions)
- [Functions with arguments](#functions-with-arguments)
- [Functions with return value](#functions-with-return-value)
- [Functions with both arguments and a return value](#functions-with-both-arguments-and-a-return-value)
- [Arrow functions](#arrow-functions)
- [Callback functions](#callback-functions)

</details>

### Functions

Functions are powerful and versatile tools that play a crucial role in structuring code and promoting reusability. They containt a set of instructions allowing for a more modular approach to programming.

A basic syntax looks like this:

```js
function greeting() {
  // ...inside the code block is the code that belongs to the function.

  console.log("Hello there!");
}
```

We need the keyword `function`, a function name, parentheses _(which we will use later)_ and a code block with the code.

The example above just creates the function and saves it. It doesn't actually runs it. We need to invoke _(call)_ if before it runs.

To run a function we invoke we referencing its name along with parentheses.

```js
// This is an invocation.
greeting();
```

[Back to top](#javascript-functions)

#### Hoisting

JavaScript hoists functions _(like the one example above)_ to the top of the scope during the compiliation phase. This behaviour anables us to use the functions before they are explicitly declared. Use this with catuion as it may lead to unexpected results if not understood properly. Not all functions are hoisted to the top. Only the ones that are created like the one above, like this:

```js
// These functions will be hoisted.
function functionName() {
  // ...code
}
```

Proper useage of hoisting can lead to cleaner and more readable code.

#### This-scope

The `this` keyword in JavaScript refers to the current execution context. Understanding how `this` behaves in different scenarios is crucial for writing maintainable and resuable code. In functions, `this` can vary based on how the functions is invoked, prodviding a powerful mechanism for dynamic context binding.

```js
function showThis() {
  console.log(this);
}
```

- `this` in a regular function refers to the global object (e.g, `window` in a browser) or `undefined` in strict mode.

- In a object method, `this` refers to the object it self that the method was called on.
- Arrow functions do not have their own `this` context. They always inherit it from the surrounding scope.

[Back to top](#javascript-functions)

### Anonymous functions

Anonymous functions, without a specified name, offer a concise way to define functions on-the-fly. They are particularly useful for short, one-time use cases and can be passed directly as arguments to other functions.

This is the syntac for a anonymous function:

```js
const greeting = function () {
  console.log("Hello, how are you doing?");
};
```

These kind of functions won't be hoisted like regular functions.

- Anonymous function are often used in scenarios where a functions is needed temporarily and might not be reused.

- They can contribute to code readability.

[Back to top](#javascript-functions)

### Functions with arguments

Functions can accept parameters, also knows as arguments. These arguments enable the passing of data into a function, making it adaptable to various use cases. Functions with arguments enhance code flexibility and make them suitable for a wide range of inputs.

Arguments are passed inside the parentheses.

```js
function greet(name) {
  console.log(`Hello ${name}, who are you?`);
}
```

You can also have multiple arguments that you pass to a function.

```js
function greetAgain(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}, I know you!`);
}
```

These arguments are dynamic, we can pass anything to the function. Doesn't have to be a string since we haven't specified any data type. If we don't pass in a value to any of the arguments the "value" will be undefined, so it won't break but it won't be the behaviour we want.

If we have a use case where we know that we might not pass in a value, we can always utilize something called default value. It looks like this:

```js
function greet(name = "Anon") {
  console.log(`Hello ${name}!`);
}
```

This is also applicable on several arguments but the default values must come last in those cases.

```js
function greetAgain(firstName, lastName = "Svensson") {
  console.log(`Hello ${firstName} ${lastName}, I know you!`);
}
```

If we have default values that comse before the dynamic value, the order will be wrong since it is assigns from left to right.

- Arguments provide a way to pass data into a function, allowing for cusomization and reuse

- Functions can have multiple agruments, making them versatile and adaptable to different use cases.

[Back to top](#javascript-functions)

### Functions with return value

Functions can return values to us by using a keyword `return`. The ability to return a value makes a function not only perfrom tasks but also produce meningful results, further enhancing their resuability in different parts of the program.

```js
function multiply(x, y) {
  const product = x * y;
  return product;

  // This code below will not run since the return ends the function
  console.log("Hello");
}

const product = multiply(2, 4);

console.log(`The product is ${product}`); // Output: The product is 8;
```

- The `return` statement concludes the function's execution and specifies the value to be returned.

[Back to top](#javascript-functions)

### Functions with both arguments and a return value

Functions can have both arguments and a return value. Remember, that although we can have multiple arguments, there can only be **ONE** return value.

[Back to top](#javascript-functions)

### Arrow functions

Another mor concise syntax for writing functdions. Introduced with ES6. Arrow functions are always anonymous and can live on their own.

```js
const add = (a, b) => {
  // Gives us more code space.
  return a + b;
};

const sum = add(5, 6);
console.log(sum); // 11
```

Above is the normal way to create an arrow function. In some case we can write it even shorter. We could ignore the codeblock and the return keyword if we just want to return some value quickly without doing some extra code.

```js
const add = (a, b) => a + b;

const sum = add(5, 6);
console.log(sum); // 11
```

This shortend syntax is only usable for one-liners.

- Arrow functions do not have their own `this` context, they always inherit it from the surrounding scope.

- They are often used for short, simple functions and in the context of functional programming.

[Back to top](#javascript-functions)

### Callback functions

Callback functions are functions that are passed as arguments to other functions, allowing for the execution of code at a later time. They are commonly used in asynchronous operations, providing a way to handle results or errors once an operation completes.

```js
// With regular function syntax
function fetchData(callback) {
  setTimeout(function () {
    const data = "Hello from callback";
    callback(data);
  }, 1000);
}

// With arrow function syntax in the setTimeout function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello from callback";
    callback(data);
  }, 1000);
}

// with arrow function syntax in both places
const fetchData = (callback) => {
  setTimeout(() => {
    const data = "Hello from callback";
    callback(data);
  }, 1000);
};

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
```

`setTimeout` is a built-in function that executes some code after a given amount of time, in milliseconds. It takes a callback function as an argument that contains the code to be run after the given time.

- Callback functions enhance the flexibility and modularity of code, especially in scenarios involving asynchronous operations.

- As soon as a function is used as an argument in another function, it becomes a callback function.

[Back to top](#javascript-functions)