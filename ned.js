function smallestPositiveNumberEvenlyDivisibleFrom(min, max, maxSearch) {
  var sumEqZero = 0;
  for (var i = 0; i <= maxSearch; i += 1) {
    sumEqZero = 0;
    for (var j = min; j <= max; j += 1) {
      if (j != 0) {
        sumEqZero += i % j;
      }
      if (j === max) {
        if (sumEqZero === 0) {
          if (i != 0) {
            console.log('pned', i);
            return;
          }
        }
      }
    }
  }
}

smallestPositiveNumberEvenlyDivisibleFrom(0, 10, 1000000000);