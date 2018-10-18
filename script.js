$(document).ready(function(){

	var magic8Ball = {};
		$("#answer").hide();
		magic8Ball.listOfAnswers = ["yes", "no", "with certainty", "most likely", "not a chance", "possibly"];

		var onClick = function(){
			setTimeout(
				function() {
				//show prompt
				var question = prompt("Ask a yes or no question");
				magic8Ball.ask(question);
			}, 1000);
		
		};
	
		$("#questionButton").click( onClick );

		magic8Ball.ask = function(question) {
			$("#8ball").effect( "shake" );
			$("#answer").fadeIn(4000);
			var randomNum = Math.random();
			var randomNumForListOfAnswers = randomNum * this.listOfAnswers.length;
			var randomIndex = Math.floor(randomNumForListOfAnswers);
			var randomAnswer = this.listOfAnswers[randomIndex];
		$("#answer").text( randomAnswer );
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		
		console.log(question);
		console.log(randomAnswer);
		};
	
		setTimeout(
			function(randomAnswer) {
				$("#answer").hide();
				$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
			}, 9000);
			

	

});


