const staTus = 500;

if (staTus === 200) {
  console.log("OK!");
} else if (staTus === 400 || staTus === 500) {
  console.log("Error!");
} else {
  console.log("Unknown status ");
}
