//for a few billion assignment

var fltServantsNetWorth = 0.00;
var blnIsABillionaire = false;

for (var i = 1; i < 31; i++) {
  if (i == 1) {
    fltServantsNetWorth = 0.01
  }
  else {
    fltServantsNetWorth = fltServantsNetWorth + (fltServantsNetWorth * 2);
  }
  // fltServantsNetWorth = fltServantsNetWorth + (fltServantsNetWorth * 2);
  console.log("On day " + i + " , the servant has" + fltServantsNetWorth);
  if (fltServantsNetWorth > 1000000000 && blnIsABillionaire==false) {
    console.log("The servant is officially a billionaire now (on day" + i + ")");
    blnIsABillionaire = true;
  }
}
