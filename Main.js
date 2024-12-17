const questions = [
    {
        question: "Which planet in the solar system is known as the “Red Planet”?",
        answers: ["Venus", "Earth", "Mars", "Jupiter"],
        correct: 3,
    },
    {
        question: "What is the largest lake in the world?",
        answers: [
            "Caspian Sea",
            "Baikal",
            "Lake Superior",
            "Ontario",
        ],
        correct: 2,
    },
    {
        question: " Which river is the longest in the world?",
		answers: [
			"Amazon",
            "Mississippi",
            "Nile",
            "Yangtze",
		],
		correct: 3,
	},
	{
        question: "What animal is the national symbol of Australia?",
		answers: ["Kangaroo", "Koala", "Emu", "Crocodile"],
		correct: 1,
	},
    {
        question: "Which is the largest island?",
		answers: ["New Guinea", "Andaman Nicobar", "Greenland", "Hawaii"],
		correct: 3,
	}
 ];


//Elementu paieska
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

//game constants
let score = 0; //teisingu atsakymu skaicius
let questionIndex = 0; //einamasis klausimas

clearPage(); 
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
headerContainer.innerHTML = "";
listContainer.innerHTML = "";
}

function showQuestion() {
    console.log('showQuestion');
 
    //klausimas
        const headerTemplate = `<h2 class="title">%title%</h2>`;
        const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
        headerContainer.innerHTML = title;

     //atsakymai

     let answerNumber = 1;
    for (answerText of questions[questionIndex]['answers']) {
        
        const questionTemplate = 
            `<li>
                <label>
                    <input value="%number%" type="radio" class="answer" name="answer" />
                    <span>%answers%</span>
                </label>
             </li>`

            const answerHTML = questionTemplate
                                    .replace('%answers%', answerText)
                                    .replace('%number%', answerNumber);

            listContainer.innerHTML += answerHTML;
           answerNumber++;
         
    }
}

function checkAnswer() {
    console.log('checkAnswer started!');
    const checkedRadio = listContainer.querySelector('input:checked');
    
//jeigu atsakymo nera, nieko nedarome, isejimas is funkcijos
    if(!checkedRadio) {
        submitBtn.blur();
        return
    }

    //suzinoti vartotojo atsakymo numeri
    const userAnswer = parseInt(checkedRadio.value);

    //jeigu atsakymas teisingas - padidinti score
    if (userAnswer === questions[questionIndex]['correct']) {
score++;
    }
    console.log('score=', score);

    if(questionIndex !== questions.length - 1) {
        console.log('There are more questions ahead');
        questionIndex++;
        clearPage();
        showQuestion();
        return;
    } else {
        clearPage();
        showResults();
    }

    function showResults() {
        console.log('showResults started!');
        const resultsTemplate = `
            <h2 class="title">%title%</h2>
            <h3 class="summary">%message%</h3>
            <p class="result">%result%</p>
        `;

        let title, message;

        //Finalo variantai
    
    if(score === questions.length) {
        title = 'Congratulations!';
        message = 'Your all answers are correct!';
    } else if((score * 100) / questions.length >= 50) {
        title = 'Good result!';
        message = 'You answered more that half of answers!';
    } else {
        title = 'Let try more!';
        message = 'You can do better result!';
    }

    //Resultatas

    let result =  `${score} from ${questions.length}`;

    // Finalinis atsakymas

    const finalMessage = resultsTemplate
    .replace('%title%', title)
    .replace('%message%', message)
    .replace('%result%', result)

    headerContainer.innerHTML = finalMessage;

    //keiciam migtuka 
    submitBtn.blur();
    submitBtn.innerHTML = 'Start over';
    submitBtn.onclick = () => history.go();


    }
 }

