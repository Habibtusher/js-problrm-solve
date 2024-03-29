const status = true;
const paymentDone = false;
const marks = 70;
const promise = new Promise((resolve, reject) => {
  if (status) {
    resolve("resolve");
  } else {
    reject("reject");
  }
});
// promise.then((res) => console.log(res)).catch((err) => console.log(err));

const start = () => {
  console.log("starting");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentDone) {
        resolve("asd");
      } else {
        reject("payment error");
      }
    }, 2000);
  });
  return promise;
};

const progress = () => {
  console.log("progress starting");
  const promise = new Promise((resolve, reject) => {
    if (marks >= 80) {
      resolve("sss");
    } else {
      reject("progress error");
    }
  });
  return promise;
};
const finish = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished");
    }, 2000);
  });
  return promise;
};

start()
  .then(progress)
  .then(finish)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
