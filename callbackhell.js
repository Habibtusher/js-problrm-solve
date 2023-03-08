const paymentDone = true;
const status = true;

const start = (callback) => {
  console.log("starting");
  if (paymentDone) {
    callback();
  } else {
    console.log("error");
  }
};

const progress = (callback)=>{
    console.log("progress starting");
    if (status) {
      callback();
    } else {
      console.log( "progress error");
    }
}
 const finish = ()=>{
    console.log("finished");
 }

 start(()=>{
    progress(finish)
 })
//  start(function(){
//     progress(function(){
//         finish(function(){
//             d(function(){
//                 e(function(){
//                     f()
//                  })
//              })
//          })
//      })
//  })