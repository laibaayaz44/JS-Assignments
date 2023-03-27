var  a = parseFloat(prompt("enter number with decimal points "));
var ab=Math.ceil(a);
alert(ab)
// intilizing string variable 
var text = "This is my dummy text";

var sliceText = text.slice(0, ab);
var reversedText = "";
for (var i = sliceText.length - 1; i >= 0; i--) {
  reversedText += sliceText[i];
}

// Step 4: Print reversed string in alert
alert(reversedText);


