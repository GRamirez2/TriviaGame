

$(document).ready(function(){

	var wins = 0,
		lose = 0,
		clock = 15,
		timeouts = 0;
		// question = 1;
		

	

	var trivia = {

		init:function(){
			
			/*reset Global variables*/

			$(".image").hide();
			$(".question").hide();
			$(".answer1").hide();
			$(".answer2").hide();
			$(".answer3").hide();
			$(".answer4").hide();
			$(".correct").hide();
			$(".incorrect").hide();
			$(".outOfTime").hide();
			$("#timer").hide();
			$(".startB").show();

			$(".startB").on("click", this.question1);
			// $(".startB").on("click", this.question1.bind(this));
			},/*End of init method*/

			// timer:function(),

		question1:function(){


			trivia.countdown();
			question = 1;

			// $(".image").hide();
			$(".question").show();
			$(".answer1").show();
			$(".answer2").show();
			$(".answer3").show();
			$(".answer4").show();
			$(".correct").hide();
			// $(".incorrect").hide();
			// $(".outOfTime").hide();
			$("#timer").show();
			$(".startB").hide();

			$(".question").html("QUESTION ONE TEXT");

			$(".answer1").html("Q1 Answer 1");

			$(".answer2").html("Q1 Answer 2");

			$(".answer3").html("Q1 Answer 3, this is the correct answer");
			$(".answer3").on("click",trivia.win);

			$(".answer4").html("Q1 Answer 4");
			
			},/*end of question1*/
		
		
		question2:function(){

			
			this.countdown();
			 
			 $(".answer3").off("click");


			$(".question").html("QUESTION TWO TEXT");


			$(".answer1").html("Q2 Answer 1");

			$(".answer2").html("Q2 Answer 2");

			$(".answer3").html("Q2 Answer 3");
			

			$(".answer4").html("Q2 Answer 4***");
			$(".answer4").on("click", this.win);

			},/*endo of quesiton 3*/

		question3:function(){

			this.countdown();

			$(".answer4").off("click");

			
			$(".question").html("QUESTION THREE TEXT");


			$(".answer1").html("Q3 Answer 1**");
			$(".answer1").on("click", this.win);

			$(".answer2").html("Q3 Answer 2");

			$(".answer3").html("Q3 Answer 3");
			

			$(".answer4").html("Q3 Answer 4");
			
			
			},/*End of Question3*/


		question4:function(){

			this.countdown();


			$(".answer1").off("click");

		

			$(".question").html("QUESTION FOUR TEXT");


			$(".answer1").html("Q4 Answer 1");
		

			$(".answer2").html("Q4 Answer 2");

			$(".answer3").html("Q4 Answer 3**");
			$(".answer3").on("click", this.win);

			$(".answer4").html("Q4 Answer 4");
			// console.log(trivia);

			},/*End of question4*/
		

		question5:function(){

			this.countdown();


			$(".answer3").off("click");

			

			$(".question").html("QUESTION FIVE TEXT");


			$(".answer1").html("Q5 Answer 1");
			

			$(".answer2").html("Q5 Answer 2**");
			$(".answer2").on("click", this.win);

			$(".answer3").html("Q5 Answer 3");
		

			$(".answer4").html("Q5 Answer 4");

			},/*End of question5*/

		question6:function(){

			this.countdown();


			$(".answer2").off("click");

			

			$(".question").html("QUESTION SIX TEXT");


			$(".answer1").html("Q6 Answer 1");
			

			$(".answer2").html("Q6 Answer 2");
			

			$(".answer3").html("Q6 Answer 3");
		

			$(".answer4").html("Q6 Answer 4**");
			$(".answer4").on("click", this.win);

			},/*End of question6*/

		question7:function(){

			this.countdown();


			$(".answer4").off("click");

			

			$(".question").html("QUESTION SEVEN TEXT");


			$(".answer1").html("Q7 Answer 1");
			

			$(".answer2").html("Q7 Answer 2");
			

			$(".answer3").html("Q7 Answer 3");
		

			$(".answer4").html("Q7 Answer 4**");
			$(".answer4").on("click", this.win);	

			},/*End of question7*/


		question8:function(){

			this.countdown();


			$(".answer4").off("click");



			$(".question").html("QUESTION EIGHT TEXT");


			$(".answer1").html("Q8 Answer 1");
			

			$(".answer2").html("Q8 Answer 2**");
			$(".answer2").on("click", this.win);

			$(".answer3").html("Q8 Answer 3");
		

			$(".answer4").html("Q8 Answer 4");
			

			},/*END OF QUESTION 8*/


		question9:function(){

			this.countdown();


			$(".answer2").off("click");

			

			$(".question").html("QUESTION NINE TEXT");


			$(".answer1").html("Q89 Answer 1**");
			$(".answer1").on("click", this.win);

			$(".answer2").html("Q9 Answer 2");
			

			$(".answer3").html("Q9 Answer 3");
		

			$(".answer4").html("Q9 Answer 4");

			},/*END OF QUESITON 9*/


		question10:function(){

			this.countdown();


			$(".answer1").off("click");


			$(".question").html("QUESTION TEN TEXT");


			$(".answer1").html("Q10 Answer 1");
			

			$(".answer2").html("Q10 Answer 2");
			

			$(".answer3").html("Q10 Answer 3");
		

			$(".answer4").html("Q10 Answer 4**");
			$(".answer4").on("click", this.win);

			},/*End of question 10*/


		scores:function(){
				
				$(".question").hide();
				$(".answer1").hide();
				$(".answer2").hide();
				$(".answer3").hide();
				$(".answer4").hide();
				$(".correct").show();
				$(".correct").html("Total Wins = "+wins+"<br>Total losses = "+lose+"<br>Total Out of Time = "+lose);
				setTimeout(trivia.question1, 1000 * 5);


				console.log("wins= "+wins + "Loses= " + lose + "Timeouts= " + timeouts);
			},

		countdown:function(){

			counter = setInterval(this.timer, 1000);
			},/*End of countdown F*/

		timer: function(){
			
			clock--;

			$("#timer").html("<h2>" + clock + " Seconds Remaining</h2>");

			if (clock===0){
				trivia.stop();
				};
			},/*End of timer F*/


		stop: function(){
			
			clearInterval(counter);
			question++;
			timeouts++;
			$("#timer").html("<h2>Too slow my friend, you're out of time.</h2>");

			// "<h2>15 Seconds Remaining</h2>"
			

			},/*End of Stop F*/


		win: function(){
			clearInterval(counter);
			wins++;
			question++;
			clock = 16;
			if( question ===2){
				trivia.question2();
			};
			if( question ===3){
				trivia.question3();
			};
			if( question ===4){
				trivia.question4();
			};
			if( question ===5){
				trivia.question5();
			};
			if( question ===6){
				trivia.question6();
			};
			if( question ===7){
				trivia.question7();
			};
			if( question ===8){
				trivia.question8();
			};
			if( question ===9){
				trivia.question9();
			};
			if( question ===10){
				trivia.question10();
			};
			if( question ===11){
				trivia.scores();
			};

			}/*End of Win F*/

	
		

	};/*End of trivia object*/



	trivia.init();


});/*END of .ready function*/