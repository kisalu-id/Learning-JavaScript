//callbacks are functions that are passed as arguments to other functions
//can be anonymous
function useCallback(callback)
{   //getting callback function"callback" function as an argument
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    //passing this function as an argument to another function
    console.log(sentence);
}

// TODO: execute useCallback with the callback as the argument
useCallback(callback);
