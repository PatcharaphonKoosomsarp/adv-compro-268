function critticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n**********Try..Catch********\n");
try {
    critticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}
console.log("\n**********Try..Catch..Finally********\n");
try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log("Caught an error");
    logError(ex);
}

console.log("\n**********Try..Catch..Finally********\n");

try {
    critticalCode();
} catch (ex) {
    console.log("Caught an error");
    logError(ex);
}
finally {
    console.log("This is always will run");
}
function hello() {
    console.log("\n**********Throwing Exception********\n");
}