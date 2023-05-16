const status = true;
const isProcess = true;
const getStarted = () => {
  console.log("let's start");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("status ok");
      } else reject("status error");
    }, 2000);
  });
  return promise;
};

const processing = () => {
  console.log("please wait");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isProcess) {
        resolve("processing....");
        console.log("processing....");
      } else reject("processing error");
    }, 2000);
  });
  return promise;
};

const done = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("congratulstions");
    }, 5000);
    
  });
  return promise;
};

const result = async () => {
  try {
    await getStarted();
    await processing();
    const res = await done();
    console.log(res);
  } catch (error) {
    console.log(err);
  }
};
// result();
getStarted()
    .then(processing)
    .then(done)
    .then(res => console.log(res))
    .catch(err => console.log(err))
