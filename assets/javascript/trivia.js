

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
		$(".answer3").on("click",this.question2);

		$(".answer4").html("Q1 Answer 4");
console.log(this);
		},/*end of question1*/
	
	
	question2:function(){

		/*.off or unbind click lilstener*/

		$(".image").hide();
		$(".question").show();
		$(".answer1").show();
		$(".answer2").show();
		$(".answer3").show();
		$(".answer4").show();
		$(".correct").hide();
		$(".incorrect").hide();
		$(".outOfTime").hide();
		$("#timermsg").show();
		$(".startB").hide();

		$(".question").html("QUESTION TWO TEXT");


		$(".answer1").html("Q2 Answer 1");

		$(".answer2").html("Q2 Answer 2");

		$(".answer3").html("Q2 Answer 3");
		

		$(".answer4").html("Q2 Answer 4");
		$(".answer4").on("click", this.question3);

		},/*endo of quesiton 2*/

	question3:function(){
		console.log("on to question3")

	}
	// question4:function()
	// question5:function()
	// question6:function()
	// question7:function()
	// question8:function()
	// question9:function()
	// question10:function()
	// score:function()
		

	};/*End of trivia object*/



	trivia.init();


});/*END of .ready function*/