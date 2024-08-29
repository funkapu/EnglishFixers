import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/contract",
    element: <Contract />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path:"/course/Vocabulary",
    element:<Vocab/>
  },
  { 
    path:"/course/Conversation",
    element:<Conver/>
  },
  {
    path:"/course/Grammar",
    element:<Gram/>
  },
  {
    path:"/course/Reading",
    element:<Read/>
  },
  {
    path:"/course/Writing",
    element:<Write/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
