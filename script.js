// your code here
function shareurl(){
	let name = document.querySelector("#name").value;
	let year = document.querySelector("#year").value;
	let url = "https://localhost:8080/?";
	if(name.trim().length!=0){
		url += "name="+name;
		if(year.trim().length!=0){
		url += "&";
	}
	}
	if(year.trim().length!=0){
		url += "year="+year;
	}
	// let url = "https://localhost:8080/?name="+name+"&year="+year;
	document.querySelector("#url").innerText = url;
}