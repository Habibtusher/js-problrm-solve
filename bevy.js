function greeting(name) {

  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
setTimeout(() => {
    console.log("object");
}, 2000);


