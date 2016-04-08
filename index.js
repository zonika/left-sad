module.exports = leftSad;

function leftSad(str, len) {
  str = String(str);
  var i = 0;
  while (++i < len) {
    str = "sad" + str;
  }
  return str;
}
