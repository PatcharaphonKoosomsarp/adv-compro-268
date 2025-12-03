const fullname = "Patcharaphon"
const cleanname = fullname.trim();
console.log(`trimmed name: ${cleanname}!`)

const nameParts = cleanname.split(" ");
console.log("Name Parts:", nameParts);

const finalParts = nameParts.filter(Boolean);
console.log("FIltered Parts:", finalParts);

const firstName = finalParts[0];
console.log(`Hello ${firstName}`);

