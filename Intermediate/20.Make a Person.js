var Person = function(firstAndLast) {
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };

  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };

  this.setFirstName = function(first) {
    return (firstAndLast = `${first} ${firstAndLast.split(" ")[1]}`);
  };

  this.setLastName = function(last) {
    return (firstAndLast = `${firstAndLast.split(" ")[0]} ${last}`);
  };

  this.setFullName = function(firstLast) {
    return (firstAndLast = `${firstLast.split(" ")[0]} ${
      firstLast.split(" ")[1]
    }`);
  };

  this.getFullName = function() {
    return firstAndLast;
  };
};

var bob = new Person("Bob Ross");
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName());
