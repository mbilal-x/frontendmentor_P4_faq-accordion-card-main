let questions = document.querySelectorAll('.Q-item__question');

questions.forEach(question => {
  question.addEventListener("click", function() {

    this.classList.toggle('Q-item__question-toggle');

    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
            answer.style.display = "none";
          } else {
            answer.style.display = "block";
          }

    let icon = this.querySelector('.question__icon');
    icon.classList.toggle('question__icon-toggle');
  })
})



// answer toggle logic 
// if (answer.style.display === "block") {
//     answer.style.display = "none";
//   } else {
//     answer.style.display = "block";
//   }