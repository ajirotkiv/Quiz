const questions = [
    {
        id: '1',
        question: "What language works in browser?",
        answers: ["Java", "C", "Python", "Javascript"],
        correct: 4,
    },
    {
        id: '2',
        question: "What does CSS mean?",
        answers: [
            "Central Style Sheets",
            "Cascading Style Sheets", 
            "Cascading Simple Sheets", 
            "Cars SUV Sailboats",
        ],
        correct: 2,
    },
    {
		id: '3',
        question: "What does HTML mean?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		id: '4',
        question: "When was JavaScript created?",
		answers: ["1996", "1995", "1994", "all answers are incorrect"],
		correct: 2,
	},
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
    for (answerText of questions[questionIndex]['answers']) {
        console.log(answerText);

        const questionTemplate = 
            `<li>
                <label>
                    <input type="radio" class="answer" name="answer" />
                    <span>%answers%</span>
                </label>
             </li>`

            const answerHTML = questionTemplate.replace('%answers%', answerText);
            listContainer.innerHTML += answerHTML;
            console.log(answerHTML);
    }
}

function checkAnswer() {
    console.log('checkAnswer started!');
}

