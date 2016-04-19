var leftSad = require('./');
var test = require('tape');

test('left sad', function(assert) {
  assert.plan(1);
  assert.strictEqual(leftSad("zoe", 2), "sad sad zoe");
});
