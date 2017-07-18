



function playTheSlots(initial_coins, coins_to_walk_away) {

  var coinCount = initial_coins;
  var spinValue;
  var winnings;

  do {
    coinCount = coinCount-1;
    spinValue = (Math.trunc(Math.random()*100));
    // console.log(spinValue);
    if (spinValue === 2) {
      winnings = Math.floor(Math.random() * 50) + 51;
      // console.log("you won " + winnings + " coins!!!");
      coinCount = coinCount + winnings;
    }
    if (coinCount >= coins_to_walk_away) {
      break
    }

  } while (coinCount > 0);

  return coinCount
}


console.log("you walk away with " + playTheSlots(40, 45) + " coins today.");
