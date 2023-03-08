const status = true;

const promise = new Promise((resolve, reject) => {
  if (status) {
    resolve("resolve");
  } else {
    reject("reject");
  }
});
promise.then((res) => console.log(res)).catch((err) => console.log(err));
