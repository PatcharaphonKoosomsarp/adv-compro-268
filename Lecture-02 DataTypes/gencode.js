function gernerateTempID() {
    const rendomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase();
}

const orderID = gernerateTempID();
console.log(`Your temporary order ID is: ${orderID}`);
