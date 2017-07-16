// while you wait assignment

// var intDaysUntilMyBirthday

for (var intDaysUntilMyBirthday = 60; intDaysUntilMyBirthday > -1; intDaysUntilMyBirthday--) {
  if (intDaysUntilMyBirthday > 30) {
      console.log(intDaysUntilMyBirthday + " days until my birthday. Will it ever get here??");
  }
  else if (intDaysUntilMyBirthday < 30 && intDaysUntilMyBirthday > 5 ) {
    console.log("Only " + intDaysUntilMyBirthday + " days until my birthday. Time to start planning. :)");
  }
  else if (intDaysUntilMyBirthday <= 5 && intDaysUntilMyBirthday > 0) {
    console.log("ONLY " + intDaysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!! WOOHOO!!");
  }
  else if (intDaysUntilMyBirthday <= 0 ) {
    console.log("IT'S MY BIRTHDAY!!! ");
  }
}
