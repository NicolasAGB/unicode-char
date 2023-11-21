var x = false;
var y = true;
var z = 0;

if (x === true || y === true || z === true) {
  console.log("True");
}

if ([x, y, z].includes(true)) {
  console.log("Truemente true");
}
