function textonly(e){
var code;
if (!e) var e = window.event;
if (e.keyCode) code = e.keyCode;
else if (e.which) code = e.which;
var character = String.fromCharCode(code);
    var AllowRegex  = /^[\ba-zA-Z\s-]$/;
    if (AllowRegex.test(character)) return true;     
    return false; 
}

var input = document.getElementById('input');
var rev = document.getElementById('rev');
var alph = document.getElementById('alph');
var pal = document.getElementById('pal');
// var output = document.getElementById("output");
var clearButton = document.getElementById("clear");

function print(message){
  var outText = document.getElementById("output");
  outText.innerHTML = message;
}

function reversal() {
	var newInput = input.value;
	var revInput = newInput.split("").reverse().join("");
	console.log(revInput);
	html = "<div>Your sentence in reverse: "+"<strong>"+revInput+"</strong></div>";
	print(html);
}

function alphabits() {
	var newInput = input.value;
	var alph = newInput.split("");
	var sortAlph = alph.sort().join("");
	console.log(sortAlph);
	html = "<div>The characters alphabeticized: "+"<strong>"+sortAlph+"</strong></div>";
	print(html);
}

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

function palindrome() {
	var newInput = input.value;
	var palSplit = newInput.split("");
	var palRev = palSplit.reverse().join("");
	if (newInput === palRev){
		html = "<div>Your sentence was a plalindrome: </br>'"+newInput+"' <strong>equals</strong> '"+palRev+"'</div>";
		print(html);
	} else {
		html = "<div>Sorry it is not a plalindrome: </br>'"+newInput+"' <strong>does not equal</strong> '"+palRev+"'</div>";
		print(html);
	}
}


rev.addEventListener("click", reversal);
alph.addEventListener("click", alphabits);
pal.addEventListener("click", palindrome);

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.
function enterKeyPressed(keypress){
 if (keypress.which === 13) {
   reversal();
   alphabits();
   palindrome();
 }
}

function clear() {
	document.getElementById("output").innerHTML = "";
	document.getElementById("input").value = "";
}

clearButton.addEventListener("click", clear);
document.addEventListener("keypress", enterKeyPressed);