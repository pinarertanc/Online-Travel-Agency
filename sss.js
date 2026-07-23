const questions = document.querySelectorAll('.faqQuestionDiv');

questions.forEach((currentQuestion)=>{
  currentQuestion.addEventListener('click', ()=>{
    const associatedAnswer = currentQuestion.nextElementSibling;
    associatedAnswer.classList.toggle('hidden');
  })
})

