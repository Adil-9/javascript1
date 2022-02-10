
function al(event){
	var len = document.getElementById("parag").innerText.length;
	var count = 0;
	for(var i = 0; i < len; i++){
		if(document.getElementById("parag").innerText[i] == " "){
			count++;
		}
	}
	document.getElementById("charNum").innerHTML = count+1 + " words in the paragraph";
}

function fun(event) {
	var len = document.getElementById("parag").innerText.length;
	for(var i = 0; i < len; i++){
		if(document.getElementById("parag").innerText[i] == "?"){
			document.getElementById("parag").innerTextt[i] = "&#129300"; 
		}
		else if(document.getElementById("parag").innerText[i] == "!"){
			document.getElementById("parag").innerText[i] = "&#128562";
		}
	}
}
