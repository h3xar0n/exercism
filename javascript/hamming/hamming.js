var Hamming = function () {
};

Hamming.prototype.compute = function (strand1, strand2) {
  // only strands of equal length are handled
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.')
  };

  // walk through strands and count the differences
  var count = 0;
  for (var i = 0; i < strand1.length; i++) {
    if (strand1 !== strand2) {
      count++;
    }
  };
  return count;
}

module.exports = Hamming;
