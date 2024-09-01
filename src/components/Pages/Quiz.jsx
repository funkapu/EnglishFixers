import {Layout,Button} from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import Navbar from "../Nav/navbar";
import Footers from "../Content/Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

const Quiz = () => {
  const [question,setQuestion] = useState("")
  const [Answer,setAnswer] = useState([])
  const [index,setIndex] = useState(0)
  const [CorrectAnswer,setIscorrectAnswer] = useState(false)
  const [score,setScore] = useState(0)
  const addindex = () => { 
    setIndex((prevIndex) => prevIndex+1)
  }
  const PrevQuiz = () => { 
    setIndex((prevIndex) => prevIndex-1)
  }
  if (index < 0) { 
    setIndex(0)
  }
  else if(index > 9){ 
    setIndex(9)
  }
  
  const getApi = async() =>{ 
  await axios.get("https://funkapu.github.io/RestAPIEnglishFixers/exam.json")
  .then((data) => {
    if(data.data[index]){ 
      console.log(data.data)
      setQuestion(data.data[index].questionText)
      setAnswer(data.data[index].answerOption.map((option) => option.answerText ))
      setIscorrectAnswer(data.data[index].answerOption.map((Correct) => Correct.isCorrect))
    }
    else{ 
      console.log("No more quiz")
    }
  })
  .catch((err) => console.log(err))
}
const checkAnswer = (selectIndexAnswer) => { 
  if(CorrectAnswer[selectIndexAnswer]){ 
    setScore(score+1)
    setIscorrectAnswer(true)
  }else{ 
    setIscorrectAnswer(false)
  }
}
useEffect(() => { 
  getApi()
},[index])
  return( 
  <div>
    <Layout>
     <Navbar/>
          <div className="flex justify-center items-center">
            {index >= 9 ? ( 
              <div>{score >= 6 ? ( 
                <div className="my-[-30rem] space-y-4">
                  <h1 className="flex justify-center text-3xl font-bold">คุณได้คะแนน : {score}</h1>
                  <p className="flex justify-center font-semibold">คุณสามารถเรียนอะไรก็ได้</p>
                  <Link to="/course" className="justify-center flex"><Button type="primary">ดูคอร์ส</Button></Link>
                </div>
              ):( 
                <div className="my-[-30rem]">
                  <h1 className="flex justify-center text-3xl font-bold">คุณได้คะแนน : {score}</h1>
                  <p className="text-sm semibold flex justify-center font-semibold">ทางเราแนะนำให้คุณเรียน</p>
                  <div className="flex justify-center list-none space-x-5 my-10">
                  <li><Link to="/course/Grammar"><Button type="primary">Grammar</Button></Link></li>
                  <li><Link to="/course/Vocab"><Button type="primary">Vocab</Button></Link></li>
                  <li><Link to="/course/Conversation"><Button type="primary">Conversation</Button></Link></li>
                  </div>
                </div>
              )}
              </div>
            ):( 
              <div className="text-2xl">
          <div className="my-[-45rem]">
            <p>{question}</p>
            <ul>
              {Answer.map((answer,i) => (
                <li className="my-3 text-xl" key={i}><Button className="text-xl"
                onClick={() =>{
                  checkAnswer(i)
                  addindex()
                }}>{answer}</Button></li>
              ))}
            </ul>
            <div className="QuizBtn space-x-5">
              <Button onClick={PrevQuiz} type="primary" className="text-xl">PrevQuiz</Button>
              <Button onClick={addindex} type="primary" className="text-xl">NextQuestion <ArrowRightOutlined /></Button>
            </div>
          </div>
          </div>
            )}
            
          </div>
          <div>
        <Footers/>
        </div>
        </Layout>
  </div>
  )
};
export default Quiz;