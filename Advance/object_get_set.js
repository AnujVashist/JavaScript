const User = {
  _email: "hh@gmaol.com",
  _password: "123#&*$%kjsdh",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};

// use the factory function
const tea = Object.create(User);
console.log(tea.email);

// _ underscrore meaning is private property m define kr rha hai  / ya normal user k use m nhi aaye gi and jb get  aur set ka use kr te hai to us ko koi mtlb nhi hai is User is _email hai aur get and set m email hia koi mtlb nhi hai

// ES2022 m _ underscore k jgha a # lgane ka proposal hai
