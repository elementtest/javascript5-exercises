const palindromes = function (str) {
  let tempStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase();
  let second = tempStr.split('').reverse().join('');
  return tempStr === second;
  
};

// Do not edit below this line
module.exports = palindromes;
