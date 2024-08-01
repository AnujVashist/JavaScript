function SetUserName(userName) {
  //complex db call
  this.userName = userName;
  console.log("called");
}

function createUser(userName, email, password) {
  //SetUserName(userName); // this is only referce not call
  //SetUserName.call(userName); // call method is hold the referce of the funcion || createUser { email: 'chai@gmail.com', password: '123' }
  SetUserName.call(this, userName); /*
  createUser {
  userName: 'chai',
  email: 'chai@gmail.com',
  password: '123'

  using this, and this is used as a refrence in call method
}*/
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123");
console.log(chai);

// note: this is globle object
