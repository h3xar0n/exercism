function Pangram(string) {
  this.value = string;
};

Pangram.prototype.isPangram = function() {
  // Convert string to lowercase 
  var string = this.value.toLowerCase();

  // Use regex to attract all unique letters from string
  var regex = /([a-z])(?!.*\1)/g;

  // Check if the number of unique letters is 26
  return (string.match(regex) || []).length === 26;
};


module.exports = Pangram