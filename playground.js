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

console.log(User('tom', 'catnip'));

function User(name, password){
  if (!(this instanceof User)) {
    return new User(name, password);
  }
  this.name = name || "untitled";
  this.password = password;
};

console.log(User('James', 'orange'));

function withDefaultPassword(){
  var args = Array.prototype.slice.call(arguments,0);
  args[1] = 'swordfish';
  return User.apply(this,args);
}

console.log(withDefaultPassword('James'));