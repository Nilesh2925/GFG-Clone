function calculate() {
	var ans1 = document.getElementById("q1").value;
	var ans2 = document.getElementById("q2").value;
	var ans3 = document.getElementById("q3").value;
	var ans4 = document.getElementById("q4").value;
	var ans5 = document.getElementById("q5").value;
	var count = 0;

	if(ans1 == 'c' || ans1 == 'C')
		count++;
	if(ans2 == 'd' || ans2 == 'D')
		count++;
	if(ans3 == 'd' || ans3 == 'D')
		count++;
	if(ans4 == 'd' || ans4 == 'D')
		count++;
	if(ans5 == 'b' || ans5 == 'B')
		count++;
	var score = (count/5)*100;
	console.log(score);
	window.alert("Your score is : "+score+"%");
}