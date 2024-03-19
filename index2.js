// string manipulation.

function manipulateString(inputString, callback) {
    const manipulatedString = inputString.toUpperCase();
     
    callback(manipulatedString);
}

function logString(manipulatedString) {
    console.log(' the manipulated string is:${manipulatedString}');

}

// Expected outut:
manipulateString("hello, word!", logString); // the manipulated string is:
HELLO, WORLD