const people = ["Net", "Pomp", "Pleum", "Guy"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    firstName: "Patcharaphon",
    lastName: "Koosomsarp",
};

function sayHello(Person) {
    console.log("Hello " + Person.firstName);   
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(typeof employee instanceof Array);
sayHello(employee);