class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encrypPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "password");

console.log(chai.encrypPassword());
console.log(chai.changeUserName());

// behind the seen
function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User1.prototype.encrypPassword = function () {
  return `${this.password}abc`;
};

User1.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User1("tea", "tea@gmail.com", "password");

console.log(tea.encrypPassword());
console.log(tea.changeUserName());
