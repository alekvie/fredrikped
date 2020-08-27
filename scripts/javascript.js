var myQuestions = [
    {
      question: "Hva er gunnforutsetningene innen en radikal behavioristisk tilnærming?",
      answers: {
        a: "Dualistisk og deterministisk",
        b: "Monistisk og deterministisk",
        c: "Dualistisk og deterministisk"
      },
      correctAnswer: "b"
    },
    {
      question: "Hvordan bedrives kunnskapsutvinningen i atferdsanalyse?",
      answers: {
        a: "Beskrive",
        b: "Beskrive og predikere",
        c: "Beskrive, predikere og demonstrere eksperimentell kontroll"
      },
      correctAnswer: "c"
    },
	{
      question: "Hva heter variabelen som måles i vitenskapelige design?",
      answers: {
        a: "Tredjevariabel",
        b: "Uavhengig variabel",
        c: "Avhengig variabel"
      },
      correctAnswer: "c"
    },
    {
      question: "Hva heter variabelen som manipuleres i vitenskapelige design?",
      answers: {
        a: "Uavhengig variabel",
        b: "Avhengig variabel",
        c: "Tredjevariabel"
      },
      correctAnswer: "a"
    }
  ];

var myQuestions2 = [
    {
      question: "Hva skal du gjøre når du ser på videoen?",
      answers: {
        a: "Telle antall ganger tvangsatferd forekommer",
        b: "Bare se på videoen",
        c: "Høre på musikk"
      },
      correctAnswer: "a"
    }
  ];

var myQuestions3 = [
    {
      question: "Hvilke kriterier må være til stede for at en avhengig variabel skal kunne være målbar?",
      answers: {
        a: "Repeterbarhet",
        b: "Varighet",
        c: "Tidsmessig locus",
		d: "Alle alternativene over"
      },
      correctAnswer: "d"
    },
    {
      question: "Hvorfor er det viktig at definisjoner av avhengige variabler må være objektive og observerbare?",
      answers: {
        a: "For at å måler det samme hver gang",
        b: "For at flere skal kunne måle det samme uten at antall observasjoner av avhengig variabel ikke skal være avhengig av hvem som observerer",
		c: "Begge alternativene over"
      },
      correctAnswer: "c"
    },
    {
      question: "Hvorfor skal man unngå ord som liker, forstår, reflekterer og respekterer når man skal utfome en definisjon av atferd/avhengig variabel?",
      answers: {
        a: "Fordi ordene ikke gjenspeiler atferd direkte, men er ord som ofte brukes til å beskrive personer med utgangspunkt i en rekke observerte atferder",
        b: "Fordi du må spørre en person om han eller hun eksempelvis liker noe, man kan ikke observere at noen like noe direkte"
      },
      correctAnswer: "a"
    }
  ];

var myQuestions4 = [
    {
      question: "Hva er automatisk registrering?",
      answers: {
        a: "Når en datamaskin tar seg av registreringene",
        b: "Når en registerer et resultat av atferden etter at atferden har forekommet",
        c: "Når en observerer en atferd direkte - for så å telle antall ganger atferden forekommer",
		d: "Når en observerer en atferd direkte - for så å telle antall ganger atferden forekommer og dele på tiden observasjonsøkten har vart",
		e: "Når en observerer en atferd direkte - for så måle hvor lenge atferden forekommer"
      },
      correctAnswer: "a"
    },
    {
      question: "Hva er sluttprodukt/permanent produkt?",
      answers: {
        a: "Når en datamaskin tar seg av registreringene",
        b: "Når en registerer et resultat av atferden etter at atferden har forekommet",
        c: "Når en observerer en atferd direkte - for så å telle antall ganger atferden forekommer",
		d: "Når en observerer en atferd direkte - for så å telle antall ganger atferden forekommer og dele på tiden observasjonsøkten har vart",
		e: "Når en observerer en atferd direkte - for så måle hvor lenge atferden forekommer"
      },
      correctAnswer: "b"
    },
    {
      question: "Hva er varighetsregistrering?",
      answers: {
        a: "Når en datamaskin tar seg av registreringene",
        b: "Når en registerer et resultat av atferden etter at atferden har forekommet",
        c: "Når en observerer en atferd direkte - for så å telle antall ganger atferden forekommer",
		d: "Når en observerer en atferd direkte - for så å telle antall ganger atferden forekommer og dele på tiden observasjonsøkten har vart",
		e: "Når en observerer en atferd direkte - for så måle hvor lenge atferden forekommer"
      },
      correctAnswer: "e"
    }
  ];

