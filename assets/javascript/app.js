
        $('document').ready(function () {

            //Timer variables
            var intervalID;
            var time_left = 15;

            var right_answers = 0;
            var wrong_answers = 0;
            var unanswered = 4;


            $("#time_left").text(time_left);

            //runs the function to control the time left every second and saves the ID
            intervalID = setInterval(tick_tock, 1000);

            // array to hold Q's and A's
            var questions = new Array(4);
            questions[0] = new Array(3);
            //Question
            questions[0][0] = "What is the name of Lisa's jazz mentor?";
            //Choices
            questions[0][1] = ["David Featherlight", "Bleeding Gums Murphy", "Nat King Cole", "Homer Simpson"];
            //Correct option
            questions[0][2] = ["Bleeding Gums Murphy"];


            questions[1] = new Array(3);
            questions[1][0] = "How much does Maggie cost at the register?";
            questions[1][1] = ["$666.66", "$260.21", "$847.63", "$0.00"];
            questions[1][2] = ["$847.63"];


            questions[2] = new Array(3);
            questions[2][0] = "What was Krusty's Original Identity supposed to be?";
            questions[2][1] = ["Homer Simpson", "Barney Gumble", "Moe Szyslak", "Duff Man"];
            questions[2][2] = ["Homer Simpson"];


            questions[3] = new Array(3);
            questions[3][0] = "What was Maggie's first word?";
            questions[3][1] = ["Daddy", "Mama", "Lisa", "She never spoke before"];
            questions[3][2] = ["Daddy"];



            for (var y = 0; y < 4; y++) {
                makeQuestion(y);

            }


            function makeQuestion(qnumber) {
                var questionDiv = $("<div>");
                questionDiv.append("<br><br>");
                questionDiv.append("<h3>" + questions[qnumber][0] + "</h3>");
                for (var x = 0; x < 4; x++) {
                    var newButton = $("<input>");
                    newButton.attr('type', 'radio');
                    newButton.attr('name', qnumber);
                    newButton.data('answer', questions[qnumber][2]);
                    newButton.data('value', questions[qnumber][1][x]);
                    questionDiv.append(newButton)
                    questionDiv.append(questions[qnumber][1][x]);
                }
                $('#timer').after(questionDiv);
            }



            $(document).on("click", '#submit', checkAnswers);


            function checkAnswers() {

                var checked = $("input:checked");
                checked.each(function () {
                    if ($(this).data('answer') == $(this).data('value')) {
                        console.log($(this).data('answer'));
                        console.log($(this).data('value'));
                        unanswered--;
                        right_answers++;
                    }else{
                        console.log($(this).data('answer'));
                        console.log($(this).data('value'));
                        unanswered--;
                        wrong_answers++
                    }
                });
                showScore();
            }


            function tick_tock() {
                time_left--;
                $("#time_left").text(time_left);
                if (time_left == 0) {
                    clearInterval(intervalID);
                    checkAnswers();
                }
            }

            function showScore(){
                var main=$(".jumbotron");
                main.empty();
                main.append("<h1>SCORES</h1>");
                main.append('<br>');
                main.append("Correct: " + right_answers);
                main.append('<br>');
                main.append("Wrong: " + wrong_answers);
                main.append('<br>');
                main.append("Unanswered: " + unanswered);
                
            }
        });