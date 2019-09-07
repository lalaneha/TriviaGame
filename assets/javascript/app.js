var number = 90;

var countDown;

$("#start").on("click", start);
$("#time").text(number);
$("#submit").on("click", submit);

function start(){
	//Turning off the start button so you can only click it once
	$("#start").attr("disabled", true);
	$("#allQuestions").css("display", "block");
	countDown = setInterval(decrement, 1000);

}

function decrement(){
	number--;

	$("#time").text(number);

	if(number <= 0){
		stop();
		alert("Sorry! Your time is up!");
		//Setting the start button to be clickable again. 
		$("#start").attr("disabled", false);

	}
}

function stop(){
	clearInterval(countDown);
	//Resetting the number back to 90 so that the user can play the game again. Who wouldn't want to do that?
	number = 90;
}

function submit(){
	//When user clicked submit, the correct answers, incorrect answers, and unansweres questions pop up.
	$("#answers").css("display", "block");
	stop();
	//HTML needs to change to those variables. 
	var trueRadios = $("input:radio[value=true]:checked");
		console.log(trueRadios);
		trueRadios = trueRadios.length;
		$("#correctAnswers").html(trueRadios);
		
	var falseRadios = $("input:radio[value=false]:checked"); 
		console.log(falseRadios);
		falseRadios = falseRadios.length;
		$("#incorrectAnswers").html(falseRadios);

	var unansweredCount = 0; // We'll increment this for each group of radio button where none are checked
	for (var i = 1; i <= 10; i++){ // 10 is the number of questions--with 3 radio buttons per question
		var unanswered = $("input:radio[name=q" + i + "]");	 // Here we're using the i variable to iterate over each question group
		for (var j = 0; j < unanswered.length; j++) { // We'll use j to loop over the radio buttons *within* each question
			if (unanswered[j].checked) { // IF we find any checked radio button: 
				break; // THEN we break out of the loop (cuz it was answered)
			} else if (j === unanswered.length - 1){ // IF we're on the last radio button AND the IF above is false (not checked)
				unansweredCount++; // THEN we increment unansweredCount by 1!
			}
		}
		$("#unansweredQuestions").html(unansweredCount);
	}
}