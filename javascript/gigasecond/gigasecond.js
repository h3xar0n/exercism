var Gigasecond = function(date){
  this.oldDate = date;
};

Gigasecond.prototype.date = function(oldDate) {
  var oldDate = this.oldDate;
  var newDate = new Date(oldDate.getTime() + 1000000000000);
  return newDate;
}

module.exports = Gigasecond;