function searchFunction(){
	var xmlhttp = new XMLHttpRequest();
	var url = "https://jsonplaceholder.typicode.com/posts?q=lorem";

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			myFunction(response);
		}
	};
	document.getElementById("loading").innerHTML = "Loading...";
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function myFunction(arr) {
  var input = document.getElementById("myInput").value;
  input = input.trim();
  var posts = "";
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
	if(arr[i].title.includes(input) || arr[i].body.includes(input)){
		var regexp = new RegExp(input, "gi");
		out += "<li><p>" + (arr[i].title).replace(regexp, "<b>" + input + "</b>") + "</p><br>" + 
		(arr[i].body).replace(regexp, "<b>" + input + "</b>") + "</li><br>";
		document.getElementById("list").innerHTML = out;
		document.getElementById("loading").innerHTML = "";
	} else {
		document.getElementById("loading").innerHTML = "";
		out = "Sorry, we couldn't find anything :("
		document.getElementById("list").innerHTML = out;
		out = "";
	}
  }
  if(!input){
	  out = "";
	  document.getElementById("list").innerHTML = out;
  }
}