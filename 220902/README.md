# NOTES #


## String methods
* `.toLowerCase()`
* `.toUpperCase()`
* `.split(<delimiter>) - delimiter can be an empty string`
* `.includes(<substring>)`
* `<string>[<index>]`


## Arrays
* Create array with square brackets []
* Access items with `[<index>]`, where index is an integer
* In JS index numbers start at 0
* `array[array.length]` —> undefined (no item at this index)

## Array methods
* `.sort()` - sorts the original array and returns the sorted array
* `.reverse()
* `.join(<delimiter>)` - delimiter can be an empty string
* `.push(<value>) `    - add item at end of array
* `.unshift(<value>)`  - add item at beginning of array
  
## Loops
```
for (let ii = 0; ii < maxValue; ii++ ) {
  // do something with ii
}
```

## Conditions
```
if (<condition>) {
  // do something
} else {
  // do something else
}
```

## Operators
* ===  strict equality
* ++   increment by 1
* <    less than
* <=   less than or equal to
* >    greater than
* >=   greater than or equal to

## [Using the Debugger](https://code.visualstudio.com/docs/editor/debugging)
1. Place breakpoints to the left or the line numbers in the script to debug
2. Select the script to debug in the Explorer pane
3. Select menu Run > Start Debugging (or F5, or fn + F5)
4. Choose `Node.js` in the Command Palette, if required
5. In the Control Palette:
   * Use the Step Over button (or F10, or fn + F10) to execute the next line of code
   * Use the Continue button (or F5, or fn + F5) to execute all the code until the next breakpoint (or until the end of the script if there are no more breakponts)
   * Use the Stop button (or Shift + F5, or Shift + fn + F5) to stop execution

    **Note:The Step Into and Step Out buttons will become useful when you start writing functions**
    
6. Observe the values of variables in the Variables pane
7. Enter expressions to watch in the Watch pane
8. Output from the Debug session will appear in the Debug Console (not the Terminal)