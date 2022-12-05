const fibonacci = function(n) {
	  let x = 0, n2 = 1, nextTerm;
 if (n < 0) {
	return "OOPS";
} else { 
  for (let i = 1; i <= n; i++) {
    
    nextTerm = x + n2;
    x = n2;
    n2 = nextTerm
  };
  return x;
};
}
// Do not edit below this line
module.exports = fibonacci;
