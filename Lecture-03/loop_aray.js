const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(names => {console.log(names)
});

names.forEach(myfunction);

function myfunction(names) {
    console.log(names);
}

for(let name of names) {
    console.log(names);
}