var myQuestions5 = [
    {
      question: "Hva kjennetegner whole interval recording?",
      answers: {
        a: "At atferden må forekomme i hele intervallet",
        b: "Atferden må forekomme i det intervallet avsluttes",
        c: "Atferden må forekomme minst en gang i løpet av intervallet"
      },
      correctAnswer: "a"
    },
    {
      question: "Hva kjennetegner partial interval recording?",
      answers: {
        a: "At atferden må forekomme i hele intervallet",
        b: "Atferden må forekomme i det intervallet avsluttes",
		c: "Atferden må forekomme minst en gang i løpet av intervallet"
      },
      correctAnswer: "c"
    },
    {
      question: "Hva kjennetegner momentary time sampling?",
      answers: {
        a: "At atferden må forekomme i hele intervallet",
        b: "Atferden må forekomme i det intervallet avsluttes",
		c: "Atferden må forekomme minst en gang i løpet av intervallet"
      },
      correctAnswer: "b"
    }
  ];

var myQuestions6 = [
    {
      question: "Hva er formålet med eksperimentelle design?",
      answers: {
        a: "Manipulere avhengig variabel",
        b: "Trekke slutninger om årsak-virknings-forhold",
        c: "Finne korrelasjoner mellom variabler"
      },
      correctAnswer: "b"
    },
    {
      question: "Hva kjennetegner innen-deltaker design?",
      answers: {
        a: "En person/orgamisme blir utsatt for gjentatte målinger i forskjellige betingelser",
        b: "En person/orgamisme blir kun utsatt for en betingelse"
      },
      correctAnswer: "a"
    },
    {
      question: "Hva er baseline?",
      answers: {
        a: "en betingelse hvor uavhengig variabel ikke er aktiv",
        b: "en betingelse hvor uavhengig variabel er aktiv"
      },
      correctAnswer: "a"
    }
  ];

var myQuestions7 = [
    {
      question: "Hva kjennetegner multippel basislinjedesign?",
      answers: {
        a: "En har flere basislinjemålinger som begynner samtidig og flere tiltaksmålinger som starter etterhvert",
        b: "En har kun en basislinjemåling, og en tiltaksmåling",
        c: "En har gjentatte basislinjemålinger og tiltaksfaser, men kun en fase av gangen"
      },
      correctAnswer: "a"
    },
    {
      question: "Hva er fordelen med multippel basislinjedesign sammenlignet med en tilbaketrekkingsdesign?",
      answers: {
        a: "En har høyere grad av eksperimentell kontroll",
        b: "Man har færre utfordringer knyttet til etiske utfordringer med tanke på at man ikke må trekke tilbake et tiltak som fungerer"
      },
      correctAnswer: "b"
    }
  ];

var myQuestions8 = [
    {
      question: "Did you get rick rolled?? (forelesningen er ferdig)",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    }
  ];





var nextvideo =  document.getElementById('video');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var nextlessonButton = document.getElementById("nextlesson");
var slides = 1;



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	
	nextlessonButton.style.display = 'none';
	resultsContainer.innerHTML = ' ';
	
	
	function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' av ' + questions.length+ ' riktige ';
		
		// show next lesson if all answers are correct, and hide check answers	
		if (numCorrect == questions.length){
	    submitButton.style.display = 'none';
		nextlessonButton.style.display = 'inline-block';

	}
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
	
	nextlessonButton.onclick = function(){
		submitButton.style.display = 'inline-block';
		slides++;
			if (slides == 2){	
				generateQuiz(myQuestions2, quizContainer, resultsContainer, submitButton); 
				nextvideo.src = "https://www.youtube.com/embed/44DCWslbsNM";   
			} else if (slides === 3) {generateQuiz(myQuestions3, quizContainer, resultsContainer, submitButton); 
				nextvideo.src = "https://www.youtube.com/embed/wg7VdakglTo";
			} else if (slides === 4) {generateQuiz(myQuestions4, quizContainer, resultsContainer, submitButton);
				nextvideo.src = "https://www.youtube.com/embed/BEWRrU4DQkU";			
			} else if (slides === 5) {generateQuiz(myQuestions5, quizContainer, resultsContainer, submitButton);
				nextvideo.src = "https://www.youtube.com/embed/mv9xcmkqTuM";			
			} else if (slides === 6) {generateQuiz(myQuestions6, quizContainer, resultsContainer, submitButton); 
				nextvideo.src = "https://www.youtube.com/embed/ZdCB7ypERLM";	
			} else if (slides === 7) {generateQuiz(myQuestions7, quizContainer, resultsContainer, submitButton); 
				nextvideo.src = "https://www.youtube.com/embed/8FiqaB-CIuU";	
			} else if (slides === 8) {generateQuiz(myQuestions8, quizContainer, resultsContainer, submitButton); 
				nextvideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";	
			}
			
	}

}