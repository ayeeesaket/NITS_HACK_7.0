import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Quiz = () => {
  const actNumber = ["3", "4", "4A"];
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const fetchQuiz = async () => {
    setLoading(true);
    try {
      const randomAct = actNumber[Math.floor(Math.random() * actNumber.length)];
      const response = await axios.post(
        "https://nits-hacks-backend.onrender.com/api/v1/quiz/getQuiz",
        { title: randomAct }
      );
      setQuizData(response.data.data);
      setSelectedAnswer(null); // Reset selected answer
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionClick = (option, index) => {
    setSelectedAnswer(option);
    // Fetch a new question after any option is selected
    fetchQuiz();
  };

  return (
    <>
      <Navbar />
      <div className="h-[50%] w-full flex flex-col items-center">
        <button
          className="video-button mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={fetchQuiz}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Quiz"}
        </button>

        {quizData && (
          <div
            id="quiz-container"
            className="quiz-container mt-4 p-4 w-[60%] bg-gray-100 rounded shadow-md"
          >
            <div id="question" className="text-lg font-semibold mb-4">
              {quizData.question}
            </div>
            <div className="options grid grid-cols-2 gap-4">
              {[
                quizData.option1,
                quizData.option2,
                quizData.option3,
                quizData.option4,
              ].map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option, index)}
                  className={`option-btn px-4 py-2 rounded ${
                    selectedAnswer
                      ? option === quizData.option2 // Check if selected answer is option B
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-white border"
                  }`}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {quizData && (
          <button
            className="end-test mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setQuizData(null)}
          >
            End Test
          </button>
        )}
      </div>
    </>
  );
};

export default Quiz;
