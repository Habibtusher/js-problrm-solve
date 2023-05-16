const start = (processing)=>{
    console.log("starting...");
    setTimeout(() => {
        processing()
    }, 3000);
   
}
const processing = (done)=>{
    console.log("processing...");
    setTimeout(() => {
        done()
    }, 2000);
}
const done =(sss)=>{
    console.log("done");
    sss()
}
const sss =()=>{
    console.log("sss");
}
start(()=>{
    processing(()=>{
        done(()=>{
            sss()
        })
    })
})