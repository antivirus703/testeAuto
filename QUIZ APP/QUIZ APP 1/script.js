const quizData = [
   
    {
        question: 'Quantos planetas Terra cabem dentro do Sol?',
        a: 'Um milhão',
        b: 'Cem',
        c: 'Seiscentos',
        d: 'Cento e cinquenta',
        correct: 'a'
        }, {
        question: 'Em que lugar vivem mais cangurus do que pessoas?',
        a: 'Indonésia',
        b: 'Nova Zelândia',
        c: 'Austrália',
        d: 'Papua-Nova Guiné',
        correct: 'c',
        }, {
        question: 'Quantos olhos a maior parte das aranhas têm?',
        a: 'Dois',
        b: 'Quatro',
        c: 'Quatro pares',
        d: 'Seis',
        correct: 'c',
        }, {
        question: 'O que mede a Escala Mercalli?',
        a: 'A intensidade dos ventos',
        b: 'A intensidade sísmica de acordo com os danos provocados',
        c: 'A resistência dos minerais',
        d: 'A magnitude de um terremoto',
        correct: 'b',
        }, {
        question: 'Qual das alternativas contém apenas nomes de rios?',
        a: 'São Francisco, Douro, Antártico',
        b: 'Nilo, Amazonas, Mississipi',
        c: 'Cáspio, Vermelho, Reno',
        d: 'Tocantins, Bering, Ganges',
        correct: 'b',
        }, {
        question: 'Quanto mede uma girafa?',
        a: 'Entre 4,8 e 5,5 metros',
        b: '2 metros',
        c: 'Entre 5 e 6 metros',
        d: '2,5 metros',
        correct: 'a',    
        }, {
        question: 'Qual a ciência que estuda a atmosfera da Terra e a climatologia?',
        a: 'Astronomia',
        b: 'Metereologia',
        c: 'Dispersão atmosférica',
        d: 'Meteorologia',
        correct: 'd',    
        }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você respondeu corretamente ${score}/${quizData.length} questões.</h2>
                
                <button onclick="location.reload()">Repetir</button>
             `;
             // TODO: Exibir mensagem
            alert("Você finalizou o questionário!");
        }
    }
});