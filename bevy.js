// function greeting(name) {

//   alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);
// setTimeout(() => {
//     console.log("object");
// }, 2000);

const status = true;
console.log("task 1");

const promise = new Promise ((resolve,reject)=>{
  setTimeout(() => {
    if (status) {
      resolve('task 2')
    } else {
      reject('faield')
    }
  }, 2000);
}) 



console.log("task 3");
