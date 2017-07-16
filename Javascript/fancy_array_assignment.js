// fancy_array_assignment


function fancy_array(input_array, symbol="->", reversed) {
  if (reversed===true) {
    for (var idx = input_array.length-1; idx > -1; idx--) {
      console.log(idx + " " + symbol + " " + input_array[idx]);
    }
  }
  else if (reversed===false) {
    for (var idx = 0; idx < input_array.length; idx++) {
      console.log(idx + " " + symbol + " " + input_array[idx]);
    }
  }
}



// Test the funciton.
  var test_Array = ["James", "Jill", "Jane", "Jack"];
  fancy_array(test_Array, ">>>", true );

  fancy_array(test_Array, "<>", false )
