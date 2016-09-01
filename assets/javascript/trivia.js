

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
			$(".correct").show();
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

			
			$("#audioQ1").get(0).play();
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


			$(".question").html("The muscian who sang this song was known to have this unique physical trait?<br><sub>#1 of 10</sub>");

			$(".answer1").html("He was double jointed");

			$(".answer2").html("He had one leg shorter than the other");

			$(".answer3").html("His eyes were 2 different colors");
			$(".answer3").on("click",trivia.win);

			$(".answer4").html("He was an awesome break dancer");

			$(".answer1, .answer2, .answer4").on("click",trivia.wrongChoice);

			$(".answer3,.answer1, .answer2, .answer4").on("click",function(){
				$("#audioQ1").get(0).pause();

			});

			
			},/*end of question1*/

		
		question2:function(){
			$("#audioQ2").get(0).play();
			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();
			
			this.countdown();
			 
			$(".question").html("Which Prince song is this?<br><sub>#2 of 10</sub>");


			$(".answer1").html("Purple Rain");

			$(".answer2").html("1999");

			$(".answer3").html("Little Red Corvette");
			
			$(".answer4").html("When Doves Cry");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer2, .answer3").on("click",trivia.wrongChoice);

			$(".answer3,.answer1, .answer2, .answer4").on("click",function(){
				$("#audioQ2").get(0).pause();

			});

			},/*endo of quesiton 3*/

		question3:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();

			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			
			$(".question").html("This is the name of an actual Talking Heads cover band<br><sub>#3 of 10, no audio</sub>");


			$(".answer1").html("Heartbyrne");
			$(".answer1").on("click", this.win);

			$(".answer2").html("Stop Making Sense");

			$(".answer3").html("Once in a Lifetime");
			

			$(".answer4").html("Big Suits on Fire");
			
			$(".answer3, .answer2, .answer4").on("click",trivia.wrongChoice);
			
			},/*End of Question3*/


		question4:function(){

			$("#audioQ4").get(0).play();
			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

		

			$(".question").html("This Neil Young song reached #1 on the charts?<br><sub>#4 of 10</sub>");


			$(".answer1").html("Ohio");
		

			$(".answer2").html("Down by the River");

			$(".answer3").html("Heart of Gold");
			$(".answer3").on("click", this.win);

			$(".answer4").html("Old Man");
			
			$(".answer1, .answer2, .answer4").on("click",trivia.wrongChoice);
			$(".answer3,.answer1, .answer2, .answer4").on("click",function(){
				$("#audioQ4").get(0).pause();
				});


			},/*End of question4*/
		

		question5:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			

			$(".question").html("Dwight Yoakam acted in this movie<br><sub>#5 of 10, no audio</sub>");


			$(".answer1").html("Wedding Crashers");
			

			$(".answer2").html("Sling Blade");
			

			$(".answer3").html("Panic Room");
		

			$(".answer4").html("All of them");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer3, .answer2").on("click",trivia.wrongChoice);

			},/*End of question5*/

		question6:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			

			$(".question").html("Led Zeppelin's Robert Plant dated this Austinite<br><sub>#6 of 10, no audio</sub>");


			$(".answer1").html("Sandra Bullock");
			

			$(".answer2").html("Emmylou Haris");
			

			$(".answer3").html("Toni Price");
		

			$(".answer4").html("Patti Griffin");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer2, .answer3").on("click",trivia.wrongChoice);

			},/*End of question6*/

		question7:function(){

			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4, .image").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");

			

			$(".question").html("Michael Jackson's pet monkey's name was?<br><sub>#7 of 10, no audio</sub>");


			$(".answer1").html("London");
			

			$(".answer2").html("Foam Party");
			

			$(".answer3").html("Ms. Pretty Pants");
		

			$(".answer4").html("Bubbles");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer2, .answer3").on("click",trivia.wrongChoice);	

			},/*End of question7*/


		question8:function(){

			$(".image").hide();
			$("#timer").html("<h2>15 Seconds Remaining</h2>")
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");



			$(".question").html("This artist designed an album cover for the Rolling Stones<br><sub>#8 of 10, no audio</sub>");


			$(".answer1").html("Peter Maxx");
			

			$(".answer2").html("Andy Warhol");
			$(".answer2").on("click", this.win);

			$(".answer3").html("Jeff Koons");
		

			$(".answer4").html("Jean-Michel Basquiat");

			$(".answer1, .answer3, .answer4").on("click",trivia.wrongChoice);
			

			},/*END OF QUESTION 8*/


		question9:function(){

			$("#audioQ9").get(0).play();
			$("#timer").html("<h2>15 Seconds Remaining</h2>");
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");
			

			$(".question").html("The chorus to this song is?<br><sub>#9 of 10</sub>");


			$(".answer1").html("'I love it when you call me Big Pop-pa '");
			$(".answer1").on("click", this.win);

			$(".answer2").html("'...call me BLEEEEP '");
			

			$(".answer3").html("'Throw your hands in the air, if youse... '");
		

			$(".answer4").html("The Notorious B.I.G.");

			$(".answer3, .answer2, .answer4").on("click",trivia.wrongChoice);

			$(".answer3,.answer1, .answer2, .answer4").on("click",function(){
				$("#audioQ9").get(0).pause();

			});

			},/*END OF QUESITON 9*/


		question10:function(){

			$("#audioQ10").get(0).play();
			$("#timer").html("<h2>15 Seconds Remaining</h2>");
			$("#timerW, #timerL, #timerOT").hide();
			$("#timer,.question, .answer1, .answer2, .answer3, .answer4").show();


			this.countdown();


			$(".question,.answer1,.answer2,.answer3,.answer4").off("click");


			$(".question").html("Which song by the Eagles is this?<br><sub>Final question</sub>");


			$(".answer1").html("Best of My Love");
			

			$(".answer2").html("Hotel California");
			

			$(".answer3").html("New Kid in Town");
		

			$(".answer4").html("Desperado");
			$(".answer4").on("click", this.win);

			$(".answer1, .answer2, .answer3").on("click",trivia.wrongChoice);

			$(".answer3,.answer1, .answer2, .answer4").on("click",function(){
				$("#audioQ10").get(0).pause();

			});

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