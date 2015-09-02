#About JavaScript
##The Four Primitive Types:
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

## Functions

Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs. They are a snippet of code, when told to do its job, executes all of its statements.

#####Functions have 3 things:

1. Input- parameters. variable.
2. Output- ex: return. (return value is always undefined unless notes)
3. Side Effects- outside of function ex: console.log

### `function` keyword

The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `whatever`...
    function whatever ( /* arguments go here */ ) {
      // body of function goes here
    }

Once a function has been defined, it can be _invoked_ by... (get the picture?)

###Different types of functions:

- An anonymous function is a function without a function name: `function () {}`
- A named function is a function with a function name: `function foo() {}`
