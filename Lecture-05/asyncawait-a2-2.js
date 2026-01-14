function who()  {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Joke")
        }, 200);
    });
}

function what() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("lurks");
        }, 200);
    });
}

function where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("in the dark?");
        }, 200);
    });
}

async function tellJoke() {
    const a = await who();
    const b = await what();
    const c = await where();
    console.log(`${a} ${b} ${c}`);
}
console.log("We are looking for a joke...");
msg();
console.log("Hello");