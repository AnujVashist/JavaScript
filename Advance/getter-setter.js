class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  get email() {
    return this._email.toUpperCase();
  }
  // setter ko return nhi krte hai
  set email(value) {
    this._email = value;
  }
  // line no 22password()
  //   get password() {
  //     return this._password.toUpperCase();
  //   }
  get password() {
    return `${this._password}0921`;
  }
  //   set password(value) {
  //     this._password = value.toUpperCase();
  //   }

  // both are same set case but the difference is only value store same value but get the value with uppercase show
  set password(value) {
    this._password = value;
  }
}

const demo = new User("demo@gmail.com", "demo#123");
//console.log(demo);
console.log(demo.password);
console.log(demo.email);

// fine gain control
//like exmaple of getter and setter
// password nhi btana / increpted password
//  access sub ko nhi dena chahte (us m customize code kr na chahte hai )
// password dena hi nhi chaahta to kese password ka error show krna hai

// jo bi variables hote hai jese this.email = email, this.password = password in pr getter and setter lga skte hai
// jitne bi proterties bnaate hai jese this.email = email un m automatically getter and setter method bn jate hai

// getter define kra hai to setter bi define kr na pde ga

//RangeError: Maximum call stack size exceeded
/*
error show in  case of constructoruse this.password and setter also use password

So resolve this use chnage the password to _passwrod in set and get case

*/

// class based syntax of get and set
