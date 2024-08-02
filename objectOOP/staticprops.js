class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const Demo = new User("demo");
//console.log(Demo.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.emial = email;
  }
}

const iphone = new Teacher("iphone", "iphobe@gmail.com");
console.log(iphone);
iphone.logMe();
console.log(iphone.createId());
