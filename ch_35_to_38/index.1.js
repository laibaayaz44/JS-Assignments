var inputValue = "cloUd naTive computinG";

function capitalize(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  return words.join(" ");
}

inputValue = capitalize(inputValue);
console.log(inputValue);
var value = multiply(4, 3, 6);

console.log("value", value); // The result is ?

function add(a, b) {
  var z = a + b;
  return z;
}

function multiply(a, b, c) {
  var z = a * add(b, c);
  return z;
}

console.log("course", course); // The result is ?
console.log("z", z); // The result is ?

var course = "cloud native computing";
