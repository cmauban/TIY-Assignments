There are four Basic literal types (primitive):
1. null- 1 value. Intentionally empty value.
2. Boolean- 2 values (true and false)
  ex: Boolean(0)
      false
3. Number- made up of rationals.
4. String- "words", textual data in quotes, numbers don't need quotes.
  ex: String("Hello World")

Special constants:
Inifinty- numeric value representing infinity
  ex: 4 / Infinity = 0
      2 * Infinity = Infinity
NaN- not a number. numeric data type that has an undefined value and cannot be represented.
undefined- a value that is undefined such as a variable that has not been assigned a value.

Basic Operators:
Arithmetic, e.g. +, -, / : takes numerical values as their operands and returns a single numerical value.
  ex: 3 + 2
      4 / 2

Comparison, e.g. >, <= :
  strict (===)- only true if the operands are the same type
  abstract (==)- converts the operands to the same type before making the comparison
  relational abstract (<=)- operands are first converted to primitives, then to the same type, before comparison

Assignment, e.g. var, =, += :
