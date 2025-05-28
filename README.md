# Interactive-Quiz-Application
An Interactive Quiz Application where user can answer questions and receive instant feedback


## 📄 Quiz App 
This is a simple interactive Quiz Web Application built using **HTML**, **CSS**, and **JavaScript**. Below is an overview of how each part of the code works:

### ✅ HTML (Structure)
 The HTML provides the structure of the web page. It contains:
    * A title (`<h1>Simple Quiz</h1>`)
    * A container to display each question (`<h2 id="question">`)
    * A section for answer buttons (`<div id="answer-buttons">`)
    * A “Next” button to move to the next question
 --This part doesn’t include any logic or styling — just the layout.

### 🎨 CSS (Styling)
The CSS is used to style the quiz app. It:
    * Sets the background image and font
    * Styles the quiz box, question text, and answer buttons
    * Adds hover effects and button colors
    * Uses `.correct` and `.incorrect` classes to show whether an answer is right or wrong
    * Hides the "Next" button until needed
 --This makes the app visually clean and user-friendly.

### 💡 JavaScript (Functionality)
  JavaScript brings the quiz to life by:
  * Storing quiz questions and answers in an array
  * Displaying one question at a time
  * Adding answer buttons dynamically
  * Checking if the selected answer is correct
  * Coloring correct and incorrect answers
  * Showing the score at the end and allowing users to restart the quiz

#Key functions:
* `startQuiz()` – Initializes the quiz
* `showQuestion()` – Loads and displays the current question and answers
* `selectAnswer()` – Handles the user’s selection and highlights answers
* `showScore()` – Displays the user’s final score
* `handleNextButton()` – Moves to the next question or restarts the quiz

### 🧠 How It Works (Summary)
1. The app starts by loading the first question.
2. Users click on one answer.
3. JavaScript checks if it's correct and changes button colors.
4. User clicks “Next” to go to the next question.
5. At the end, the score is shown and user can replay.







