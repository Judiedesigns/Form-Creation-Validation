 document.addEventListener("DOMContentLoaded", function () {
  // All your code goes inside here

  function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedbackElement = document.getElementById("feedback");

    if (!selectedOption) {
      feedbackElement.textContent = "Please select an answer.";
      return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  }

  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer);
});
