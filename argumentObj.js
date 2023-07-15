function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through arguments
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i] + separator;
      console.log(separator)
    }
    console.log(arguments)
    console.log(Object.getPrototypeOf(arguments))
    return result;
  }

  console.log(myConcat("Dev","Babu", "Zindabad" ));

