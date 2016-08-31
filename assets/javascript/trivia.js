

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
			$(".startOver").hide();
			$("#timer").hide();
			$("#timerW").hide();
			$("#timerL").hide();
			$("#timerOT").hide();
			$(".startB").show();

			$(".startB").on("click", this.question1);
			// $(".startB").on("click", this.question1.bind(this));
			},/*End of init method*/

			// timer:function(),

		question1:function(){

			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			trivia.countdown();
			question = 1;
			wins = 0,
			lose = 0,
			clock = 15,
			timeouts = 0;

			$("#timerW, #timerL, #timerOT, .startB, .startOver, .correct").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();
			$(".answer1, .answer2, .answer3, .answer4").hover(function(){
				$(this).css("background-color", "#ccffb3");$(this).css("cursor:hand");
					}, function(){$(this).css("background-color", "white");$(this).css("cursor:pointer");
			});

					
			$("#timer").html("<h2>15 Seconds Remaining</h2>");


			$(".question").html("#1 of 10: 	David Bowie was known to have this unique physical trait");

			$(".answer1").html("A.  Double jointed");

			$(".answer2").html("B.  One leg shorter than the other");

			$(".answer3").html("C.  Eyes were 2 different colors");
			$(".answer3").on("click",trivia.win);

			$(".answer4").html("D.  He had no sense of smell");

			$(".answer1, .answer2, .answer4").on("click",trivia.wrongChoice);
			
			},/*end of question1*/

		
		question2:function(){

			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();
			
			this.countdown();
			 
			$(".question").html("#2 of 10: 	Prince once hosted a party and served guests this instead of booze");


			$(".answer1").html("A.	Drugs");

			$(".answer2").html("B. 	Fruit Salad");

			$(".answer3").html("C. Soy tacos");
			
			$(".answer4").html("D. 	Breakfast cereal");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer2, .answer3").on("click",trivia.wrongChoice);

			},/*endo of quesiton 3*/

		question3:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();

			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			
			$(".question").html("#3 of 10: 	This is the name of an actual Talking Heads cover band");


			$(".answer1").html("A.  Heartbyrne");
			$(".answer1").on("click", this.win);

			$(".answer2").html("B.  Stop Making Sense");

			$(".answer3").html("C.  Once in a Lifetime");
			

			$(".answer4").html("D.  Big Suits on Fire");
			
			$(".answer3, .answer2, .answer4").on("click",trivia.wrongChoice);
			
			},/*End of Question3*/


		question4:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

		

			$(".question").html("#4 of 10: 	Which Neil Young reached #1 on the charts");


			$(".answer1").html("A.  Ohio");
		

			$(".answer2").html("B.  Down by the River");

			$(".answer3").html("C.  Heart of Gold");
			$(".answer3").on("click", this.win);

			$(".answer4").html("D.  Old Man");
			
			$(".answer1, .answer2, .answer4").on("click",trivia.wrongChoice);

			},/*End of question4*/
		

		question5:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			

			$(".question").html("#5 of 10: 	Dwight Yoakam acted in this movie");


			$(".answer1").html("A.  Wedding Crashers");
			

			$(".answer2").html("B.  Sling Blade");
			

			$(".answer3").html("C.  Panic Room");
		

			$(".answer4").html("D.  All of them");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer3, .answer2").on("click",trivia.wrongChoice);

			},/*End of question5*/

		question6:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			

			$(".question").html("#6 of 10: 	Led Zeppelin's Robert Plant dated this Austinite");


			$(".answer1").html("A.  Sandra Bullock");
			

			$(".answer2").html("B.  Emmylou Haris");
			

			$(".answer3").html("C.  Toni Price");
		

			$(".answer4").html("D.  Patti Griffin");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer2, .answer3").on("click",trivia.wrongChoice);

			},/*End of question6*/

		question7:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			

			$(".question").html("#7 of 10: 	Michael Jackson's pet monkey's name was");


			$(".answer1").html("A.  London");
			

			$(".answer2").html("B.  Foam Party");
			

			$(".answer3").html("C.  Ms. Pretty Pants");
		

			$(".answer4").html("D.  Bubbles");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer2, .answer3").on("click",trivia.wrongChoice);	

			},/*End of question7*/


		question8:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");



			$(".question").html("8 of 10: 	This artist designed an album cover for the Rolling Stones");


			$(".answer1").html("A.  Peter Maxx");
			

			$(".answer2").html("B.  Andy Warhol");
			$(".answer2").on("click", this.win);

			$(".answer3").html("C.  Jeff Koons");
		

			$(".answer4").html("D.  Jean-Michel Basquiat");

			$(".answer1, .answer3, .answer4").on("click",trivia.wrongChoice);
			

			},/*END OF QUESTION 8*/


		question9:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>");
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");
			

			$(".question").html("#9 of 10: 	In the iconic song, Notorious B.I.G., says, 'I love it when you...'");


			$(".answer1").html("A. '...call me big poppa '");
			$(".answer1").on("click", this.win);

			$(".answer2").html("B.  '...call me BLEEEEP '");
			

			$(".answer3").html("A.  '...all me a true player '");
		

			$(".answer4").html("D.  NSFW");

			$(".answer3, .answer2, .answer4").on("click",trivia.wrongChoice);

			},/*END OF QUESITON 9*/


		question10:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>");
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");


			$(".question").html("#10 of 10: 	Which is not an Eagles song");


			$(".answer1").html("A.  Best of My Love");
			

			$(".answer2").html("B.  Hotel California");
			

			$(".answer3").html("C.  New Kid in Town");
		

			$(".answer4").html("D.  Running on Empty");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer2, .answer3").on("click",trivia.wrongChoice);

			},/*End of question 10*/


		scores:function(){

				clearInterval(counter);
				$(".question,.answer1,.answer2,.answer3,.answer4").off("click");
				
				$(".question").hide();
				$(".answer1").hide();
				$(".answer2").hide();
				$(".answer3").hide();
				$(".answer4").hide();
				$(".startOver").show();
				$(".startOver").on("click",trivia.question1)

				$(".correct").show();
				$(".correct").html("Total Wins = "+wins+"<br>Total losses = "+lose+"<br>Total Out of Time attempts = "+timeouts);
				$(".startB").hide();
				$("#timer").hide();
				$("#timerW, #timerL, #timerOT").hide();
				// console.log("wins= "+wins + "Loses= " + lose + "Timeouts= " + timeouts);
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
			timeouts++;
			$("#timerOT").show();
			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");
			

			if( question ===1){
				
				$(".question, .answer1, .answer2, .answer4, #timer").hide();
				};

			if( question ===2){
				
				$(".question, .answer1, .answer2, .answer3, #timer").hide();
				};

			if( question ===3){
				
				$(".question, .answer3, .answer2, .answer4, #timer").hide();
				};

			if( question ===4){
				
				$(".question, .answer1, .answer2, .answer4, #timer").hide();
				};

			if( question ===5){
				
				$(".question, .answer1, .answer3, .answer4, #timer").hide();
				};

			if( question ===6){
				
				$(".question, .answer1, .answer2, .answer3, #timer").hide();
				};

			if( question ===7){
				
				$(".question, .answer1, .answer2, .answer4, #timer").hide();
				};

			if( question ===8){
				
				$(".question, .answer1, .answer3, .answer4, #timer").hide();
				};

			if( question ===9){
				
				$(".question, .answer3, .answer2, .answer4, #timer").hide();
				};

			if( question ===10){
				
				$(".question, .answer3, .answer2, .answer1, #timer").hide();
				};

			setTimeout(trivia.nextQuestion, 1000 * 3);	
			

			},/*End of Stop F*/

		wrongChoice: function(){

			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");
			clearInterval(counter);
			lose++;
			$("#timerL").show();

			if( question ===1){
				
				$(".question, .answer1, .answer2, .answer4, #timer").hide();
				
				};

			if( question ===2){
				
				$(".question, .answer1, .answer2, .answer3, #timer").hide();
				};

			if( question ===3){
				
				$(".question, .answer3, .answer2, .answer4, #timer").hide();
				};

			if( question ===4){
				
				$(".question, .answer1, .answer2, .answer4, #timer").hide();
				};

			if( question ===5){
				
				$(".question, .answer1, .answer3, .answer2, #timer").hide();
				};

			if( question ===6){
				
				$(".question, .answer1, .answer2, .answer3, #timer").hide();
				};

			if( question ===7){
				
				$(".question, .answer1, .answer2, .answer3, #timer").hide();
				};

			if( question ===8){
				
				$(".question, .answer1, .answer3, .answer4, #timer").hide();
				};

			if( question ===9){
				
				$(".question, .answer3, .answer2, .answer4, #timer").hide();
				};

			if( question ===10){
				
				$(".question, .answer3, .answer2, .answer1, #timer").hide();
				};

			setTimeout(trivia.nextQuestion, 1000 * 3);	


			},/*End of wrongChoice F*/


		win: function(){
			clearInterval(counter);
			wins++;
			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");
			
			if( question ===1){
				
				$("#timerW").show();
				
				$(".question, .answer1, .answer2, .answer4, #timer, #timerL, #timerOT").hide();
				};

			if( question ===2){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer1, .answer2, .answer3, #timer, #timerL, #timerOT").hide();
				};

			if( question ===3){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer3, .answer2, .answer4, #timer, #timerL, #timerOT").hide();
				};

			if( question ===4){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer1, .answer2, .answer4, #timer, #timerL, #timerOT").hide();				
				};

			if( question ===5){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer1, .answer3, .answer2, #timer, #timerL, #timerOT").hide();
				};

			if( question ===6){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer1, .answer2, .answer3, #timer, #timerL, #timerOT").hide();
				};

			if( question ===7){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer1, .answer2, .answer3, #timer, #timerL, #timerOT").hide();
				};

			if( question ===8){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer1, .answer3, .answer4, #timer, #timerL, #timerOT").hide();
				};

			if( question ===9){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer3, .answer2, .answer4, #timer, #timerL, #timerOT").hide();
				};

			if( question ===10){
				
				$("#timerW").show();
				$("#timer").hide();
				$(".question, .answer1, .answer2, .answer3, #timer, #timerL, #timerOT").hide();
				};
				
			setTimeout(trivia.nextQuestion, 1000 * 3);	
			

			},/*End of Win F*/

		nextQuestion: function(){
			clock = 15;
			question++;
			
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

			}/*End of nextQuestion F*/

	
		

	};/*End of trivia object*/



	trivia.init();


});/*END of .ready function*/