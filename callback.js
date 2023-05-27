const done = true;
const marks = 80;
const start = () => {
  console.log("starting");
  const promise = new Promise((resolve, reject) => {
    if (done) {
      resolve("resolved");
    } else {
      reject("error");
    }
  });
  return promise;
};
const processing = () => {
  console.log("processing");
  const promise = new Promise((resolve, reject) => {
    if (marks >= 80) {
      resolve("resolved");
    } else {
      reject("reject");
    }
  });
  return promise;
};
const end = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("done");
    }, 2000);
   
  });
  return promise;
};

// start(() => {
//   processing(end);
// });

start()
  .then(processing)
  .then(end)
  .then((res)=> console.log(res))
  .catch((err)=>console.log(err))