const startTime = Date.now();

function someHeavy(){
    for(let i = 0; i < 1e7; i++){
    Math.sqrt(i);
}
}

someHeavyTask();

const endTime = Date.now();
const elapsed = endTime - startTime;
console.log(`Elapsed time: ${elapsed} ms`);