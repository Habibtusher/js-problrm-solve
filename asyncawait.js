const status = true;
const paymentDone = false;
const marks = 70;

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

const result = async () => {
  try {
    await start();
    await progress();
    const msg = await finish();
    console.log("🚀 ~ file: asyncawait.js:45 ~ result ~ msg:", msg);
  } catch (error) {
    console.log(error);
  }
};
result();
