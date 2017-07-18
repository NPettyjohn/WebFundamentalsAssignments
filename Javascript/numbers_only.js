

//numbers_only assignment.


/*
This function will accept any arbitrary-length array and return
a new array containing only the numbers from the input array.
*/

  function numbersOnly(inputArray) {
    var outputArray = []

    for (var inputArrIndex = 0; inputArrIndex < inputArray.length; inputArrIndex++) {
      if (typeof inputArray[inputArrIndex] === "number") {
        console.log("its a number: " + inputArray[inputArrIndex]);
        outputArray.push(inputArray[inputArrIndex]);
      }
    }
    return outputArray;
  }




// Test area.
  var testInputArray = [3, 49, 107.387, "banana", false, 9, "orangatan", true, 0.42, ""];
  var testOutputArray = numbersOnly(testInputArray);
  console.log(testOutputArray);
