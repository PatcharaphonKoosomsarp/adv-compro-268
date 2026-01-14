function promiseTimeput(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeput(2000)
    .then(() => {
        console.log("Done");
        return promiseTimeput(1000);
    })
    .then(() => {
        console.log("Again Done");
        return promiseTimeput(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error occurred");
    });