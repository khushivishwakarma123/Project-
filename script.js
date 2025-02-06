function validE(e) {
  const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return patt.test(e);
}

const e = "vishwakarma@gmail.com";
if (validE(e)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}