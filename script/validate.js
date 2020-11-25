function validate() {
	console.log("Yes");
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var mobile = document.getElementById("mobile").value;
	console.log(name);
	if(name.length==0)
	{
		window.alert("Name can not be empty");
		return false;
	}
	else if(email.length==0)
	{
		window.alert("email can not be empty");
		return false;
	}
	else if(password.length==0)
	{
		window.alert("password can not be empty");
		return false;
	}
	else if(mobile.length==0)
	{
		window.alert("mobile can not be empty");
		return false;
	}
	else if(mobile.length<10 || mobile.length>10)
	{
		window.alert("Mobile should be a 10 digit number");
		return false;
	}
	else if(email.indexOf('@') < 0)
	{
		window.alert("Invalid Email Id");
		return false;
	}
}

