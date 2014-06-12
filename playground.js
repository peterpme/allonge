function User(name, password) {
  this.name = name || "untitled";
  this.password = password;
};

function withDefaultPassword() {
  var args = Array.prototype.call(arguments, 0);
  args[1] = 'swordfish';
  return new User.apply(this, args);
}

var jeff = new User('tom', 'erickson');

console.log(jeff);