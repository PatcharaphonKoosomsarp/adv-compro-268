const istatus = 200
if (istatus === 200) {
  console.log("OK!")
} else if (istatus === 400) {
  console.log("Bad Request")
} else {
  console.log("other status")
}

switch (istatus) {
  case 200:{
    console.log("OK!")
    console.log("Success")
  }

  case 400:
    console.log("Bad Request")
    break;
  default:
    console.log("other status")
}q