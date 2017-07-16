// "Can I have the time" assignment.

var intHour = 8;
var intMinute = 50;
var strPeriod = "AM";

// First conditional
  if (strPeriod == 'AM') {
      // It is morning.
        if (intMinute < 30) {
          console.log("It's just after " + (intHour) + " in the morning.");
        }
        else {
          console.log("It's almost " + (intHour + 1) + " in the morning.");
        }
  }
  else {
    // It is the evening
      if (intMinute < 30) {
        console.log("It's just after " + (intHour) + " in the evening.");
      }
      else {
        console.log("It's almost " + (intHour + 1) + " in the evening.");
      }
  }

// Change the variables
  intHour = 4
  intMinute = 15
  strPeriod = "PM"

// Check that the conditional still works
  if (strPeriod == 'AM') {
      // It is morning.
        if (intMinute < 30) {
          console.log("It's just after " + (intHour) + " in the morning.");
        }
        else {
          console.log("It's almost " + (intHour + 1) + " in the morning.");
        }
  }
  else {
    // It is the evening
      if (intMinute < 30) {
        console.log("It's just after " + (intHour) + " in the evening.");
      }
      else {
        console.log("It's almost " + (intHour + 1) + " in the evening.");
      }
  }
