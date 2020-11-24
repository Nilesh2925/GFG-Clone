function validate() {
	console.log("Yes");
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var mobile = document.getElementById("mobile").value;
	console.log(name);
	if(name.length==0)
		window.alert("Name can not be empty");
	else if(email.length==0)
		window.alert("email can not be empty");
	else if(password.length==0)
		window.alert("password can not be empty");
	else if(mobile.length==0)
		window.alert("mobile can not be empty");
}

