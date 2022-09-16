function startTest(){
    window.location.assign('index.html');
}
var testQuestions = [
    {question:"In which part of your body would you find the cruciate ligament?",options:["Knee","Shoulder","Elbow","Ankle"],selectedAnswer:"",correctAnswer:"Knee"},
    {question:"What element is denoted by the chemical symbol Sn in the periodic table?",options:["Aluminium","Tin","Zinc","Sodium"],selectedAnswer:"",correctAnswer:"Tin"},
    {question:"What is italian word for pie?",options:["Pizza","Taco","Borittos","Pie"],selectedAnswer:"",correctAnswer:"Pizza"},
    {question:"What is the main fruit in Ribena?",options:["Grapes","Blackcurrant","Citrus","Strawberry"],selectedAnswer:"",correctAnswer:"Blackcurrant"},
    {question:"How many letters in the word hippopotamus?",options:[9,10,11,12],selectedAnswer:"",correctAnswer:12},
    {question:"What's the name of the river that runs through Egypt?",options:["The-Mississippi","The-Jordan","The-Nile","The-Chad"],selectedAnswer:"",correctAnswer:"The-Nile"},
    {question:"What element does 'O' represent on the periodic table?",options:["Oxalate","Oxide","Oxygen","Oxlade"],selectedAnswer:"",correctAnswer:"Oxygen"},
    {question:"In meters, how long is an Olympic swimming pool?",options:["50-meters","60-meters","70-meters","40-meters"],selectedAnswer:"",correctAnswer:"50-meters"},
    {question:"What year did World War II end?",options:["1944","1946","1945","1954"],selectedAnswer:"",correctAnswer:"1945"},
    {question:"What is the boiling point temperature of water?",options:["50-degrees","100-degrees","150-degrees","200-degrees"],selectedAnswer:"",correctAnswer:"100-degrees"},
    {question:"Which sea creature has three hearts",options:["Octopus","Squid","Whale","Shark"],selectedAnswer:"",correctAnswer:"Octopus"},
    {question:"How many pedals do most modern pianos have?",options:["Four","Three","Two","One"],selectedAnswer:"",correctAnswer:"Three"},
    {question:"Which is larger: 50% or five-eigths?",options:["50%","Five-eights"],selectedAnswer:"",correctAnswer:"Five-eights"},
    {question:"When did the French Revolution end?",options:["1799","1798","1797","1796"],selectedAnswer:"",correctAnswer:"1799"},
    {question:"Which ocean surrounds the Maldives?",options:["Indian-Ocean","Pacific-Ocean","Atlantic-Ocean","Arctic-Ocean"],selectedAnswer:"",correctAnswer:"Indian-Ocean"},
    {question:"Which summer dessert is often eaten during Wimbledon's tennis matches?",options:["Chocolate-and-cream","Vanilla-and-cream","Strawberry-and-cream","Banana-and-cream"],selectedAnswer:"",correctAnswer:"Strawberry-and-cream"},
    {question:"What year was the United Nations established?",options:["1945","1955","1965","1975"],selectedAnswer:"",correctAnswer:"1945"},
    {question:"How many faces does Dodecahedron have?",options:[10,12,11,13],selectedAnswer:"",correctAnswer:12},
    {question:"What is the 4th letter of the Greek alphabet?",options:["Delta","Gamma","Sigma","Beta"],selectedAnswer:"",correctAnswer:"Delta"},
    {question:"How many bones do we have in an ear?",options:[2,0,3,1],selectedAnswer:"",correctAnswer:3}
];
let index = 0;
let score = 0;
let cbt = document.getElementById('cbt');
let questions = document.getElementById('questions');
let options = document.getElementById('options');
let result = document.getElementById('result');

function assessment(params) {
    cbt.innerHTML = "";
    questions.innerHTML = "";
    options.innerHTML = "";
cbt.innerHTML +=`<h4>Question ${index+1 } out of ${testQuestions.length}</h4>`;
questions.innerHTML += `<h3>${testQuestions[index].question}</h3>`
    testQuestions[index].options.forEach((max) => {
        options.innerHTML += `<input type = 'radio' value = ${max}><span>${max}</span><br>`
    });

//for checking if question was answered
    document.querySelectorAll('input').forEach((max)=>{
        max.addEventListener('click', pickAnswer);
    if(max.value == testQuestions[index].selectedAnswer){
        max.checked = true;
    }
    });
//to pick just one option
function pickAnswer(params) {
    document.querySelectorAll('input').forEach ((max) =>{
        max.checked = false;
    })
    params.target.checked = true;
    testQuestions[index].selectedAnswer = params.target.value;
if(testQuestions[index].selectedAnswer == testQuestions[index].correctAnswer){
    score++;
}
else{
    score;
}
console.log(testQuestions[index].selectedAnswer);
    }
}

function nextQuestion(params) {
    if (testQuestions[index].selectedAnswer) {
        if (index+1 >= testQuestions.length) {
            alert('You have come to the end of your quiz, you can now submit!');
            index = testQuestions.length;
        }
        else{
            index++;
            assessment();
        }
    }
    else{
        alert('You have to pick an answer before moving to the next question!');
    }
}
  
function previousQuestion(params) {
        if(index == 0){
           alert('This is the beginning of your test, there are no other questions before this!');
        }
        else{
            index--;
            assessment();
        }
}
function submitTest(){
    if(testQuestions[index].selectedAnswer == ""){
        alert('Finish up your test before submitting!')
        index= testQuestions[index];
    }
    else{
    result.innerHTML = `<h3>Your score is ${score} / ${testQuestions.length}</h3>`
    }
}
assessment();



