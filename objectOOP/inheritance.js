class User {
  constructor(username) {
    this.username = username;
  }

  // method
  logMe() {
    console.log(`usernmae is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`a new course was added by ${this.username}`);
  }
  addCourseemail() {
    console.log(`a new course was added by ${this.email}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123456");
chai.addCourse();
chai.addCourseemail();
const tea = new User("tea");
tea.logMe();

console.log(tea instanceof User);
