const question = document.querySelector('.Q-item__question');
const answer = document.querySelector('.Q-item__answer');
const icon = document.querySelector('.question__icon');

question.addEventListener("click", function(){
    answer.classList.toggle('Q-item__answer-toggle');
    question.classList.toggle('Q-item__question-toggle');
    icon.classList.toggle('question__icon-toggle');
});

