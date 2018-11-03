$("#begin").on("click", function(){
    letsgo();
})

var theQuestions = [
    {
        question: "Where is Brady From?",
        answers: ["El Paso, TX", "Miami, FL", "Spartanburg, SC", "Paris, France"],
        correctAnswer: "EL Paso, TX",
    },
    {
        question: "Where was Brady Purchased?",
        answers: ["Walmart", "Austin Pets Alive", "Austin Humane Society", "The San Diego Zoo"],
        correctAnswer: "Austin Humane Society",
    },
    {
        question: "How Much does Brady Weigh?",
        answers: ["22lbs", "23lbs", "25lbs", "26lbs"],
        correctAnswer: "26lbs",
    },
    {
        question: "What is Brady's Favorite Snack?",
        answers: ["Yarn", "Steamed Dumplings", "Beef Jerkey", "Peanuts"],
        correctAnswer: "Beef Jerkey",
    },
    {
        question: "What Kind of Food does Brady Eat?",
        answers: ["Royal Canine", "Kibbles N Bits", "Kitten Caboodle", "Alaskan Blue"],
        correctAnswer: "Royal Canine",
    },
    {
        question: "What Color Eyes Does Brady Have?",
        answers: ["Blue", "Green", "Brown", "Brady has One Blue and One Brown Eye"],
        correctAnswer: "Brown",
    },
    {
        question: "Who is Brady's Owner",
        answers: ["Becca B", "Shuler", "Brady is a Free Man", "Lola"],
        correctAnswer: "Becca B",
    },
    {
        question: "What is Brady's Favorite Song",
        answers: ["Twinkle Twinkle Little Star", "Rocky Top", "Shallow", "Candy Shop"],
        correctAnswer: "Rocky Top",
    }

];




var game = {
    rightAnswers: 0,
    wrongAnswers: 0,
    counter: 90,
    timer: function(){
        game.counter--;
        $('#timer').html(game.counter);
        if(game.counter<=0){

                calculateScore();
        
                alert("Time Up!")
            }
        }
    }

    var time;
    var inpu
        

function letsgo() {
    $("#begin").remove();
    time = setInterval(game.timer, 1000)
    for (var i = 0; i < theQuestions.length; i++) {
        //For loop to cycle through the object and append each question to the DOM & Created a <br> for asthetics
        $("#triviaQuiz").append("<h2>" + theQuestions[i].question + "</h2>")
        //For Loop for to then cycle through the array of answers within each question and append those to the dom
        for (let j = 0; j < theQuestions[i].answers.length; j++) {
            //creating input after each question, giving it attributes to that it is radio, can only have one selected and a value associated with it. Then appending to the DOM
            selection = $("<input>")
            breakerA = $("<br>")
            selection.attr("type", "radio")
            selection.attr("name", "question" + i)
            selection.attr("value",theQuestions[i].answers[j])
            $("#triviaQuiz").append(theQuestions[i].answers[j])
            $("#triviaQuiz").append(selection)
            $("#triviaQuiz").append(breakerA)
        }
        //Created another <br> down here for asthetics
        breakerA = $("<br>")
        $("#triviaQuiz").append(breakerA)
    };

}


function calculateScore() {

    clearInterval(time);
    $("#timer").empty();
    
    $.each($('input[name="question0"]:checked'), function(){
        if($(this).attr("value")===theQuestions[0].correctAnswer){
            game.rightAnswers++;
        } else {
            game.wrongAnswers++;
        }
    });
    $.each($('input[name="question1"]:checked'), function(){
        if($(this).attr("value")===theQuestions[1].correctAnswer){
            game.rightAnswers++;
        } else {
            game.wrongAnswers++;
        }
    });
    $.each($('input[name="question2"]:checked'), function(){
        if($(this).attr("value")===theQuestions[2].correctAnswer){
            game.rightAnswers++;
        } else {
            game.wrongAnswers++;
        }
    });
    $.each($('input[name="question3"]:checked'), function(){
        if($(this).attr("value")===theQuestions[3].correctAnswer){
            game.rightAnswers++;
        } else {
            game.wrongAnswers++;
        }
    });
    $.each($('input[name="question4"]:checked'), function(){
        if($(this).attr("value")===theQuestions[4].correctAnswer){
            game.rightAnswers++;
        } else {
            game.wrongAnswers++;
        }
    });
    $.each($('input[name="question5"]:checked'), function(){
        if($(this).attr("value")===theQuestions[5].correctAnswer){
            game.rightAnswers++;
        } else {
            game.wrongAnswers++;
        }
    });
    $.each($('input[name="question6"]:checked'), function(){
        if($(this).attr("value")===theQuestions[6].correctAnswer){
            game.rightAnswers++;
        } else {
            game.wrongAnswers++;
        }
    });
    $.each($('input[name="question7"]:checked'), function(){
        if($(this).attr("value")===theQuestions[7].correctAnswer){
            game.rightAnswers++;
        } else {
            game.wrongAnswers++;
        }
    });
    $("#triviaQuiz").text("correct:" + game.rightAnswers + " " + "incorrect" + game.wrongAnswers)
    
}

$("#submitButton").on("click", function() {
    calculateScore();
})



