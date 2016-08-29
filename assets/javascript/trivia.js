

$(document).ready(function(){

	var wins = 0,
		lose = 0,
		timer = 15,
		timeouts = 0,
		correct = "",/*not sure if I'll need this*/
		incorrect = "";/*not sure if I'll need this*/

	// setTimeOut(functionname, 1000 * 15)/*I think I'll need one of these for each question*/

	var trivia = {

	init:function(){
		

		$(".image").hide();
		$(".question").hide();
		$(".answer1").hide();
		$(".answer2").hide();
		$(".answer3").hide();
		$(".answer4").hide();
		$(".correct").hide();
		$(".incorrect").hide();
		$(".outOfTime").hide();
		$("#timermsg").hide();
		$(".startB").show();

		
		$(".startB").on("click", this.question1.bind(this));
		},/*End of init method*/

		// timer:function(),

	question1:function(){


		// $(".image").hide();
		$(".question").show();
		$(".answer1").show();
		$(".answer2").show();
		$(".answer3").show();
		$(".answer4").show();
		// $(".correct").hide();
		// $(".incorrect").hide();
		// $(".outOfTime").hide();
		$("#timermsg").show();
		$(".startB").hide();

		$(".question").html("QUESTION ONE TEXT");


		$(".answer1").html("Q1 Answer 1");

		$(".answer2").html("Q1 Answer 2");

		$(".answer3").html("Q1 Answer 3, this is the correct answer");
		$(".answer3").on("click",trivia.question2.bind(this));

		$(".answer4").html("Q1 Answer 4");
		
		},/*end of question1*/
	
	
	question2:function(){

		/*.off or unbind click lilstener*/
		 
		 $(".answer3").off("click");

		// $(".image").hide();
		// $(".question").show();
		// $(".answer1").show();
		// $(".answer2").show();
		// $(".answer3").show();
		// $(".answer4").show();
		// $(".correct").hide();
		// $(".incorrect").hide();
		// $(".outOfTime").hide();
		// $("#timermsg").show();
		// $(".startB").hide();

		$(".question").html("QUESTION TWO TEXT");


		$(".answer1").html("Q2 Answer 1");

		$(".answer2").html("Q2 Answer 2");

		$(".answer3").html("Q2 Answer 3");
		

		$(".answer4").html("Q2 Answer 4***");
		$(".answer4").on("click", trivia.question3);

		},/*endo of quesiton 3*/

	question3:function(){

		$(".answer4").off("click");

		
		$(".question").html("QUESTION THREE TEXT");


		$(".answer1").html("Q3 Answer 1**");
		$(".answer1").on("click", trivia.question4);

		$(".answer2").html("Q3 Answer 2");

		$(".answer3").html("Q3 Answer 3");
		

		$(".answer4").html("Q3 Answer 4");
		
		
	},/*End of Question3*/


	question4:function(){

		$(".answer1").off("click");

		

		$(".question").html("QUESTION FOUR TEXT");


		$(".answer1").html("Q4 Answer 1");
	

		$(".answer2").html("Q4 Answer 2");

		$(".answer3").html("Q4 Answer 3**");
		$(".answer3").on("click", trivia.question5);

		$(".answer4").html("Q4 Answer 4");
		console.log(trivia);

	},/*End of question4*/
	

	question5:function(){

		$(".answer3").off("click");

		

		$(".question").html("QUESTION FIVE TEXT");


		$(".answer1").html("Q5 Answer 1");
		

		$(".answer2").html("Q5 Answer 2**");
		$(".answer2").on("click", trivia.question6);

		$(".answer3").html("Q5 Answer 3");
	

		$(".answer4").html("Q5 Answer 4");

	},/*End of question5*/

	question6:function(){

		$(".answer2").off("click");

		

		$(".question").html("QUESTION SIX TEXT");


		$(".answer1").html("Q6 Answer 1");
		

		$(".answer2").html("Q6 Answer 2");
		

		$(".answer3").html("Q6 Answer 3");
	

		$(".answer4").html("Q6 Answer 4**");
		$(".answer4").on("click", trivia.question7);

	},/*End of question6*/

	question7:function(){

		$(".answer4").off("click");

		

		$(".question").html("QUESTION SEVEN TEXT");


		$(".answer1").html("Q7 Answer 1");
		

		$(".answer2").html("Q7 Answer 2");
		

		$(".answer3").html("Q7 Answer 3");
	

		$(".answer4").html("Q7 Answer 4**");
		$(".answer4").on("click", trivia.question8);		

	},/*End of question7*/


	question8:function(){

		$(".answer4").off("click");



		$(".question").html("QUESTION EIGHT TEXT");


		$(".answer1").html("Q8 Answer 1");
		

		$(".answer2").html("Q8 Answer 2**");
		$(".answer2").on("click", trivia.question9);

		$(".answer3").html("Q8 Answer 3");
	

		$(".answer4").html("Q8 Answer 4");
		

	},/*END OF QUESTION 8*/


	question9:function(){

		$(".answer2").off("click");

		

		$(".question").html("QUESTION NINE TEXT");


		$(".answer1").html("Q89 Answer 1**");
		$(".answer1").on("click", trivia.question10);

		$(".answer2").html("Q9 Answer 2");
		

		$(".answer3").html("Q9 Answer 3");
	

		$(".answer4").html("Q9 Answer 4");

	},/*END OF QUESITON 9*/


	question10:function(){

		$(".answer1").off("click");


		$(".question").html("QUESTION TEN TEXT");


		$(".answer1").html("Q10 Answer 1");
		

		$(".answer2").html("Q10 Answer 2");
		

		$(".answer3").html("Q10 Answer 3");
	

		$(".answer4").html("Q10 Answer 4**");
		$(".answer4").on("click", trivia.question1);

	}/*End of question 10*/

	// score:function()
		

	};/*End of trivia object*/



	trivia.init();


});/*END of .ready function*/