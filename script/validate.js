function validate() {
	console.log("Yes");
	var name = document.getElementByID("name").value;
	console.log(name);
	if(name.length()==0)
		window.alert("Name can not be empty");
	
	var email = document.getElementByID("email").value;
	if(email.length()==0)
		window.alert("Email can not be empty");
	
	var password = document.getElementByID("password").value;
	if(password.length()==0)
		window.alert("Password can not be empty");
	
	var mobile = document.getElementByID("mobile").value;
	if(mobile.length()==0)
		window.alert("Mobile can not be empty");
}
