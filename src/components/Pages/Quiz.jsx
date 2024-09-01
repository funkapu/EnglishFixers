import { Layout, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Navbar from "../Nav/navbar";
import Footers from "../Content/Footer/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import quizData from "./data/quizData.json"

const Quiz = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const fetchQuizData = () => {
    if (quizData[index]) {
      setQuestion(quizData[index].questionText);
      setAnswer(quizData[index].answerOption.map((option) => option.answerText));
      setCorrectAnswers(quizData[index].answerOption.map((option) => option.isCorrect));
    }
  };

  useEffect(() => {
    fetchQuizData();
  }, [index]);

  const checkAnswer = (selectedIndex) => {
    if (correctAnswers[selectedIndex]) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (index < quizData.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      <Layout>
        <Navbar />
        <div className="flex justify-center items-center">
          {index >= quizData.length - 1 ? (
            <div className="">
              <div className="space-y-4 my-[-35rem]">
              <h1 className="flex justify-center text-3xl font-bold">คุณได้คะแนน : {score}</h1>
              <p className="flex justify-center font-semibold">
                {score >= 6 ? "คุณสามารถเรียนอะไรก็ได้" : "ทางเราแนะนำให้คุณเรียน"}
              </p>
              {score >= 6 ? (
                <Link to="/course" className="justify-center flex">
                  <Button type="primary">ดูคอร์ส</Button>
                </Link>
              ) : (
                <div className="flex justify-center list-none space-x-5 my-10">
                  <Link to="/course/Grammar"><Button type="primary">Grammar</Button></Link>
                  <Link to="/course/Vocab"><Button type="primary">Vocab</Button></Link>
                  <Link to="/course/Conversation"><Button type="primary">Conversation</Button></Link>
                </div>
              )}
            </div>
            </div>
          ) : (
            <div className="text-2xl">
              <div className="my-[-45rem]">
                <p>{question}</p>
                <ul>
                  {answer.map((ans, i) => (
                    <li className="my-3 text-xl" key={i}>
                      <Button className="text-xl" onClick={() => {
                        checkAnswer(i);
                        handleNext();
                      }}>
                        {ans}
                      </Button>
                    </li>
                  ))}
                </ul>
                <div className="QuizBtn space-x-5">
                  <Button onClick={handlePrev} type="primary" className="text-xl">PrevQuiz</Button>
                  <Button onClick={handleNext} type="primary" className="text-xl">NextQuestion <ArrowRightOutlined /></Button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footers />
      </Layout>
    </div>
  );
};

export default Quiz;
