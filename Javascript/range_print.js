// range print function assignment

function range_print(starting_point, ending_point, skip_amount=1) {

  //Check to make sure starting_point is less than ending_point
    if (starting_point > ending_point) {
      console.log("starting_point can't be greater than ending_point");
    }

  // Print to the console.
    for (var i = starting_point; i < ending_point; i = i + skip_amount) {
      console.log(i);
    }
}

//Testing the function.
range_print(-1, -10);

range_print(5, 15, 5)
