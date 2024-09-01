import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage.jsx";
import About from "./components/Pages/About.jsx";
import Course from "./components/Pages/Course.jsx";
import Contract from "./components/Pages/Contract.jsx";
import Quiz from "./components/Pages/Quiz.jsx";
import Vocab from "./components/Pages/Courses/Vocabulary.jsx";
import Conver from "./components/Pages/Courses/Conversation.jsx";
import Gram from "./components/Pages/Courses/Grammar.jsx";
import Read from "./components/Pages/Courses/Reading.jsx";
import Write from "./components/Pages/Courses/Writing.jsx";
const router = (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/course" element={<Course />} />
      <Route path="/contract" element={<Contract />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/course/Vocabulary" element={<Vocab />} />
      <Route path="/course/Conversation" element={<Conver />} />
      <Route path="/course/Grammar" element={<Gram />} />
      <Route path="/course/Reading" element={<Read />} />
      <Route path="/course/Writing" element={<Write />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider>
      {router}
    </ConfigProvider>
  </React.StrictMode>
);