var DnaTranscriber = function () {
};

DnaTranscriber.prototype.toRna = function(nucleotides) {

  // blank array to feed transcription into
  var rnaStrand = [];
  
  // breakdown string into parts and iterate through each one
  for (var i = 0; i < nucleotides.length; i++) { 
    // each nucleotide transcription
    if (nucleotides[i] == 'C') {
      rnaStrand.push('G');
    } else if (nucleotides[i] == 'G') {
      rnaStrand.push('C');
    } else if (nucleotides[i] == 'A') {
      rnaStrand.push('U');
    } else if (nucleotides[i] == 'T') {
      rnaStrand.push('A');
    } else {
      throw new Error('Invalid input'); // only handles DNA nucleotides
    }
  };
  return rnaStrand.join('');
}

module.exports = DnaTranscriber;