const resgisterDate = new Date ('2023-09-10T10:30:00z');
const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Bangkok' };
const formattedDate = resgisterDate.toLocaleDateString('th-TH', options);
console.log(`User registered on: ${formattedDate}`);