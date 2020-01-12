const leapYears = function(year) { //tests from specific conditions to more general ones
  if ( year/100 == Math.floor(year/100) && year/400 == Math.floor(year/400) ) {
    return true
  } else if ( year/100 == Math.floor(year/100) ) {
    return false;
  } else if ( year/4 == Math.floor(year/4) ) {
    return true;
  } else {
    return false;
  }

}

module.exports = leapYears
