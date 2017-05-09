var DnaTranscriber = function () {
};

DnaTranscriber.prototype.toRna = function(nucleotides) {
  // only handles DNA nucleotides

  // breakdown strand into parts
  var rnaStrand = [];

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
    }
  };

  return rnaStrand.join('');
}

module.exports = DnaTranscriber;