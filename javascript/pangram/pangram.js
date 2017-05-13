var Pangram = function(string) {
  this.value = string
}

Pangram.prototype.isPangram = function() {
  var string = this.value
  string = string.toLowerCase().replace(/[^a-z]/g,'')
  
  var letters = "abcdefghijklmnopqrstuvwxyz"

  if (string != letters) {
    return false
  } else
  for (var i = 0; i < 26; i++) {
    if (string.indexOf(letters[i]) < 0) {
      return false
    } else {
      return true
    }
  }
}

module.exports = Pangram;
