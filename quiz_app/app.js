var quizData = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Trainer Marking Language",
        option2: "Hyper Text Markup Language",
        option3: "Hyper Text Marketing Language",
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        option1: "<a>",
        option2: "<link>",
        option3: "<href>",
        correctAnswer: "<a>"
    },
    {
        question: "Which tag is used to insert an image in HTML?",
        option1: "<img>",
        option2: "<image>",
        option3: "<pic>",
        correctAnswer: "<img>"
    },
    {
        question: "Which tag is used for the largest heading?",
        option1: "<h6>",
        option2: "<h1>",
        option3: "<head>",
        correctAnswer: "<h1>"
    },
    {
        question: "Which attribute is used to provide a unique name to an HTML element?",
        option1: "class",
        option2: "id",
        option3: "name",
        correctAnswer: "id"
    },
    {
        question: "Which tag is used to create a line break?",
        option1: "<br>",
        option2: "<lb>",
        option3: "<break>",
        correctAnswer: "<br>"
    },
    {
        question: "Which tag is used to create an unordered list?",
        option1: "<ol>",
        option2: "<ul>",
        option3: "<li>",
        correctAnswer: "<ul>"
    },
    {
        question: "Which tag is used to define a table row?",
        option1: "<td>",
        option2: "<tr>",
        option3: "<th>",
        correctAnswer: "<tr>"
    },
    {
        question: "Which tag is used to create a paragraph?",
        option1: "<p>",
        option2: "<para>",
        option3: "<text>",
        correctAnswer: "<p>"
    },
    {
        question: "Which input type is used for passwords?",
        option1: "text",
        option2: "password",
        option3: "email",
        correctAnswer: "password"
    }
];

var question = document.getElementById("question")
var op1 = document.getElementById("op1")
var op2 = document.getElementById("op2")
var op3 = document.getElementById("op3")
var index = 0;

question.innerText = quizData.question[index]
op1.innerText = quizData.option1[index]
op2.innerText = quizData.option2[index]
op3.innerText = quizData.option3[index]
