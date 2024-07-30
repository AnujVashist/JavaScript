// promise 1
const promiseOne = new Promise((resolve, reject) => {
  //DataBase Calls, cryptoghaphy, network call
  //Do any Async tasks
  setTimeout(() => {
    //console.log("Async task is complete");
    resolve(); // resolve is the method
  }, 1000);
});
promiseOne.then(() => {
  //console.log("promise consumed");
});

// promise 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => {
  //console.log("Promise consumed 2");
});

// promise 3
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "userDemo", email: "userdemo@gmail.com" });
  }, 1000);
});
promiseThree.then((user) => {
  //console.log(user);
});

//promise 4

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // false/true
    if (!error) {
      resolve({ userName: "userDemo", password: "123456789" });
    } else reject(" Error : something went wrong");
  });
});
//promiseFour.then().catch()

// this type data not show or fetch

// const userName = promiseFour.then((user) => {
//   console.log(user);
//   return user.userName;
// });
// console.log(userName);

promiseFour
  .then((user) => {
    //console.log(user);
    return user.userName;
  })
  .then((userName) => {
    //console.log(userName);
  })
  .catch((error) => {
    //console.log(error);
  })
  .finally(() => {
    // console.log(
    //   "The promise is either resolved adn rejected - finally is show "
    // );
  });
// first case error is true / and 2nd case error is false

// promise 5

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        userName: "javascript",
        password: "0001",
      });
    } else {
      reject("Js Went Wrong");
    }
  }, 1000);
});

//************** promise 5 not complete 35.00 time  */

// in case of async gracefully not handle catch method

// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }

consumePromiseFive();

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}

consumePromiseFive();

// using try catch
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);

//     const data = await response.json(); // yaha pr bi await kr bana pdega
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

// usingthen and catch ------

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
