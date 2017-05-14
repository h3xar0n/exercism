function Bob() {
};

Bob.prototype.hey = function(string) {
  
  var punctuation = string.slice(-1)

  var typeCase = string.toUpperCase();

  
  if ((typeCase == string) && string.match(/[a-z]/i)) {  // Shouting
    return 'Whoa, chill out!';
  } else if (punctuation == '?') {                       // Question
    return 'Sure.';
  } else if (string.replace(/\s+/g, '') == '') {
    return 'Fine. Be that way!';
  } else {                                               // Default
    return 'Whatever.';
  }
};


module.exports = Bob