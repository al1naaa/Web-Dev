// A solution using if:
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  // A solution with a question mark operator '?':
  function min(a, b) {
    return a < b ? a : b;
  }